import Image from 'next/image';
import styles from './styles.module.scss';

export default function CCounterButton({ val, minus, plus }) {
  return (
    <div className={styles['c-counterbutton']}>
      <span onClick={minus}>
        <Image src="/assets/svg/Minus.svg" alt="Minus" loading="lazy" width={14} height={1} />
      </span>
      <p>{val}</p>
      <span onClick={plus}>
        <Image src="/assets/svg/Plus.svg" alt="Plus" loading="lazy" width={14} height={14} />
      </span>
    </div>
  );
}
