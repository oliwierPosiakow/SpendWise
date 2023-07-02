import {getFormattedDate} from "../util/date";

export const dummy = [
    {
        id: 1,
        amount: 12.49,
        desc: 'McDonalds',
        date: getFormattedDate(new Date('2021-12-22')).toString()
    },
    {
        id: 2,
        amount: 105.49,
        desc: 'Koszulka Nike',
        date: getFormattedDate(new Date('2021-12-25')).toString()
    },
    {
        id: 3,
        amount: 5.49,
        desc: 'Coca-Cola',
        date: getFormattedDate(new Date('2021-12-25')).toString()
    },
    {
        id: 4,
        amount: 35.49,
        desc: 'Obiad',
        date: getFormattedDate(new Date('2022-01-17')).toString()
    },
]