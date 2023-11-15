// import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input({ id, label, value, onInputChange, ...props }) {
  return (
    <div className={styles['input-control']}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={+value}
        {...props}
        onChange={(event) => onInputChange(id, event.target.value)}
      />
    </div>
  );
}
// Input.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };
