const FallbackPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loader}></div>
      <p style={styles.text}>Loading... Please wait.</p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f4f8',
    fontFamily: 'Segoe UI, sans-serif',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  loader: {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    width: 50,
    height: 50,
    animation: 'spin 1s linear infinite',
  },
};

// Keyframe animation for spinner
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
   }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default FallbackPage;
