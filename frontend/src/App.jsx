// import {BroserRouter, Routes, Route} from 'react'
// import Home from './pages/Home'
// import About from './pages/About'
// import Profile from './pages/Profile'
// import SignIn from './pages/SignIn'
// import  SignUp  from './pages/SignUp'

// export default function App() {
//   return( <BroserRouter>
//   <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/sign-in" element={<SignIn/>}/>
//     <Route path="/sign-up" element={<SignUp/>}/>
//     <Route path="/profile" element={<Profile/>}/>
//     <Route path="/about" element={<About/>}/>

//   </Routes>
//   </BroserRouter>);
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Headers from './componets/Headers';
import PrivateRoute from './componets/PrivateRoute';
import CreateListing from './pages/CreateListing';

 const App= () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-listing' element={<CreateListing />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
