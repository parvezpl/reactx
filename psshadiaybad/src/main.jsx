import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './homeItem/home.jsx'
import PicPage from './homeItem/picPage.jsx'
import CctnsOffice from './components/sidebar/cctnsOffice.jsx'
import Thome from './components/testComp/thome.jsx'
import { Login, Singup } from './components/index.js'
import Cctnspage from './homeItem/homeComp/cctnspage.jsx'
import Adminpage from './components/admin/adminpage.jsx'
import Sho from './components/admin/sho/sho.jsx'
import Members from './components/admin/members/members';
import MainPagePhoto from './components/admin/mainPagePhoto/mainPagePhoto.jsx'
import Photos from './homeItem/homeComp/photos.jsx'
import UploadPhoto from './homeItem/upload/uploadPhoto.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
          <Route path='/' element={<App/>}>
              <Route path='admin' element={<Adminpage/>}>
                <Route path='sho' element={<Sho/>}/>
                <Route path='members' element={<Members/>}/>
                <Route path='mpphoto' element={<MainPagePhoto/>}/>
                <Route path='ets' element={<><p>ets</p></>}/>
              </Route>
            <Route path='' element={<Home/>}>
              {/* <Route path='photos' element={<Photos/>}/> */}
              <Route path='upload' element={<UploadPhoto/>}/>
              <Route path='cctnspage' element={<Cctnspage/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='singup' element={<Singup/>}/>
              <Route path='picpage' element={<PicPage/>}/>
              <Route path='cctns' element={<CctnsOffice/>}/>
              <Route path='hello' element={<p>jehakdjfk <Outlet/></p>}>
                <Route path='hello' element={<p> helllo2</p>}/>
              </Route>
            </Route>
          </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
