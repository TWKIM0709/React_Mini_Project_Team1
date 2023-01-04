import { Carousel, Col, Container, Row } from "react-bootstrap";


function Da1_detail(){

    return (
        <div className="movie-detail">
            <h1>AVATAR: The Way of Water</h1>
            <Container>
                <Row>
            <Carousel  style={{margin:'0 auto', width:800, height: 1007, overflow:"hidden"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTZfMTQ0%2FMDAxNjcxMTU5NTcxMzk1.Yql8VcexHtVpuxc5ob1Z856XI0QL6LgWMbuHnEAhbwMg.bZuRhKRFvbYhPXTrAT8WxSZwkVv7tvh9Q3QURz6ENyQg.JPEG.c106507%2Fzxoijsdoi4TR3RE3TY3FE3FE1.jpg&type=sc960_832"
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
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTRfMTM0%2FMDAxNjcxMDAyNjMyOTI1.rk2sGeI-RFdTAoYLyAvGisGIcKRXTTk4oAJO5mAu5E4g.O793U88rWJr55aQTs5ROtV9xPOqS_OlKU-Mg2hdSssEg.JPEG.kjmd333%2F%25C4%25B3%25C6%25F7-%25C3%25F7%25C0%25CC%25B7%25B9%25BE%25DF.jpg&type=sc960_832"
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
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMTlfMzMg%2FMDAxNjcxNDI4MTczMzgz.gYOi3jJQIIzn2s9FLG_96VdjRkTb4RvqL0fVv_iQUhcg.1i7w7SymEm-ZRwZWuwPL50fHTp4hffTtX-uMlo1NPSYg.JPEG.wjkjk666%2F%25B9%25B0%25BE%25C6%25BA%25FC.jpg&type=sc960_832"
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
            판도라 행성에서 '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.<br></br>
            월드와이드 역대 흥행 순위 1위를 기록한 전편에 이어 제임스 카메론 감독이 13년만에 선보이는 영화로, 샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고 존 랜도가 프로듀싱을 맡았다.
            </p>

    
            <div className="Producer">
            <h3>감독</h3> <br></br>
            <Col>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131216_196%2Fitaeug_1387198251811TaAFf_JPEG%2Fcameron_a_0.jpg&type=sc960_832" alt="producer" /><br></br>
            <p>James Cameron</p>
            </Col>
            </div>

            <div className="Actors">
            <h3>출연진</h3> <br></br>
            <Row>
            <Col>
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F976950999653924865%2FpVnzE4fG.jpg&type=sc960_832" alt="actor"/> <br></br>
            <p>Zoe Saldana</p>
            </Col>
            <Col>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110519_31%2Fyuthmain_1305734657900lUE5M_JPEG%2Ffp_2197952_rij_terminator_051409.jpg&type=sc960_832" alt="actor" /> <br></br>
            <p>Sam Worthington</p>
            </Col>
            <Col>
            <img src="https://search.pstatic.net/sunny/?src=http%3A%2F%2Fstorage.enuri.info%2Fpic_upload%2Fknowbox2%2F202003%2F1141567182020032401c8b2f7-96ca-44fd-9842-4f0cee7b5bcb.jpg&type=sc960_832" alt="actor" /> <br></br>
            <p>Susan Alexandra Weaver</p>
            </Col>
            </Row>
            </div>


        </div>
    )
}

export default Da1_detail;