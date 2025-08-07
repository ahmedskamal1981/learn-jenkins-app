import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.app}>
      <header className="App-header" style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
        </div>
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Learn Jenkins on Udemy
        </a>
      </header>
      <p style={styles.versionText}>
        Application version: 1
      </p>
    </div>
  );
}

const styles = {
  app: {
    background: 'linear-gradient(135deg, #70e1f5, #ffd194)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    padding: '20px',
  },
  header: {
    backgroundColor: '#ffffffcc',
    padding: '40px',
    borderRadius: '30px',
    boxShadow: '0px 8px 24px rgba(0,0,0,0.15)',
    textAlign: 'center',
    maxWidth: '480px',
    width: '100%',
  },
  logoContainer: {
    background: 'radial-gradient(circle, #5ee7df, #b490ca)',
    borderRadius: '50%',
    padding: '20px',
    marginBottom: '24px',
    display: 'inline-block',
    boxShadow: '0 4px 15px rgba(94, 231, 223, 0.6)',
  },
  logo: {
    height: '120px',
    width: '120px',
    animation: 'spin 20s linear infinite',
  },
  link: {
    fontSize: '1.4rem',
    color: '#6a11cb',
    textDecoration: 'none',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'color 0.3s ease',
  },
  versionText: {
    marginTop: '30px',
    fontWeight: '600',
    fontSize: '1.2rem',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.75)',
    padding: '10px 20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
};

export default App;
