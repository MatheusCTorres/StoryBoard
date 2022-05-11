import { useState } from "react";
import clientPromisse from "../lib/mongodb";
import Link from "next/link";
import Head from "next/Head";
import { motion } from "framer-motion";

// STYLE
import style from "../styles/loginPage/Home.module.css";
import inputStyle from "../styles/loginPage/Input.module.css";

export default function Login({ alunos }) {
  const [searchID, setSeachID] = useState("");

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/user.png" />
      </Head>
      <main className={style.main}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={style.authWrapper}
        >
          <div className={style.authInner}>
            <form className={style.form}>
              <h1>Insira o seu ID</h1>
              <div className={style.formGroup}>
                <div className={[inputStyle.formGroup, inputStyle.field]}>
                  <input
                    type="text"
                    className={inputStyle.formField}
                    placeholder="Insira o seu ID"
                    onChange={(event) => {
                      setSeachID(event.target.value);
                    }}
                    value={searchID}
                    maxLength="3"
                  />
                </div>
              </div>
              {alunos
                .filter((val) => {
                  if (searchID.includes(val.id)) {
                    return val;
                  } else {
                    return null;
                  }
                })
                .map((val, key) => {
                  return (
                    <div key={key}>
                      <h3>Estudante</h3>
                      <p>{val.nome}</p>
                      <p>{val.tipo}</p>
                      <Link href={`aluno/${searchID}`} passHref>
                        <button type="submit" className={style.button}>
                          SUBMIT
                        </button>
                      </Link>
                    </div>
                  );
                })}
            </form>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromisse;
  const db = client.db("faculdadedb");
  const data = await db.collection("STUDENTDB").find({}).toArray();
  const alunos = JSON.parse(JSON.stringify(data));

  return {
    props: { alunos },
  };
}
