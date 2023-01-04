import { Carousel, Container, Row, Tab, Tabs,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../spLike";

function Tae2(){

    let dispatch = useDispatch();
    let spLike = useSelector((state)=>state.spLike);

    return(
        <div>
            <Container>
                <Row style={{marginTop:30}}>
                    <MainImage/>
                </Row>
                <Row style={{marginBottom:50, marginTop:30}}>
                    <MainContent/>
                </Row >
                <Row>
                    <Button onClick={()=>{dispatch(changeCount(1))}}>{spLike}</Button>
                </Row>
            </Container>
        </div>
    )
}

function MainImage(){
    return(
        <Carousel style={{width:'80%',margin: '0 auto'}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://p4.wallpaperbetter.com/wallpaper/763/710/546/spiderman-no-way-home-spiderverse-superhero-movies-digital-hd-wallpaper-preview.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>스파이더맨 : 노 웨이홈 1</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://p4.wallpaperbetter.com/wallpaper/59/201/135/spider-man-spider-man-no-way-home-hd-wallpaper-preview.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>스파이더맨 : 노 웨이홈 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://image.ytn.co.kr/general/jpg/2021/1220/202112200910392955_t.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>스파이더맨 : 노 웨이홈 3</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    )
}

function MainContent(){
    return(
        <div>
             <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                    <Tab eventKey="home" title="영화 소개">
                    2021년 12월 15일 개봉한 마블 시네마틱 유니버스의 27번째 장편 영화이자 페이즈 4의 네번째 영화. <br/>그리고 마블 스튜디오 스파이더맨 시리즈의 3번째 작품이며 홈커밍 트릴로지의 마지막 작품이다.
                    </Tab>
                    <Tab eventKey="profile" title="예고편">
                        <p><iframe src="https://youtu.be/W7edvITC9g4" title="스파이더맨:노 웨이 홈"></iframe></p>
                    <p>티저 예고편이 한국 시각 기준으로 2021년 8월 24일 오전 10시 40분에 공개되었는데, 공개 24시간 만에 3억 5,550만 글로벌 뷰를 기록했다.</p>

                    <p>국내 예고편의 조회수가 하루만에 230만 뷰를 찍어 인기 급상승 동영상 1위에 랭크되었다.</p>

                    <p>공개 이전에 MCU 관계자들조차 스파이더맨: 노 웨이 홈 예고편 때문에 먼저 관심을 받아야 할 샹치와 이터널스가 너무 묻힐까봐 우려한다는 루머가 나오기도 했으며, 실제로 스파이더맨: 노 웨이 홈 티저 예고편의 조회수는 공개된 지 8시간 만에 먼저 공개된 이터널스와 샹치의 예고편 조회수의 5배를 뛰어넘은 2,000만을 기록했고 하루 만에 3,700만을 돌파했고 전 세계 기준 3억 5,000만 뷰를 찍었다.</p>

                    <p>이는 어벤져스: 엔드게임을 제친 역대 영화 예고편 중 24시간 내 최다로 조회수 1위를 찍은 수치이다. 그만큼 주목도가 차원이 다르다는 점을 보여준다.</p>
                    </Tab>
                </Tabs>
        </div>
    )
}
export default Tae2;