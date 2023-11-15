import underW from '../../../public/assests/1.png';
import normalW from '../../../public/assests/2.png';
import overW from '../../../public/assests/3.png';
import obesity from '../../../public/assests/4.png';
import extremObesity from '../../../public/assests/5.png';

import styles from './Result.module.css';

export default function BmiHistory({ bmi }) {
  const getOpacity = (minBmi, maxBmi, currentBmi) => {
    return currentBmi > minBmi && currentBmi <= maxBmi ? 1.0 : 0.1;
  };

  let bodyType;

  if (0 < bmi && bmi < 18.5) {
    bodyType = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    bodyType = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    bodyType = 'Overweight';
  } else if (bmi >= 30 && bmi < 35) {
    bodyType = 'Obesity';
  } else if (bmi >= 35) {
    bodyType = 'Extreme obesity';
  }

  return (
    <section className={styles['body-types-container']}>
      <div className={styles['body-types']}>
        <img
          src={underW}
          alt="underweight body image"
          style={{ opacity: getOpacity(0, 18.5, bmi) }}
        />
        <img
          src={normalW}
          alt="normal weight body image"
          style={{ opacity: getOpacity(18.5, 25, bmi) }}
        />
        <img
          src={overW}
          alt="overweight body image"
          style={{ opacity: getOpacity(25, 30, bmi) }}
        />
        <img
          src={obesity}
          alt="obesity body image"
          style={{ opacity: getOpacity(30, 35, bmi) }}
        />
        <img
          src={extremObesity}
          alt="extreme obesity body image"
          style={{ opacity: getOpacity(35, 100, bmi) }}
        />
      </div>
      <div className={styles['result-container']}>
        <p className={styles.result}>Result : {bmi}</p>
        <p className={styles.result}>Body Type : {bodyType ? bodyType : ''}</p>
      </div>
    </section>
  );
}
