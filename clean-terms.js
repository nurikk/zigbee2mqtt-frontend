const { getTerms, deleteTerms } = require('./poeditor');

async function main(project_id, api_token) {
    const enTranslationFile = './src/i18n/locales/en.json';
    const enTranslations = require(enTranslationFile);

    const terms = await getTerms(project_id, api_token, 'en');
    const cleanableContexts = [
        '"featureDescriptions"',
        '"featureNames"',
        '"settingsSchemaDescriptions"',
        '"settingsSchemaTitles"',
    ];
    const cleanableTerms = terms.filter((term) => cleanableContexts.includes(term.context));

    const termsToClean = cleanableTerms.filter((term) => !enTranslations[JSON.parse(term.context)][term.term]);

    console.log(`cleanableTerms ${cleanableTerms.length}, termsToClean ${termsToClean.length}`);
    const deletionResults = await deleteTerms(project_id, api_token, termsToClean);
    console.log(deletionResults);
}

const { POEDITOR_PROJECT_ID, POEDITOR_API_TOKEN } = process.env;
main(POEDITOR_PROJECT_ID, POEDITOR_API_TOKEN);
