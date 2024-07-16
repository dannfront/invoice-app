function InputsForm({children,idFor,label,className}) {
    return (
        <div className={className}>
            {label&&<label htmlFor={idFor} className="text-color-7 dark:text-color-6">{label}</label>}
            {children}
        </div>
    )
}

export default InputsForm
