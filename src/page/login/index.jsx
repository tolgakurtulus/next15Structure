import Image from 'next/image';
import Link from 'next/link';
import CIconButton from '@/components/CIconButton';
import LoginForm from './components/form';
import styles from './styles.module.scss';

export default function LoginPage() {
  return (
    <section className={styles['c-login']}>
      <div className={styles['c-login__left']}>
        <Image src="/assets/img/Login.png" alt="Logo" width={1000} height={1000} loading="lazy" />
      </div>
      <div className={styles['c-login__right']}>
        <div className={styles['c-login__rightContainer']}>
          <div className={styles['c-login__upText']}>
            <p>Merhaba</p>
            <p>beije&apos;e hoş geldin!</p>
          </div>
          <div className={styles['c-login__formArea']}>
            <div className={styles['c-login__tab']}>
              <Link href="/auth/login">Bireysel Üyelik</Link>
              <Link href="/auth/login">Kurumsal Üyelik</Link>
            </div>
            <div className={styles['c-login__button']}>
              <CIconButton svgVal={<Image src="/assets/svg/Google.svg" alt="Google" loading="lazy" width={24} height={24} />} text="Google ile Giriş Yap" />
              <CIconButton classNameVal="facebook" svgVal={<Image src="/assets/svg/Facebook.svg" alt="Facebook" loading="lazy" width={10} height={18} />} text="Facebook ile Giriş Yap" />
            </div>
            <div className={styles['c-login__hr']}></div>
            <div className={styles['c-login__form']}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
