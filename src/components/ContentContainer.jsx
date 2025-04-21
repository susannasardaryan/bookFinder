import {useState, useEffect, useCallback} from "react";
import BookList from "./BookList";
import Pagination from "./Pagination.jsx";
import Header from "./Header.jsx";
import {fetchData} from "../services/APIService.js";

const ContentContainer = () => {
    const [searchValue, setSearchValue] = useState("");
    const [bookList, setBookList] = useState([]);
    const [debouncedValue, setDebouncedValue] = useState('');
    const [page, setPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");

    const [mode, setMode] = useState('light');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (debouncedValue !== searchValue) setDebouncedValue(searchValue);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchValue]);


    useEffect(() => {
        fetchData(debouncedValue)
            .then(data => {
                setBookList(data);
                setPage(1)
                // throw new Error('Error message test')
            }).catch((err) => {
            setErrorMessage(err.message);
        });
    }, [debouncedValue]);

    useEffect(() => {
        fetchData(debouncedValue, page)
            .then(data => {
                setBookList(data);
            }).catch((err) => {
            setErrorMessage(err.message);
        });
    }, [page]);


    const nextPage = useCallback(() => setPage(page + 1), [page]);
    const prevPage = useCallback(() => setPage(page - 1), [page]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        setDebouncedValue(searchValue);
    };

    const changeMode = () => {
        setMode(prev => {
            if (prev === 'light') return 'dark'
            else if (prev === 'dark') return 'light';
        });
    }

    return (
        <>
            {errorMessage && <h1>{errorMessage}</h1>}
            {!errorMessage && (<div className={'content-container'}>
                <button onClick={changeMode}
                        className={`mode-button ${mode}`}>{mode === 'light' ? 'dark' : 'light'}</button>
                <Header setSearchValue={setSearchValue} handleSearch={handleSearch} handleChange={handleChange}
                        mode={mode}/>
                <BookList bookList={bookList} mode={mode}/>
                {!!bookList.length && <Pagination page={page} nextPage={nextPage} prevPage={prevPage} mode={mode}/>}
            </div>)}
        </>
    );
};

export default ContentContainer;
