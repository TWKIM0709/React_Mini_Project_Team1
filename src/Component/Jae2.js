import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import Data from '../data';
import Jae1 from "./Jae1";

export let StockContext = React.createContext();

function Jae2(){

    let [movies] = useState(Data);

    return(
            <Routes>
                <Route path="/" element={
                    <div className="container">
                        <div className="row jea-title">
                            {movies.map((item, i)=>{
                                return (
                                      <Card movies={movies[i]} i={i} key={i}/>
                                )
                            })}
                        </div>
                    </div>
                }/>
            </Routes>
    )
}

function Card(props) {

    let navigate = useNavigate();
  
    return(
      <div className="col-md-6">
            <img onClick={()=>{ navigate(`/jae1/${props.movies.id}`) }}
                 src={props.movies.image} width="100%" height="100%"/>
            <h4 className="jae-title">{props.movies.title}</h4>
      </div>
    )
  }  

export default Jae2;