import { Image, Header, Grid, Icon } from 'semantic-ui-react';
import letterM from '../resources/letterM.png';
// import Mimg from '../resources/Mimg.png';
import StyledHeader from './styles/StyledHeader.styles';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
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
                            <Link className='nav-link' to='/signin'><h3>SIGN IN</h3></Link>
                            <Link className='nav-link' to='/cart'><Icon large name='cart' /></Link>
                        </span>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledHeader>
    );
}

export default HeaderComponent;