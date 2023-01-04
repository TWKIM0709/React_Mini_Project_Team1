import { useNavigate } from "react-router-dom";

function Da2(){
    let navigator = useNavigate();
    return (
        <div className="Movie-list">
            <h1>WHIPLASH</h1>
            <img className="movie-list-img" src="https://t1.daumcdn.net/cfile/tistory/2644383A552FE75B02" alt="whiplash" width="250px" height="320px"/> <br></br>
            <button onClick={()=>navigator('/da2_detail')}>상세보기</button>
        </div>
    )
}

export default Da2;