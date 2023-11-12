import DirectoryItem from '../directory-item/DirectoryItem';
import { ICategory } from '../../utils/InterfaceTypes';
import { categories } from '../../utils/AppConstants';
import './directory.styles.scss';

const Directory = () => {
    return (
        <div className='directory-container'>
            {categories.map((category: ICategory) => (
                <DirectoryItem category={category} />
            ))}
        </div>
    );
}

export default Directory;