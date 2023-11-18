import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categoriesAction';
import { ACTION_TYPES } from '../../utils/AppConstants';

export function* fetchCategoriesAsync() {
    try {
        //use call keyword to turn it into effect
        //@ts-ignore
        const categoriesArray = yield call(getCategoriesAndDocuments);// , 'categories' pass params as 2nd arg
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    // all = only complete when all of it is done, Takes list of generators
    yield all([call(onFetchCategories)])
}