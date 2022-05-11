import Head from "next/head";
import Link from "next/link";
import style from "../styles/main/Home.module.css";
import sp from "../styles/main/Btn.module.css";

// IMAGEM
import Image from "next/image";
import img3 from "../img/3.jpg";

// MOTION
import { motion } from "framer-motion";
import Bounce from "react-reveal/Bounce";

export default function Main() {
  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/hat.png" />
      </Head>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.left}>
            <Bounce left>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Storyboad do Aluno
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Bem Vindo
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Aqui tu podes visualizar a sua tragetória
              </motion.p>
            </Bounce>
          </div>
          <div className={style.right}>
            <motion.Bounce
              right
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={img3} alt="computador" width="435%" height={300} />
            </motion.Bounce>
          </div>
        </div>
        <Bounce left>
          <Link href="/login" passHref>
            <motion.span className={sp.btn}>
              <a></a>
            </motion.span>
          </Link>
        </Bounce>
      </div>
    </main>
  );
}
