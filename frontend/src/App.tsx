/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import EditSong from "./page/EditSong";
import AddSong from "./page/AddSong";
import Navbar from "./component/Navbar";
import Statics from './page/Statics';
import { jsx, css } from "@emotion/react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {

   return (
    <BrowserRouter>
 
      <div className="container">
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
              <ToastContainer />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addsong" element={<AddSong />} />
          <Route path="/editsong/:_id" element={<EditSong />} />
          <Route path='/statics/' element={<Statics />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
