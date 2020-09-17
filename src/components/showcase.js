import React from "react";
import Project from "./project";
import Projects from "../data/showcase";
import { motion, AnimatePresence } from "framer-motion";

export default function Showcase({ loading }) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div id="showcase">
      <AnimatePresence>
        {!loading && (
          <motion.div const={item}>
            <h2>Showcase</h2>
            <p>My personal Projects</p>
          </motion.div>
        )}
        {!loading && (
          <motion.div className="grid" initial="hidden" animate="show">
            {Projects.map((project) => {
              return (
                <motion.div variants={item}>
                  <Project data={project} />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
