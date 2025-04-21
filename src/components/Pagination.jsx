import {memo} from "react";

const Pagination = memo(({page, prevPage, nextPage, mode}) => {
    console.log('render')
    return (
        <div className={`pagination ${mode}`}>
            <button onClick={prevPage} className={'prev'} disabled={page === 1}>
                <span aria-hidden="true">&laquo;</span>
            </button>
            <p>Page {page}</p>
            <button onClick={nextPage} className={'next'}>
                <span aria-hidden="true">&raquo;</span>
            </button>
        </div>
    )
})

export default Pagination;