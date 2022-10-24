import { Link } from "react-router-dom";
import styled from "styled-components"
import { SECONDARY_COLOR } from "../constants/colors"
import Circle from "./Circle";

export default function Footer() {

    return (
        <Container>
            <div>
                <Link to={`/habitos`}>Hábitos</Link>
            </div>
            <Circle/>
            <div>
                <Link to={`/historico`}>Histórico</Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    background-color: #FFFFFF;
    z-index: 2;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 12% 0 12%;

    a {
        color: ${SECONDARY_COLOR};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }
`

