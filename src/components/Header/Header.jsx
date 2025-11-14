import Logo from '../../images/Logo.png'
import styles from '../../styles/header.module.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Header() {
    useGSAP(() => {
        gsap.fromTo('#logo',
            {
                scale: 5,
                top: '50dvh',
            },
            {
                top: '20%',
                scale: 1,
                scrollTrigger: {
                    trigger: '#logo',
                    start: '40% 50%',
                    markers: true,
                }
            }
        )

        gsap.fromTo('#div1',
            {
                top: 0,
                right: 0
            },
            {
                right: '-100dvw'
            }
        )

        gsap.fromTo('#div2',
            {
                top: 0,
                left: 0
            },
            {
                left: '-100dvw'
            }
        )
    })

    return (
        <header className={styles.header}>
            <div id='div1' className={styles.div1}></div>
            <div id='div2' className={styles.div2}></div>
            <img src={Logo} alt="Logo da Custom Code" id='logo' className={styles.logo} />
            <nav>
                <ul className={styles.ul}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}