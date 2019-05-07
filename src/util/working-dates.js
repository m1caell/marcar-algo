import moment from 'moment'

export function getDateFormated(date) {
    return moment(date).format('DD/MM/YYYY')
}