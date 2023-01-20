"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeZoneStr": () => (/* binding */ getTimeZoneStr)
/* harmony export */ });
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
 */ // Key entries must be lowercase.
// Note that for non-Japanese locales, the preposition is included.
// TODO: Add support for other locations, and put in separate file, using some
// of these as a guide https://www.worldometers.info/geography/alphabetical-list-of-countries/
// Suggest storing right-hand values as a single const to eliminate repeated strings.
const locTimeZoneMap = {
    //United States
    "in the united states": "America/New_York",
    "in america": "America/New_York",
    "in the us": "America/New_York",
    "en estados unidos": "America/New_York",
    "aux \xe9tats-unis": "America/New_York",
    "\u30A2\u30E1\u30EA\u30AB": "America/New_York",
    "\u7C73\u56FD": "America/New_York",
    //--New York
    "in new york": "America/New_York",
    "in new york city": "America/New_York",
    "en nueva york": "America/New_York",
    "\xe0 new york": "America/New_York",
    "\u30CB\u30E5\u30FC\u30E8\u30FC\u30AF": "America/New_York",
    //--Los Angeles
    "in los angeles": "America/Los_Angeles",
    "en los angeles": "America/Los_Angeles",
    "\xe0 los angeles": "America/Los_Angeles",
    "\u30ED\u30B5\u30F3\u30BC\u30EB\u30B9": "America/Los_Angeles",
    //--Chicago
    "in chicago": "America/Chicago",
    "en chicago": "America/Chicago",
    "\xe0 chicago": "America/Chicago",
    "\u30B7\u30AB\u30B4": "America/Chicago",
    //--Houston
    "in houston": "America/Houston",
    "en houston": "America/Houston",
    "\xe0 houston": "America/Houston",
    "\u30D2\u30E5\u30FC\u30B9\u30C8\u30F3": "America/Houston",
    //--Philadelphia
    "in philadelphia": "America/New_York",
    "en filadelfia": "America/New_York",
    "\xe0 philadelphia": "America/New_York",
    "\u30D5\u30A3\u30E9\u30C7\u30EB\u30D5\u30A3\u30A2": "America/New_York",
    //--Dallas
    "in dallas": "America/Chicago",
    "en dallas": "America/Chicago",
    "\xe0 dallas": "America/Chicago",
    "\u30C0\u30E9\u30B9": "America/Chicago",
    //--Miami
    "in miami": "America/New_York",
    "en miami": "America/New_York",
    "\xe0 miami": "America/New_York",
    "\u30DE\u30A4\u30A2\u30DF": "America/New_York",
    //--Boston
    "in boston": "America/New_York",
    "en boston": "America/New_York",
    "\xe0 boston": "America/New_York",
    "\u30DC\u30B9\u30C8\u30F3": "America/New_York",
    //--Washington
    "in washington": "America/New_York",
    "en washington": "America/New_York",
    "\xe0 washington": "America/New_York",
    "\u30EF\u30B7\u30F3\u30C8\u30F3": "America/New_York",
    //--Seattle
    "in seattle": "America/Los_Angeles",
    "en seattle": "America/Los_Angeles",
    "\xe0 seattle": "America/Los_Angeles",
    "\u30BB\u30FC\u30BF\u30FC": "America/Los_Angeles",
    //--Atlanta
    "in atlanta": "America/New_York",
    "en atlanta": "America/New_York",
    "\xe0 atlanta": "America/New_York",
    "\u30A2\u30C3\u30C8\u30E9\u30F3\u30BF": "America/New_York",
    //--Denver
    "in denver": "America/Denver",
    "en denver": "America/Denver",
    "\xe0 denver": "America/Denver",
    "\u30C7\u30F3\u30D0\u30FC": "America/Denver",
    //--Phoenix
    "in phoenix arizona": "America/Phoenix",
    "in phoenix arizona usa": "America/Phoenix",
    "in phoenix": "America/Phoenix",
    "en fenix": "America/Phoenix",
    "\xe0 ph\xe9nix": "America/Phoenix",
    "\u30D5\u30A7\u30CB\u30C3\u30AF\u30B9": "America/Phoenix",
    //--Indianapolis
    "in indianapolis": "America/Indiana/Indianapolis",
    "en indianapolis": "America/Indiana/Indianapolis",
    "\xe0 indianapolis": "America/Indiana/Indianapolis",
    "\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA\u30DD\u30EA\u30B9": "America/Indiana/Indianapolis",
    "in indiana": "America/Indiana/Indianapolis",
    "en indiana": "America/Indiana/Indianapolis",
    "\u30A4\u30F3\u30C7\u30A3\u30A2\u30CA": "America/Indiana/Indianapolis",
    "in california": "America/Los_Angeles",
    "en california": "America/Los_Angeles",
    "en californie": "America/Los_Angeles",
    "\u30AB\u30EA\u30D5\u30A9\u30EB\u30CB\u30A2": "America/Los_Angeles",
    "\u30AB\u30EB\u30D5\u30A9\u30CB\u30A2": "America/Los_Angeles",
    //Argentina
    "in argentina": "America/Argentina/Buenos_Aires",
    "en argentina": "America/Argentina/Buenos_Aires",
    "en argentine": "America/Argentina/Buenos_Aires",
    "\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3": "America/Argentina/Buenos_Aires",
    //--Buenos Aires
    "in buenos aires": "America/Argentina/Buenos_Aires",
    "en buenos aires": "America/Argentina/Buenos_Aires",
    "\xe0 buenos aires": "America/Argentina/Buenos_Aires",
    "\u30D6\u30A8\u30CE\u30B9\u30A2\u30A4\u30EC\u30B9": "America/Argentina/Buenos_Aires",
    //Australia
    "in australia": "Australia/Sydney",
    "en australia": "Australia/Sydney",
    "en australie": "Australia/Sydney",
    "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2": "Australia/Sydney",
    //--Sydney
    "in sydney": "Australia/Sydney",
    "en s\xeddney": "Australia/Sydney",
    "\xe0 sydney": "Australia/Sydney",
    "\u30B7\u30C9\u30CB\u30FC": "Australia/Sydney",
    //--Melbourne
    "in melbourne": "Australia/Melbourne",
    "en melbourne": "Australia/Melbourne",
    "\xe0 melbourne": "Australia/Melbourne",
    "\u30E1\u30EB\u30DC\u30EB\u30F3": "Australia/Melbourne",
    //--Brisbane
    "in brisbane": "Australia/Brisbane",
    "en brisbane": "Australia/Brisbane",
    "\xe0 brisbane": "Australia/Brisbane",
    "\u30D6\u30EA\u30B9\u30D9\u30F3": "Australia/Brisbane",
    //--Adelaide
    "in adelaide": "Australia/Adelaide",
    "en adelaida": "Australia/Adelaide",
    "\xe0 ad\xe9la\xefde": "Australia/Adelaide",
    "\u30A2\u30C7\u30EC\u30FC\u30C9": "Australia/Adelaide",
    //--Perth
    "in perth": "Australia/Perth",
    "in perth australia": "Australia/Perth",
    "en perth": "Australia/Perth",
    "\xe0 perth": "Australia/Perth",
    "\u30D1\u30FC\u30B9": "Australia/Perth",
    "perth": "Australia/Perth",
    "perth australia": "Australia/Perth",
    //--Canberra
    "in canberra": "Australia/Canberra",
    "in canberra, australia": "Australia/Canberra",
    "in canberra australia": "Australia/Canberra",
    "in the capital of australia, canberra": "Australia/Canberra",
    "en canberra": "Australia/Canberra",
    "\xe0 canberra": "Australia/Canberra",
    "\u30AD\u30E3\u30F3\u30D9\u30E9": "Australia/Canberra",
    //Austria
    "in austria": "Europe/Vienna",
    "en austria": "Europe/Vienna",
    "en autriche": "Europe/Vienna",
    "\u30AA\u30FC\u30B9\u30C8\u30EA\u30A2": "Europe/Vienna",
    //Bahamas
    "in the bahamas": "America/Nassau",
    "en las bahamas": "America/Nassau",
    "aux bahamas": "America/Nassau",
    "\u30D0\u30CF\u30DE": "America/Nassau",
    //Belgium
    "in belgium": "Europe/Brussels",
    "en b\xe9lgica": "Europe/Brussels",
    "en belgique": "Europe/Brussels",
    "\u30D9\u30EB\u30AE\u30FC": "Europe/Brussels",
    //Brazil
    "in brazil": "America/Sao_Paulo",
    "en brasil": "America/Sao_Paulo",
    "au br\xe9sil": "America/Sao_Paulo",
    "\u30D6\u30E9\u30B8\u30EB": "America/Sao_Paulo",
    //--São Paulo
    "in s\xe3o paulo": "America/Sao_Paulo",
    "en s\xe3o paulo": "America/Sao_Paulo",
    "\xe0 s\xe3o paulo": "America/Sao_Paulo",
    "\u30B5\u30F3\u30D1\u30A6\u30ED": "America/Sao_Paulo",
    //--Rio de Janeiro
    "in rio de janeiro": "America/Sao_Paulo",
    "en rio de janeiro": "America/Sao_Paulo",
    "\xe0 rio de janeiro": "America/Sao_Paulo",
    "\u30EA\u30AA\u30C7\u30B8\u30E3\u30CD\u30A4\u30ED": "America/Sao_Paulo",
    //Cambodia
    "in cambodia": "Asia/Phnom_Penh",
    "en camboya": "Asia/Phnom_Penh",
    "en cambodge": "Asia/Phnom_Penh",
    "\u30AB\u30F3\u30DC\u30B8\u30A2": "Asia/Phnom_Penh",
    //Canada
    "in canada": "America/Toronto",
    "en canada": "America/Toronto",
    "au canada": "America/Toronto",
    "\u30AB\u30CA\u30C0": "America/Toronto",
    //--Toronto
    "in toronto": "America/Toronto",
    "en toronto": "America/Toronto",
    "\xe0 toronto": "America/Toronto",
    "\u30C8\u30ED\u30F3\u30C8": "America/Toronto",
    //Chile
    "in chile": "America/Santiago",
    "en chile": "America/Santiago",
    "au chili": "America/Santiago",
    "\u30C1\u30EA": "America/Santiago",
    //--Santiago
    "in santiago": "America/Santiago",
    "en santiago": "America/Santiago",
    "\xe0 santiago": "America/Santiago",
    "\u30B5\u30F3\u30C1\u30A7\u30B4\u30FC\u30EB": "America/Santiago",
    //China
    "in china": "Asia/Shanghai",
    "en china": "Asia/Shanghai",
    "en chine": "Asia/Shanghai",
    "\u4E2D\u56FD": "Asia/Shanghai",
    //--Beijing
    "in beijing": "Asia/Shanghai",
    "en beijing": "Asia/Shanghai",
    "\xe0 p\xe9kin": "Asia/Shanghai",
    "\u30D9\u30A4\u30EA\u30F3\u30B0": "Asia/Shanghai",
    //--Shanghai
    "in shanghai": "Asia/Shanghai",
    "en shanghai": "Asia/Shanghai",
    "\xe0 shanghai": "Asia/Shanghai",
    "\u30B7\u30E3\u30F3\u30CF\u30A4": "Asia/Shanghai",
    //Colombia
    "in colombia": "America/Bogota",
    "en colombia": "America/Bogota",
    "en colombie": "America/Bogota",
    "\u30B3\u30ED\u30F3\u30D3\u30A2": "America/Bogota",
    //--Bogotá
    "in bogot\xe1": "America/Bogota",
    "en bogot\xe1": "America/Bogota",
    "\xe0 bogota": "America/Bogota",
    "\u30DC\u30B4\u30BF": "America/Bogota",
    //Costa Rica
    "in costa rica": "America/Costa_Rica",
    "en costa rica": "America/Costa_Rica",
    "au costa rica": "America/Costa_Rica",
    "\u30B3\u30B9\u30BF\u30EA\u30AB": "America/Costa_Rica",
    //Cuba
    "in cuba": "America/Havana",
    "en cuba": "America/Havana",
    "\xe0 cuba": "America/Havana",
    "\u30AD\u30E5\u30FC\u30D0": "America/Havana",
    //Ecuador
    "in ecuador": "America/Guayaquil",
    "en ecuador": "America/Guayaquil",
    "en equateur": "America/Guayaquil",
    "\u30A8\u30AF\u30A2\u30C9\u30EB": "America/Guayaquil",
    //Egypt
    "in egypt": "Africa/Cairo",
    "en egipto": "Africa/Cairo",
    "en egypte": "Africa/Cairo",
    "\u30A8\u30B8\u30D7\u30C8": "Africa/Cairo",
    //--Cairo
    "in cairo": "Africa/Cairo",
    "en el cairo": "Africa/Cairo",
    "au caire": "Africa/Cairo",
    "\u30AB\u30A4\u30ED": "Africa/Cairo",
    //England
    "in england": "Europe/London",
    "en inglaterra": "Europe/London",
    "en angleterre": "Europe/London",
    "\u30A4\u30AE\u30EA\u30B9": "Europe/London",
    //--London
    "in london": "Europe/London",
    "en londres": "Europe/London",
    "\xe0 londres": "Europe/London",
    "\u30ED\u30F3\u30C9\u30F3": "Europe/London",
    //Finland
    "in finland": "Europe/Helsinki",
    "en finlandia": "Europe/Helsinki",
    "en finlande": "Europe/Helsinki",
    "\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9": "Europe/Helsinki",
    //France
    "in france": "Europe/Paris",
    "en francia": "Europe/Paris",
    "en france": "Europe/Paris",
    "\u30D5\u30E9\u30F3\u30B9": "Europe/Paris",
    //--Paris
    "in paris": "Europe/Paris",
    "en paris": "Europe/Paris",
    "\xe0 paris": "Europe/Paris",
    "\u30D1\u30EA": "Europe/Paris",
    //Germany
    "in germany": "Europe/Berlin",
    "en alemania": "Europe/Berlin",
    "en allemagne": "Europe/Berlin",
    "\u30C9\u30A4\u30C4": "Europe/Berlin",
    //Greece
    "in greece": "Europe/Athens",
    "en grecia": "Europe/Athens",
    "en gr\xe8ce": "Europe/Athens",
    "\u30AE\u30EA\u30B7\u30A2": "Europe/Athens",
    //Hong Kong
    "in hong kong": "Asia/Hong_Kong",
    "en hong kong": "Asia/Hong_Kong",
    "\xe0 hong kong": "Asia/Hong_Kong",
    "\u9999\u6E2F": "Asia/Hong_Kong",
    //India
    "in india": "Asia/Kolkata",
    "en india": "Asia/Kolkata",
    "en inde": "Asia/Kolkata",
    "\u30A4\u30F3\u30C9": "Asia/Kolkata",
    //--Delhi
    "in delhi": "Asia/Kolkata",
    "en delhi": "Asia/Kolkata",
    "\xe0 delhi": "Asia/Kolkata",
    "\u30C7\u30EA\u30FC": "Asia/Kolkata",
    //--Mumbai
    "in mumbai": "Asia/Kolkata",
    "en mumbai": "Asia/Kolkata",
    "\xe0 mumbai": "Asia/Kolkata",
    "\u30E0\u30F3\u30D0\u30A4": "Asia/Kolkata",
    //--Chennai
    "in chennai": "Asia/Kolkata",
    "en chennai": "Asia/Kolkata",
    "\xe0 chennai": "Asia/Kolkata",
    "\u30C1\u30A7\u30F3\u30CA\u30A4": "Asia/Kolkata",
    //--Kolkata
    "in kolkata": "Asia/Kolkata",
    "en calcuta": "Asia/Kolkata",
    "\xe0 calcutta": "Asia/Kolkata",
    "\u30B3\u30EB\u30AB\u30BF": "Asia/Kolkata",
    //--Bangalore
    "in bangalore": "Asia/Kolkata",
    "en bangalore": "Asia/Kolkata",
    "\xe0 bangalore": "Asia/Kolkata",
    "\u30D0\u30F3\u30AC\u30ED\u30FC\u30EB": "Asia/Kolkata",
    //--Hyderabad
    "in hyderabad": "Asia/Kolkata",
    "en hyderabad": "Asia/Kolkata",
    "\xe0 hyderabad": "Asia/Kolkata",
    "\u30D2\u30E4\u30C0\u30E9\u30D0\u30FC\u30C9": "Asia/Kolkata",
    //--Pune
    "in pune": "Asia/Kolkata",
    "en puna": "Asia/Kolkata",
    "\xe0 pune": "Asia/Kolkata",
    "\u30D4\u30E5\u30F3": "Asia/Kolkata",
    //Indonesia
    "in indonesia": "Asia/Jakarta",
    "en indonesia": "Asia/Jakarta",
    "en indon\xe9sie": "Asia/Jakarta",
    "\u30A4\u30F3\u30C9\u30CD\u30B7\u30A2": "Asia/Jakarta",
    //--Jakarta
    "in jakarta": "Asia/Jakarta",
    "en yakarta": "Asia/Jakarta",
    "\xe0 jakarta": "Asia/Jakarta",
    "\u30B8\u30E3\u30AB\u30EB\u30BF": "Asia/Jakarta",
    //Ireland
    "in ireland": "Europe/Dublin",
    "en irlanda": "Europe/Dublin",
    "en irlande": "Europe/Dublin",
    "\u30A2\u30A4\u30EB\u30E9\u30F3\u30C9": "Europe/Dublin",
    //--Dublin
    "in dublin": "Europe/Dublin",
    "en dublin": "Europe/Dublin",
    "\xe0 dublin": "Europe/Dublin",
    "\u30C9\u30D6\u30EA\u30F3": "Europe/Dublin",
    //Italy
    "in italy": "Europe/Rome",
    "en italia": "Europe/Rome",
    "en italie": "Europe/Rome",
    "\u30A4\u30BF\u30EA\u30A2": "Europe/Rome",
    //--Rome
    "in rome": "Europe/Rome",
    "en roma": "Europe/Rome",
    "\xe0 rome": "Europe/Rome",
    "\u30ED\u30FC\u30DE": "Europe/Rome",
    //Japan
    "in japan": "Asia/Tokyo",
    "en jap\xf3n": "Asia/Tokyo",
    "au japon": "Asia/Tokyo",
    "\u65E5\u672C": "Asia/Tokyo",
    //--Tokyo
    "in tokyo": "Asia/Tokyo",
    "en tokio": "Asia/Tokyo",
    "\xe0 tokyo": "Asia/Tokyo",
    "\u6771\u4EAC": "Asia/Tokyo",
    //--Osaka
    "in osaka": "Asia/Tokyo",
    "en osaka": "Asia/Tokyo",
    "\xe0 osaka": "Asia/Tokyo",
    "\u5927\u962A": "Asia/Tokyo",
    //--Kyoto
    "in kyoto": "Asia/Tokyo",
    "en kioto": "Asia/Tokyo",
    "\xe0 kyoto": "Asia/Tokyo",
    "\u4EAC\u90FD": "Asia/Tokyo",
    //--Nagoya
    "in nagoya": "Asia/Tokyo",
    "en nagoya": "Asia/Tokyo",
    "\xe0 nagoya": "Asia/Tokyo",
    "\u540D\u53E4\u5C4B": "Asia/Tokyo",
    //Malaysia
    "in malaysia": "Asia/Kuala_Lumpur",
    "en malasia": "Asia/Kuala_Lumpur",
    "en malaisie": "Asia/Kuala_Lumpur",
    "\u30DE\u30EC\u30FC\u30B7\u30A2": "Asia/Kuala_Lumpur",
    //--Kuala Lumpur
    "in kuala lumpur": "Asia/Kuala_Lumpur",
    "en kuala lumpur": "Asia/Kuala_Lumpur",
    "\xe0 kuala lumpur": "Asia/Kuala_Lumpur",
    "\u30AF\u30A2\u30E9\u30EB\u30F3\u30D7\u30FC\u30EB": "Asia/Kuala_Lumpur",
    //Maldives
    "in maldives": "Indian/Maldives",
    "en maldivas": "Indian/Maldives",
    "aux maldives": "Indian/Maldives",
    "\u30E2\u30EB\u30C7\u30A3\u30D6": "Indian/Maldives",
    //Mexico
    "in mexico": "America/Mexico_City",
    "en m\xe9xico": "America/Mexico_City",
    "au mexique": "America/Mexico_City",
    "\u30E1\u30AD\u30B7\u30B3": "America/Mexico_City",
    //--Mexico City
    "in mexico city": "America/Mexico_City",
    "en ciudad de mexico": "America/Mexico_City",
    "\xe0 mexico": "America/Mexico_City",
    "\u30E1\u30AD\u30B7\u30B3\u30B7\u30C6\u30A3": "America/Mexico_City",
    //Netherlands
    "in netherlands": "Europe/Amsterdam",
    "en paises bajos": "Europe/Amsterdam",
    "aux pays-bas": "Europe/Amsterdam",
    "\u30AA\u30E9\u30F3\u30C0": "Europe/Amsterdam",
    //--Amsterdam
    "in amsterdam": "Europe/Amsterdam",
    "en amsterdam": "Europe/Amsterdam",
    "\xe0 amsterdam": "Europe/Amsterdam",
    "\u30A2\u30E0\u30B9\u30C6\u30EB\u30C0\u30E0": "Europe/Amsterdam",
    //New Zealand
    "in new zealand": "Pacific/Auckland",
    "en nueva zelanda": "Pacific/Auckland",
    "en nouvelle-z\xe9lande": "Pacific/Auckland",
    "\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9": "Pacific/Auckland",
    //--Auckland
    "in auckland": "Pacific/Auckland",
    "en auckland": "Pacific/Auckland",
    "\xe0 auckland": "Pacific/Auckland",
    "\u30AA\u30FC\u30AF\u30E9\u30F3\u30C9": "Pacific/Auckland",
    //Norway
    "in norway": "Europe/Oslo",
    "en noruega": "Europe/Oslo",
    "en norv\xe8ge": "Europe/Oslo",
    "\u30CE\u30EB\u30A6\u30A7\u30FC": "Europe/Oslo",
    //--Oslo
    "in oslo": "Europe/Oslo",
    "en oslo": "Europe/Oslo",
    "\xe0 oslo": "Europe/Oslo",
    "\u30AA\u30B9\u30ED": "Europe/Oslo",
    //Pakistan
    "in pakistan": "Asia/Karachi",
    "en pakistan": "Asia/Karachi",
    "au pakistan": "Asia/Karachi",
    "\u30D1\u30AD\u30B9\u30BF\u30F3": "Asia/Karachi",
    //--Karachi
    "in karachi": "Asia/Karachi",
    "en karachi": "Asia/Karachi",
    "\xe0 karachi": "Asia/Karachi",
    "\u30AB\u30E9\u30C1": "Asia/Karachi",
    //Philippines
    "in the philippines": "Asia/Manila",
    "en filipinas": "Asia/Manila",
    "aux philippines": "Asia/Manila",
    "\u30D5\u30A3\u30EA\u30D4\u30F3": "Asia/Manila",
    //--Manila
    "in manila": "Asia/Manila",
    "en manila": "Asia/Manila",
    "\xe0 manille": "Asia/Manila",
    "\u30DE\u30CB\u30E9": "Asia/Manila",
    //Poland
    "in poland": "Europe/Warsaw",
    "en polonia": "Europe/Warsaw",
    "en pologne": "Europe/Warsaw",
    "\u30DD\u30FC\u30E9\u30F3\u30C9": "Europe/Warsaw",
    //--Warsaw
    "in warsaw": "Europe/Warsaw",
    "en varsovia": "Europe/Warsaw",
    "\xe0 varsovie": "Europe/Warsaw",
    "\u30EF\u30EB\u30B7\u30E3\u30EF": "Europe/Warsaw",
    //Portugal
    "in portugal": "Europe/Lisbon",
    "en portugal": "Europe/Lisbon",
    "au portugal": "Europe/Lisbon",
    "\u30DD\u30EB\u30C8\u30AC\u30EB": "Europe/Lisbon",
    //--Lisbon
    "in lisbon": "Europe/Lisbon",
    "en lisboa": "Europe/Lisbon",
    "\xe0 lisbonne": "Europe/Lisbon",
    "\u30EA\u30B9\u30DC\u30F3": "Europe/Lisbon",
    //Russia
    "in russia": "Europe/Moscow",
    "en rusia": "Europe/Moscow",
    "en russie": "Europe/Moscow",
    "\u30ED\u30B7\u30A2": "Europe/Moscow",
    //--Moscow
    "in moscow": "Europe/Moscow",
    "en moscu": "Europe/Moscow",
    "\xe0 moscou": "Europe/Moscow",
    "\u30E2\u30B9\u30AF\u30EF": "Europe/Moscow",
    //Singapore
    "in singapore": "Asia/Singapore",
    "en singapur": "Asia/Singapore",
    "\xe0 singapour": "Asia/Singapore",
    "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB": "Asia/Singapore",
    //South Africa
    "in south africa": "Africa/Johannesburg",
    "en sudafrica": "Africa/Johannesburg",
    "en afrique du sud": "Africa/Johannesburg",
    "\u5357\u30A2\u30D5\u30EA\u30AB": "Africa/Johannesburg",
    //--Johannesburg
    "in johannesburg": "Africa/Johannesburg",
    "en johannesburgo": "Africa/Johannesburg",
    "\xe0 johannesbourg": "Africa/Johannesburg",
    "\u30B8\u30E7\u30FC\u30B8\u30DC\u30EF\u30FC\u30EB": "Africa/Johannesburg",
    //South Korea
    "in south korea": "Asia/Seoul",
    "en corea del sur": "Asia/Seoul",
    "en cor\xe9e du sud": "Asia/Seoul",
    "\u97D3\u56FD": "Asia/Seoul",
    //--Seoul
    "in seoul": "Asia/Seoul",
    "en seul": "Asia/Seoul",
    "\xe0 s\xe9oul": "Asia/Seoul",
    "\u30BD\u30A6\u30EB": "Asia/Seoul",
    //Spain
    "in spain": "Europe/Madrid",
    "en espa\xf1a": "Europe/Madrid",
    "en espagne": "Europe/Madrid",
    "\u30B9\u30DA\u30A4\u30F3": "Europe/Madrid",
    //--Madrid
    "in madrid": "Europe/Madrid",
    "en madrid": "Europe/Madrid",
    "\xe0 madrid": "Europe/Madrid",
    "\u30DE\u30C9\u30EA\u30C9": "Europe/Madrid",
    //--Barcelona
    "in barcelona": "Europe/Madrid",
    "en barcelona": "Europe/Madrid",
    "\xe0 barcelone": "Europe/Madrid",
    "\u30D0\u30EB\u30BB\u30ED\u30CA": "Europe/Madrid",
    //Sweden
    "in sweden": "Europe/Stockholm",
    "en suecia": "Europe/Stockholm",
    "en su\xe8de": "Europe/Stockholm",
    "\u30B9\u30A6\u30A7\u30FC\u30C7\u30F3": "Europe/Stockholm",
    //--Stockholm
    "in stockholm": "Europe/Stockholm",
    "en estocolmo": "Europe/Stockholm",
    "\xe0 stockholm": "Europe/Stockholm",
    "\u30B9\u30C8\u30C3\u30AF\u30DB\u30EB\u30E0": "Europe/Stockholm",
    //Switzerland
    "in switzerland": "Europe/Zurich",
    "en suiza": "Europe/Zurich",
    "en suisse": "Europe/Zurich",
    "\u30B9\u30A4\u30B9": "Europe/Zurich",
    //--Zurich
    "in zurich": "Europe/Zurich",
    "en z\xfarich": "Europe/Zurich",
    "\xe0 zurich": "Europe/Zurich",
    "\u30E8\u30FC\u30B2\u30EB": "Europe/Zurich",
    //Taiwan
    "in taiwan": "Asia/Taipei",
    "en taiw\xe1n": "Asia/Taipei",
    "\xe0 ta\xefwan": "Asia/Taipei",
    "\u53F0\u6E7E": "Asia/Taipei",
    //--Taipei
    "in taipei": "Asia/Taipei",
    "en taipei": "Asia/Taipei",
    "\xe0 taipei": "Asia/Taipei",
    "\u53F0\u5317": "Asia/Taipei",
    //Thailand
    "in thailand": "Asia/Bangkok",
    "en tailandia": "Asia/Bangkok",
    "en tha\xeflande": "Asia/Bangkok",
    "\u30BF\u30A4": "Asia/Bangkok",
    //--Bangkok
    "in bangkok": "Asia/Bangkok",
    "en bangkok": "Asia/Bangkok",
    "\xe0 bangkok": "Asia/Bangkok",
    "\u30D0\u30F3\u30B3\u30AF": "Asia/Bangkok",
    //Turkey
    "in turkey": "Europe/Istanbul",
    "en turqu\xeda": "Europe/Istanbul",
    "en turquie": "Europe/Istanbul",
    "\u30C8\u30EB\u30B3": "Europe/Istanbul",
    //--Istanbul
    "in istanbul": "Europe/Istanbul",
    "en estambul": "Europe/Istanbul",
    "\xe0 istanbul": "Europe/Istanbul",
    "\u30A4\u30B9\u30BF\u30F3\u30D6\u30FC\u30EB": "Europe/Istanbul",
    //United Kingdom
    "in the united kingdom": "Europe/London",
    "en el reino unido": "Europe/London",
    "au royaume-uni": "Europe/London"
};
function getTimeZoneStr(locStr, locale) {
    let timeZoneStr = locTimeZoneMap[locStr.toLowerCase()];
    return timeZoneStr;
}


/***/ })

};
;