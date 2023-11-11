import DirectoryItem from './DirectoryItem';
import { ICategory } from '../utils/InterfaceTypes';
import './styles/directory.styles.scss';

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