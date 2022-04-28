const previewSecret = 'wekjfnfweion235wefwej223590dnakaior'

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://nextjs-wearemiles.vercel.app`
const localUrl = `http://localhost:3000`

export const translateSchemaTypeToNextUrl = (document) => {
    if (!document) return "";
    switch (document._type) {
        case "home":
            return `/`
        case "newsItem":
            return `/news/${document.slug?.current}`
    }
}

export default function resolveProductionUrl(doc) {
    const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

    const previewUrl = new URL(baseUrl)

    previewUrl.pathname = `/api/preview`
    previewUrl.searchParams.append(`secret`, previewSecret)
    previewUrl.searchParams.append(`page`, translateSchemaTypeToNextUrl(doc));
    return previewUrl.toString()
}