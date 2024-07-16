import { useNavigate } from "react-router-dom"

function ButtonBack({ handler }) {
    const navigate = useNavigate()
    function onClick() {
        if (!handler) return navigate(-1)
        handler()
    }
    return (
        <button onClick={onClick} className="flex items-center gap-5 mt-10 dark:text-color-12">
            <img src="/images/icon-arrow-left.svg" alt="arrow left" />
            Go Back
        </button>
    )
}

export default ButtonBack
