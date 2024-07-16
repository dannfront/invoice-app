import axios from 'axios'

const axiosOptions = {
    withCredentials: true
}

const url=import.meta.env.VITE_IS_PROD==="false"?import.meta.env.VITE_URL_SERVER_LOCAL:import.meta.env.VITE_URL_SERVER_PRODUCTION

export async function getUserAuth() {
    try {
        const user = await axios.get(`${url}/get/userAuth`, axiosOptions)

        return user.data.user._id;
    } catch (error) {
        console.log(error);
    }
}

export async function getInvoices() {
    const res = await axios.get(`${url}/get/invoices`, axiosOptions)
    return res
}


export async function singIn(data, type = false) {
    try {
        let res
        if (!type) {
            res = await axios.post(`${url}/login`, data, axiosOptions)
            
        }else{
            res = await axios.post(`${url}/register`, data, axiosOptions)
        }
        
        return {status:res.data.status === "succes"}


    } catch (error) {
        console.error(error.response);
        return {status:false,message:error.response.data.message}

    }
}


export async function setPaidInvoice(invoice) {
    const { _id } = invoice
    try {
        invoice.status = "paid"
        await axios.patch(`${url}/update/invoice/${_id}`, invoice, axiosOptions)

    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function deleteInvoice(id) {
    try {
        await axios.delete(`${url}/delete/invoice/${id}`, axiosOptions)

    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function updateEditInvoice({ newData: data, idEditOrNew: id, type }) {
    try {
        if (type === "edit") return await axios.patch(`${url}/update/invoice/${id}`, data, axiosOptions)

        await axios.post(`${url}/create/invoice/${id}`, data, axiosOptions)

    } catch (error) {
        throw error.response.data.message
    }

}