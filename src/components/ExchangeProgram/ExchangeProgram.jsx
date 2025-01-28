import React from "react";

import styles from "./ExchangeProgram.module.css";
import { getImageUrl } from "../../utils";

export const ExchangeProgram = () =>{
    return(
        <section className={styles.contrainer} id="exchange program">
            <h2 className={styles.title}> Exchange Programs</h2>
            <div className={styles.contents}>
                <div className={styles.exchangeprogram}>
                    {exchangeprogram.map((title, location, ))}
                </div>
            </div>

        </section>
    );
};