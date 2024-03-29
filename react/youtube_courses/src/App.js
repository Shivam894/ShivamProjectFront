import logo from './logo.svg';
import './App.css';
import React from "react";
import {Button, Container,Row,Col } from "reactstrap" ;
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home" ;
import Course from "./components/Course" ;
import Allcourses from "./components/Allcourses" ;
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Footer from './components/Footer';
import AcademicCalander from './components/AcademicCalander';

import Menus from './components/Menu';
import {BrowserRouter as Router,Route} from "react-router-dom";




function App() {
const btnHandle =() => {
  toast.error("done" , {
    position: "top-center",
  });
};

  return (
    <div> 

      <Router>
<ToastContainer />
  
  <Container>

<Header />


    <Row>
      <Col md={4}>
<Menus />
    
      </Col>
      <Col md={8}>
    <Route path="/" component={Home} exact />
    <Route path="/add-course" component={AddCourse} exact />
    <Route path="/view-courses" component={Allcourses} exact />
    <Route path="/Academic-Calander" component={AcademicCalander} exact />





      </Col>
    </Row>


  </Container>


  </Router>

  <Footer />


         </div>

  );
}

export default App;
