import styles from './BmiCalculator.module.css';
import Input from '../Input/Input';
import { useState } from 'react';

const initialBodyInfo = {
  age: null,
  height: null,
  weight: null,
};

export default function BmiCalculator({ onBmiCalculation }) {
  const [bodyInfo, setBodyInfo] = useState(initialBodyInfo);

  // Handle input change for age, height, and weight
  function changeInputHandler(identifier, value) {
    setBodyInfo((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  }

  // Calculate BMI and send the data to the parent component
  function calculateBmi() {
    const { weight, height, age } = bodyInfo;
    if (weight !== null && height !== null) {
      const id = generateUniqueId();
      const date = getCurrentDate();

      // Callback to parent component with BMI data
      onBmiCalculation({ weight, height, age, date, id });
    } else {
      console.warn('Please enter weight and height values');
    }
  }

  // Get the current date in the format: dd-mm-yyyy
  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // Generate a unique ID based on the current timestamp
  function generateUniqueId() {
    return new Date().getTime().toString();
  }

  return (
    <section className={styles.calculator}>
      <h2>Calculate Body Mass Index</h2>
      <div className={styles['inputs-container']}>
        {/* Age Input */}
        <Input
          label="Age"
          id="age"
          type="number"
          name="age"
          value={bodyInfo.age}
          onInputChange={changeInputHandler}
        />
        {/* Height Input */}
        <Input
          label="Height"
          id="height"
          type="number"
          name="height"
          value={bodyInfo.height}
          onInputChange={changeInputHandler}
        />
        {/* Weight Input */}
        <Input
          label="Weight"
          id="weight"
          type="number"
          name="weight"
          value={bodyInfo.weight}
          onInputChange={changeInputHandler}
        />
      </div>
      {/* Calculate Button */}
      <button onClick={calculateBmi}>Calculate</button>
    </section>
  );
}
