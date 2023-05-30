import React from 'react';

import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import songReducer from './redux/songState';
import { SongSoga } from './redux/songSaga';
// import { useDispatch } from 'react-redux'
const saga=createSagaMiddleware()
const store=configureStore({
   reducer:{
      songs:songReducer
   },
   middleware:[saga]

})
saga.run(SongSoga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store



