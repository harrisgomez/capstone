import { createSelector } from "reselect";

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    categoriesSlice => categoriesSlice.categories
)

// For variables that may be re-usable
// Selectors handle the business logic
export const selectCategoriesMap = createSelector(
    [selectCategories],
    categories => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    categoriesSlice => categoriesSlice.isLoading
);