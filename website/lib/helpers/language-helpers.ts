export const setLanguage = async (newLanguage: string, currentLocale: string = "en") => {
    await fetch(`/api/language/${newLanguage}`, {
        method: "post"
    })

    if (window.location.pathname.includes("/" + currentLocale)) {
        window.location.pathname = window.location.pathname.replace(currentLocale, newLanguage);
    } else {
        window.location.pathname = newLanguage + window.location.pathname;
    }
}