import { ICategory } from '../../utils/InterfaceTypes';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }: { category: ICategory }) => {
    const { id, title, imageUrl }: ICategory = category;
    return (
        <div key={id} className='directory-item-container'>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='directory-item-body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default DirectoryItem;