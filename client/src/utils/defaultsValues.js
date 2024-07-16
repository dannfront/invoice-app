export function defaultsValues(invoice) {
    const status=invoice?.status??""
    return {
        city: invoice.senderAddress.city,
        cityClient: invoice.clientAddress.city,
        clientEmail: invoice.clientEmail,
        clientName: invoice.clientName,
        country: invoice.senderAddress.country,
        countryClient: invoice.senderAddress.country,
        description: invoice.description,
        postCode: invoice.senderAddress.postCode,
        postCodeClient: invoice.clientAddress.postCode,
        street: invoice.senderAddress.street,
        streetClient: invoice.clientAddress.street,
        status
    }
}