import { Image, Header } from 'semantic-ui-react';
import letterM from '../resources/letterM.png';
// import Mimg from '../resources/Mimg.png';
import StyledHeader from './StyledHeader';

const HeaderComponent = () => {
    return (
        <StyledHeader>
            <Header as='h2'>
                <Image circular src={letterM} />
                Momo Threads
            </Header>
        </StyledHeader>
    );
}

export default HeaderComponent;