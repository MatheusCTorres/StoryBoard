import {
    Container,
    Wrapper,
    Left,
    Right,
    Image,
  } from "./MainElements";

import { Link } from "react-router-dom";
import './Btn.css';
import '/.ImageAnimation.css';

const wd = {
    width: '200px',
}

function Main(){
    return(
        <main>
            <Container>
                <Wrapper>
                    <Left>
                        <h1>Storyboad do Aluno</h1>
                        <h5>Bem Vindo</h5>
                        <p>Aqui tu podes visualizar a sua tragetória</p>
                    </Left>
                    <Right>
                        <Image src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
                        alt="svg" className="bounce-1"/>
                    </Right>
                </Wrapper>
                <Link to="/login" style={wd}>
                    <span><a></a></span>
                </Link>
            </Container>
        </main>
    )
}

export default Main;