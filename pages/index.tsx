import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const NAMES_LIST : any = {
  'neuer': 'Manuel Neuer',
  'ter-stegen': 'Marc-André ter Stegen',
  'trapp': 'Kevin Trapp',
  'leno': 'Bernd Leno',
  'raum': 'David Raum',
  'schlotterbeck': 'Nico Schlotterbeck',
  'suele': 'Niklas Süle',
  'ruediger': 'Antonio Rüdiger',
  'kehrer': 'Thilo Kehrer',
  'ginter': 'Matthias Ginter',
  'gosens': 'Robin Gosens',
  'tah': 'Jonathan Tah',
  'baku': 'Ridle Baku',
  'guenter': 'Christian Günter',
  'hofmann': 'Jonas Hofmann',
  'guendogan': 'Ilkay Gündogan',
  'kimmich': 'Joshua Kimmich',
  'goretzka': 'Leon Goretzka',
  'havertz': 'Kai Havertz',
  'musiala': 'Jamal Musiala',
  'wirtz': 'Florian Wirtz',
  'mueller': 'Thomas Müller',
  'neuhaus': 'Florian Neuhaus',
  'brandt': 'Julian Brandt',
  'can': 'Emre Can',
  'reus': 'Marco Reus',
  'weigl': 'Julian Weigel',
  'adeyemi': 'Karim-David Adeyemi',
  'sane': 'Leroy Sané',
  'gnabry': 'Serge Gnabry',
  'werner': 'Timo Werner',
  'volland': 'Kevin Volland',
  'flick': 'Hansi Flick',
  'bierhoff': 'Oliver Bierhoff',
  'paule': 'Paule'
}
  
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rewe DFB Cards 2022</title>
        <meta name="description" content="rewe dfb cards 2022" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hello...
        </h1>

        <div className={styles.grid}>
          {Object.keys(NAMES_LIST).map((key, index) => {
            return (
              <div className={styles.card} key={index + "card"}>
                <Image src={`/images/${key}-shiny.png`} alt={NAMES_LIST[key]} width={300} height={300} />
                <p className={styles.whitespace}>
                  
                </p>
                <Image src={`/images/${key}.png`} alt={NAMES_LIST[key]} width={300} height={300} />
                <h2>{NAMES_LIST[key]}</h2>
              </div>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
