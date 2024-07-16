import { useForm } from 'react-hook-form';
import ButtonAuth from './ButtonAuth';
import ErrorsForm from './ErrorsForm';
import MessagueAuth from './MessagueAuth';
import { singIn } from '../utils/invoicesQuery';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"


function FormLogin({ type }) {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const isRegsiter = type === "register";
    const navigate = useNavigate()

    async function onSubmit(data) {
        if (isRegsiter) {
            const dataResponse = await singIn(data, type)
            dataResponse?.status ? navigate('/') : toast.error(dataResponse.message)
            return
        }

        const dataResponse=await singIn(data)
        dataResponse?.status ? navigate('/') : toast.error(dataResponse.message)
    }

    return (
        <>
            <form className='flex flex-col gap-10 mb-5' onSubmit={handleSubmit(onSubmit)}>

                <div className='relative'>
                    <input id='email' placeholder='email' type="text" className='w-full border-b border-color-5' {...register("email", { required: "Email is required", validate: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "It must be a valid email" })} />
                    {errors?.email && <ErrorsForm messague={errors.email.message} />}
                </div>

                <div className='relative'>

                    <input id='password' placeholder='password' type="password" className='w-full border-b border-color-5' {...register("password", { required: "password is required" })} />
                    {errors?.password && <ErrorsForm messague={errors.password.message} />}

                </div>

                {isRegsiter &&
                    <div className='relative'>

                        <input type="password" placeholder='confirm password' className='w-full border-b border-color-5' {...register("confirmPassword", { required: "required field", validate: (value) => value === getValues().password || "Passwords must match" })} />
                        {errors?.confirmPassword && <ErrorsForm messague={errors.confirmPassword.message} />}

                    </div>}

                <ButtonAuth type='submit' >
                    {isRegsiter ? "Create an account" : "Login to your account"}
                </ButtonAuth>

            </form>

            <MessagueAuth type={isRegsiter ? "Login" : "Register"}>
                {isRegsiter ? "Already have an account?" : "Don’t have an account?"}
            </MessagueAuth>
        </>
    )
}

export default FormLogin
