import { useState } from 'react';
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { HeaderDiv, Logo, MenuList, MenuItem, Icon, Hamburger } from './Style'
import style from '../Main.module.scss'

const headerMenu = [
    { id: '1', name: 'MAIN' },
    { id: '2', name: 'ABOUT' },
    { id: '3', name: 'CONTENTS' },
    { id: '4', name: 'CONTACT' },
]

const Header = ({ chanege, isDarkMode, toggleDarkMode, onClickDarkMode, dark }) => {

    const [click, setClick] = useState( false )
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <HeaderDiv chanege={ chanege }>
            <Logo chanege={ chanege }>
                LOGO
            </Logo>

            <div
                style={{ display: 'flex', alignItems: 'center' }}>
                <Icon onClick={() => {toggleDarkMode(); onClickDarkMode()}}>
                    {isDarkMode ? 
                        <BsFillSunFill style= {{color: '#ffd8a7'}}/> : 
                        <BsFillMoonFill style={{ color: '#62009f' }}/>}
                </Icon>

                <Hamburger 
                    onClick={handleClick} 
                    chanege={ chanege }>
                    {click ? 
                        (<FaTimes size={25}/>) : 
                        (<FaBars size={25}/>)}
                </Hamburger>

                <MenuList chanege={ chanege } className={click ? 'active' : ''}>
                    {
                        headerMenu.map( item =>
                            <Link
                                to = { item.name }
                                spy = { true }
                                smooth = { true }
                                duration = { 1300 }
                                key={ item.id } >
                                <MenuItem 
                                    onClick={closeMenu}
                                    chanege={ chanege }>
                                    { item.name }
                                </MenuItem>
                            </Link>
                        )
                    }
                </MenuList>
            </div>

        </HeaderDiv>
    );
};

export default Header;