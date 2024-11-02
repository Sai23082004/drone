import React from 'react';

function App() {
    const startFunction = () => {
        alert("Welcome! Let's get started.");
        // You can add any additional action here, like redirecting to another page
        // Example: window.location.href = "/homepage";
    };

    return (
        <div style={styles.page}>
            <button style={styles.button} onClick={startFunction}>
                Get Started
            </button>
        </div>
    );
}

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif'
    },
    button: {
        padding: '25px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ff4d4d',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '150px',
        height: '150px',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
};

// Hover and active styles are achieved through inline style updates in JavaScript
export default App;
