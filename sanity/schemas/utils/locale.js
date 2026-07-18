// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'nl', title: 'Dutch' },
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeString = {
    title: 'Localized string',
    name: '_localeString',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        fieldset: lang.isDefault ? null : 'translations'
    }))
}

export const localeText = {
    title: 'Localized text',
    name: '_localeText',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'text',
        fieldset: lang.isDefault ? null : 'translations'
    }))
}

export const localeRichText = {
    title: 'Localized rich text',
    name: '_localeRichText',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "portableText",
        fieldset: lang.isDefault ? null : 'translations'
    }))
}
