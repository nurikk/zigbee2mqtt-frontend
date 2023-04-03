const { devices } = require('zigbee-herdsman-converters');
const settingsSchema = require('../zigbee2mqtt/lib/util/settings.schema.json');
const fs = require('fs');
const camelCase = require('lodash/camelCase');
const startCase = require('lodash/startCase');

let featureDescriptions = {};
let featureNames = {};

const exportDescriptions = ({ features = [], description, name }) => {
    featureNames[name] = startCase(camelCase(name));
    featureDescriptions[description] = description;
    if (Array.isArray(features)) {
        features.forEach(exportDescriptions);
    } else {
        features().forEach(exportDescriptions);
    }
};

devices.forEach((device) => {
    exportDescriptions({ features: device.exposes });
});
const enTranslationFile = './src/i18n/locales/en.json';
const enTranslations = require(enTranslationFile);
enTranslations.featureDescriptions = featureDescriptions;
enTranslations.featureNames = featureNames;

let settingsSchemaDescriptions = {};
let settingsSchemaTitles = {};
const isObject = (value) => value !== null && typeof value === 'object';

const exportSettingsSchemaDescriptions = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (isObject(value)) {
            exportSettingsSchemaDescriptions(value);
        } else if (key === 'description') {
            settingsSchemaDescriptions[value] = value;
        } else if (key === 'title') {
            settingsSchemaTitles[value] = value;
        }
    });
};

exportSettingsSchemaDescriptions(settingsSchema);

enTranslations.settingsSchemaDescriptions = settingsSchemaDescriptions;
enTranslations.settingsSchemaTitles = settingsSchemaTitles;

fs.writeFileSync(enTranslationFile, JSON.stringify(enTranslations, null, 4));
