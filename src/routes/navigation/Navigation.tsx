import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';

const Navigation = () => (
    <>
        <HeaderComponent />
        <Outlet />
    </>
)

export default Navigation;