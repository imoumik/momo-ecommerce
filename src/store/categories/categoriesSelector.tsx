export const selectCategoriesMap = (state: any) => {
    const categoriesMap = state.categories.
        categories.reduce((acc: { [x: string]: Record<string, any>; }, { title, items }: any) => {
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
    return categoriesMap;
}
