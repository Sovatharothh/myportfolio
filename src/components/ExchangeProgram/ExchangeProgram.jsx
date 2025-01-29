import React, { useRef, useEffect } from "react";
import styles from "./ExchangeProgram.module.css";
import exchangeprogram from "../../data/exchangeprogram.json";
import { getImageUrl } from "../../utils";

export const ExchangeProgram = () => {
    const productContainersRef = useRef([]);
    const nxtBtnRef = useRef([]);
    const preBtnRef = useRef([]);

    useEffect(() => {
        const productContainers = productContainersRef.current;
        const nxtBtn = nxtBtnRef.current;
        const preBtn = preBtnRef.current;

        productContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            });

            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            });
        });

        // Cleanup event listeners
        return () => {
            productContainers.forEach((item, i) => {
                nxtBtn[i].removeEventListener('click', () => {
                    item.scrollLeft += containerWidth;
                });
                preBtn[i].removeEventListener('click', () => {
                    item.scrollLeft -= containerWidth;
                });
            });
        };
    }, []);

    return (
        <section className={styles.exchangeprogramContainer} id="exchange-program">
            <h2 className={styles.title}>Exchange Programs</h2>
            <button className={styles.preBtn} ref={el => preBtnRef.current[0] = el}>
                <img src="assets/Social Media/arrow.png" alt="Previous" className={styles.arrow} />
            </button>
            <button className={styles.nxtBtn} ref={el => nxtBtnRef.current[0] = el}>
                <img src="assets/Social Media/arrow101.png" alt="Next" className={styles.arrow} />
            </button>
            <div className={styles.productContainer} ref={el => productContainersRef.current[0] = el}>
                <ul className={styles.exchangeprogram}>
                    {exchangeprogram.map((programItem, id) => (
                        <li key={id} className={styles.exchangeprogramItem}>
                            <a href={programItem.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={getImageUrl(programItem.imageSrc)}
                                    alt={`${programItem.organisation} Logo`}
                                />
                            </a>
                            <div className={styles.exchangeprogramItemDetails}>
                                <h3>{`${programItem.title}`}</h3>
                                <p>{`${programItem.location}`}</p>
                                <p>{`${programItem.startDate} - ${programItem.endDate}`}</p>
                                <ul>
                                    {programItem.description.map((description, idx) => (
                                        <li key={idx}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};