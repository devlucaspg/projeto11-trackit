import styled from "styled-components"
import { BASE_COLOR } from "../constants/colors"
import foto from "../assets/images/profile-picture.png"

export default function NavBar() {
    return (
        <Container>
            <h6>TrackIt</h6>
            <img src={foto} alt="Foto de perfil"></img>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    background-color: ${BASE_COLOR};
    padding: 10px 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    
    h6{
        font-family: 'Playball', cursive;
        color: #ffffff;
        font-size: 38.982px;
        line-height: 49px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`