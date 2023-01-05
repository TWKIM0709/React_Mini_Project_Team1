import { useParams } from "react-router-dom";


function Jae1({movies}){
    let {id} = useParams();

    let findId = movies.find((item)=>item.id == id);

    console.log(id);
    console.log(movies)
    // console.log(findId.id);
    // console.log(findId);

    return(
        <div className="container">
            <div className="row" >
                <div className="col-md-6" style={{margin:'0 auto'}}>
                    <img src={findId.image} width="100%"/>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Jae1;