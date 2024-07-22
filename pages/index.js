import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeImg from '/public/Home.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>

      <style jsx>
        {`
          h2{
            font-size: 38px
          }
          h3{
            font-size: 28px
          }
        `}
      </style>

      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coders
        </h1>

        <Image className={styles.HomeImg} src={HomeImg} alt="Home" height={345} width={518} />

        <p className={styles.description}>
          A Blog for hunting coders by a Hunting Coder
        </p>

        <div className="blogs">

          <h2>Popular Blogs</h2>

          <div className="blogItem">
            <h3>NextJs From Scratch</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
          </div>

          <div className="blogItem">
            <h3>NextJs From Scratch</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
          </div>

          <div className="blogItem">
            <h3>NextJs From Scratch</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut error ratione voluptatum vero quasi odio!</p>
          </div>

        </div>

      </main>

      <footer className={styles.footer}>

      </footer>

    </div>
  );
}
