import { Carousel, Col, Container, Row } from "react-bootstrap";

function Da2_detail(){
    
    return (
        <div className="movie-detail">
           <h1>WHIPLASH</h1>
           <Container>
                <Row>
            <Carousel  style={{margin:'0 auto', width: 1000, height: 650, overflow:"hidden"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.kakaocdn.net/dn/3U9fF/btq4H8Nkfug/Q4WITTrqEpKyZFaDPcK2uk/img.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.mc-plus.net/news/photo/201604/2242_8664_197.png"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.cine21.com/resize/cine21/still/2020/1012/42739_5f8427d07840d[S750,750].jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
            <p>
            뉴욕의 명문 셰이퍼 음악학교에서 최고의 스튜디오 밴드에 들어가게 된 신입생 '앤드류' 최고의 지휘자이지만 동시에 최악의 폭군인 '플레쳐'교수는 폭언과 학대로 '앤드류'를 한계까지 몰아붙이고 또 몰아붙인다. <br></br>
            드럼 주위로 뚝뚝 떨어지는 피, 빠르게 달리는 선율 뒤로 아득해지는 의식, 그 순간, 드럼에 대한 앤드류의 집착과 광기가 폭발한다. <br></br>
            최고의 연주를 위한 완벽한 스윙이 시작된다!
            </p>

            <div className="Producer">
            <h3>감독</h3> <br></br>
            <Col>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMTVfMjE5%2FMDAxNTM5NjEyOTIxNTg0.0NJ1A5OyQVBcBQ4HGgKjZlc2TexbTvvnHcLxvmvSOusg.icTCMWeB8ZTR_IdKhBFBj7ffrPveCZdrP909CfNvG50g.JPEG.chlrkdfhem1%2FMV5BMjE2MzcyODA3MV5BMl5BanBnXkFtZTgwNTA3NTU2MjE._V1_.jpg&type=sc960_832" alt="producer"/> <br></br>
            <p>Damien Chazelle</p>
            </Col>
            </div>


            <div className="Actors">
            <h3>출연진</h3> <br></br>
            <Row>
            <Col>
            <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fad%2Fda%2Fae%2Faddaae9a99125de301efb0c58cbfc9c9.jpg&type=sc960_832" alt="actor" /> <br></br>
            <p>Miles Teller</p>
            </Col>
            <Col>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjZfMzEg%2FMDAxNjI3MzExMDM1NzQ1.PFwxVoBuCb_Qqs8QhQD-YEgI8J00GLoVIanHLIuwikwg.IOOecybbyRLK-TDPOtXhxWVnGaNlGn1lYygq8xZZSMog.JPEG.moonehf%2FJ.K._Simmons-522.jpg&type=sc960_832" alt="actor" /> <br></br>
            <p>J.K. Simmons</p>
            </Col>
            <Col>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTBfMjI5%2FMDAxNjYwMDg2MjAzNTI4.U3b4qZToeQi19TBSduHek6zLigOsNeLIPxXRoYKLM2wg.9J1nkI_O0yqeQQNfwgSHM5dKHYiihnJNoDxuVmbE8p0g.JPEG.haehjvng74%2Fgn8ENLGbMrwQOhcwyDFR9LQHnnY.jpg&type=sc960_832" alt="actor" /> <br></br>
            <p>Melissa Benoist</p>
            </Col>
            </Row>
            </div>




        </div>
    )
}

export default Da2_detail;