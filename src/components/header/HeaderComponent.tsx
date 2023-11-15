import { Image, Header } from 'semantic-ui-react';
import letterM from '../../resources/letterM.png';
// import Mimg from '../resources/Mimg.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { HeaderContainer, LogoContainer, NavLink, NavLinks } from './StyledHeader.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/userSelector';
import { selectIsCartOpen } from '../../store/cart/cartSelector';

const HeaderComponent = () => {
    //VALUE FROM STORE
    const currentUser = useSelector(selectCurrentUser);
    /*     const value = useContext<CurrentUserContextType | null>(UserContext);
        const { currentUser } = value as CurrentUserContextType; */

    const isCartOpen = useSelector(selectIsCartOpen);

    /* const signOutHandler = async () => {
        await signOutUser(); // becomes undefined if user is signed out
        // setCurrentUser(null); // set UserContext value to currentUser to null
        // Now we use Listener in UserContext.tsx
    } */

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Header as='h2'>
                    <Image circular src={letterM} />
                    Momo Threads
                </Header>
            </LogoContainer>
            <NavLinks as='span'>
                <NavLink to='/shop'><h3>SHOP</h3></NavLink>
                <NavLink to='/contact'><h3>CONTACT</h3></NavLink>
                {/*@ts-ignore*/}
                {currentUser ? (<NavLink as='span' onClick={signOutUser}><h3>SIGN OUT</h3></NavLink>)
                    : (<NavLink to='/auth'><h3>SIGN IN</h3></NavLink>)
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </HeaderContainer>
    );
}

export default HeaderComponent;