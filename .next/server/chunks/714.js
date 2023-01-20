"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemporalStr": () => (/* binding */ getTemporalStr)
/* harmony export */ });
/* harmony import */ var _time_zones_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/*
 * Copyright 2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
const ASK_DATE_INTENT = "AskDateIntent";
const ASK_TIME_INTENT = "AskTimeIntent";
const ASK_DAY_INTENT = "AskDayIntent";
const ASK_MONTH_INTENT = "AskMonthIntent";
let intentArg = "";
// Key entries must be lowercase
// Translations are currently handled across the app.
// What about having a single interface that declares all the translation keys?
// Then you could have one file for each language. 
// The file would contain all the words/phrases for a given language used throughout the app.
// If using TypeScript, the interface/type could enforce that all translations are populated
// for each language. And adding a new language would involve merely adding a new file.
// You wouldn't have to touch any existing code.
// For instances where there are dynamic placeholders in the middle, 
// you could put functions in the file that accept the necessary args.
const intentsMap = {
    "what's today's date": ASK_DATE_INTENT,
    "what's the date today": ASK_DATE_INTENT,
    "what date is it": ASK_DATE_INTENT,
    "what's the date": ASK_DATE_INTENT,
    "cu\xe1l es la fecha de hoy": ASK_DATE_INTENT,
    "qu\xe9 fecha es": ASK_DATE_INTENT,
    "quelle date est-il": ASK_DATE_INTENT,
    "quelle est la date d'aujourd'hui": ASK_DATE_INTENT,
    "\u4ECA\u65E5\u306F\u4F55\u65E5\u3067\u3059\u304B": ASK_DATE_INTENT,
    "\u4F55\u65E5\u3067\u3059\u304B": ASK_DATE_INTENT,
    "what is the time": ASK_TIME_INTENT,
    "what time is it": ASK_TIME_INTENT,
    "what is the current time": ASK_TIME_INTENT,
    "what is the current local time": ASK_TIME_INTENT,
    "qu\xe9 hora es": ASK_TIME_INTENT,
    "qu\xe9 hora es en este momento": ASK_TIME_INTENT,
    "quelle heure est-il": ASK_TIME_INTENT,
    "\u4ECA\u4F55\u6642\u3067\u3059\u304B": ASK_TIME_INTENT,
    "what day of the week is it": ASK_DAY_INTENT,
    "what day is it": ASK_DAY_INTENT,
    "what day is it today": ASK_DAY_INTENT,
    "cu\xe1l es el d\xeda de la semana": ASK_DAY_INTENT,
    "qu\xe9 d\xeda de la semana es": ASK_DAY_INTENT,
    "qu\xe9 d\xeda es": ASK_DAY_INTENT,
    "quel jour est-il": ASK_DAY_INTENT,
    "quelle est le jour de la semaine": ASK_DAY_INTENT,
    "quel jour de la semaine est-il": ASK_DAY_INTENT,
    "\u4ECA\u65E5\u306F\u4F55\u66DC\u65E5\u3067\u3059\u304B": ASK_DAY_INTENT,
    "\u4F55\u66DC\u65E5\u3067\u3059\u304B": ASK_DAY_INTENT,
    "what month is it": ASK_MONTH_INTENT,
    "cu\xe1l es el mes": ASK_MONTH_INTENT,
    "qu\xe9 mes es": ASK_MONTH_INTENT,
    "quelle est le mois": ASK_MONTH_INTENT,
    "quel mois est-il": ASK_MONTH_INTENT,
    "\u4ECA\u6708\u306F\u4F55\u6708\u3067\u3059\u304B": ASK_MONTH_INTENT,
    "\u4F55\u6708\u3067\u3059\u304B": ASK_MONTH_INTENT
};
function stripFinalPunctuation(str) {
    let retStr = str;
    if (str.endsWith("\u3002") || str.endsWith("\uFF01") || str.endsWith("\uFF1F") || str.endsWith(".") || str.endsWith("!") || str.endsWith("?")) {
        retStr = str.substring(0, str.length - 1);
    }
    // Strip the upside down question mark if present
    if (retStr.startsWith("\xbf") && retStr.length > 1) {
        retStr = retStr.substring(1);
    }
    // Replace commas with empty string
    retStr = retStr.replace(/,/g, "");
    return retStr;
}
function matchIntent(intentRequest, locale) {
    intentArg = "";
    let cleanedIntentReq = stripFinalPunctuation(intentRequest).trim();
    console.log("cleanedIntentReq.toLowerCase():" + cleanedIntentReq.toLowerCase());
    // Try to match the intent by using what the human said. This is
    // mainly to match the date/time oriented questions, including ones
    // that ask about time/date in a specific place.
    let matchedIntent = intentsMap[cleanedIntentReq.toLowerCase()];
    if (matchedIntent) {
        console.log(cleanedIntentReq.toLowerCase() + " matched, matchedIntent: " + matchedIntent);
        return matchedIntent;
    } else {
        let dateSearchStrA = "";
        let dateSearchStrB = "";
        let timeSearchStrA = "";
        let timeSearchStrB = "";
        if (locale == "en-US") {
            dateSearchStrA = "what date is it ";
            dateSearchStrB = "what's the date ";
            timeSearchStrA = "what time is it ";
            if (cleanedIntentReq.toLowerCase().startsWith(dateSearchStrA)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(dateSearchStrA.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.toLowerCase().startsWith(dateSearchStrB)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(dateSearchStrB.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.toLowerCase().startsWith(timeSearchStrA)) {
                // User is asking for the time in a specific location
                intentArg = cleanedIntentReq.substring(timeSearchStrA.length);
                return ASK_TIME_INTENT;
            }
        } else if (locale == "es-ES") {
            dateSearchStrA = "cu\xe1l es la fecha de hoy ";
            dateSearchStrB = "que fecha es ";
            timeSearchStrA = "qu\xe9 hora es ";
            if (cleanedIntentReq.toLowerCase().startsWith(dateSearchStrA)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(dateSearchStrA.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.toLowerCase().startsWith(dateSearchStrB)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(dateSearchStrB.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.toLowerCase().startsWith(timeSearchStrA)) {
                // User is asking for the time in a specific location
                intentArg = cleanedIntentReq.substring(timeSearchStrA.length);
                return ASK_TIME_INTENT;
            }
        } else if (locale == "fr-FR") {
            dateSearchStrA = "quelle date est-il ";
            timeSearchStrA = "quelle heure est-il ";
            if (cleanedIntentReq.toLowerCase().startsWith(dateSearchStrA)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(dateSearchStrA.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.toLowerCase().startsWith(timeSearchStrA)) {
                // User is asking for the time in a specific location
                intentArg = cleanedIntentReq.substring(timeSearchStrA.length);
                return ASK_TIME_INTENT;
            }
        } else if (locale == "ja-JP") {
            dateSearchStrA = "\u3067\u306F\u4F55\u65E5\u3067\u3059\u304B";
            timeSearchStrA = "\u306F\u4ECA\u4F55\u6642\u3067\u3059\u304B";
            timeSearchStrB = "\u306F\u4F55\u6642\u3067\u3059\u304B";
            if (cleanedIntentReq.endsWith(dateSearchStrA)) {
                // User is asking for the date in a specific location
                intentArg = cleanedIntentReq.substring(0, cleanedIntentReq.length - dateSearchStrA.length);
                return ASK_DATE_INTENT;
            } else if (cleanedIntentReq.endsWith(timeSearchStrA)) {
                // User is asking for the time in a specific location
                intentArg = cleanedIntentReq.substring(0, cleanedIntentReq.length - timeSearchStrA.length);
                return ASK_TIME_INTENT;
            } else if (cleanedIntentReq.endsWith(timeSearchStrB)) {
                // User is asking for the time in a specific location
                intentArg = cleanedIntentReq.substring(0, cleanedIntentReq.length - timeSearchStrB.length);
                return ASK_TIME_INTENT;
            }
        }
    }
//return intentsMap[stripFinalPunctuation(intentRequest.toLowerCase())];
}
function getTemporalStr(intentRequest, lang) {
    let today = new Date();
    let locale = lang.replace("_", "-");
    let formattedDate = "";
    let retFulfillment = "";
    let intent = matchIntent(intentRequest, locale);
    console.log("intentRequest: " + intentRequest);
    //console.log("locale: " + locale);
    if (intent == ASK_DATE_INTENT) {
        if (intentArg != "") {
            formattedDate = getFormattedDateByLocation(intentArg, locale);
            if (formattedDate != null) {
                if (locale == "en-US") {
                    retFulfillment = "Today is " + formattedDate + " " + intentArg + ".";
                } else if (locale == "es-ES") {
                    retFulfillment = "Hoy es " + formattedDate + " " + intentArg + ".";
                } else if (locale == "fr-FR") {
                    retFulfillment = "Aujourd'hui c'est le " + formattedDate + " " + intentArg + ".";
                } else if (locale == "ja-JP") {
                    // change 0 to 12 for Japanese
                    formattedDate = formattedDate.replace("\u5F8C0:", "\u5F8C12:").replace("\u524D0:", "\u524D12:");
                    retFulfillment = intentArg + "\u3067\u306F" + formattedDate + "\u3067\u3059\u3002";
                }
            } else {
                if (locale == "en-US") {
                    retFulfillment = "I don't know what date it is " + intentArg + ".";
                } else if (locale == "es-ES") {
                    retFulfillment = "No se que fecha es " + intentArg + ".";
                } else if (locale == "fr-FR") {
                    retFulfillment = "Je ne sais pas quelle date c'est " + intentArg + ".";
                } else if (locale == "ja-JP") {
                    retFulfillment = intentArg + "\u306E\u65E5\u4ED8\u304C\u308F\u304B\u3089\u306A\u3044\u3002";
                }
                retFulfillment = "";
            }
        } else {
            formattedDate = today.toLocaleDateString(locale, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            });
            if (locale == "en-US") {
                retFulfillment = "Today is " + formattedDate + ".";
            } else if (locale == "es-ES") {
                retFulfillment = "Hoy es " + formattedDate + ".";
            } else if (locale == "fr-FR") {
                retFulfillment = "Aujourd'hui c'est le " + formattedDate + ".";
            } else if (locale == "ja-JP") {
                retFulfillment = "\u4ECA\u65E5\u306F" + formattedDate + "\u3067\u3059\u3002";
            }
        }
    } else if (intent == ASK_TIME_INTENT) {
        if (intentArg != "") {
            console.log("intent == ASK_TIME_INTENT, intentArg: " + intentArg);
            formattedDate = getFormattedTimeByLocation(intentArg, locale);
            if (formattedDate != null) {
                if (locale == "en-US") {
                    retFulfillment = "It is " + formattedDate + " " + intentArg + ".";
                } else if (locale == "es-ES") {
                    retFulfillment = formattedDate + " " + intentArg + ".";
                } else if (locale == "fr-FR") {
                    retFulfillment = "Il est " + formattedDate + " " + intentArg + ".";
                } else if (locale == "ja-JP") {
                    // change 0 to 12 for Japanese
                    formattedDate = formattedDate.replace("\u5F8C0:", "\u5F8C12:").replace("\u524D0:", "\u524D12:");
                    retFulfillment = intentArg + "\u306F" + formattedDate + "\u3067\u3059\u3002";
                }
            } else {
                if (locale == "en-US") {
                    retFulfillment = "I don't know what time it is " + intentArg + ".";
                } else if (locale == "es-ES") {
                    retFulfillment = "No se que hora es " + intentArg + ".";
                } else if (locale == "fr-FR") {
                    retFulfillment = "Je ne sais pas quelle heure il est " + intentArg + ".";
                } else if (locale == "ja-JP") {
                    retFulfillment = "\u4ECA" + intentArg + "\u304C\u4F55\u6642\u304B\u5206\u304B\u3089\u306A\u3044\u3002";
                }
                retFulfillment = "";
            }
        } else {
            formattedDate = today.toLocaleTimeString(locale, {
                hour: "numeric",
                minute: "numeric",
                hour12: true
            });
            if (locale == "en-US") {
                retFulfillment = "It is " + formattedDate + ".";
            } else if (locale == "es-ES") {
                // TODO: Work out how to say something like "the time is" in Spanish
                retFulfillment = formattedDate;
            } else if (locale == "fr-FR") {
                retFulfillment = "Il est " + formattedDate + ".";
            } else if (locale == "ja-JP") {
                formattedDate = formattedDate.replace("\u5F8C0:", "\u5F8C12:").replace("\u524D0:", "\u524D12:");
                retFulfillment = "\u4ECA" + formattedDate + "\u3067\u3059\u3002";
            }
        }
    } else if (intent == ASK_DAY_INTENT) {
        // Day is in long format, e.g. 日曜日, in japanese
        formattedDate = today.toLocaleString(locale, {
            weekday: "long"
        });
        if (locale == "en-US") {
            retFulfillment = "Today is " + formattedDate + ".";
        } else if (locale == "es-ES") {
            retFulfillment = "Hoy es " + formattedDate + ".";
        } else if (locale == "fr-FR") {
            retFulfillment = "Aujourd'hui \xe7'est " + formattedDate + ".";
        } else if (locale == "ja-JP") {
            retFulfillment = "\u4ECA\u65E5\u306F" + formattedDate + "\u3067\u3059\u3002";
        }
    } else if (intent == ASK_MONTH_INTENT) {
        // Month is in long format, e.g. 一月 or 二月, in japanese
        formattedDate = today.toLocaleString(locale, {
            month: "long"
        });
        if (locale == "en-US") {
            retFulfillment = "It is " + formattedDate + ".";
        } else if (locale == "es-ES") {
            retFulfillment = "Es " + formattedDate + ".";
        } else if (locale == "fr-FR") {
            retFulfillment = "Il est " + formattedDate + ".";
        } else if (locale == "ja-JP") {
            retFulfillment = formattedDate + "\u3067\u3059\u3002";
        }
    }
    return retFulfillment;
}
function getFormattedDateByLocation(locStr, locale) {
    let retFormattedDate = null;
    let timeZoneStr = (0,_time_zones_js__WEBPACK_IMPORTED_MODULE_0__.getTimeZoneStr)(locStr, locale);
    let today = new Date();
    if (timeZoneStr != null) {
        retFormattedDate = today.toLocaleDateString(locale, {
            timeZone: timeZoneStr,
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    }
    return retFormattedDate;
}
function getFormattedTimeByLocation(locStr, locale) {
    let retFormattedTime = null;
    let timeZoneStr = (0,_time_zones_js__WEBPACK_IMPORTED_MODULE_0__.getTimeZoneStr)(locStr, locale);
    let now = new Date();
    if (timeZoneStr != null) {
        retFormattedTime = now.toLocaleTimeString(locale, {
            timeZone: timeZoneStr,
            hour: "numeric",
            minute: "numeric",
            hour12: true
        });
    }
    return retFormattedTime;
}


/***/ })

};
;