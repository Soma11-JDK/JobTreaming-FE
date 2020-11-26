import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';

const SET_SEARCH_INFO = 'search/SET_SEARCH_INFO'; // 검색 정보 설정
export const setSearchInfo = createAction(SET_SEARCH_INFO); // searchList

const initialState = Map({});

// Map({ searchList: List(), searchTerm: false });

export default handleActions(
  {
    [SET_SEARCH_INFO]: (state, action) => {
      return state.set('searchTerm', action.payload);
    },
  },
  initialState,
);
