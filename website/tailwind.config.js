module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
            fontFamily: {
                heading: "Changa",
                body: "Poppins",
            },
            colors: {
                franggo: {
                    orange: "#F37524",
                    green: "#73C95E",
                    blue: "#284193",
                },
            },
            maxWidth: {
                page: "1400px",
                rt: "800px",
            },
            gridTemplateColumns: {
                auto1fr: "auto 1fr",
                onefrauto: "1fr auto",
            },
            gridTemplateRows: {
                auto1fr: "auto 1fr",
                onefrauto: "1fr auto",
            },
            transition: {
                normal: "all 0.2s ease",
            },
        },
    },
    plugins: [],
}
