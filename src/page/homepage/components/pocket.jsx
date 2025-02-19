'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { calculateResults } from '@/utils';
import CButton from '@/components/CButton';
import styles from '../styles.module.scss';

export default function Pocket() {
  const [products, setProducts] = useState([]);
  const standartPedCounterVal = useAppSelector((state) => state.standartPedCounterVal?.value);
  const getProductsReducerVal = useAppSelector((state) => state.getProductsReducerVal?.data?.data);

  useEffect(() => {
    if (standartPedCounterVal && getProductsReducerVal) {
      setProducts(calculateResults(standartPedCounterVal, getProductsReducerVal));
    }
  }, [standartPedCounterVal, getProductsReducerVal]);

  return (
    <div className={`${styles['c-pocket']}`}>
      <div className={`${styles['c-pocket__container']}`}>
        <div className={`${styles['c-pocket__header']}`}>
          <p>Paketin </p>
          <div className={`${styles['c-pocket__gBox']}`}>
            <Image src="/assets/svg/Badge.svg" alt="Badge" loading="lazy" width={8} height={8} />
            <p>2 ayda bir gönderim</p>
          </div>
        </div>
        <p className={`${styles['c-pocket__desc']}`}>Kişisel ihtiyacına yönelik istediğin miktarda ped, günlük ped, tampon veya destekleyici ürünler ekleyerek kendine özel paket oluşturabilirsin.</p>
        {products &&
          products.map((item, index) => {
            return (
              <div key={index} className={`${styles['c-pocket__box']}`}>
                <div className={`${styles['c-pocket__boxUp']}`}>
                  <p>{item.title} Paketleri</p>
                  <Image src="/assets/svg/Garbage.svg" alt="Garbage" loading="lazy" width={18} height={18} />
                </div>
                {item.subProducts.map((subItem, subIndex) => {
                  return (
                    <div key={subIndex} className={`${styles['c-pocket__boxItem']}`}>
                      <p>
                        {subItem.amount} {subItem.name}
                      </p>
                      <p>{subItem.result}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        <div className={`${styles['c-pocket__button']}`}>
          <CButton type={products.length > 0 ? 'login' : 'disabledGray'} text="Sepete Ekle " />
        </div>
      </div>
    </div>
  );
}
