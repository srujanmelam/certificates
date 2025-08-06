import React from 'react';
import styles from './CertificateCard.module.css';
import { motion } from 'framer-motion';

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <a href={cert.link} target="_blank" rel="noopener noreferrer">
        <img src={cert.image} alt={cert.title} className={styles.image} />
        <h3 className={styles.title}>{cert.title}</h3>
      </a>
    </motion.div>
  );
};

export default CertificateCard;
