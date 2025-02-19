'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const timeoutRef = useRef(null);

  const handleMouseEnter = (navType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowNav(true);
    setActiveNav(navType);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowNav(false);
      setActiveNav('');
    }, 100);
  };

  const renderNavContent = () => {
    switch (activeNav) {
      case 'products':
        return (
          <div className={`${styles['c-nav__container']}`}>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className={`${styles['c-nav__container']}`}>
            <div className={`${styles['c-nav__area']}`}>
              <p>Hakkında</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      case 'donation':
        return (
          <div className={`${styles['c-nav__container']}`}>
            <div className={`${styles['c-nav__area']}`}>
              <p>Bağış</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      case 'test':
        return (
          <div className={`${styles['c-nav__container']}`}>
            <div className={`${styles['c-nav__area']}`}>
              <p>Test</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      case 'pocket':
        return (
          <div className={`${styles['c-nav__container']}`}>
            <div className={`${styles['c-nav__area']}`}>
              <p>Paket</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={`${styles['c-nav__area']}`}>
              <p>Ürünler</p>
              <div className={`${styles['c-nav__itemArea']}`}>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className={`${styles['c-nav__item']}`}>
                      <Image src="/assets/img/Product.png" alt="Product" width={172} height={135} loading="lazy" />
                      <div>
                        <p>
                          <Image src="/assets/svg/BeijePed.svg" alt="BeijePed" loading="lazy" width={20} height={14} /> beije Ped
                        </p>
                        <Image src="/assets/svg/Arrow.svg" alt="Arrow" loading="lazy" width={6} height={12} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <header className={`${styles['c-header']} ${showNav ? styles['c-header--nav-open'] : ''}`} onMouseLeave={handleMouseLeave}>
      <div className={`${styles['c-header__container']}`}>
        <div className={`${styles['c-header__left']}`}>
          <Link href="/">
            <Image src="/assets/svg/Logo.svg" alt="Logo" loading="lazy" width={56} height={24} />
          </Link>
        </div>
        <div className={`${styles['c-header__mid']}`}>
          <p onMouseEnter={() => handleMouseEnter('products')}>Tüm Ürünler</p>
          <p onMouseEnter={() => handleMouseEnter('about')}>Biz Kimiz?</p>
          <p onMouseEnter={() => handleMouseEnter('donation')}>Bağış Kültürü</p>
          <p onMouseEnter={() => handleMouseEnter('test')}>Regl Testi!</p>
          <p onMouseEnter={() => handleMouseEnter('pocket')}>Kendi Paketini Oluştur</p>
        </div>
        <div className={`${styles['c-header__right']}`}>
          <Image src="/assets/svg/CartButton.svg" alt="CartButton" loading="lazy" width={24} height={24} />
          <Image src="/assets/svg/ProfileButton.svg" alt="ProfileButton" loading="lazy" width={24} height={24} />
        </div>
      </div>
      <section className={`${styles['c-nav']} ${showNav ? styles['c-nav--visible'] : ''}`} onMouseEnter={() => handleMouseEnter(activeNav)}>
        {renderNavContent()}
      </section>
    </header>
  );
}
