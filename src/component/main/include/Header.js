import { HeaderDiv, Logo, MenuList, MenuItem } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useState } from 'react';
import style from '../Main.module.scss'

const headerMenu = [
    { id: '1', name: 'MAIN' },
    { id: '2', name: 'INTRO' },
    { id: '3', name: 'CONTENTS' },
    { id: '4', name: 'CONTACT' },
]

const Header = ({ theme }) => {

    const [click, setClick] = useState( false )
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <HeaderDiv>
            <Logo>
                LOGO
            </Logo>

            <div className={style.hamburger} onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={25} style={{ color: '#ffffff' }} />)}
            </div>

            <MenuList theme={ theme } className={click ? 'active' : ''}>
                {
                    headerMenu.map( item =>
                        <Link
                            to = { item.name }
                            spy = { true }
                            smooth = { true }
                            duration = { 500 }
                        >
                            <MenuItem 
                                key={ item.id }
                                onClick={closeMenu}
                            >
                                { item.name }
                            </MenuItem>
                        </Link>
                    )
                }
            </MenuList>
        </HeaderDiv>
    );
};

export default Header;