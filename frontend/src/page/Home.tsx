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
  const [songLists,setSongList]=useState<Song[]>([])
  const [searchValue,setSearchValue]=useState<string>('')
  const isloading = useSelector((state: RootState) => state.songs.isloading)
  const [song, setSong] = useState<Song>({title : 'pencil', genere :"vv" ,artistName:"ccc",album:'ffff'});
 

const deleteHandler=(value:any):void=>{
         dispatch(deleteSong(value))
           }
  const handleClick = ():void => {
    
    dispatch(addSong(song))
}
const searchHandler = (value:string) => {
  setSearchValue(value);
   if(value) {
   
     const fiteredData=songs.filter((s) => {
      return s.artistName.toString()
          .toLowerCase()
          .includes(searchValue.toString().toLowerCase())
    
    });    
    setSongList(fiteredData)     
   
   }
   
   else {
    {
      setSongList(songs)
      console.log('hanging me')
     }
   }  




};

useEffect(()=>{

  if(songs)
     {
      setSongList(songs)
     }


    },[songs])





useEffect(()=> {
  dispatch(getSongFetch())
},[])

  return (
    <div className='container'>

   
       <div className='mancontent'  css={{
                  marginLeft:'100px',
                  
            }}>
        <div className='search' css={css`
              
               padding: 12px;
             
               margin-right: 16px;
               border: none;
               font-size: 17px;
             
          
         `}>
        <input type="text" placeholder="Search by Artist Name.." onChange={(e)=>searchHandler(e.target.value)} />
       <Link_URL to={'/addsong'} style={{margin:"200px"}}>
        <span> <Button 
                as="a"
                color="white"
                bg="#04AA6D"
                mr={3}
          
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
         <thead>
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
         </thead>
              <tbody>
              {songLists.length > 0 && songLists.map((song,index)=>
                  
                  <tr key={song._id}>
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
              </tbody>
            </table>
              
   </div>
   
 </div>




  );
}

export default Home