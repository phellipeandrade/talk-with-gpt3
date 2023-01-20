"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 15:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js
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
const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function generate(req, res) {
    let temperature = 0.9;
    let frequencyPenalty = 1.5;
    let presencePenalty = 0.6;
    let stopSequences = [
        "\nHuman:",
        "\nText:"
    ];
    if (req.body.hallucinateIntent || req.body.hallucinateSubject || req.body.correctStandardLang || req.body.composeQuestion) {
        temperature = 0.0;
        frequencyPenalty = 0.0;
        presencePenalty = 0.0;
        console.log("req.body.convText:" + req.body.convText);
    }
    const completion = await openai.createCompletion({
        model: req.body.useCustomPrompt ? "davinci" : "text-davinci-002",
        prompt: req.body.convText,
        temperature: temperature ? 0.0 : 0.9,
        frequency_penalty: frequencyPenalty ? 0.0 : 1.5,
        presence_penalty: presencePenalty ? 0.0 : 0.6,
        max_tokens: 50,
        // stop: req.body.hallucinateIntent ? ["\nHuman:"] : ["\nText:"]
        stop: stopSequences
    });
    // This presumes as 200, suggest checking for response code and throwing an error if not a 200. 
    // This suggestion applies to all API calls
    res.status(200).json({
        result: completion.data.choices[0].text
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(15));
module.exports = __webpack_exports__;

})();