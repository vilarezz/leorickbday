import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leorick BDAY</title>
      </Head>

      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="" />
        <img src="/date.svg" className={styles.date} alt="" />
      </header>

      <main className={styles.main}>
        <div className={styles.info}>
          <p className={styles.bdayHash}>#MeuAniversário</p>

          <img src="/cake.svg" alt="Leorick Cake" />
          <h2>
            Só se vive uma vez, <br />
            então convido-te <br />
            para a terra do <br />
            Leorick.
          </h2>

          <button className="btn">
            <Link href="/create-invite"> RECEBER CONVITE</Link>
          </button>
        </div>

        <div className={styles.info2}>
          <p className={styles.tag}>INFO E REGRAS</p>

          <div className={styles.cardsSm}>
            <div className={styles.card}>
              <p className={styles.tag}>Contacto</p>
              <a className={styles.callNumber} href="callto:+244991293139">
                +244 991 293 139
              </a>
              <a href="callto:+244991293139" className="btn-sm">
                Ligar{' '}
              </a>
            </div>

            <div className={styles.card}>
              <p className="tag">Localização</p>
              <a className={styles.call} href="callto:+244991293139">
                Condomínio <br />
                parque das <br />
                Acácias
              </a>
              <a href="callto:+244991293139" className="btn-sm">
                {' '}
                Obter direção{' '}
              </a>
            </div>
          </div>

          <div className={styles.cardLg}>
            <div className={styles.card}>
              <p className={styles.money}>
                ATT: Tragam presentes, dinheiro <br />
                também é um presente. <br />
                então eis o iban:
              </p>

              <p>AO06 0044 0000 0238 4083 101 85</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
