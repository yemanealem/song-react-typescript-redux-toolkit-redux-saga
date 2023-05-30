/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { useParams } from "react-router-dom";
import { Button } from 'rebass'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { jsx, css } from "@emotion/react";
import { getSongFetch,addSong,deleteSong,getSong,updateSong } from '../redux/songState';

import { RootState } from '../store';
import { Song } from '../model/song';

const EditSong = () => {

  const dispatch = useDispatch();
  const _id:string | any=useParams()._id

  const song = useSelector((state: RootState) => state.songs.song)
  const isloading = useSelector((state: RootState) => state.songs.isloading)
  const [title, setTitle] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [genere, setGenere] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  
  const handleSubmit=(value:any):void=>{
    dispatch(updateSong({_id,title,artistName,genere,album}))
     }

     useEffect(()=> {
      dispatch(getSong(_id))
    },[])

    useEffect(()=> {


      if(song)
  
       {
        setTitle(song.title)
        setArtistName(song.artistName)
        setAlbum(song.album)
        setGenere(song.genere)
       }
  
  
    },[song])




  return (
  
    
    <div  css={{
      marginLeft:'400px',
      

}}>
       {song && <div className='edit'>
       <div className="row">
      <div className="col-25">
        <label >Title</label>
      </div>
      <div className="col-75">
      <input css= {{
         padding: "11px",
         width:'400px',
         border: "1px solid #ccc",
         borderRadius: "4px",
         boxSizing: "border-box",
        

}}
        type="text"
        defaultValue={song.title}
        placeholder='title...'
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Artist Name</label>
      </div>
      <div className="col-75">
      <input  css= {{
         padding: "11px",
         width:'400px',
         border: "1px solid #ccc",
         borderRadius: "4px",
         boxSizing: "border-box",
        

}}
        type="text"
         placeholder='Artist Name...'
         defaultValue={song.artistName}

        onChange={(e) => setArtistName(e.target.value)}
      ></input>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Genere</label>
      </div>
      <div className="col-75">
      <input  css= {{
         padding: "11px",
         width:'400px',
         border: "1px solid #ccc",
         borderRadius: "4px",
         boxSizing: "border-box",
        

}}
        type="text"
        defaultValue={song.genere}

        placeholder='Genere...'
        onChange={(e) => setGenere(e.target.value)}
      ></input>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label >Album</label>
      </div>
      <div className="col-75">
      <input  css= {{
         padding: "11px",
         width:'400px',
         border: "1px solid #ccc",
         borderRadius: "4px",
         boxSizing: "border-box",
        

}}
        type="text"
        defaultValue={song.album}

       placeholder='Album'
        onChange={(e) => setAlbum(e.target.value)}
      ></input>      </div>
    </div>
      


       </div>
       }
     
      <br></br>
      
        <input css= {{
          backgroundColor: "#04AA6D",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width:'400px'
        
      

}}     
      onClick={handleSubmit}
         type="submit" value="Submit" />
    </div>

  )
}

export default EditSong