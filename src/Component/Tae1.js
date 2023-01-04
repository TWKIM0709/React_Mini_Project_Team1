import { Button, Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Tae1(){
    let navigator = useNavigate();
    return(
        <div>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://w.namu.la/s/696800995534f8d24ceb590be194b42703ff74f717edddc3b12718a24ddcc68bb31579697a6297318841f7e2c96101bbe91d3243469f21546d45ff4cdcd85a9c0aeceea76bf64b1961aa89bd2a3ac13c23fe5909660e11ac33681d760dbdd6b7b3a7e61ea303f818f0ca2f46b67a4693" style={{height:'370px'}} />
                            <Card.Body>
                                <Card.Title>스파이더맨 : 노 웨이 홈</Card.Title>
                                <Card.Text>
                                2021년 12월 15일 개봉한 마블 시네마틱 유니버스의 27번째 장편 영화이자 페이즈 4의 네번째 영화.
                                그리고 마블 스튜디오 스파이더맨 시리즈의 3번째 작품이며 홈커밍 트릴로지의 마지막 작품이다.
                                </Card.Text>
                                <Button onClick={()=>navigator('/tae2')}>상세보기</Button>
                            </Card.Body>
                    </Card>
        </div>
    )
}
export default Tae1;