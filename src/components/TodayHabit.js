import { useEffect, useContext } from "react"
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios"
import { URL } from "../constants/urls";

export default function TodayHabit({ todayHabits, done, setDone }) {

    const { progress, setProgress } = useContext(Context);
    const { config } = useContext(Context);
    

    // function doneHabit(id) {
    //     setDone(!done);
    //     setProgress(progress + 100 / todayHabits.length);
    //     console.log(progress)
    //     CheckHabit(id);
    // }

    // console.log(todayHabits.done)

    // function CheckHabit() {
    //     useEffect(() => {

    //         const promise = axios.post(`${URL}/habits/${todayHabits.id}/check`, {}, config)

    //         promise.then((res) => {
    //             console.log(res.data)
    //         })
            
    //     }, [done])
    // }

    return (
        <Container>
            <div>
                <h1>{todayHabits.name}</h1>
                <Span1>Sequência atual: </Span1><Span2 done={done}>{todayHabits.currentSequence} dias</Span2>
                <br></br>
                <Span1>Seu recorde: </Span1><Span3 done={done} highest={todayHabits.highestSequence} current={todayHabits.currentSequence}>{todayHabits.highestSequence} dias</Span3>
            </div>
            <Checkbox>
                <ion-icon onClick={()=>doneHabit(todayHabits.id)} done={todayHabits.done} name="checkbox"></ion-icon> 
            </Checkbox>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3px 3px 3px 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

    h1 {
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        padding: 0 0 7px 0;
    }
`

const Checkbox = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;

    ion-icon {
        width: 90px;
        height: 90px;
        color: ${(props) => (props.done === true ? "#8FC549" : "#EBEBEB" )};
        cursor: pointer;
    }
`

const Span1 = styled.span`
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
`

const Span2 = styled.span`
        font-size: 12.976px;
        line-height: 16px;
        color: ${(props) => (props.done === true ? "#8FC549" : "#666666" )};
`

const Span3 = styled.span`
        font-size: 12.976px;
        line-height: 16px;
        color: ${(props) => ((props.done === true && props.current === props.highest) ? "#8FC549" : "#666666" )};
`