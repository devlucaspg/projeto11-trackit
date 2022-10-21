import styled from "styled-components"
import trash_icon from "./../assets/images/trash-icon.svg"
import { SECONDARY_COLOR } from "./../constants/colors"

export default function Habit() {
    const days = [
        { name: "D", id: 0 },
        { name: "S", id: 1 },
        { name: "T", id: 2 },
        { name: "Q", id: 3 },
        { name: "Q", id: 4 },
        { name: "S", id: 5 },
        { name: "S", id: 6 },
      ];

    return (
        <Container>
            <ContainerHabit>
                <h3>Ler 1 capitulo de livro que eu sentir vontadeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee naquele dia especifico, podendo ser qualquer um mesmo</h3>
                <img src={trash_icon} alt="Lixeira" />
            </ContainerHabit>    
            <ContainerDays>
                {days.map((day) => (
                    <Day key={day.id}>{day.name}</Day>
                ))}
            </ContainerDays>
        </Container>
    )
}

//<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

const Container = styled.div`
    background-color: #FFFFFF;
    height: 91;
    border-radius: 5px;
    padding: 18px;

    h3 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
`

const ContainerHabit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    word-break: break-word;

    img {
        width: 15px;
        margin: 0 0 0 10px;
    }
    
`

const ContainerDays = styled.div`
    display: flex;

`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    text-align: center;
    line-height: 25px;
    color: #DBDBDB;
    margin: 8px 2px;
    cursor: pointer;
`
