import { useState } from 'react'
import Link from 'next/link'

const Search = ({ articles }) => {

    const [filtered, setFiltered] = useState([])
    console.log(articles)

    const handleFilter = e => {
        const data = articles.filter(article => article.properties.Name.title[0].text.content.toLowerCase().includes(e.target.value.toLowerCase()))

        if (e.target.value === ''){
            setFiltered([])
        } else {
            setFiltered(data)
        }
    }

    return (
        <div className="search-container">
        <form className="search">
            {/* TODO: Ordna så att ikonen ändrar färg när input är i fokus */}
            <svg xmlns="http://www.w3.org/2000/svg" className="search__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input onChange={handleFilter} className="search__input" type="search" placeholder="Sök här om du inte hittar det du letar efter..." />
        </form>
        {filtered != 0 && (
            <div className="searchResults">
                <ul>
                    {filtered.map(article => (
                        <li key={article.id}>
                            <Link passHref href=''>
                                <a>{article.properties.Name.title[0].text.content}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    )
}

export default Search