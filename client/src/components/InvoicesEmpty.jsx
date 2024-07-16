function InvoicesEmpty() {
    return (
        <div className="mx-auto w-[300px] text-center">
            <img className="w-[500px]" src="./images/illustration-empty.svg" alt="illustration-empty" />
            <h1 className="font-bold text-3xl mt-10 dark:text-color-12">There is nothing here</h1>
            <h2 className="dark:text-color-12" >Create an invoice by clicking the
                New button and get started</h2>
        </div>
    )
}

export default InvoicesEmpty
