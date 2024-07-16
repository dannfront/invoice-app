import useDeleteInvoices from "../hooks/useDeleteInvoices"
import ButtonsEdit from "./ButtonsEdit"

function ConfirmDelation({ invoice, setState }) {
    const { _id } = invoice
    const mutate = useDeleteInvoices()
    return (
        <div className="overlay-delete">
            <section className="bg-color-12 w-[90%] p-5 rounded-lg md:w-[480px] dark:bg-color-3">
                <h1 className="font-bold text-2xl dark:text-color-12">Confirm Deletion</h1>
                <p className="text-color-6">
                    Are you sure you want to delete invoice #{_id.slice(0, 5)} This action cannot be undone.
                </p>
                <div className="flex justify-end items-center gap-5 mt-5">
                    <ButtonsEdit onClick={() => setState(false)} type='draft'>
                        cancel
                    </ButtonsEdit>
                    <ButtonsEdit onClick={() => mutate.mutate(_id)} type='delete'>
                        delete
                    </ButtonsEdit>
                </div>
            </section>
        </div>
    )
}

export default ConfirmDelation
