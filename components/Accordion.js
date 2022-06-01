import { useState } from 'react'
import Link from 'next/link'

const Accordion = ({ question, answer, link }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="accordion-container">
        <div className="accordion" onClick={() => setToggle(!toggle)}>
            <div className="flex-center">
                <div className="accordion__circle">
                    {!toggle ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </div>
                <p>{question}</p>
            </div>
        </div>
        {toggle && (
            <div className="extended-accordion">
                <p>{answer}</p><br></br>
                <Link passHref href={link}>
                    <a className="extended-accordion__link">Läs mer här</a>
                </Link>
            </div>
        )}
        </div>
    )
}

export default Accordion