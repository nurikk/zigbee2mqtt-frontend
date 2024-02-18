var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

function isPlainObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
}

function deepMerge(target, source) {
    // Ensure both the target and source are plain objects
    if (!isPlainObject(target) || !isPlainObject(source)) {
        throw new Error('Both target and source must be plain objects');
    }

    Object.keys(source).forEach((key) => {
        const sourceValue = source[key];
        const targetValue = target[key];

        // If both the current value in the source and the target are plain objects, merge them
        if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
            target[key] = deepMerge({ ...targetValue }, sourceValue);
        } else {
            // Otherwise, directly set the value from the source into the target
            target[key] = sourceValue;
        }
    });

    return target;
}

function addKeysToJSONFile(filePath, newKeys) {
    // Check if the file exists
    let data = {};
    if (fs.existsSync(filePath)) {
        // Read the file (assuming utf-8 encoding)
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Parse the JSON content of the file
        data = JSON.parse(fileContent);
    }

    data = deepMerge(data, newKeys);
    // Convert the modified object back to a JSON string
    const jsonContent = JSON.stringify(data, null, 2);

    // Write the JSON string back to the file
    fs.writeFileSync(filePath, jsonContent, 'utf8');
}

function i18next() {
    return {
        name: 'i18next',
        configureServer(server) {
            server.middlewares.use('/locales/add/', bodyParser.json());
            server.middlewares.use('/locales/add/', (req, res) => {
                // /en/devConsole => [ '', 'en', 'devConsole' ]
                const urlParts = req.url.split('/');
                const lang = urlParts[1];
                const namespace = urlParts[2];

                const filePath = path.join(__dirname, `./src/i18n/locales/${lang}.missing.json`);
                addKeysToJSONFile(filePath, { [namespace]: req.body });

                res.end('OK');
            });
        },
    };
}

module.exports = i18next;
