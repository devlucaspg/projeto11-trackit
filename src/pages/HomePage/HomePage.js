import logo from "../../assets/images/logo.png"
import Form from "../../assets/styles/Form"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SECONDARY_COLOR } from "../../constants/colors"
import { useState, useContext } from "react"
import axios from "axios"
import { URL } from "../../constants/urls"
import Context from "../../contexts/Context"
import { ThreeDots } from "react-loader-spinner";


export default function HomePage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { setUserInfo, userInfo } = useContext(Context);

    const loginForm = {
        email: email,   
        password: password
    }

    function loginSubmit(e) {

        e.preventDefault()

        setLoading(true)

        const promise = axios.post(`${URL}/auth/login`, loginForm)

        promise.then((res) => {
            setUserInfo(res.data)
            setLoading(false)
            navigate("/hoje") 
        })
        
        console.log(userInfo)

        promise.catch((err) => {
            setLoading(false)
            alert(err.response.data.message)
        })
       
    }

    return (
        <Container>
            <img src={logo} alt="logo" />
            <Form onSubmit={loginSubmit} loading={loading} setLoading={setLoading}>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} disabled={loading} loading={loading} required/>
                <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} disabled={loading} loading={loading} required/>
                {loading ? (
                <Button><ThreeDots type="ThreeDots" color="#FFFFFF" height={45} width={60} /></Button>) : (
                <Button disabled={loading} type="submit">Entrar</Button>)}
                
                
            </Form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    height: 100vh;
    width: 100%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    img {
        margin: 68px 0 32px 0;
    }

    a {
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: ${SECONDARY_COLOR};
        margin: 25px 0 0 0;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
`