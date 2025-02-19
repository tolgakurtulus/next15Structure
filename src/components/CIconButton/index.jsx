import Link from 'next/link';
import styles from './styles.module.scss';

export default function CIconButton({ classNameVal, svgVal, text, notLink, onClick }) {
  return (
    <>
      {notLink ? (
        <div onClick={onClick && onClick} className={`${styles[`c-icon-button`]} ${styles[`${classNameVal ? classNameVal : ''}`]}`}>
          {svgVal}
          <p>{text}</p>
        </div>
      ) : (
        <Link href="#" prefetch={false} className={`${styles[`c-icon-button`]} ${styles[`${classNameVal ? classNameVal : ''}`]}`}>
          {svgVal}
          <p>{text}</p>
        </Link>
      )}
    </>
  );
}
