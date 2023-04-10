import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import CreateClass from './components/CreateClass';
import ShowClassList from './components/ShowClassList';
import ShowBookingDetails from './components/ShowBookingDetails';
// import UpdateClassInfo from './components/UpdateClassInfo';
// import Login from "./components/LoginPage";
// import Register from "./components/RegisterPage";
// import AuthContext from './components/AuthContext';
// import CreateBooking from "./components/CreateBooking";
import ClassBookings from "./components/ShowClassBookings";
import About from './components/About';
import ContactUs from './components/Contact';
import HomeScreen from './components/HomeScreen';
import Teachers from './components/Teachers';

import BookYogaClass from './components/BookYogaClass';
import Confirm from './components/Confirm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          {/* <Route path='/create-yoga_class' element={<CreateClass />} />
          <Route path='/edit-yoga_class/:id' element={<UpdateClassInfo />} /> */}
          <Route path='/show-yoga_class/:id' element={<ShowBookingDetails />} />
          <Route path='/showClassList' element={<ShowClassList/>} />

        <Route path='/book-yoga_class/:id' element={<BookYogaClass />} />


          {/* <Route path='/createClass' element={<CreateClass />} />
          <Route path='/updateClass' element={<UpdateClassInfo />} /> */}
          {/* <Route path='/showClassDetails' element={<ShowClassDetails />} /> */}
          {/* <Route path='/showClassList' element={<ShowClassList/>} /> */}

          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}

          {/* <Route path='/createBooking' element={<CreateBooking/>}/> */}
          {/* <Route path='/showBookings' element={<ClassBookings/>}/> */}

          {/* <Route path='/auth' element={<AuthContext/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/teachers' element={<Teachers/>}/>

          <Route path='/confirm/:id' element={<Confirm />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
