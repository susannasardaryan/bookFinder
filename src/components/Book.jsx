import {StorageService} from "../services/localStorageService.js";
import {useState} from "react";
import ToastNotification from "./ToastNotification.jsx";

const Book = ({bookKey,title, author_name, first_publish_year, cover_i, mode}) => {
    const condition = StorageService.getItem('favoriteBooks')?.includes(bookKey) ? 'img.png' : 'img_1.png';
    const [imgSrc, setImgSrc] = useState(condition);
    const [message, setMessage] = useState(undefined);

    const saveMyFavoriteBook = (key) => {
        let favoriteBooks = StorageService.getItem('favoriteBooks') || [];

        if (imgSrc === 'img_1.png') {
            setImgSrc('img.png');
            favoriteBooks.push(key);
            setMessage('Book added to favorites')
        } else {
            setImgSrc('img_1.png')
            favoriteBooks = favoriteBooks.filter((item) => item !== key);
            setMessage('Book removed from favorites')
        }

        StorageService.setItem('favoriteBooks', favoriteBooks);
    }

    setTimeout(() => setMessage(undefined), 2000);

    title = title.length > 35 ? title.substring(0, 35) + '...' : title;
    author_name = Array.isArray(author_name) ? author_name[0] : author_name;

    return (
        <div className={`book ${mode}`} onClick={() => saveMyFavoriteBook(bookKey)}>
            <img src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt="img"/>

            <div className="book-text">
                <b className={'title'}>{title}</b>
                <p>{author_name}</p>
                <b>Publish Year: {first_publish_year}</b>

                <button >
                    <img src={imgSrc} alt="img"/>
                </button>
            </div>
            {message && <ToastNotification message={message} />}
        </div>
    )
}

export default Book;