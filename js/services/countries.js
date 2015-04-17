app.factory('countryData', [function() {
    
    var countries = [{"Name":"Afghanistan","Capital":"Kabul"},
    {"Name":"Albania","Capital":"Tirana"},
    {"Name":"Algeria","Capital":"Algiers"},
    {"Name":"Andorra","Capital":"Andorra la Vella"},
    {"Name":"Angola","Capital":"Luanda"},
    {"Name":"Antigua and Barbuda","Capital":"St. John's"},
    {"Name":"Argentina","Capital":"Buenos Aires"},
    {"Name":"Armenia","Capital":"Yerevan"},
    {"Name":"Australia","Capital":"Canberra"},
    {"Name":"Austria","Capital":"Vienna"},
    {"Name":"Azerbaijan","Capital":"Baku"},
    {"Name":"Bahamas","Capital":"Nassau"},
    {"Name":"Bahrain","Capital":"Manama"},
    {"Name":"Bangladesh","Capital":"Dhaka"},
    {"Name":"Barbados","Capital":"Bridgetown"},
    {"Name":"Belarus","Capital":"Minsk"},
    {"Name":"Belgium","Capital":"Brussels"},
    {"Name":"Belize","Capital":"Belmopan"},
    {"Name":"Benin","Capital":"Porto-Novo"},
    {"Name":"Bhutan","Capital":"Thimphu"},
    {"Name":"Bolivia","Capital":"La Paz"},
    {"Name":"Bosnia and Herzegovina","Capital":"Sarajevo"},
    {"Name":"Botswana","Capital":"Gaborone"},
    {"Name":"Brazil","Capital":"Brasília"},
    {"Name":"Brunei","Capital":"Bandar Seri Begawan"},
    {"Name":"Bulgaria","Capital":"Sofia"},
    {"Name":"Burkina Faso","Capital":"Ouagadougou"},
    {"Name":"Myanmar","Capital":"Naypyidaw"},
    {"Name":"Burundi","Capital":"Bujumbura"},
    {"Name":"Cambodia","Capital":"Phnom Penh"},
    {"Name":"Cameroon","Capital":"Yaoundé"},
    {"Name":"Canada","Capital":"Ottawa"},
    {"Name":"Cape Verde","Capital":"Praia"},
    {"Name":"Central African Republic","Capital":"Bangui"},
    {"Name":"Chad","Capital":"N'Djamena"},
    {"Name":"Chile","Capital":"Santiago"},
    {"Name":"China","Capital":"Beijing"},
    {"Name":"Colombia","Capital":"Bogotá"},
    {"Name":"Comoros","Capital":"Moroni"},
    {"Name":"Democratic Republic of Congo","Capital":"Kinshasa"},
    {"Name":"Republic of Congo","Capital":"Brazzaville"},
    {"Name":"Costa Rica","Capital":"Sant José"},
    {"Name":"Côte d’Ivoire","Capital":"Yamoussoukro"},
    {"Name":"Croatia","Capital":"Zagreb"},
    {"Name":"Cuba","Capital":"Havana"},
    {"Name":"Cyprus","Capital":"Nicosia"},
    {"Name":"Czech Republic","Capital":"Prague"},
    {"Name":"Denmark","Capital":"Copenhagen"},
    {"Name":"Djibouti","Capital":"Djibouti"},
    {"Name":"Dominica","Capital":"Roseau"},
    {"Name":"Dominican Republic","Capital":"Santo Domingo"},
    {"Name":"East Timor","Capital":"Dili"},
    {"Name":"Ecuador","Capital":"Quito"},
    {"Name":"Egypt","Capital":"Cairo"},
    {"Name":"El Salvador","Capital":"San Salvador"},
    {"Name":"Equatorial Guinea","Capital":"Malabo"},
    {"Name":"Eritrea","Capital":"Asmara"},
    {"Name":"Estonia","Capital":"Tallinn"},
    {"Name":"Ethiopia","Capital":"Addis Ababa"},
    {"Name":"Fiji","Capital":"Suva"},
    {"Name":"Finland","Capital":"Helsinki"},
    {"Name":"France","Capital":"Paris"},
    {"Name":"Gabon","Capital":"Libreville"},
    {"Name":"The Gambia","Capital":"Banjul"},
    {"Name":"Georgia","Capital":"Tbilisi"},
    {"Name":"Germany","Capital":"Berlin"},
    {"Name":"Ghana","Capital":"Accra"},
    {"Name":"Greece","Capital":"Athens"},
    {"Name":"Grenada","Capital":"St. George's"},
    {"Name":"Guatemala","Capital":"Guatemala City"},
    {"Name":"Guinea","Capital":"Conakry"},
    {"Name":"Guinea-Bissau","Capital":"Bissau"},
    {"Name":"Guyana","Capital":"Georgetown"},
    {"Name":"Haiti","Capital":"Port-au-Prince"},
    {"Name":"Honduras","Capital":"Tegucigalpa"},
    {"Name":"Hungary","Capital":"Budapest"},
    {"Name":"Iceland","Capital":"Reykjavík"},
    {"Name":"India","Capital":"New Delhi"},
    {"Name":"Indonesia","Capital":"Jakarta"},
    {"Name":"Iran","Capital":"Tehran"},
    {"Name":"Iraq","Capital":"Baghdad"},
    {"Name":"Ireland","Capital":"Dublin"},
    {"Name":"Israel","Capital":"Jerusalem"},
    {"Name":"Italy","Capital":"Rome"},
    {"Name":"Jamaica","Capital":"Kingston"},
    {"Name":"Japan","Capital":"Tokyo"},
    {"Name":"Jordan","Capital":"Amman"},
    {"Name":"Kazakhstan","Capital":"Astana"},
    {"Name":"Kenya","Capital":"Nairobi"},
    {"Name":"Kiribati","Capital":"Tarawa"},
    {"Name":"Kosovo","Capital":"Pristina"},
    {"Name":"North Korea","Capital":"Pyongyang"},
    {"Name":"South Korea","Capital":"Seoul"},
    {"Name":"Kuwait","Capital":"Kuwait City"},
    {"Name":"Kyrgyzstan","Capital":"Bishkek"},
    {"Name":"Laos","Capital":"Vientiane"},
    {"Name":"Latvia","Capital":"Riga"},
    {"Name":"Lebanon","Capital":"Beirut"},
    {"Name":"Lesotho","Capital":"Maseru"},
    {"Name":"Liberia","Capital":"Monrovia"},
    {"Name":"Libya","Capital":"Tripoli"},
    {"Name":"Liechtenstein","Capital":"Vaduz"},
    {"Name":"Lithuania","Capital":"Vilnius"},
    {"Name":"Luxembourg","Capital":"Luxembourg"},
    {"Name":"Macedonia","Capital":"Skopje"},
    {"Name":"Madagascar","Capital":"Antananarivo"},
    {"Name":"Malawi","Capital":"Lilongwe"},
    {"Name":"Malaysia","Capital":"Kuala Lumpur"},
    {"Name":"Maldives","Capital":"Malé"},
    {"Name":"Mali","Capital":"Bamako"},
    {"Name":"Malta","Capital":"Valletta"},
    {"Name":"Marshall Islands","Capital":"Majuro"},
    {"Name":"Mauritania","Capital":"Nouakchott"},
    {"Name":"Mauritius","Capital":"Port Louis"},
    {"Name":"Mexico","Capital":"Mexico City"},
    {"Name":"Micronesia","Capital":"Palikir"},
    {"Name":"Moldova","Capital":"Chișinău"},
    {"Name":"Monaco","Capital":"Monaco"},
    {"Name":"Mongolia","Capital":"Ulaanbaatar"},
    {"Name":"Montenegro","Capital":"Podgorica"},
    {"Name":"Morocco","Capital":"Rabat"},
    {"Name":"Mozambique","Capital":"Maputo"},
    {"Name":"Namibia","Capital":"Windhoek"},
    {"Name":"Nauru","Capital":"Yaren"},
    {"Name":"Nepal","Capital":"Kathmandu"},
    {"Name":"Netherlands","Capital":"Amsterdam"},
    {"Name":"New Zealand","Capital":"Wellington"},
    {"Name":"Nicaragua","Capital":"Managua"},
    {"Name":"Niger","Capital":"Niamey"},
    {"Name":"Nigeria","Capital":"Abuja"},
    {"Name":"Norway","Capital":"Oslo"},
    {"Name":"Oman","Capital":"Muscat"},
    {"Name":"Pakistan","Capital":"Islamabad"},
    {"Name":"Palau","Capital":"Melekeok"},
    {"Name":"Panama","Capital":"Panama City"},
    {"Name":"Papua New Guinea","Capital":"Port Moresby"},
    {"Name":"Paraguay","Capital":"Asunción"},
    {"Name":"Peru","Capital":"Lima"},
    {"Name":"Philippines","Capital":"Manila"},
    {"Name":"Poland","Capital":"Warsaw"},
    {"Name":"Portugal","Capital":"Lisbon"},
    {"Name":"Qatar","Capital":"Doha"},
     {"Name":"Romania","Capital":"Bucharest"},
    {"Name":"Russia","Capital":"Moscow"},
    {"Name":"Rwanda","Capital":"Kigali"},
    {"Name":"St. Kitts and Nevis","Capital":"Basseterre"},
    {"Name":"St. Lucia","Capital":"Castries"},
    {"Name":"St. Vincent and the Grenadines","Capital":"Kingstown"},
    {"Name":"Samoa","Capital":"Apia"},
    {"Name":"San Marino","Capital":"San Marino"},
    {"Name":"São Tomé and Príncipe","Capital":"São Tomé"},
    {"Name":"Saudi Arabia","Capital":"Riyadh"},
    {"Name":"Senegal","Capital":"Dakar"},
    {"Name":"Serbia","Capital":"Belgrade"},
    {"Name":"Seychelles","Capital":"Victoria"},
    {"Name":"Sierra Leone","Capital":"Freetown"},
    {"Name":"Singapore","Capital":"Singapore"},
    {"Name":"Slovakia","Capital":"Bratislava"},
    {"Name":"Slovenia","Capital":"Ljubljana"},
    {"Name":"Solomon Islands","Capital":"Honiara"},
    {"Name":"Somalia","Capital":"Mogadishu"},
    {"Name":"South Africa","Capital":"Pretoria"},
    {"Name":"Spain","Capital":"Madrid"},
    {"Name":"Sri Lanka","Capital":"Sri Jayawardenepura Kotte"},
    {"Name":"Sudan","Capital":"Khartoum"},
    {"Name":"Suriname","Capital":"Paramaribo"},
    {"Name":"Swaziland","Capital":"Mbabane"},
    {"Name":"Sweden","Capital":"Stockholm"},
    {"Name":"Switzerland","Capital":"Bern"},
    {"Name":"Syria","Capital":"Damascus"},
    {"Name":"Taiwan","Capital":"Taipei"},
    {"Name":"Tajikistan","Capital":"Dushanbe"},
    {"Name":"Tanzania","Capital":"Dodoma"},
    {"Name":"Thailand","Capital":"Bangkok"},
    {"Name":"Togo","Capital":"Lomé"},
    {"Name":"Tonga","Capital":"Nuku'alofa"},
    {"Name":"Trinidad and Tobago","Capital":"Port of Spain"},
    {"Name":"Tunisia","Capital":"Tunis"},
    {"Name":"Turkey","Capital":"Ankara"},
    {"Name":"Turkmenistan","Capital":"Ashgabat"},
    {"Name":"Tuvalu","Capital":"Funafuti"},
    {"Name":"Uganda","Capital":"Kampala"},
    {"Name":"Ukraine","Capital":"Kiev"},
    {"Name":"United Arab Emirates","Capital":"Abu Dhabi"},
    {"Name":"United Kingdom","Capital":"London"},
    {"Name":"United States","Capital":"Washington, D.C."},
    {"Name":"Uruguay","Capital":"Montevideo"},
    {"Name":"Uzbekistan","Capital":"Tashkent"},
    {"Name":"Vanuatu","Capital":"Port Vila"},
    {"Name":"Vatican City","Capital":"Vatican City"},
    {"Name":"Venezuela","Capital":"Caracas"},
    {"Name":"Vietnam","Capital":"Hanoi"},
    {"Name":"Yemen","Capital":"Sanaa"},
    {"Name":"Zambia","Capital":"Lusaka"},
    {"Name":"Zimbabwe","Capital":"Harare"},
    {"Name":"South Sudan","Capital":"Juba"}];

    return {countries: countries};
}]);


