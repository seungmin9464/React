import { HeaderDiv, Logo, MenuList, MenuItem, Icon } from './Style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import style from '../Main.module.scss'

const headerMenu = [
    { id: '1', name: 'MAIN' },
    { id: '2', name: 'ABOUT' },
    { id: '3', name: 'CONTENTS' },
    { id: '4', name: 'CONTACT' },
]

const Header = ({ chanege, isDarkMode, toggleDarkMode }) => {

    const [click, setClick] = useState( false )
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <HeaderDiv chanege={ chanege }>
            <Logo>
                LOGO
            </Logo>

            <div style={{ display: 'flex', alignItems: 'center' }}>

                <Icon onClick={() => toggleDarkMode()} style={{ zIndex: '9999' }}>
                    {isDarkMode ? 
                        <BsFillSunFill style= {{color: '#ffd8a7'}}/> : 
                        <BsFillMoonFill style={{ color: '#62009f' }}/>}
                </Icon>

                <div className={style.hamburger} onClick={handleClick} style={{ marginLeft: '20px' }}>
                    {click ? (<FaTimes size={25} style={{ color: '#333' }} />)
                        : (<FaBars size={25} style={{ color: '#333' }} />)}
                </div>

                <MenuList chanege={ chanege } className={click ? 'active' : ''}>
                    {
                        headerMenu.map( item =>
                            <Link
                                to = { item.name }
                                spy = { true }
                                smooth = { true }
                                duration = { 1300 }
                                key={ item.id }
                            >
                                <MenuItem 
                                    onClick={closeMenu}
                                >
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