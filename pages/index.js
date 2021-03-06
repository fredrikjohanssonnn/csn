import Head from 'next/head'
import Link from 'next/link'
import Accordion from '../components/Accordion'
import Logo from '../components/Logo'
import News from '../components/News'
import Search from '../components/Search'

import { articles } from '../lib/notion'

export default function Home({ articles }) {

  return (
      <>
      <Head>
        <title>Centrala studiestödsnämnden | CSN</title>
        <meta name="description" content="Fiktiv webbplats för CSN" />
        <meta name="robots" content="noindex"></meta>
      </Head>
      <section className="hero">
        <div className="container">
          <header className="header">
            <span>
              <Logo />
            </span>
            <Link passHref href="/login">
              <a className="btn btn--underline">Logga in</a>
            </Link>
          </header>
          <div className="introduction">
            <div className="introduction__header">
              <h1>Behöver du hjälp med att ansöka om studiemedel?</h1>
              <h4>Tryck på knappen nedan för att se hur du kan ansöka om studiemedel, alternativt direkt logga in via dina <Link href="/minasidor">Mina sidor</Link></h4>
            </div>
            <div className="introduction__actions">
              <Link passHref href="/">
                <a className="btn">Se instruktioner</a>
              </Link>
              <Link passHref href="/">
                <a className="btn btn__secondary">
                  {"Mina sidor -->"}
                </a>
              </Link>
            </div>
          </div>
          <Search articles={articles} />
        </div>
      </section>
      <div className="flex-divided">
          <section className="faq double-column">
              <h3 className="faq__heading">Vanliga frågor</h3>
              <div className="faq__list">
              {articles.slice(0,3).map(props => (
                  <Accordion key={props.id} {...props} />
                ))}
            </div>
          </section>
          <News />
      </div>
      </>
  )
}

export async function getStaticProps() {

  let { results } = await articles()

  return {
    props: {
      articles: results
    },
    revalidate: 10,
  }
}

