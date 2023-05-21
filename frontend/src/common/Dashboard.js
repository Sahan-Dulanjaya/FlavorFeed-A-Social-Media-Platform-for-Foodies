import Carousel from 'react-bootstrap/Carousel';
import Fotter from './Footer'
import { FaHandshake } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function UncontrolledExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/OJU9Sdc.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-success px-4 rounded-pill">   GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/m0vRERB.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>Attending networking events can provide you with many opportunities to socialize and build professional relationship</p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/kg5vqxd.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>
          Going to a party or gathering with friends can be a fun way to socialize and meet new people.
          </p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED  </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Fotter/>
    </div>
  );
}

export default UncontrolledExample;