import styles from './BmiData.module.css';

export default function BmiData({ data, onDeleteBmiData }) {
  const { bmi, weight, height, age, date, id } = data;

  // Handle delete button click
  const handleDelete = () => {
    onDeleteBmiData(id);
  };

  return (
    <>
      {/* Table row representing BMI data */}
      <tr className={styles.row}>
        <td>{bmi}</td>
        <td>{weight}</td>
        <td>{height}</td>
        <td>{age}</td>
        <td>{date}</td>
        <td>
          {/* Delete button with onClick event */}
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
}
