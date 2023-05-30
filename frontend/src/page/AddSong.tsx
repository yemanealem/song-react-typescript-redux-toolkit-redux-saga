/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Button } from 'rebass'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { jsx, css } from "@emotion/react";
import { getSongFetch,addSong } from '../redux/songState';
import { RootState } from '../store';
import { Song } from '../model/song';
const AddSong = () => {

  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs)
  const isloading = useSelector((state: RootState) => state.songs.isloading)
  const [title, setTitle] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [genere, setGenere] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  
  const handleSubmit=(value:any):void=>{
      dispatch(addSong({title,artistName,genere,album}))
     }

     useEffect(()=> {
      dispatch(getSongFetch())
    },[])
  return (
  
    
    <div  css={{
      marginLeft:'400px',
      

}}>
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
       
       placeholder='Album'
        onChange={(e) => setAlbum(e.target.value)}
      ></input>      </div>
    </div>
      
     
      <br></br>
      
        <input css= {{
          backgroundColor: "#04AA6D",
          color: "white",
          padding: "12px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width:'400px'
        
      

}}       onClick={handleSubmit}
         type="submit" value="Submit" />
    </div>

  )
}

export default AddSong