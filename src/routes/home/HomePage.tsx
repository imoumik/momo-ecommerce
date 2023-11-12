import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/Directory';

const HomePage = () => {
    return (
        <>
            <Directory />
            <Outlet />
        </>
    );
}

export default HomePage;