import React from "react" ;
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";



const Menus = () => {
return (
    <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
            Home
        </Link>

        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
            Add Course
        </Link>
   
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>
            View courses
        </Link>
   
        <Link className="list-group-item list-group-item-action" tag="a" to="/Academic-Calander" action>
        AcademicCalander
        </Link>
   
        <Link className="list-group-item list-group-item-action" tag="a" to="/contact-us" action>
            Contact us
        </Link>

    </ListGroup>
);

};
export default Menus ;