async function detectLanguage(input) {
    const headers = {
        "Content-Type": "application/json"
    };

    const body = JSON.stringify({
        q: input,
        api_key: ""
    });

    const response = await fetch("https://translate.argosopentech.com/detect", {
        method: "POST",
        headers: headers,
        body: body
    });

    const json = await response.json();
    return json[0].language;
}

async function translateText(input, inputLang, outputLang) {
    const headers = {
        "Content-Type": "application/json"
    };

    const body = JSON.stringify({
        q: input,
        source: inputLang,
        target: outputLang,
        format: "text",
        api_key: ""
    });

    const response = await fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        headers: headers,
        body: body
    });

    const json = await response.json();
    return json.translatedText;
}