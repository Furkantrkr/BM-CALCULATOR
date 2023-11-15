import './App.css';
import Header from './components/Header/Header';
import BimCalculator from './components/BmiCalculator/BmiCalculator';
import BmiResult from './components/BmiResult/BmiResult';

import { useState } from 'react';

function App() {
  const [bmi, setBmi] = useState('');

  function calculateBmi(weight, height) {
    const fixedHeight = height / 100;
    const bmi = (weight / Math.pow(fixedHeight, 2)).toFixed(0);

    setBmi(() => bmi);
  }

  return (
    <>
      <Header />
      <main>
        <BimCalculator onBmiCalculation={calculateBmi} />
        <BmiResult bmi={bmi} />
      </main>
    </>
  );
}

export default App;
