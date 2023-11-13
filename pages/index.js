import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Ruben Loreti's Portfolio" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <motion.h1 className={styles.title} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.1,0.4, 0.70, 0.2, 1], scale: { type: "spring", damping: 4, stiffness: 150, restDelta: 0.001}}}>
          Ruben Loreti
        </motion.h1>
      </main>
    </div>
  );
}
