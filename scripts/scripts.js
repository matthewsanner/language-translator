const inputText = document.getElementById("input-text");
const inputLanguage = document.getElementById("input-language");
const outputText = document.getElementById("output-text");
const outputLanguage = document.getElementById("output-language");
const translateButton = document.getElementById("translate-button");

translateButton.addEventListener("click", async () => {
    const input = inputText.value;
    let inputLang = inputLanguage.value;
    const outputLang = outputLanguage.value;

    if (inputLang === 'auto') {
        inputLang = await detectLanguage(input);
    }

    const output = await translateText(input, inputLang, outputLang);
    outputText.value = output;
});

function copyText() {
    // Select text area by id
    let text = document.getElementById("output-text");

    // Select the text inside text area
    text.select();

    // Copy selected text into clipboard
    navigator.clipboard.writeText(text.value);
}