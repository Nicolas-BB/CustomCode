import { useEffect } from 'react';
import Header from './header/Header.jsx'
import Main from './main/Main.jsx'

export default function App() {
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />
            <Main />
        </>
    )
}