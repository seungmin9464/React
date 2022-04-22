import style from './Main.module.scss'
import Header from "./include/Header";

import Typewriter from 'typewriter-effect';

const Main = () => {
    
    return (
        <div>
            {/* header */}
            <Header/>

            {/* Main */}
            <div className={ style.section } >
                <div className={ style.portfolio }>
                    PORT<br/>FOLIO
                    <div></div>
                </div>
                <div className={ style.typing }>
                    <p>Hello, I'm</p>
                    <p>
                    <Typewriter
                        options={{
                            strings: ['Seungmin', 'Publisher', 'Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </p>
                </div>
            </div>


            <div className={ style.section } >

            </div>

            <div className={ style.section } >

            </div>
            
            <div className={ style.section } >

            </div>
        </div>
    );
};

export default Main;