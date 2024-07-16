import { useEffect, useRef } from 'react';
import FormEdit from './FormEdit';

function InvoiceForm({ invoice, setState, type = "new" }) {
    const refComponent = useRef(null)
    useEffect(function () {
        const  handlerClick=(e)=> e.target===refComponent.current && setState(false)

        document.addEventListener('click',handlerClick)
        return () => document.removeEventListener("click", handlerClick)

    }, [setState])
    return (
        <div ref={refComponent} className='overlay-form bg-black/[0.5] fixed lg:top-0 lg:left-[80px] lg:w-[100%] lg:h-full '>

            <div className='w-full bottom-0 top-20 right-0 bg-color-12 fixed  overflow-y-scroll lg:top-0 lg:left-[80px] lg:w-[45%] lg:h-full dark:bg-color-13'>
                <FormEdit type={type} invoice={invoice} setState={setState} />
            </div>
        </div>

    )
}

export default InvoiceForm
