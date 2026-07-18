export default {
    name: "careerItem",
    title: "Job listing",
    type: "object",

    fields: [
        {
            name: "title",
            title: "Job title",
            description: "Title for the job",
            type: "string",
        },
        {
            name: "location",
            title: "Job location",
            description: "The location for the job",
            type: "string",
        },
        {
            name: "hours",
            title: "Job hours",
            description: "Amount of hours for the job",
            type: "string",
        },
        {
            name: "url",
            title: "Job application link",
            description: "Link to apply for the job",
            type: "string",
        },
    ],
}
