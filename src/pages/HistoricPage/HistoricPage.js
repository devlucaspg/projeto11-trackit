import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import Header from "../../assets/styles/Header"
import { BACKGROUND_COLOR } from "../../constants/colors"

export default function HistoricPage() {
    return (
        <Container>
            <NavBar />
            <Header>
                <h1>Histórico</h1>
            </Header>
            HistoricPage
            <Footer /> 
        </Container>
    )
}

const Container = styled.div`
    background-color: ${BACKGROUND_COLOR};
    height: 100vh;
    margin: 70px 0;
    padding: 0 18px;
`