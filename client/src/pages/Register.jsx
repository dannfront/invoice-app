import FormLogin from "../components/FormLogin"
import MainAuth from "../components/MainAuth"
import TitleAuth from "../components/TitleAuth"

function Register() {
    return (
        <MainAuth>
            <TitleAuth>Register</TitleAuth>
            <FormLogin type="register" />
        </MainAuth>
    )
}

export default Register
