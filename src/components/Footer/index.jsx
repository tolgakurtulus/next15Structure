import Image from 'next/image';
import CustomTextField from '../CTextField';
import CButton from '../CButton';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles['c-footer']}`}>
      <div className={`${styles['c-footer__curves']}`}>
        <Image src="/assets/svg/Curves.svg" alt="Curves" loading="lazy" width={10000} height={50} />
      </div>
      <div className={`${styles['c-footer__container']}`}>
        <div className={`${styles['c-footer__flex']}`}>
          <div className={`${styles['c-footer__upLeft']}`}>
            <Image src="/assets/svg/Logo.svg" alt="Logo" loading="lazy" width={56} height={24} />
            <p>Arayı açmayalım!</p>
            <p>beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!</p>
            <div className={`${styles['c-footer__emailArea']}`}>
              <CustomTextField
                label="E-mail adresin"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#585858',
                    },
                    '&:hover fieldset': {
                      borderColor: '#585858',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#585858',
                    },
                  },

                  '& .MuiInputBase-input': {
                    color: '#FFFFFFB2',
                  },

                  '& .MuiInputBase-input::placeholder': {
                    color: '#FFFFFFB2',
                  },

                  '& .MuiInputLabel-root': {
                    color: '#FFFFFFB2',
                  },

                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#FFFFFFB2',
                  },
                  maxWidth: '362px', // Max genişlik 362px
                }}
              />
              <CButton text="Gönder" type="send" />
            </div>

            <p>
              Abone olarak, beije <b>KVKK</b> ve <b>Gizlilik Politikası</b>'nı kabul ediyor ve beije'den haber almayı onaylıyorum.
            </p>
          </div>
          <div>
            <p className={`${styles['c-footer__midItem']}`}>beije Ped</p>
            <p className={`${styles['c-footer__midItem']}`}>beije Günlük Ped</p>
            <p className={`${styles['c-footer__midItem']}`}>beije Tampon</p>
          </div>
          <div>
            <p className={`${styles['c-footer__midItem']}`}>Biz Kimiz?</p>
            <p className={`${styles['c-footer__midItem']}`}>Blog</p>
            <p className={`${styles['c-footer__midItem']}`}>Sıkça Sorulan Sorular</p>
            <p className={`${styles['c-footer__midItem']}`}>Ekibimize Katıl</p>
          </div>
          <div>
            <div className={`${styles['c-footer__midItemLogo']}`}>
              <div className={`${styles['c-footer__midIcon']}`}>
                <Image src="/assets/svg/Facebook.svg" alt="Facebook" loading="lazy" width={24} height={24} />
              </div>
              <p>Facebook</p>
            </div>
            <div className={`${styles['c-footer__midItemLogo']}`}>
              <div className={`${styles['c-footer__midIcon']}`}>
                <Image src="/assets/svg/Instagram.svg" alt="Instagram" loading="lazy" width={24} height={24} />
              </div>
              <p>Instagram</p>
            </div>
            <div className={`${styles['c-footer__midItemLogo']}`}>
              <div className={`${styles['c-footer__midIcon']}`}>
                <Image src="/assets/svg/Twitter.svg" alt="Twitter" loading="lazy" width={24} height={24} />
              </div>
              <p>Twitter</p>
            </div>
            <div className={`${styles['c-footer__midItemLogo']}`}>
              <div className={`${styles['c-footer__midIcon']}`}>
                <Image src="/assets/svg/LinkedIn.svg" alt="LinkedIn" loading="lazy" width={24} height={24} />
              </div>
              <p>LinkedIn</p>
            </div>
            <div className={`${styles['c-footer__midItemLogo']}`}>
              <div className={`${styles['c-footer__midIcon']}`}>
                <Image src="/assets/svg/Spotify.svg" alt="Spotify" loading="lazy" width={24} height={24} />
              </div>
              <p>Spotify</p>
            </div>
          </div>
        </div>
        <div className={styles['c-footer__hr']}></div>
        <div className={`${styles['c-footer__down']}`}>
          <div>
            <p>2022 beije. Tüm hakları saklıdır.</p>
          </div>
          <div className={`${styles['c-footer__downMid']}`}>
            <p>KVKK</p>
            <p>KVKK Başvuru Formu</p>
            <p>Üyelik Sözleşmesi</p>
            <p>Gizlilik Politikası</p>
            <p>Çerez Politikası</p>
            <p>Test Sonuçları</p>
          </div>
          <div className={`${styles['c-footer__downRight']}`}>
            <p>EN</p>
            <p>|</p>
            <p>TR</p>
          </div>
        </div>
        <div className={`${styles['c-footer__card']}`}>
          <Image src="/assets/svg/Master.svg" alt="Master" loading="lazy" width={48} height={24} />
          <Image src="/assets/svg/Visa.svg" alt="Visa" loading="lazy" width={48} height={24} />
        </div>
      </div>
    </footer>
  );
}
