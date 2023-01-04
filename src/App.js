import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Da1 from './Component/Da1';
import Da2 from './Component/Da2';
import Jae1 from './Component/Jae1';
import Jae2 from './Component/Jae2';
import Tae1 from './Component/Tae1';
import Tae2 from './Component/Tae2';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import Data from "./data";

function App() {
  console.log(Data);
  return (
    <div className="App">
    {/* 점보트론 */}
      <MainTitle/>
      
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/da1' element={<Da1/>}/>
          <Route path='/da2' element={<Da2/>}/>
          <Route path='/jae1/:id' element={<Jae1 movies={Data}/>}/>
          <Route path='/jae2' element={<Jae2/>}/>
          <Route path='/tae1' element={<Tae1/>}/>
          <Route path='/tae2' element={<Tae2/>}/>
        </Routes>
    </div>
  );
}
function Main(){
  let navigator = useNavigate();
  return(
    <Container>
      <Row>
        <Col>
          <h1 onClick={()=>navigator('/da1')}>Da1</h1>
          <h1 onClick={()=>navigator('/da2')}>Da2</h1>
          <h1 onClick={()=>navigator('/jae1')}>Jae1</h1>
          <h1 onClick={()=>navigator('/jae2')}>Jae2</h1>
          <h1 onClick={()=>navigator('/tae1')}>Tae1</h1>
          <h1 onClick={()=>navigator('/tae2')}>Tae2</h1>
        </Col>
      </Row>
    </Container>
  )
}

function MainTitle(){
  return <div className="jumbotron">
                <img src='http://newsroom.etomato.com/userfiles/CGV%20X%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%EC%A3%BC%EA%B0%84%20%EB%B0%95%EC%8A%A4%EC%98%A4%ED%94%BC%EC%8A%A4%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%20%EA%B0%80%EB%A1%9C%ED%98%95.jpg' alt='Cheese' className='titleImage'/>
                  <h1 className="display-4">Cheese</h1>
                  <p className="lead">The nutritional value of cheese varies widely. Cottage cheese may consist of 4% fat and 11% protein while some whey cheeses are 15% fat and 11% protein, and triple-crème cheeses are 36% fat and 7% protein.</p>
                  <hr className="my-4"/>
                  <p>A cheeseboard (or cheese course) may be served at the end of a meal before or following dessert, or replacing the last course. </p>
                  <a className="btn btn-primary btn-lg" href="#cheeseMain" role="button">More Cheese</a>
                </div>
} //end MainTitle

export default App;
