import CategoryItem from '../components/CategoryItem';
import { categories } from '../utils/AppConstants';
import { ICategory } from '../utils/InterfaceTypes';
import '../components/styles/categories.styles.scss';

const HomePage = () => {
    return (
        <div>
            <div className='categories-container'>
                {categories.map((category: ICategory) => (
                    <CategoryItem category={category} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;