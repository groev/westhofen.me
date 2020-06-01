import React from "react";
import Head from "../img/head.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ loading }) {
  return (
    <section id="intro">
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut"
            }}
          >
            <img src={Head} alt="head" />
          </motion.div>
        )}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut"
            }}
          >
            <h1>Hi, I'm Magnus!</h1>
            <h2>
              I design & develop Web-Applications for{" "}
              <a href="https://Www.12-05.de" target="_blank">
                12-05
              </a>
              .
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
