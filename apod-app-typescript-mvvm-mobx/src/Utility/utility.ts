export function dateToString(date: Date) {
    return date.toJSON().slice(0, 10)
}