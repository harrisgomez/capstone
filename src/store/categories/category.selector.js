// For variables that may be re-usable
// Selectors handle the business logic
export const selectCategoriesMap = state => {
    console.log('selector fired');
    return state.categories.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
};