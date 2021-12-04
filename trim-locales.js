
var diff = require('deep-diff')
const _ = require('lodash');
const fs = require('fs')

const enTranslationFile = './src/i18n/locales/en.json';
const enTranslations = require(enTranslationFile);

const ignoredFiles = ['localeNames.json', 'en.json'];
const localesDir = './src/i18n/locales'
const files = [];
const dir = fs.opendirSync(localesDir)
let dirent
while ((dirent = dir.readSync()) !== null) {
    console.log(dirent.name)
    if (!ignoredFiles.includes(dirent.name)) {
        files.push(dirent.name)
    }
}
dir.closeSync()






for (const file of files) {
    const localeFileName = `./src/i18n/locales/${file}`;
    const translations = require(localeFileName);
    const diffR = diff(enTranslations, translations)

    const newTranslation = {};
    diffR.forEach(d => {
        switch (d.kind) {
            case 'E':
                _.set(newTranslation, d.path, d.rhs);
                break;
        }

    })
    fs.writeFileSync(localeFileName, JSON.stringify(newTranslation, null, 4));
}
// console.log(files)



// const isObject = (value) => value !== null && typeof value === 'object'

// const exportSettingsSchemaDescriptions = (obj) => {
//     Object.entries(obj).forEach(([key, value]) => {

//         if (isObject(value)) {
//             exportSettingsSchemaDescriptions(value)
//         } else if (key === 'description') {
//             settingsSchemaDescriptions[value] = value;
//         } else if (key === 'title') {
//             settingsSchemaTitles[value] = value;
//         }
//     })
// }

// exportSettingsSchemaDescriptions(settingsSchema)


// enTranslations.settingsSchemaDescriptions = settingsSchemaDescriptions;
// enTranslations.settingsSchemaTitles = settingsSchemaTitles;


// fs.writeFileSync(enTranslationFile, JSON.stringify(enTranslations, null, 4));