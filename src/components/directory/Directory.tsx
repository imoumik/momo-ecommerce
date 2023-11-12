import DirectoryItem from '../directory-item/DirectoryItem';
import { ICategory } from '../../utils/InterfaceTypes';
import { categories } from '../../utils/AppConstants';
import { DirectoryContainer } from './StyledDirectory.styles';

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category: ICategory) => (
                <DirectoryItem category={category} />
            ))}
        </DirectoryContainer>
    );
}

export default Directory;