import PrimaryButton from '../utils/Buttons.jsx'
import FluidCursor from '../utils/FluidCursor.jsx'
import styles from '../../styles/main.module.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

export default function Main() {
    useGSAP(() => {
        ScrollTrigger.create({
            
        })
    })

    return (
        <main>
            {/* <FluidCursor /> */}
            <section className={styles.heroSection}>
                <h1>CUSTOM CODE<br /><span>DANDO FORMA A IDEIAS</span></h1>
            </section>
            <section className={styles.aboutSection}>
                <p>
                    SOMOS UMA EQUIPE QUE TEM COMO FOCO DAR <span>VIDA</span> ÀS SUAS IDEIAS, CRIAR <span>PÁGINAS</span>, SITES <span>COMPLETOS</span>, <span>APLICATIVOS</span> E <span>MUITO MAIS</span>!
                </p>
            </section>
            <section className={styles.clientsSection}>
                <h2>CLIENTES<br /><span>SATISFEITOS</span></h2>
                <div className={styles.clientsContainer}></div>
            </section>
            <section className={styles.techSection}>
                <h2>TECNOLOGIAS<br /><span>DOMINADAS</span></h2>
                <div className={styles.techContainer}></div>
            </section>
            <section className={styles.contactSection}>
                <h2>ENTRAR<br /><span>EM CONTATO</span></h2>
                <div className={styles.contactContainer}>
                    <PrimaryButton href={'#'}>Quero meu site!</PrimaryButton>
                </div>
            </section>
        </main>
    )
}