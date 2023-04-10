import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ShowClassList from './components/ShowClassList';
import ShowBookingDetails from './components/ShowBookingDetails';
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
          <Route path='/show-yoga_class/:id' element={<ShowBookingDetails />} />
          <Route path='/showClassList' element={<ShowClassList/>} />

        <Route path='/book-yoga_class/:id' element={<BookYogaClass />} />
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
