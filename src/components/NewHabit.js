import styled from "styled-components"
import { SECONDARY_COLOR } from "./../constants/colors"

export default function NewHabit() {
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
            <form>
                <input type="text" placeholder="nome do hábito" />
                <ContainerDays>
                    {days.map((day) => (
                        <Day key={day.id}>{day.name}</Day>
                    ))}
                </ContainerDays>
                <ContainerButtons>
                    <CancelButton>Cancelar</CancelButton>
                    <SaveButton>Salvar</SaveButton>
                </ContainerButtons>
            </form>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    height: 180px;
    border-radius: 5px;
    padding: 18px;

    input {
        width: 100%;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 10px;

        ::placeholder {
            color: #DBDBDB;
            font-size: 19.976px;
        }

        :focus {
            outline: 0.1px solid #D4D4D4;
            border: 0.1px solid #D4D4D4;
        }
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

const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 22px;
`

const CancelButton = styled.button`
    font-family: 'Lexend Deca';
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: ${SECONDARY_COLOR};
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin-right: 18px;
`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: ${SECONDARY_COLOR};
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`