import Head from "next/Head";
import Card from "./Card";

// table
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/tabela/Table.module.css";
import Title from "../styles/Title.module.css";

export default function EnhancedTable({ aluno }) {
  return (
    <>
      <Head>
        <title>perfil</title>
        <link rel="icon" href="/hacker.png" />
      </Head>

      <section className={styles.section}>
        <h1 className={Title.homeTitle}>
          <span>1º ANO</span>
        </h1>
        <div style={{ flexWrap: "wrap", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "-37%", marginTop: "1%" }}>1º semestre</h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
              marginLeft: "-9%",
            }}
          >
            <Paper  sx={{ width: "20%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      {aluno &&
                        aluno.ano1.semestre1.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano1.semestre1.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <h1 style={{ marginLeft: "38%", marginTop: "-523px" }}>
            2º semestre
          </h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "31px",
              marginLeft: "29%",
            }}
          >
            <Paper sx={{ width: "20%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      {aluno &&
                        aluno.ano1.semestre2.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano1.semestre1.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </div>
      </section>

      <section className={styles.section}>
        <h1>2º ANO</h1>
        <div style={{ flexWrap: "wrap", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "-37%", marginTop: "1%" }}>1º semestre</h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
              marginLeft: "-9%",
            }}
          >
            <Paper sx={{ width: "20%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      {aluno &&
                        aluno.ano2.semestre1.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano2.semestre2.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <h1
            style={{
              marginLeft: "41%",
              marginTop: "-524px",
              marginBottom: "-73px",
            }}
          >
            2º semestre
          </h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "104px",
              marginLeft: "29%",
            }}
          >
            <Paper sx={{ width: "20%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      {aluno &&
                        aluno.ano1.semestre2.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano1.semestre1.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </div>
      </section>

      <section className={styles.section}>
        <h1>3º ANO</h1>
        <div style={{ flexWrap: "wrap", flexDirection: "column" }}>
          <h1 style={{ marginLeft: "-37%", marginTop: "1%" }}>1º semestre</h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
              marginLeft: "-9%",
            }}
          >
            <Paper sx={{ width: "16%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover style={{ paddingRight: "45px" }}>
                      {aluno &&
                        aluno.ano3.semestre1.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano3.semestre1.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <h1 style={{ marginLeft: "41%", marginTop: "-397px" }}>
            2º semestre
          </h1>
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "31px",
              marginLeft: "29%",
            }}
          >
            <Paper sx={{ width: "18%" }}>
              <TableContainer style={{ cursor: "pointer" }}>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      {aluno &&
                        aluno.ano3.semestre2.materias.map((materia, i) => {
                          return (
                            <TableRow hover key={i}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="50px"
                              >
                                {materia}
                              </TableCell>
                              <TableCell align="right">
                                {aluno.ano3.semestre2.notas[i]}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </div>
      </section>
      <section className={styles.section}>
        <h1>Projeto Anual</h1>
        <Card aluno={aluno} />
      </section>
    </>
  );
}
