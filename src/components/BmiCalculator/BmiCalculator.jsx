import styles from './BmiCalculator.module.css';
import Input from '../Input/Input';
import { useState } from 'react';

const initialValue = {
  age: 0,
  height: 0,
  weight: 0,
};

export default function BimCalculator({ onBmiCalculation }) {
  const [bodyInfo, setBodyInfo] = useState(initialValue);

  function changeInputHandler(identifier, value) {
    setBodyInfo((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
  }

  return (
    <section className={styles.calculator}>
      <h2>Calculate Body Mass Index</h2>
      <div className={styles['inputs-container']}>
        <Input
          label="Age"
          id="age"
          type="number"
          name="age"
          value={bodyInfo.age}
          onInputChange={changeInputHandler}
        />
        <Input
          label="Height"
          id="height"
          type="number"
          name="height"
          value={bodyInfo.height}
          onInputChange={changeInputHandler}
        />
        <Input
          label="Weight"
          id="weight"
          type="number"
          name="weight"
          value={bodyInfo.weight}
          onInputChange={changeInputHandler}
        />
      </div>
      <button
        onClick={() => onBmiCalculation(bodyInfo.weight, bodyInfo.height)}
      >
        Calculate
      </button>
    </section>
  );
}
