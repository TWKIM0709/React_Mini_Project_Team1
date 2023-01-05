import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Da1(){
    let navigator = useNavigate();
    return (
        <div className="Movie-list">
            <h1>AVATAR: The Way of Water</h1>
            <img className="movie-list-img" src="http://img.movist.com/?img=/x00/05/68/20_p1.jpg" alt="avatar"  width="250px" height="320px"/><br></br>
           <Button onClick={()=>navigator('/da1_detail')}>상세보기</Button>
        </div>
    )
}

export default Da1;