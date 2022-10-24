import { useState, useContext } from "react"
import styled from "styled-components";
import Context from "../contexts/Context";
import axios from "axios"
import { URL } from "../constants/urls";

export default function TodayHabit({  }) {

    const { todayHabits, setTodayHabits } = useContext(Context);
    const { progress, setProgress } = useContext(Context);
    const { config } = useContext(Context);

    const [done, setDone] = useState(todayHabits.done);
    
    function VerifyHabit(todayHabits) {
        // console.log(todayHabits.done)
        console.log(todayHabits.id)
        if (todayHabits.done === false) {

            const promise = axios.post(`${URL}/habits/${todayHabits.id}/check`, {}, config)

            promise.then((res) => {
                setProgress(progress + 100 / todayHabits.length);
                setDone(!done);
                console.log(todayHabits.done)
            })
            console.log(todayHabits.done)
            promise.catch((err) => {
                alert(err.response.data.message)
                console.log(todayHabits.done)
            })
            
        }
        else {

            const promise = axios.post(`${URL}/habits/${todayHabits.id}/uncheck`, {}, config)

            promise.then((res) => {
                setProgress(progress - 100 / todayHabits.length);
                setDone(false);
                console.log(res.data)
            })

            promise.catch((err) => {
                alert(err.response.data.message)
            })
        }
    }
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
                <ion-icon onClick={()=>VerifyHabit(todayHabits)} done={todayHabits.done} name="checkbox"></ion-icon> 
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