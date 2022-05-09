import { useState } from "react";
import { Link } from "react-router-dom";
import { Contens } from './Style'

const ThirdSection = () => {
    
    return (
        <Contens>
            <Link to='/library/Main'>홈페이지</Link>
            <Link to='/library/View'>자세히보기</Link>
        </Contens>
    );
};

export default ThirdSection;