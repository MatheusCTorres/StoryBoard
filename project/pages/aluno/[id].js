import Table from "../../components/Table";

// CSS E FRAMEWORKSF
import styles from "../../styles/navbar/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pro-sidebar/dist/css/styles.css";
import { motion } from "framer-motion";

// SIDEBAR
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaRegUser, FaUniversity, FaCheckCircle } from "react-icons/fa";

export default function AlunoDetalhes({ aluno }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {aluno && (
        <div className={styles.header} style={{ position: "fixed" }}>
          <ProSidebar style={{ height: "721px", minWidth: "336px" }}>
            <SidebarHeader>
              <div className={styles.logotext}>
                <img
                  src={aluno.image}
                  alt="perfil do estudante"
                  style={{ width: "81%", margin: "22px" }}
                />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem icon={<FaRegUser />}>{aluno.nome}</MenuItem>
                <MenuItem icon={<FaCheckCircle />}>{aluno.id}</MenuItem>
                <MenuItem icon={<FaUniversity />}>{aluno.tipo}</MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      )}

      <Table aluno={aluno} />
    </motion.div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/alunoDetalhes?id=${params.id}`
  );

  const aluno = await data.json();

  return {
    props: { aluno },
    revalidate: 1,
  };
}