import Link from 'next/link'

const News = () => {
  return (
    <aside className="news column">
        <h3 className="news__heading">Nyheter</h3>
        <ul className="news__list">
            <li className="news__item">
                <Link passHref href="https://www.csn.se/om-csn/aktuellt/nyhetsflode/2022-03-07-ud-avrader-fran-alla-resor-till-ryssland.html">
                    <a className="news__link">UD avråder från alla resor till Ryssland</a>
                </Link>
            </li>
            <li className="news__item">
                <Link passHref href="https://www.csn.se/om-csn/aktuellt/nyhetsflode/2022-02-03-fribeloppet-borttaget-till-30-juni-2022.html">
                    <a className="news__link">Beslut om slopat fribelopp under första halvåret av 2022</a>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default News