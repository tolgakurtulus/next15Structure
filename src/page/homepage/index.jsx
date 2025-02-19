import Link from 'next/link';
import AccordionExpand from './components/accordion';
import Pocket from './components/pocket';
import styles from './styles.module.scss';

export default function Homepage() {
  return (
    <section className={styles['c-homepage']}>
      <div className={`${styles['c-homepage__container']}`}>
        <div className={`${styles['c-homepage__left']}`}>
          <div className={`${styles['c-homepage__areaOne']}`}>
            <p>Kendi Paketini Oluştur</p>
            <Link href="/">Nasıl Çalışır? </Link>
          </div>
          <p className={`${styles['c-homepage__areaTwo']}`}>Döngünün uzunluğuna, kanamanın yoğunluğuna ve kullanmak istediğin ürünlere göre tamamen kendine özel bir paket oluştur!</p>
          <div className={styles['c-homepage__tab']}>
            <Link href="/">Menstrual Ürünler</Link>
            <Link href="/">Destekleyici Ürünler</Link>
          </div>
          <AccordionExpand />
        </div>
        <div className={`${styles['c-homepage__right']}`}>
          <Pocket />
        </div>
      </div>
    </section>
  );
}
