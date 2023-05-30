import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { Song } from '../model/song';
import { Statics,Params } from '../model/params';
export interface SongIntialState{
   
      isloading:Boolean,
      songs:Song[],
      song:Song,
      params:Params[],
      statics:Statics,
}
 
   const initialState:SongIntialState=  
     {
      isloading:false,
      songs:[],
      song:{_id:'',title:'',artistName:'',genere:'',album:''},
      params:[],
      statics:{ totalSong:'0',totalArtist:'0',totalAlbum:'0', totalGenere:'0'}
      
      
     }
  
export const songSlice=createSlice(
    {
        name :'songs',
        initialState,
    
    reducers: {

      // for inserting songs to db
       addSong: (state, action: PayloadAction<Song>) => {
            // state.songs = [...state.songs, action.payload]
             console.log('nnnnnnnn',action.payload)
            },
            addSongRequest:(state)=>
             {
               state.isloading=true
             },
           
            addSongSuccess:(state,action)=>
             {
               state.songs=action.payload;
               state.isloading=false
             },
           addSongFail:(state,action: PayloadAction<string>)=>{
           state.isloading=false
           console.log('error',action.payload)
         } ,    

          

    // for feaching Songs
        getSongFetch:(state)=>
         {
            state.isloading=true
         },
         getCatsSuccess:(state,action)=>
          {
            state.songs=action.payload;
            state.isloading=false
          },
      getCatsFailure:(state,action: PayloadAction<string>)=>{
        state.isloading=false
        console.log('error',action.payload)
      },
  // for deleting song

       

   deleteSong: (state, action: PayloadAction<String>) => {
    // state.songs = [...state.songs, action.payload]
     console.log('nnnnnnnn',action.payload)
    },
    DeleteSongRequest:(state)=>
     {
       state.isloading=true
     },
   
    deleteSongSuccess:(state,action)=>
     {
      state.songs=state.songs.filter((song,i)=>song._id!==action.payload);

       state.isloading=false
     },
   DeleteSongFail:(state,action: PayloadAction<string>)=>{
   state.isloading=false
   console.log('error',action.payload)
 } ,    

// for single song
 getSong: (state, action: PayloadAction<String>) => {
  // state.songs = [...state.songs, action.payload]
   console.log('nnnnnnnn',action.payload)
  },
   getSongRequest:(state)=>
   {
     state.isloading=true
   },
 
  getSongSuccess:(state,action)=>
   {
    
    state.song=action.payload;
     state.isloading=false
   },
   getSongFail:(state,action: PayloadAction<string>)=>{
 state.isloading=false
 console.log('error',action.payload)
} ,    









//  for updating song
 updateSong: (state, action: PayloadAction<Song>) => {
  // state.songs = [...state.songs, action.payload]
   console.log('nnnnnnnn',action.payload)
  },
  updateSongRequest:(state)=>
   {
     state.isloading=true
   },
 
  updateSongSuccess:(state,action)=>
   {
     state.songs=action.payload;
     state.isloading=false
   },
        updateSongFail:(state,action: PayloadAction<string>)=>{
      state.isloading=false
      console.log('error',action.payload)
} ,    


// for statics
getStatics: (state, action: PayloadAction<Params>) => {
  // state.songs = [...state.songs, action.payload]
   console.log('nnnnnnnn',action.payload)
  },
  getStaticsRequest:(state)=>
   {
     state.isloading=true
   },
 
  getStatcicsSuccess:(state,action)=>
   {
     state.statics=action.payload;
     state.isloading=false
   },
  getStaticsFail:(state,action: PayloadAction<string>)=>{
 state.isloading=false
 console.log('error',action.payload)
} ,  

    }
});
export const {getSongFetch,getCatsFailure,getCatsSuccess,addSong,addSongFail,
              addSongSuccess,addSongRequest,deleteSong,deleteSongSuccess,updateSong,updateSongFail,
              updateSongRequest,updateSongSuccess,getSong,getSongFail,getSongRequest,getSongSuccess,
              getStatcicsSuccess,getStaticsFail,getStaticsRequest,getStatics,
               DeleteSongFail,DeleteSongRequest}=songSlice.actions
export default songSlice.reducer;