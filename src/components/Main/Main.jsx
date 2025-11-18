import PrimaryButton from '../utils/Buttons.jsx'
import FluidCursor from '../utils/FluidCursor.jsx'
import Logo from '../../images/Logo.png'
import styles from '../../styles/main.module.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Main() {
    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: 'smooth-wrapper',
            content: 'smooth-content',
            smooth: 2,
            normalizeScroll: true
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: "top top",
                end: '+=800',
                scrub: 1,
            }
        })

        tl.fromTo('#logo',
            {
                top: 'calc(50dvh - 60px)',
                scale: '5',
            },
            {
                top: '2dvh',
                scale: 1,
                duration: 1
            },
            0
        )

        tl.from('#span',
            {
                opacity: 0,
                y: '40px',
                duration: 0.2
            },
            1
        )

        tl.fromTo('#div1',
            {
                top: 0,
                right: 0
            },
            {
                right: '-100dvw',
                duration: 4
            },
            2
        )

        tl.fromTo('#div2',
            {
                top: 0,
                left: 0
            },
            {
                left: '-100dvw',
                duration: 4
            },
            2
        )

        tl.to('#span',
            {
                display: 'none'
            },
            2
        )

        tl.to('#animation-container',
            {
                display: 'none'
            },
            3
        )

        ScrollTrigger.create({
            trigger: '#smooth-content',
            start: 'top top',
            end: '+=600',
            markers: true,
            pin: true,
            pinSpacing: false
        })
    })

    return (
        <main>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div id='div1' className={styles.div1}></div>
                    <div id='div2' className={styles.div2}></div>
                    <img src={Logo} alt="Logo da Custom Code" id='logo' className={styles.logo} />
                    <span id='span' className={styles.span}>CUSTOM CODE</span>
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
                </div>
            </div>
        </main>
    )
}