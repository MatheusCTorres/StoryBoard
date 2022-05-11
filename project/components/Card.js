import cardAnimation from "../styles/cardAnimation/Card.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Card({ aluno }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cardAnimation.App} onClick={() => setIsOpen(!isOpen)}>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className={cardAnimation.card}
      >
        <motion.h2>{aluno.Anual.opcao}</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ dutation: 1 }}
            exit={{ opacity: 0 }}
            className={cardAnimation.expand}
          >
            <h5>Nota: {aluno.Anual.notas}</h5>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
