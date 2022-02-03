import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { login } from '../lib/fake-data'
import Router from 'next/router'

export function LoginPage () {
    console.log("TEST")

    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                gnome
                </h1>

                <p className={styles.description}>
                rethinking genome research
                </p>
                <button type="button" class="btn btn-primary" >get started</button>
                <button type="button" class="btn btn-primary" onClick={() => logIn()} >login</button>
                <a href='/community'>explore</a>

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

    function logIn(){
        login()
        Router.push("/")
    }
}