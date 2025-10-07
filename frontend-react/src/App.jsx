import { useState } from 'react';

function App() {
    const [fecha, setFecha] = useState('');
    const [edad, setEdad] = useState(null);

    const calcularEdad = async () => {
        if (!fecha) return;
        try {
            const res = await fetch(`http://localhost:8080/age?fechaNacimiento=${fecha}`);
            const data = await res.json();
            setEdad(data.edad);
        } catch {
            alert("❌ Error al calcular la edad. ¿El backend está corriendo?");
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // 0.8 = un poco transparente
        padding: '40px 50px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        textAlign: 'center',
        minWidth: '300px',
        maxWidth: '90%'
    };


    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginRight: '10px',
        width: '180px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer'
    };

    const resultStyle = {
        marginTop: '20px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1>Calculadora de Edad</h1>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={calcularEdad} style={buttonStyle}>
                    Calcular
                </button>
                {edad !== null && <p style={resultStyle}>🎉 Tu edad es: {edad}</p>}
            </div>
        </div>
    );
}

export default App;
