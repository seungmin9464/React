import { useCallback } from "react"
import { Section } from './Style'

import Header from "./include/Header"
import FirstSection from "./include/first/FirstSection"
import SecondSection from "./include/second/SecondSection"
import ThirdSection from "./include/third/ThirdSection"
import useLocalStorage from "../../hook/useLocalStorage"
import style from './Main.module.scss'

const Main = ({ isDarkMode, toggleDarkMode, chanege }) => {
    
    const [dark, setDark] = useLocalStorage('changeForm', 
        localStorage.getItem("changeForm") === "true")

    const onClickDarkMode = useCallback(() => {
        setDark(prev => !prev)
    }, [])

    return (
        <div>
            <Header
                chanege={ chanege }
                isDarkMode={ isDarkMode } 
                toggleDarkMode={ toggleDarkMode }
                onClickDarkMode={ onClickDarkMode } />

            <Section 
                name='MAIN' 
                chanege={ chanege }>
                <FirstSection 
                chanege={ chanege }/>
            </Section>

            <Section 
                name='ABOUT' 
                chanege={ chanege } 
                isDarkMode={ isDarkMode }>
                <SecondSection 
                    chanege={ chanege } 
                    isDarkMode={ isDarkMode }/>
            </Section>

            <Section 
                name='CONTENTS' 
                chanege={ chanege }>
                <ThirdSection/>
            </Section>

            <Section 
                name='CONTACT' 
                chanege={ chanege }>

            </Section>
        </div>
    );
};

export default Main;