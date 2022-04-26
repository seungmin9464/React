import Typewriter from 'typewriter-effect';

import { Portfolio, PortfolioInner, Typing, TypingText } from '../style'

const FirstSection = ({ theme }) => {
    return (
        <>
            <Portfolio theme={theme}>
                PORT<br />FOLIO
                <PortfolioInner theme={theme}></PortfolioInner>
            </Portfolio>

            <Typing>
                <TypingText theme={theme}>Hello, I'm</TypingText>
                <TypingText theme={theme}>
                    <Typewriter
                        options={{
                            strings: ['Seungmin', 'Publisher', 'Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </TypingText>
            </Typing>
        </>
    );
};

export default FirstSection;