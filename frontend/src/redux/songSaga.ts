import {call,put,takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit'


import { getCatsSuccess,getCatsFailure,addSongSuccess, addSongRequest,deleteSongSuccess,DeleteSongFail,
       DeleteSongRequest,
       updateSongRequest,
       updateSongFail,
       updateSongSuccess,
       getSongRequest,
       getSongSuccess,
       getSongFail,
       getStatcicsSuccess,
       getStaticsFail,
       getStaticsRequest
} from './songState';
import axios from "axios"
import { Song } from '../model/song';
import { Params } from '../model/params';
import {toast} from 'react-toastify';
export function* WorkOnsongFeach () {

   try {
    const {data}=yield call(()=>axios.get('http://localhost:8800/api/songs'))

      yield put(getCatsSuccess(data))
    
   } catch (error:any) {
     yield put(getCatsFailure(error.message))
   }


}

export function* addSong (action: PayloadAction<Song>) {
     yield put(addSongRequest())
  try {
   const {data}=yield call(()=>axios.post<Song[]>('http://localhost:8800/api/songs',action.payload))

     yield put(addSongSuccess(data))
     toast.success('Added Suceessfully')

  } catch (error:any) {
    yield put(getCatsFailure(error.message))
    let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
  }


}

export function* deleteSong (action: PayloadAction<String>) {
  yield put(DeleteSongRequest())
  
try {
const {data}=yield call(()=>axios.delete(`http://localhost:8800/api/songs/delete/${action.payload}`))

  yield put(deleteSongSuccess(action.payload))
  toast.success('Deleted Sussefully')

} catch (error:any) {
 yield put(DeleteSongFail(error.message))
 let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
}


}
export function* getSong (action: PayloadAction<String>) {
  yield put(getSongRequest())
 
try {
const {data}=yield call(()=>axios.get(`http://localhost:8800/api/songs/getsong/${action.payload}`))

  yield put(getSongSuccess(data))

} catch (error:any) {
 yield put(getSongFail(error.message))
 let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
}


}

export function* updateSong (action: PayloadAction<Song>) {
  yield put(updateSongRequest())
try {
const {data}=yield call(()=>axios.put<Song[]>(`http://localhost:8800/api/songs/update/${action.payload._id}`,action.payload))

  yield put(updateSongSuccess(data))
  toast.success('Updated Sussefully')

} catch (error:any) {
 yield put(updateSongFail(error.message))
 let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
}


}

export function* getStatics (action: PayloadAction<Params>) {
  yield put(getStaticsRequest())
try {
const {data}=yield call(()=>axios.post<Params>(`http://localhost:8800/api/songs/getstatics`,action.payload))

  yield put(getStatcicsSuccess(data))

} catch (error:any) {
 yield put(getStaticsFail(error.message))
 let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
}


}


export function* SongSoga()
  {
  yield takeEvery('songs/getSongFetch',WorkOnsongFeach)
  yield takeEvery('songs/addSong',addSong)
  yield takeEvery('songs/deleteSong',deleteSong)
  yield takeEvery('songs/updateSong',updateSong)
  yield takeEvery('songs/getSong',getSong)
  yield takeEvery('songs/getStatics',getStatics)

  }
