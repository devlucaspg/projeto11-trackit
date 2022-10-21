import styled from "styled-components"
import Header from "../../assets/styles/Header"
import Footer from "../../components/Footer"
import Habit from "../../components/Habit"
import NavBar from "../../components/NavBar"
import NewHabit from "../../components/NewHabit"
import { BACKGROUND_COLOR } from "../../constants/colors"

export default function HabitsPage() {
    return (
        <Container>
            <NavBar />
            <Header>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </Header>
            <MyHabits>
                <Habit />
            </MyHabits>
            <Footer /> 
        </Container>
    )
}

const Container = styled.div`
    background-color: ${BACKGROUND_COLOR};
    height: 100vh;
    margin: 70px 0;
    padding: 0 18px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin: 29px 0;
    }
`

const MyHabits = styled.div`

`
