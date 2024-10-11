import { en } from "./en.js";
import { pt_br } from "./pt-br.js";
const languageSelectInput = document.getElementById("language-select")
export const translations = {
	en: en,
	pt_br: pt_br,
};

languageSelectInput.addEventListener("change",(e)=>{
    localStorage.setItem("language",e.target.value)
    translate()
})
function getCurrentLanguage() {
	let storedLanguage = localStorage.getItem("language");
	if (!storedLanguage) {
		storedLanguage = "en";
		localStorage.setItem("language",storedLanguage);
	}
	return storedLanguage;
}
function translate(){
    const currentLanguage = getCurrentLanguage()
    console.log(translations[currentLanguage])
    translatePage(translations[currentLanguage])
    //translatePage(language[language])
}
// Function to set translations
function translatePage(languageObject) {
	const elements = document.querySelectorAll("[data-translate]");

	elements.forEach((element) => {
		const translateKey = element.getAttribute("data-translate");
		const translation = getNestedTranslation(languageObject, translateKey);

		if (translation) {
			element.textContent = translation;
		}
	});
}

// Helper function to handle nested keys (e.g., "nav.home")
function getNestedTranslation(obj, key) {
	return key.split(".").reduce((o, i) => (o ? o[i] : null), obj);
}
translate()