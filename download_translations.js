const { getAvaliableLanguages, downloadLanguage } = require('./poeditor');
const fs = require('fs').promises;

const locale2fileMap = {
    uk: 'ua',
    'pt-br': 'ptbr',
    'zh-Hans': 'chs',
    'zh-TW': 'zh',
};
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
