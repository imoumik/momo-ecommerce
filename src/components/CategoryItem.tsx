import { ICategory } from './utils/InterfaceTypes';
import './styles/category.styles.scss';

const CategoryItem = ({ category }: { category: ICategory }) => {
    const { id, title, imageUrl }: ICategory = category;
    return (
        <div key={id} className='category-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;