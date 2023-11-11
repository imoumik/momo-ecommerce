import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image, Header, Grid } from 'semantic-ui-react';
import letterM from '../../resources/letterM.png';
// import Mimg from '../resources/Mimg.png';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { CurrentUserContextType, ICartContext } from '../../utils/InterfaceTypes';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import StyledHeader from './StyledHeader.styles';

const HeaderComponent = () => {
    const value = useContext<CurrentUserContextType | null>(UserContext);
    const { currentUser } = value as CurrentUserContextType;

    const { isCartOpen } = useContext<ICartContext>(CartContext);

    /* const signOutHandler = async () => {
        await signOutUser(); // becomes undefined if user is signed out
        // setCurrentUser(null); // set UserContext value to currentUser to null
        // Now we use Listener in UserContext.tsx
    } */

    return (
        <StyledHeader>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Link className='nav-logo' to='/'>
                            <Header as='h2'>
                                <Image circular src={letterM} />
                                Momo Threads
                            </Header>
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <span className='link-container'>
                            <Link className='nav-link' to='/shop'><h3>SHOP</h3></Link>
                            <Link className='nav-link' to='/contact'><h3>CONTACT</h3></Link>
                            {currentUser ?
                                (<span className='nav-link' onClick={signOutUser}><h3>SIGN OUT</h3></span>)
                                : (<Link className='nav-link' to='/auth'><h3>SIGN IN</h3></Link>)
                            }
                            <CartIcon />
                        </span>
                        {isCartOpen && <CartDropdown />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledHeader>
    );
}

export default HeaderComponent;