// Where each plant is a useful clue *inside* the large countries that the vegetation map splits
// into states and provinces. ISO 3166-2 codes; a bare country code means "the whole country".
// Every clue country that is split must be listed here (checked by vegetation.test.ts), so the map
// and the "where does it grow?" quiz are precise.

/** Countries split into regions on the vegetation map (see tools/build-map.mjs). */
export const VEG_SPLIT = ['BR', 'MX', 'US', 'CA', 'AR', 'CL', 'CO', 'PE', 'AU', 'CN', 'IN', 'RU', 'ID', 'MY', 'ZA', 'ES', 'TR', 'JP', 'NZ', 'GB', 'VN', 'PH'] as const

const r = (s: string) => s.split(/\s+/).filter(Boolean)

export const plantRegions: Record<string, string[]> = {
  // ---- Trees ----
  'coconut-palm': r(`
    PH
    
    IN-KL IN-TN IN-KA IN-GA IN-AP IN-OR IN-LD IN-AN
    BR-CE BR-RN BR-PB BR-PE BR-AL BR-SE BR-BA BR-PA BR-MA BR-PI
    MX-COL MX-GRO MX-OAX MX-TAB MX-CAM MX-YUC MX-ROO MX-VER
    ID MY`),
  'oil-palm': r(`
    MY
    ID-AC ID-SU ID-SB ID-RI ID-JA ID-SS ID-BE ID-LA ID-KB ID-KT ID-KS ID-KI ID-KU
    CO-MET CO-CES CO-MAG CO-NAR CO-CAS CO-SAN`),
  'royal-palm': r('BR MX-YUC MX-ROO MX-CAM MX-TAB MX-VER MX-CHP'),
  'babassu': r('BR-MA BR-PI BR-TO'),
  'carnauba': r('BR-CE BR-PI BR-RN BR-PB'),
  'acai': r('BR-PA BR-AP'),
  'buriti': r(`
    BR-GO BR-TO BR-MG BR-BA BR-MT BR-DF BR-MS BR-MA BR-PI
    PE-LOR PE-UCA PE-SAM PE-MDD
    CO-MET CO-CAS CO-VID CO-ARA CO-GUV`),
  'eucalyptus': r(`
    AU
    ES-GA ES-AS ES-CB ES-AN
    BR-MG BR-SP BR-BA BR-ES BR-MS BR-PR BR-RS
    ZA-KZN ZA-MP ZA-LP ZA-EC
    CL-BI CL-ML CL-NB CL-AR
    IN-KL IN-TN IN-KA`),
  'scots-pine': r('RU GB-SCT'),
  'radiata-pine': r('AU-VIC AU-NSW AU-SA AU-TAS CL-ML CL-BI CL-NB CL-AR CL-LR ZA-WC ZA-EC ES-PV ES-CB NZ'),
  'larch': r('RU-KYA RU-IRK RU-SA RU-ZAB RU-BU RU-AMU RU-KHA RU-MAG RU-TY'),
  'birch': r('RU'),
  'lombardy-poplar': r('ES-CL ES-AR ES-NC ES-RI TR'),
  'italian-cypress': r(`
    TR-35 TR-09 TR-48 TR-07 TR-45 TR-33 TR-31 TR-17 TR-10
    ES-AN ES-MC ES-VC ES-CT ES-IB`),
  'stone-pine': r('ES-AN ES-CL ES-CT ES-VC TR-35 TR-07 TR-48 TR-09'),
  'araucaria': r('BR-PR BR-SC BR-RS AR-N'),
  'olive': r(`
    ES-AN ES-CM ES-EX ES-CT ES-VC ES-MC ES-IB ES-AR
    TR-35 TR-09 TR-48 TR-45 TR-10 TR-17 TR-16 TR-31 TR-27 TR-79`),
  'umbrella-thorn': r('ZA-LP ZA-MP ZA-NW ZA-KZN ZA-NC'),
  'baobab': r('ZA-LP'),
  'jacaranda': r('ZA-GP ZA-LP ZA-MP ZA-KZN AR-C AR-B AR-T AR-A AR-Y MX-CMX MX-MEX MX-MOR MX-JAL AU-QLD AU-NSW'),
  'mango': r(`
    PH
    
    IN
    BR-AM BR-PA BR-MA BR-PI BR-CE BR-RN BR-PB BR-PE BR-AL BR-SE BR-BA BR-TO BR-GO BR-MT BR-MS
    BR-MG BR-ES BR-RJ BR-SP BR-DF BR-RO BR-AC BR-AP BR-RR
    MX-SIN MX-NAY MX-GRO MX-OAX MX-CHP MX-VER MX-MIC MX-COL MX-JAL`),
  'bamboo': r(`
    VN
    
    JP-02 JP-03 JP-04 JP-05 JP-06 JP-07 JP-08 JP-09 JP-10 JP-11 JP-12 JP-13 JP-14 JP-15 JP-16 JP-17 JP-18 JP-19 JP-20 JP-21 JP-22 JP-23 JP-24 JP-25 JP-26 JP-27 JP-28 JP-29 JP-30 JP-31 JP-32 JP-33 JP-34 JP-35 JP-36 JP-37 JP-38 JP-39 JP-40 JP-41 JP-42 JP-43 JP-44 JP-45 JP-46 JP-47
    CN-GD CN-GX CN-FJ CN-ZJ CN-JX CN-HN CN-SC CN-YN CN-GZ CN-AH CN-CQ CN-HB
    IN-AS IN-MZ IN-TR IN-MN IN-NL IN-AR IN-ML IN-KL IN-KA
    ID CO-CAL CO-RIS CO-QUI CO-VAC CO-ANT CO-TOL`),
  'saguaro': r('US-AZ MX-SON'),
  'prickly-pear': r('MX ES-AN ES-MC ES-VC ES-IB ES-CN ZA-EC ZA-NC ZA-WC'),
  'mangrove': r(`
    PH
    
    BR-AP BR-PA BR-MA BR-PI BR-CE BR-RN BR-PB BR-PE BR-AL BR-SE BR-BA BR-ES BR-RJ BR-SP BR-PR BR-SC
    MX-NAY MX-SIN MX-SON MX-BCS MX-CAM MX-YUC MX-ROO MX-TAB MX-VER MX-CHP MX-OAX MX-GRO MX-COL MX-JAL MX-MIC MX-TAM
    ID MY`),
  // ---- Crops ----
  'sugarcane': r(`
    PH-06 PH-07 PH-10
    
    BR-SP BR-MG BR-GO BR-MS BR-PR BR-PE BR-AL BR-MT
    IN-UP IN-MH IN-KA IN-TN IN-GJ IN-BR IN-AP
    MX-VER MX-JAL MX-SLP MX-OAX MX-TAM MX-CHP
    AU-QLD AU-NSW CO-VAC CO-CAU CO-RIS ZA-KZN ZA-MP`),
  'coffee': r(`
    VN-33 VN-30 VN-72 VN-35 VN-28
    
    BR-MG BR-ES BR-SP BR-BA BR-PR BR-RO
    CO-ANT CO-CAL CO-RIS CO-QUI CO-HUI CO-TOL CO-CAU CO-NAR CO-VAC CO-SAN
    ID-AC ID-SU ID-LA ID-SS ID-JI ID-BA ID-SN ID-NT
    IN-KA IN-KL IN-TN
    MX-CHP MX-VER MX-OAX MX-PUE MX-GRO
    PE-JUN PE-CAJ PE-SAM PE-AMA PE-CUS PE-PAS PE-PUN PE-HUC`),
  'rice': r(`
    VN-HN VN-56 VN-61 VN-66 VN-67 VN-63 VN-18 VN-20 VN-70 VN-HP VN-44 VN-45 VN-47 VN-CT VN-73 VN-52 VN-55 VN-59 VN-50 VN-51 VN-49 VN-46 VN-41 PH-03 PH-02 PH-01 PH-06 PH-12
    
    JP
    CN-HN CN-HB CN-JX CN-AH CN-JS CN-ZJ CN-GD CN-GX CN-SC CN-HL CN-JL CN-YN CN-GZ CN-CQ CN-FJ CN-LN
    IN-WB IN-UP IN-PB IN-OR IN-AP IN-TG IN-TN IN-BR IN-CT IN-AS IN-KA IN-KL
    ID MY-02 MY-09 MY-03 MY-08 MY-11 MY-12 MY-13`),
  'tea': r(`
    VN-69 VN-68 VN-07 VN-03 VN-06 VN-35 VN-05 VN-01
    
    JP-22 JP-46 JP-24 JP-26 JP-45 JP-40 JP-11 JP-29 JP-43 JP-41 JP-42
    CN-FJ CN-ZJ CN-YN CN-AH CN-HB CN-HN CN-GZ CN-SC CN-JX CN-GX CN-GD
    IN-AS IN-WB IN-KL IN-TN IN-KA IN-HP
    TR-53 TR-61 TR-08 TR-28
    ID-JB ID-JT ID-SU MY-06 MY-12`),
  'cocoa': r('ID-SN ID-ST ID-SG ID-SR BR-BA BR-PA PE-SAM PE-UCA PE-HUC PE-JUN PE-CUS'),
  'banana': r(`
    PH-11 PH-12 PH-10
    
    IN-TN IN-MH IN-GJ IN-AP IN-KA IN-KL IN-UP IN-BR
    CN-GD CN-GX CN-YN CN-HI CN-FJ
    ID BR-SP BR-MG BR-BA BR-SC BR-PE BR-PA BR-CE
    CO-ANT CO-MAG CO-QUI CO-RIS CO-CAL`),
  'maize': r(`
    US-IA US-IL US-NE US-MN US-IN US-SD US-OH US-WI US-MO US-KS US-ND US-MI US-KY
    CN-HL CN-JL CN-LN CN-NM CN-HE CN-SD CN-HA CN-SX CN-SN
    BR-MT BR-PR BR-GO BR-MS BR-MG BR-RS BR-SP BR-SC
    AR-B AR-X AR-S AR-E AR-L AR-D
    MX-SIN MX-JAL MX-MEX MX-MIC MX-GUA MX-CHP MX-VER MX-PUE MX-CHH
    ZA-FS ZA-MP ZA-NW ZA-KZN ZA-GP`),
  'wheat': r(`
    RU-KDA RU-ROS RU-STA RU-VGG RU-SAR RU-ORE RU-ALT RU-OMS RU-NVS RU-KGN RU-CHE RU-BA RU-TA RU-SAM
    RU-KRS RU-BEL RU-VOR RU-TAM RU-LIP RU-ORL RU-PNZ
    US-KS US-ND US-MT US-OK US-WA US-TX US-NE US-SD US-CO US-ID US-MN
    CA-SK CA-AB CA-MB
    AU-WA AU-NSW AU-SA AU-VIC AU-QLD
    AR-B AR-X AR-S AR-L AR-E
    IN-UP IN-PB IN-HR IN-MP IN-RJ IN-GJ IN-BR IN-MH
    TR-42 TR-06 TR-26 TR-71 TR-66 TR-58 TR-21 TR-63 TR-38 TR-40 TR-70 TR-68 TR-03 TR-51 TR-50 TR-19 TR-22 TR-59 TR-39`),
  'cotton': r(`
    IN-GJ IN-MH IN-TG IN-AP IN-MP IN-HR IN-PB IN-RJ IN-KA IN-TN
    CN-XJ
    US-TX US-GA US-MS US-AR US-NC US-AL US-MO US-OK US-TN US-SC US-LA US-AZ US-CA
    BR-MT BR-BA BR-GO BR-MS
    TR-63 TR-21 TR-01 TR-09 TR-31 TR-45 TR-35 TR-47
    AU-NSW AU-QLD`),
  'tobacco': r(`
    CN-YN CN-GZ CN-HN CN-SC CN-CQ CN-HA CN-SD
    IN-AP IN-KA IN-GJ
    BR-RS BR-SC BR-PR BR-AL BR-BA
    ID-JI ID-JT ID-NB
    US-NC US-KY US-VA US-TN US-SC US-GA
    TR-45 TR-35 TR-55 TR-02`),
  'grapevine': r(`
    ES
    CL-VS CL-RM CL-LI CL-ML CL-CO CL-NB CL-BI CL-AT
    AR-M AR-J AR-A AR-R AR-Q AR-F AR-K
    ZA-WC ZA-NC
    AU-SA AU-VIC AU-NSW AU-WA AU-TAS
    US-CA US-WA US-OR US-NY
    TR-45 TR-20 TR-35 TR-44 TR-27 TR-50 TR-59 TR-17`),
  'pineapple': r('PH-10 PH-12 BR-PA BR-PB BR-MG BR-TO BR-BA BR-RN ID-LA ID-SU ID-RI MX-VER MX-OAX MX-TAB'),
  'rubber': r(`
    VN-57 VN-58 VN-37 VN-39 VN-43 VN-30 VN-28 VN-33 VN-72
    
    MY-01 MY-02 MY-03 MY-05 MY-06 MY-08 MY-11 MY-13 MY-12
    ID-SU ID-SS ID-JA ID-RI ID-SB ID-KB ID-KT ID-KS ID-AC ID-BE ID-LA
    IN-KL IN-TR IN-KA IN-TN`),
}
