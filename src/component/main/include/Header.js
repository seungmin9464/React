import { HeaderDiv, Logo, MenuList, MenuItem } from './style'
import { Link } from 'react-scroll'

const headerMenu = [
    { id: '1', name: 'MAIN' },
    { id: '2', name: 'INTRO' },
    { id: '3', name: 'CONTENTS' },
    { id: '4', name: 'CONTACT' },
]

const Header = ({ theme }) => {
    return (
        <HeaderDiv>
            <Logo>
                LOGO
            </Logo>

            <MenuList theme={theme}>
                {
                    headerMenu.map( item =>
                        <Link
                            to = { item.name }
                            spy = { true }
                            smooth = { true }
                            duration = { 500 }
                        >
                            <MenuItem key={ item.id }>
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