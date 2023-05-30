/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link as Link_URL} from "react-router-dom";
import { getSongFetch,addSong,deleteSong,getStatics } from '../redux/songState';
import { RootState } from '../store';
import { Song } from '../model/song';
import {Box,Text} from 'rebass'
import { jsx, css } from "@emotion/react";

 import { Select,Label,Input,Radio,Checkbox} from "rebass__forms";


const Statics:React.FC = ()  => {
 
  const dispatch = useDispatch();
  const statics = useSelector((state: RootState) => state.songs.statics)
  const songs = useSelector((state: RootState) => state.songs.songs)
  const uniqArtists=songs.map(item => item.artistName)
          .filter((value, index, self) => self.indexOf(value) === index)

  const uniqGenere=songs.map(item => item.genere)
           .filter((value, index, self) => self.indexOf(value) === index)
  const uniqAlbum=songs.map(item => item.album)
          .filter((value, index, self) => self.indexOf(value) === index)



  const isloading = useSelector((state: RootState) => state.songs.isloading)
  const [song, setSong] = useState<Song>({title : 'pencil', genere :"vv" ,artistName:"ccc",album:'ffff'});
  const [value,setValue]=useState<string>("")
  const [type,setType]=useState<string>("")
  useEffect(()=>{
    dispatch(getSongFetch())
},[dispatch])



const selectOption=(value:string,type:string):void=>{
      setType(type)
       setValue(value)

      dispatch(getStatics({type,value}))

    }




  return (
    <div className='container' css={{
      marginLeft:'200px',
      
}}>

   <div className='statics'>

   <select className="form-select"  css= {{
                  padding: "11px",
                  width:'200px',
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
        

}}         onChange={(e) => selectOption(e.target.value,'ALL')}
>
              <option value="">choose options</option>
              <option value="ALL">All</option>
                
              </select>
                &nbsp;
 
              <select className="form-select"  css= {{
                  padding: "11px",
                  width:'200px',
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
        

}}         onChange={(e) => selectOption(e.target.value,'AN')}
>
<option value="" style={{fontFamily: "Times New Roman, Times, serif"}} >Select Artist</option>
               {uniqArtists.map((an, index) => {
                   return <option key={index} >
                      {an} 
                   </option>
                 })}
              </select>
                &nbsp;
              <select className="form-select"  css= {{
                  padding: "11px",
                  width:'200px',
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
        

}}  onChange={(e) => selectOption(e.target.value,'GE')}>
                <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} >Select Genere</option>
               {uniqGenere.map((ge, index) => {
                   return <option key={index} >
                      {ge} 
                   </option>
                 })}
              </select>
           
               &nbsp;
              <select className="form-select"  css= {{
                  padding: "11px",
                  width:'200px',
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxSizing: "border-box",
        

}} onChange={(e) => selectOption(e.target.value,'AL')}>
                <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} >Select Album</option>
               {uniqAlbum.map((al, index) => {
                   return <option key={index} >
                      {al} 
                   </option>
                 })}
              </select>
           
   </div>

   <div className='total' css={{
      marginLeft:'200px',
      
}}>
  <br></br>
         {type==='ALL' &&
           <Box
           p={5}
           fontSize={4}
           width={[ 1, 1, 1/2 ]}
           color='white'
           bg='black'>
           <Text>Total Songs: {statics.totalSong}</Text> <br></br>
           <Text>Total Artists: {statics.totalArtist}</Text> <br></br>
           <Text>Total Genere: {statics.totalGenere}</Text> <br></br>
           <Text>Total Albums: {statics.totalAlbum}</Text> <br></br>
           
         
         </Box>

         }


{type==='AN' &&
       <div className='box'>

       <Box
       p={5}
       fontSize={4}
       width={[ 1, 1, 1/2 ]}
       color='white'
       bg='black'>
           <Text>Total Songs: {statics.totalSong}</Text> <br></br>
           {/* <Text>Total Genere: {statics.totalGenere}</Text> <br></br> */}
           <Text>Total Albums: {statics.totalAlbum}</Text> <br></br>
     
       
     
     </Box>
     </div>
     }



{type==='GE' &&
       <div className='box'>
        <Text>Number of songs in Genere <span style={{color:'green',fontSize:'20px'}}>{value}</span></Text>
       <Box
       p={5}
       fontSize={4}
       width={[ 1, 1, 1/2 ]}
       color='white'
       bg='black'>
       <Text>Total Songs: {statics.totalSong}</Text> <br></br>
     
       
     
     </Box>
     </div>
     }



{type==='AL' &&
       <div className='box'>
        <Text>Number of songs in Album <span style={{color:'green',fontSize:'20px'}}>{value}</span></Text>
       <Box
       p={5}
       fontSize={4}
       width={[ 1, 1, 1/2 ]}
       color='white'
       bg='black'>
       <Text>Total Songs: {statics.totalSong}</Text> <br></br>
     
       
     
     </Box>
     </div>
     }


      





   </div>


      
   
 </div>




  );
}

export default Statics