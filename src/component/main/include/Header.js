import { HeaderDiv, Logo, MenuList, MenuItem } from './style'

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
                    headerMenu.map( item => <MenuItem key={ item.id }>
                        { item.name }
                    </MenuItem> )
                }
            </MenuList>
        </HeaderDiv>
    );
};

export default Header;