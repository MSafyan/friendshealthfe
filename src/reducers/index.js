import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import senderReducer from './senderReducer';
import receiverReducer from './receiverReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer= combineReducers({
  auth: authReducer,
  sender:senderReducer,
  receiver:receiverReducer
});

export default persistReducer(persistConfig, rootReducer);