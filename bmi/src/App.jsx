import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight!");
      return;
    }

    const h = height / 100; // convert cm → meters
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);

    // category logic
    if (result < 18.5) setCategory("Underweight");
    else if (result < 24.9) setCategory("Normal");
    else if (result < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div style={styles.container}>
      <h1>Body Mass Index Calc</h1>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button} onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi && (
        <div style={styles.resultBox}>
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {category}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  background: "pink",

  container: {
    width: "450px",
    margin: "80px auto",
    padding: "30px",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.15)",
    background: "#fff",
  },

  fullPage: {
    background: "pink",
    minHeight: "100vh",
    paddingTop: "40px",
  },

  input: {
    width: "85%",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    width: "90%",
    padding: "12px",
    marginTop: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
  },

  resultBox: {
    marginTop: "20px",
    padding: "12px",
    background: "#f1f5f9",
    borderRadius: "10px",
  },
};

export default App;
