import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const Navigation = () => (
    <>
        <HeaderComponent />
        <Outlet />
    </>
)

export default Navigation;