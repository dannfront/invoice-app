import ButtonsEdit from "./ButtonsEdit"

function FooterForm({ setState, onSubmit, type,isDraft}) {
    return (
        <footer className='bg-color-12 p-5 mt-5 shadow-custom flex justify-between gap-5 items-center dark:bg-color-4'>

            <ButtonsEdit onClick={() => setState(false)} type="cancel">Cancel</ButtonsEdit>
            <div className="flex items-center gap-2">
                {type!=="edit"&&<ButtonsEdit onClick={()=>onSubmit(isDraft)} type="draft">Save a Draft</ButtonsEdit>}
                <ButtonsEdit onClick={onSubmit} type="paid">Save Changes</ButtonsEdit>
            </div>
        </footer>
    )
}

export default FooterForm
