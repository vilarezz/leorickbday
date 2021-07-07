import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/CreateInvite.module.css'

export default function CreateInvite() {
  const [name, setName] = useState('')

  return (
    <div className="container">
      <Head>
        <title>Criar Convite | Leorick BDAY</title>
      </Head>

      <main className={styles.main}>
        <h2>Gerar o Convite:</h2>

        <input
          type="text"
          placeholder="Primeiro e Último nome"
          onChange={event => setName(event.target.value)}
          className={styles.input}
        />

        <button className="btn">
          <Link href={`/api/image-generator?name=${name}`}>
            Gerar o Convite
          </Link>
        </button>
      </main>
    </div>
  )
}
