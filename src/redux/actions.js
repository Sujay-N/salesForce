import {
	ADD_STAFF,
	VIEW_STAFF,
	DELETE_STAFF,
	EDIT_STAFF,
	SORT_SAL_DEC,
	SORT_SAL_INC,
	SET_CURR_PAGE,
	SET_PER_PAGE,
	CHANGE_PAGE_NO
} from './actionTypes';

const addStaff = (payload) => {
	console.log(payload);
	return {
		type: ADD_STAFF,
		payload
	};
};

const viewStaff = (payload) => {
	return {
		type: VIEW_STAFF,
		payload
	};
};

const delStaff = (payload) => ({
	type: DELETE_STAFF,
	payload
});

const editStaff = (payload) => ({
	type: EDIT_STAFF,
	payload
});

const sortInc = (payload) => ({
	type: SORT_SAL_INC,
	payload
});

const sortDec = (payload) => ({
	type: SORT_SAL_DEC,
	payload
});

const setCurrentPg = (payload) => ({
	type: SET_CURR_PAGE,
	payload
});

const setPerPg = (payload) => ({
	type: SET_PER_PAGE,
	payload
});

//  const changePage = (payload) => ({
// 	type: CHANGE_PAGE_NO,
// 	payload
//   })

export { addStaff, sortDec, sortInc, setCurrentPg, setPerPg, viewStaff, editStaff, delStaff };
