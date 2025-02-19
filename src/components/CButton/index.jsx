import styles from './styles.module.scss';

export default function CButton({ text, type, htmlType, handleClick }) {
  return (
    <button onClick={handleClick} className={`${styles['c-button']} ${styles[type ?? 'primary']}`} type={htmlType ?? 'button'}>
      {text}
    </button>
  );
}
