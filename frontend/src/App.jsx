

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Headers from './componets/Headers';
import PrivateRoute from './componets/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpadateListing from './pages/UpadateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';


 const App= () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-listing' element={<CreateListing />} />
              <Route path='/update-listing/:listingId' element={<UpadateListing />}/>
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
