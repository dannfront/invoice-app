export function baseColor(status) {
    const base = {
        paid: 'paid',
        draft: 'draft',
        pending: 'pending',
    }[status]

    return {
        bgColorDot: `background-dot-${base} ${status==="draft"?"dark:bg-color-5":""}`,
        bgColor: `bg-${base}`,
        textColor: `tx-${base}`,
    }
    
}
