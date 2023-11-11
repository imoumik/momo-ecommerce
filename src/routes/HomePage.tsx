import { Outlet } from 'react-router-dom';
import Directory from '../components/Directory';
import { categories } from '../utils/AppConstants';

const HomePage = () => {
    return (
        <>
            <Directory categories={categories} />
            <Outlet />
        </>
    );
}

export default HomePage;