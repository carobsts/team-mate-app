export function getStyle(idx: number, elements: any[]) {
    return idx !== (elements.length-1) 
    ? { marginBottom: 10 } : { marginBottom: 0 }
};