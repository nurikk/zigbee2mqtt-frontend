async function callApi(url, parameters) {
    const body = new FormData();
    for (const key in parameters) {
        body.set(key, parameters[key]);
    }
    const resp = await fetch(url, {
        method: 'POST',
        body,
    });
    return await resp.json();
}

async function downloadLanguage(project_id, api_token, language) {
    console.log(`Downloading ${language.name} ${language.code}`);

    const exportResult = await callApi('https://api.poeditor.com/v2/projects/export', {
        api_token,
        id: project_id,
        language: language.code,
        type: 'i18next',
    });
    const languageRes = await fetch(exportResult.result.url);
    const languageData = await languageRes.json();
    return languageData;
}

async function getAvaliableLanguages(project_id, api_token) {
    const languages = await callApi('https://api.poeditor.com/v2/languages/list', {
        api_token,
        id: project_id,
    });
    return languages.result.languages.map((lang) => ({ code: lang.code, name: lang.name }));
}

async function getTerms(project_id, api_token, language) {
    const terms = await callApi('https://api.poeditor.com/v2/terms/list', {
        api_token,
        id: project_id,
        language,
    });
    return terms.result.terms.map((term) => ({ term: term.term, context: term.context }));
}

async function deleteTerms(project_id, api_token, terms) {
    const res = await callApi('https://api.poeditor.com/v2/terms/delete', {
        api_token,
        id: project_id,
        data: JSON.stringify(terms),
    });
    return res;
}

module.exports = { downloadLanguage, getAvaliableLanguages, getTerms, deleteTerms };
