/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, css } from "@emotion/react";
import { Flex,Text,Link} from 'rebass'
import { Link as LINK_URL } from 'react-router-dom';
const Navbar:React.FC = ()  => {
 
  return (
    <div className='container'>

<header className="navbar">
      
      <Flex
           px={2}
           color='white'
           bg='#04AA6D'
           alignItems='center'
           justifyContent="center"
           >
          <LINK_URL to={'/'}> <Text ml={20} p={20} fontWeight='bold'>Home</Text></LINK_URL>
          <LINK_URL to={'/statics'}> <Text ml={20} p={20} fontWeight='bold'>Statics</Text></LINK_URL>

          
         </Flex>
      
         
       </header>
   
              

   
 </div>




  );
}

export default Navbar