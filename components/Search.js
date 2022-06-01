import { useState } from 'react'

const Search = () => {

    const [clicked, setClicked] = useState(false)

    return (
        <form className="search">
            {!clicked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="search__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="search__icon search__icon--focused" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )}
            <input onClick={() => setClicked(!clicked)} className="search__input" type="search" placeholder="Sök här om du inte hittar det du letar efter..." />
        </form>
    )
}

export default Search