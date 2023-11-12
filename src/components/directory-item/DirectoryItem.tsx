import { ICategory } from '../../utils/InterfaceTypes';
import { BackgroundImage, Body, DirectoryItemContainer } from './StyledDirectoryItem.styles';

const DirectoryItem = ({ category }: { category: ICategory }) => {
    const { title, imageUrl }: ICategory = category;
    return (
        <DirectoryItemContainer>
            {/* NOTE: You have to add types for the StyledComponent props, to remove errors*/}
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;