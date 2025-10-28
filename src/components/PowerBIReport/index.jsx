export default function PowerBIDashboard() {
  const reportUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiYjk3NTg0MGItM2Q5Yi00YTNkLTg3YjAtZTljOWE0M2RjMzE2IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

  return (
    <div style={styles.container}>
      <div style={styles.navbarSpacer} />
      
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard Analytics</h1>
        <p style={styles.subtitle}>Visualização em tempo real dos dados da empresa</p>
      </div>
      
      <div style={styles.dashboardContainer}>
        <iframe
          title="Dashboard Power BI"
          src={reportUrl}
          style={styles.iframe}
          allowFullScreen
        />
      </div>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>Atualizado em tempo real • Power BI Embedded</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    background: 'white',
    padding: '20px',
    boxSizing: 'border-box',
    paddingTop: '0',
  },
  navbarSpacer: {
    height: '70px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    color: '#2F2F2F',
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: '700',
    margin: 0,
  },
  subtitle: {
    color: '#2F2F2F',
    fontSize: '1.1rem',
    opacity: 0.9,
    margin: 0,
  },
  dashboardContainer: {
    width: '80%',
    maxWidth: '1400px',
    height: '75vh',
    minHeight: '600px',
    background: 'white',
    borderRadius: '20px',
    boxShadow: `
      0 20px 40px rgba(0,0,0,0.1),
      0 15px 35px rgba(0,0,0,0.1),
      0 10px 30px rgba(0,0,0,0.1)
    `,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666',
    opacity: 0.8,
  },
  footerText: {
    fontSize: '0.9rem',
    margin: 0,
  },
};