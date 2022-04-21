import style from './Header.module.scss'

const headerMenu = [
    { id: '1', name: 'MAIN' },
    { id: '2', name: 'INTRO' },
    { id: '3', name: 'CONTENTS' },
    { id: '4', name: 'CONTACT' },
]

const Header = () => {
    return (
        <div className={ style.header }>
            <div className={ style.logo }>
                LOGO
            </div>

            <ul>
                {
                    headerMenu.map( item => <li key={ item.id }>
                        { item.name }
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Header;