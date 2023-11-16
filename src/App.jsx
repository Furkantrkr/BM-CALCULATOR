import './App.css';
import Header from './components/Header/Header';
import BmiCalculator from './components/BmiCalculator/BmiCalculator';
import BmiResult from './components/BmiResult/BmiResult';
import DataTable from './components/DataTable/DataTable';

import { useState, useEffect } from 'react';
import { updateBmiData, fetchBmiDatas, deleteBmiData } from './http';

function App() {
  const [bmi, setBmi] = useState('');
  const [bmiDatas, setBmiDatas] = useState([]);

  useEffect(() => {
    // Fetch BMI data when the component mounts
    fetchBmiData();
  }, []);

  async function fetchBmiData() {
    try {
      // Fetch BMI data from the server
      const data = await fetchBmiDatas();
      console.log('Fetched BMI Data:', data);
      setBmiDatas(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function calculateBmi({ weight, height, age, date, id }) {
    // Calculate BMI based on user input
    const fixedHeight = height / 100;
    const bmiValue = (weight / Math.pow(fixedHeight, 2)).toFixed(0);
    setBmi(() => bmiValue);

    try {
      // Update BMI data on the server
      await updateBmiData({
        weight,
        height,
        bmi: bmiValue,
        age,
        date,
        id,
      });

      // Fetch updated BMI data after the calculation
      fetchBmiData();
    } catch (error) {
      console.error(error.message);
    }
  }

  async function handleDeleteBmiData(itemId) {
    try {
      // Delete BMI data on the server
      const datas = await deleteBmiData(itemId);

      // Fetch updated BMI data after the deletion
      await fetchBmiData();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="container">
          <BmiCalculator onBmiCalculation={calculateBmi} />
          <BmiResult bmi={bmi} />
        </section>

        <section className="container">
          <DataTable
            bmiDatas={bmiDatas}
            onDeleteBmiData={handleDeleteBmiData}
          />
        </section>
      </main>
    </>
  );
}

export default App;
