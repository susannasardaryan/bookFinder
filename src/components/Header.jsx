const Header = ({searchValue, handleChange, handleSearch, mode }) => {
    return(
        <header className={mode}>
            <h1>BookFinder <img  src={'./book.png'} width={'32rem'}/></h1>
            <label htmlFor="search" >
                <input
                    type="text"
                    id="search"
                    value={searchValue}
                    onChange={handleChange}
                    className={'search-input'}
                />
                <button
                    className={'find-button'}
                    onClick={handleSearch}
                >
                    Find Book
                </button>
            </label>
        </header>
    )
}

export default Header