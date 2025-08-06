import React, { useState } from 'react';
import styles from './App.module.css';
import CertificateCard from './components/CertificateCard';
import certificates from './components/data/certificates';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = certificates.filter(cert =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Certificates</h1>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search certificates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredCertificates.length > 0 ? (
        <div className={styles.grid}>
          {filteredCertificates.map(cert => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <p className={styles.noResult}>No certificates found.</p>
      )}
    </div>
  );
}

export default App;
