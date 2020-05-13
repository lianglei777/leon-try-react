import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from '../application/Singers/store/index';
import { reducer as rankReducer } from '../application/Rank/store/index';


// 之后开发具体功能模块的时候添加 reducer
export default combineReducers ({

    recommend: recommendReducer,
    singers: singersReducer,
    rank: rankReducer,

});