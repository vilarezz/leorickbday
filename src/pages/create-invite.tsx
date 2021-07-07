import emailjs from 'emailjs-com'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/CreateInvite.module.css'

export default function CreateInvite() {
  const [name, setName] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2bym1ig',
        'template_ioij15c',
        e.target,
        'user_Hng6TkzfrUFCVB5AyBNlE'
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <Head>
        <title>Criar Convite | Leorick BDAY</title>
      </Head>

      <main className={styles.main}>
        <h2>Gerar o Convite: </h2>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Primeiro e Último nome"
            onChange={event => setName(event.target.value)}
            className={styles.input}
          />

          <button type="submit" className="btn">
            <Link href={`/api/image-generator?name=${name}`}>
              Gerar o Convite
            </Link>
          </button>
        </form>
      </main>
    </div>
  )
}
