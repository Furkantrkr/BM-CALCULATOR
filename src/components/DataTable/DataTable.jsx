import styles from './DataTable.module.css';
import BmiData from '../BmiData/BmiData';

export default function DataTable({ bmiDatas, onDeleteBmiData }) {
  return (
    <section className={styles.table}>
      <h2>BMI Datas</h2>
      <table className={styles['bmi-table']}>
        {/* Table Header */}
        <thead>
          <tr className={styles.row}>
            <th>BMI</th>
            <th>WEIGHT</th>
            <th>HEIGHT</th>
            <th>AGE</th>
            <th>DATE</th>
            <th></th> {/* Placeholder for Actions */}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Map through BMI data and render BmiData component */}
          {bmiDatas.map((data) => (
            <BmiData
              key={data.id}
              data={data}
              onDeleteBmiData={onDeleteBmiData}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
