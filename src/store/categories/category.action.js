import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = categoriesArr =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArr);

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = categoriesArr =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArr
    );

export const fetchCategoriesFailed = error =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
        error
    );

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArr = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArr));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};