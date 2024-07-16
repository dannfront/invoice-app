import FormLogin from "../components/FormLogin"
import MainAuth from "../components/MainAuth"
import TitleAuth from "../components/TitleAuth"


function Login() {
    return (
        <MainAuth>
            <TitleAuth>Login</TitleAuth>
            <FormLogin />
        </MainAuth>
    )
}

export default Login
