import Typewriter from 'typewriter-effect';

import { Portfolio, PortfolioInner, Typing, TypingText } from './Style'

const FirstSection = ({ chanege }) => {
    return (
        <>
            <Portfolio chanege={chanege}>
                PORT<br />FOLIO
                <PortfolioInner chanege={chanege}></PortfolioInner>
            </Portfolio>

            <Typing>
                <TypingText chanege={chanege}>Hello, I'm</TypingText>
                <TypingText chanege={chanege}>
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