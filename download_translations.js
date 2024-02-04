const fs = require('fs').promises;

async function getAvaliableLanguages(project_id, api_token) {
    const body = new FormData();
    body.set("api_token", api_token);
    body.set("id", project_id);

    const resp = await fetch('https://api.poeditor.com/v2/languages/list', {
        method: 'POST',
        body
    })
    const languages = await resp.json();
    return languages.result.languages.map(lang => ({ code: lang.code, name: lang.name }));
}

async function downloadLanguage(project_id, api_token, language) {
    console.log(`Downloading ${language.name} ${language.code}`);
    const body = new FormData();
    body.set("api_token", api_token);
    body.set("id", project_id);
    body.set("language", language.code);
    body.set("type", "i18next");

    const resp = await fetch('https://api.poeditor.com/v2/projects/export', {
        method: 'POST',
        body
    })
    const exportResult = await resp.json();
    const languageRes = await fetch(exportResult.result.url);
    const languageData = await languageRes.json();
    return languageData;
}

const locale2fileMap = {
    'uk': 'en',
    'pt-br': 'ptbr',
    'zh-Hans': 'chs',
    'zh-TW': 'zh'

}
async function main(project_id, api_token) {
    const locales = await getAvaliableLanguages(project_id, api_token);

    for (const locale of locales) {
        const exported = await downloadLanguage(project_id, api_token, locale);
        const fileName = locale2fileMap[locale.code] || locale.code;
        await fs.writeFile(`./src/i18n/locales/${fileName}.json`, JSON.stringify(exported, null, 2));
    }
}

const { POEDITOR_PROJECT_ID, POEDITOR_API_TOKEN } = process.env;
main(POEDITOR_PROJECT_ID, POEDITOR_API_TOKEN);