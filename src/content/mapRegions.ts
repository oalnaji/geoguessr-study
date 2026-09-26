// Map regions for language areas inside countries that the map splits into regions (countries with
// more than one official language on signs). Keyed "language|country|area", matching a Region entry
// exactly; content.test.ts checks every key still matches one.
//
// Only areas with signage "common" matter: the map quiz ignores languages that are rare on signs.
// Areas that cannot be drawn at region level (e.g. East Belgium, part of Wallonia) are left out.

export const mapRegions: Record<string, string[]> = {
  // Spain
  'ca|ES|Catalonia': ['ES-CT'],
  'ca|ES|Valencian Community': ['ES-VC'],
  'ca|ES|Balearic Islands': ['ES-IB'],
  'gl|ES|Galicia': ['ES-GA'],
  'eu|ES|Basque Country (Euskadi)': ['ES-PV'],
  'eu|ES|Northern Navarre': ['ES-NC'],
  // Belgium
  'fr|BE|Wallonia and Brussels': ['BE-WAL', 'BE-BRU'],
  'nl|BE|Flanders and Brussels': ['BE-VLG', 'BE-BRU'],
  // Switzerland
  'fr|CH|Romandy (Geneva, Vaud, Neuchâtel, Jura, parts of Fribourg and Valais)': ['CH-GE', 'CH-VD', 'CH-NE', 'CH-JU', 'CH-FR', 'CH-VS'],
  'de|CH|German-speaking Switzerland (north and centre)': [
    'CH-ZH', 'CH-BE', 'CH-LU', 'CH-UR', 'CH-SZ', 'CH-OW', 'CH-NW', 'CH-GL', 'CH-ZG', 'CH-FR', 'CH-SO', 'CH-BS',
    'CH-BL', 'CH-SH', 'CH-AR', 'CH-AI', 'CH-SG', 'CH-GR', 'CH-AG', 'CH-TG', 'CH-VS',
  ],
  'it|CH|Ticino and southern Graubünden': ['CH-TI', 'CH-GR'],
  // Canada
  'fr|CA|Quebec': ['CA-QC'],
  'fr|CA|New Brunswick': ['CA-NB'],
  // Italy
  'fr|IT|Aosta Valley': ['IT-23'],
  'de|IT|South Tyrol': ['IT-32'],
  // Finland and Norway
  'sv|FI|West and south coasts (Ostrobothnia, Uusimaa, Turku archipelago)': ['FI-12', 'FI-18', 'FI-19'],
  'se|FI|Northern Lapland (Utsjoki, Enontekiö, Inari)': ['FI-10'],
  'se|NO|Finnmark, Troms (Sámi administrative area)': ['NO-54'],
  // Hungarian minorities
  'hu|RO|Transylvania (esp. Harghita, Covasna, Mureș)': ['RO-HR', 'RO-CV', 'RO-MS'],
  'hu|SK|Southern Slovakia': ['SK-NI', 'SK-TA', 'SK-BC', 'SK-KI'],
  'hu|RS|Vojvodina': ['RS-01', 'RS-02', 'RS-03', 'RS-04', 'RS-05', 'RS-06', 'RS-07'],
  // Bosnia and Herzegovina
  'hr|BA|Herzegovina and the Federation of BiH': ['BA-BIH'],
  'sr|BA|Republika Srpska': ['BA-SRP'],
  // United Kingdom
  'cy|GB|Wales': ['GB-WLS'],
  'gd|GB|Highlands and Islands (esp. Outer Hebrides)': ['GB-SCT'],
  // Iraq and Cyprus
  'ckb|IQ|Kurdistan Region (Erbil, Sulaymaniyah, Duhok)': ['IQ-AR', 'IQ-SU', 'IQ-DA'],
  'tr|CY|Northern Cyprus': ['CY-N'],
  // China
  'mn|CN|Inner Mongolia': ['CN-NM'],
  'ko|CN|Yanbian (Jilin)': ['CN-JL'],
  'ug|CN|Xinjiang': ['CN-XJ'],
  'bo|CN|Tibet Autonomous Region, western Sichuan, Qinghai': ['CN-XZ', 'CN-QH'],
  // India
  'hi|IN|Hindi belt: Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Delhi, Haryana, Uttarakhand, Jharkhand, Chhattisgarh, Himachal Pradesh': [
    'IN-UP', 'IN-BR', 'IN-MP', 'IN-RJ', 'IN-DL', 'IN-HR', 'IN-UT', 'IN-JH', 'IN-CT', 'IN-HP', 'IN-CH',
  ],
  'mr|IN|Maharashtra (Mumbai, Pune, Nagpur)': ['IN-MH'],
  'bn|IN|West Bengal (Kolkata), Tripura, Barak Valley (Assam)': ['IN-WB', 'IN-TR'],
  'as|IN|Assam (Guwahati, Brahmaputra Valley)': ['IN-AS'],
  'pa|IN|Punjab (Amritsar, Ludhiana, Chandigarh)': ['IN-PB'],
  'gu|IN|Gujarat (Ahmedabad, Surat, Vadodara)': ['IN-GJ'],
  'or|IN|Odisha (Bhubaneswar, Cuttack, Puri)': ['IN-OR'],
  'ta|IN|Tamil Nadu (Chennai), Puducherry': ['IN-TN', 'IN-PY'],
  'te|IN|Andhra Pradesh, Telangana (Hyderabad)': ['IN-AP', 'IN-TG'],
  'kn|IN|Karnataka (Bengaluru, Mysuru)': ['IN-KA'],
  'ml|IN|Kerala (Thiruvananthapuram, Kochi, Kozhikode), Lakshadweep': ['IN-KL', 'IN-LD'],
}

export const regionKey = (lang: string, country: string, area?: string) => `${lang}|${country}|${area ?? ''}`
