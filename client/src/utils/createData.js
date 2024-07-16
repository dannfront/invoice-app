export function createData({data, date, newItem, total, isDraft,paymentDate:paymentLimit}) {
    
    const paymentDue=new Date(date)
    paymentDue.setDate(paymentDue.getDate()+paymentLimit)

    const newData = {
        createdAt: date,
        paymentDue,
        description: data.description,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        status: data.status,
        senderAddress: {
            street: data.street,
            city: data.city,
            postCode: data.postCode,
            country: data.country
        },
        clientAddress: {
            street: data.streetClient,
            city: data.cityClient,
            postCode: data.postCodeClient,
            country: data.countryClient
        },
        items: newItem,
        total
    }

    if (!(newData.status === "paid")) newData.status = isDraft === "draft" ? "draft" : "pending"

    return newData
}