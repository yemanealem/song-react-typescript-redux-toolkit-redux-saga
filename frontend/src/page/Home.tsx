/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link as Link_URL} from "react-router-dom";
import { getSongFetch,addSong,deleteSong } from '../redux/songState';
import { RootState } from '../store';
import { Song } from '../model/song';
import { Button} from 'rebass'
import { jsx, css } from "@emotion/react";



const Home:React.FC = ()  => {
 
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs)
  const [songLists,setSongList]=useState<Song[]>()
  const isloading = useSelector((state: RootState) => state.songs.isloading)
  const [song, setSong] = useState<Song>({title : 'pencil', genere :"vv" ,artistName:"ccc",album:'ffff'});
 

const deleteHandler=(value:any):void=>{
         dispatch(deleteSong(value))
           }
  const handleClick = ():void => {
    
    dispatch(addSong(song))
}
useEffect(()=> {
  dispatch(getSongFetch())
},[])

  return (
    <div className='container'>

   
       <div className='mancontent'  css={{
                  marginLeft:'100px',
                  
            }}>
        <div className='search' css={css`
              
               padding: 6px;
               margin: 18px;
               margin-right: 16px;
               border: none;
               font-size: 17px;
             
          
         `}>
        <input type="text" placeholder="Search.." />
       <Link_URL to={'addsong'}>
        <span> <Button 
                as="a"
                color="white"
                bg="black"
                mr={3}
                ml="40%"
            >
              Add New Song
            </Button></span>
       
       </Link_URL>
           </div>
       <table  css={css`
        font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          
         `}>
              <tr css={css`
            border-bottom: 2px solid green;
            text-align: left;
            padding: 8px;
            // & :nth-child(even) {
            //   background-color: red;
            // } 
           
          `}>
                <th>Title</th>
                <th>ArtistName</th>
                <th>Album</th>
                <th>Genere</th>
                <th>Action</th>
              </tr>
                 {songs.length > 0 && songs.map((song,index)=>
                  
                    <tr>
                          <td >{song.title}</td>
                          <td >{song.artistName}</td>
                          <td >{song.album}</td>
                          <td >{song.genere}</td>
                          <td>
                            
                            
                            <Link_URL to={`/editsong/${song._id}`} className="btn btn-info">
                              <span>
                              <Button as="a"
                                      color="white"
                                      bg="#5dbea3">
                                      
                                  edit
                          </Button>
                              </span>
                                </Link_URL>
                               
                          &nbsp;
                          <Button onClick={() => deleteHandler(song._id)}
                          as="a"
                          color="white"
                          bg="red">

                          delete
                          </Button></td> 
                  </tr>
                 
                 )

                 }
            </table>
              
   </div>
   
 </div>




  );
}

export default Home