import { createSelector } from 'reselect';

//Reselect Memoization - Input Selector
const selectCategoryReducer = (state: any) => (state.categories); //Get the Categories Slice
//Reselect Memoization - Output Selector
export const selectCategories = createSelector(
    [selectCategoryReducer], // Attrib1: Array of Input Selectors
    (categoriesSlice: any) => (categoriesSlice.categories) // Attrib2: Output Selector
);

export const selectCategoriesMap = createSelector([selectCategories], (categories: any) =>
    categories.reduce((acc: { [x: string]: any; }, { title, items }: any) => {
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)
