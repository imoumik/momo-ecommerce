import CategoryItem from './CategoryItem';
import { categories } from '../utils/AppConstants';
import { ICategory } from '../utils/InterfaceTypes';
import './styles/categories.styles.scss';

const Directory = () => {
    return (
        <div className='categories-container'>
            {categories.map((category: ICategory) => (
                <CategoryItem category={category} />
            ))}
        </div>
    );
}

export default Directory;