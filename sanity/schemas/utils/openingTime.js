export default {
    name: "openingTime",
    title: "Opening time",
    type: "object",

    fields: [
        {
            name: "days",
            title: "Days",
            description: "Days, e.g.: 'Ma - Woe'",
            type: "string",
        },
        {
            name: "time",
            title: "Time",
            description: "Time that the restaurant is open, e.g.: '17:00 - 22:00'",
            type: "string",
        },
    ],
}
