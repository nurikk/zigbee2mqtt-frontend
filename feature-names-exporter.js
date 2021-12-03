const { devices } = require('zigbee-herdsman-converters');
const fs = require('fs');
const camelCase = require("lodash/camelCase");
const startCase = require("lodash/startCase");


let featureDescriptions = {};
let featureNames = {};

const exportDescriptions = ({ features = [], description, name }) => {
    featureNames[name] = startCase(camelCase(name));
    featureDescriptions[description] = description;
    features.forEach(exportDescriptions)
}

devices.forEach(device => {
    exportDescriptions({ features: device.exposes })
})
const enTranslationFile = './src/i18n/locales/en.json';
const enTranslations = require(enTranslationFile);
enTranslations.featureDescriptions = featureDescriptions;
enTranslations.featureNames = featureNames;




fs.writeFileSync(enTranslationFile, JSON.stringify(enTranslations, null, 4));