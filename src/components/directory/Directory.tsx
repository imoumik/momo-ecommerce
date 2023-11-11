import DirectoryItem from '../directory-item/DirectoryItem';
import { ICategory } from '../../utils/InterfaceTypes';
import './directory.styles.scss';

const Directory = ({ categories }: { categories: ICategory[] }) => {
    return (
        <div className='directory-container'>
            {categories.map((category: ICategory) => (
                <DirectoryItem category={category} />
            ))}
        </div>
    );
}

export default Directory;