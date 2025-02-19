'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { decrement, increment } from '@/store/counter';
import { getProducts } from '@/store/products';
import { formatString } from '@/utils';
import CCounterButton from '@/components/CCounterButton';
import styles from '../styles.module.scss';

export default function AccordionExpand() {
  const standartPedCounterVal = useAppSelector((state) => state.standartPedCounterVal?.value);
  const getProductsReducerVal = useAppSelector((state) => state.getProductsReducerVal?.data?.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={`${styles['c-accordion']}`}>
      {getProductsReducerVal?.products?.map((item, index) => {
        return (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<Image src="/assets/svg/Expand.svg" alt="Expand" loading="lazy" width={10} height={8} />} aria-controls="panel1-content" id="panel1-header">
              <div className={`${styles['c-accordion__title']}`}>
                <Image src="/assets/svg/BPed.svg" alt="BPed" loading="lazy" width={25} height={16} />
                {item.title}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={`${styles['c-accordion__greenBox']}`}>
                <Image src="/assets/svg/Heart.svg" alt="Heart" loading="lazy" width={26} height={23} />
                <p>Döngüleri yoğun geçen kullanıcıların X’i günde 3 adet standart ped tercih ediyor. </p>
              </div>
              {item?.subProducts?.map((subItem, subIndex) => {
                return (
                  <div key={subIndex} className={`${styles['c-accordion__item']}`}>
                    <div className={`${styles['c-accordion__left']}`}>
                      <div className={`${styles['c-accordion__flag']} ${styles['orange']}`}>
                        <Image src="/assets/svg/BPedWhite.svg" alt="BPedWhite" loading="lazy" width={16} height={10} />
                      </div>
                      {subItem.name}
                    </div>
                    <CCounterButton val={standartPedCounterVal[formatString(item.title, subItem.name)]} minus={() => dispatch(decrement(formatString(item.title, subItem.name)))} plus={() => dispatch(increment(formatString(item.title, subItem.name)))} />
                  </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
