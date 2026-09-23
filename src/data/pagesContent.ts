export interface SubpageCategoryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  specs?: { label: string; value: string }[];
  features?: string[];
}

export const PLASTIC_WINDOWS_SUBPAGES: SubpageCategoryItem[] = [
  {
    id: 'veka-softline-82-md',
    slug: 'veka-softline-82-md-langai',
    title: 'Veka Softline 82 MD langai',
    subtitle: 'A++ 7 kamerų vokiškas profilis pasyviam namui',
    description: 'Veka Softline 82 MD profilių sistema su 82 mm montavimo pločiu, daugiakamerine šilumos izoliacija ir sudėtinga trijų tarpinių sistema atitinka aukščiausius A++ energinio naudingumo reikalavimus. Išorinės sienelės storis 3 mm pagal aukščiausią RAL A klasės standartą.',
    imageUrl: '/images/termolangai/plastikiniai_langai/veka.png',
    specs: [
      { label: 'Profilio gylis', value: '82 mm' },
      { label: 'Kamerų skaičius', value: '7 kameros' },
      { label: 'Šilumos laidumas', value: 'Uw iki 0.72 W/m²K' },
      { label: 'Stiklo paketas', value: 'Iki 52 mm (3 stiklai)' },
      { label: 'Tarpinės', value: '3 sandarinimo tarpinės (MD)' },
      { label: 'Sienelių storis', value: '3 mm (RAL A klasė)' },
    ],
    features: [
      'Plieno armatūra rėme ir varčioje pagal Veka gamyklos reikalavimus',
      'Winkhaus ActivPilot vokiški apkaustai su mikrovėdinimu ir apsauga nuo įsilaužimo',
      'Apsauga nuo triukšmo iki 47 dB',
      'Platus spalvų spektras ir medžio imitacijos',
    ],
  },
  {
    id: 'individualiems-sprendimams',
    slug: 'individualiems-sprendimams',
    title: 'Plastikiniai langai individualiems sprendimams',
    subtitle: 'Nestandartinės formos, arkos, trapecijos ir kampiniai sujungimai',
    description: 'Projektuojame ir gaminame sudėtingų architektūrinių formų plastikinius langus: trikampius, trapecinius, arkinius bei didelių matmenų vitrinas. Visi gaminiai sustiprinti specialiomis armavimo detalėmis.',
    imageUrl: '/images/termolangai/plastikiniai_langai/invidualiems_sprendimams.jpg',
    specs: [
      { label: 'Pritaikymas', value: 'Nestandartinė architektūra' },
      { label: 'Kampiniai sujungimai', value: '90° ir kintamo kampo profiliai' },
      { label: 'Armatūra', value: 'Papildomai sustiprinta plienu' },
    ],
    features: [
      'Galimybė pagaminti apvalius, arkinius ir trikampius langus',
      'Spalvinis laminavimas iš vienos arba abiejų pusių',
      'Dekoratyviniai skirtukai stiklo paketo viduje arba išorėje',
    ],
  },
  {
    id: 'pasyviam-namui',
    slug: 'pasyviam-namui',
    title: 'Plastikiniai langai pasyviam namui',
    subtitle: 'Maksimalus šilumos išsaugojimas pagal A++ ir pasyvaus namo standartą',
    description: 'Ypatingai šilti langai su integruotais termoizoliaciniais įdėklais profilio kamerose ir 3 stiklų selektyviniu paketu su šiltais Swisspacer rėmeliais. Užtikrina minimalius pastato šilumos nuostolius žiemos metu.',
    imageUrl: '/images/termolangai/plastikiniai_langai/xpasyviam_namui.jpg',
    specs: [
      { label: 'Šilumos laidumas', value: 'Uw nuo 0.68 W/m²K' },
      { label: 'Stiklo paketo Ug', value: '0.5 W/m²K su argono dujomis' },
      { label: 'Termorėmelis', value: 'Swisspacer Ultimate' },
    ],
    features: [
      'Termoizoliuotos kameros rėmuose',
      'Sertifikuota Passivhaus instituto reikalavimams',
      'Idealiai tinka geoterminiu šildymu ar saulės jėgainėmis aprūpintiems namams',
    ],
  },
  {
    id: 'plastikiniai-stumdomi-langai',
    slug: 'plastikiniai-stumdomi-langai',
    title: 'Plastikiniai stumdomi langai',
    subtitle: 'Vietą taupančios ir erdvę atveriančios stumdomos sistemos',
    description: 'Stumdomi plastikiniai langai ir terasinės konstrukcijos leidžia patogiai atverti dideles erdves neužimant kambario ploto. Lengvas slydimas ir nepriekaištingas sandarumas.',
    imageUrl: '/images/termolangai/plastikiniai_langai/terasoms.jpg',
    specs: [
      { label: 'Varstymo tipas', value: 'Lygiagretus stūmimas' },
      { label: 'Slenkstis', value: 'Pažemintas PVC / aliuminio' },
      { label: 'Stiklas', value: 'Saugus grūdintas / laminuotas' },
    ],
    features: [
      'Nereikalauja laisvos vietos patalpoje atidarymui',
      'Tinka terasoms, verandų įstiklinimui bei virtuvės langams',
      'Integruotas mikrovėdinimas',
    ],
  },
  {
    id: 'rehau-geneo-langai',
    slug: 'rehau-geneo-langai',
    title: 'REHAU GENEO langai',
    subtitle: 'Revoliucinis RAU-FIPRO kompozitas be plieno šalčio tiltelių',
    description: 'REHAU GENEO profilių sistema pagaminta iš aukštųjų technologijų medžiagos RAU-FIPRO, kuri profiliui suteikia maksimalų standumą be plieno armatūros. Tai eliminuoja šalčio tiltelius ir sumažina lango svorį iki 40%.',
    imageUrl: '/images/termolangai/plastikiniai_langai/GENEO.jpg',
    specs: [
      { label: 'Gylis', value: '86 mm' },
      { label: 'Kamerų skaičius', value: '6 kameros' },
      { label: 'Šilumos laidumas', value: 'Uw iki 0.70 W/m²K' },
      { label: 'Medžiaga', value: 'RAU-FIPRO pluošto kompozitas' },
    ],
    features: [
      'Konstrukcinis stabilumas be metalo armavimo',
      'Itin glotnus HDF paviršius, atstumiantis nešvarumus',
      'Puiki garso izoliacija iki 47 dB be papildomų priemonių',
    ],
  },
  {
    id: 'plastikiniai-langai-atsidarantys-i-lauka',
    slug: 'plastikiniai-langai-atsidarantys-i-lauka',
    title: 'Plastikiniai langai atsidarantys į lauką',
    subtitle: 'Skandinaviško tipo langai (Side-hung, Top-hung, IPA apkaustai)',
    description: 'Skandinavijoje itin populiarūs langai, kurių varčios atsidaro į lauko pusę. Vėjo gūsis varčią dar labiau spaudžia prie rėmo, todėl kuo stipresnis vėjas – tuo geresnis lango sandarumas. Labai patogu palangėms, nes ant jų galima laikyti daiktus ar gėles.',
    imageUrl: '/images/termolangai/plastikiniai_langai/nordic.jpg',
    specs: [
      { label: 'Varstymo kryptis', value: 'Į lauko pusę' },
      { label: 'Apkaustai', value: 'IPA / Spilka daniški apkaustai' },
      { label: 'Atsparumas vėjui', value: 'C5 klasė' },
    ],
    features: [
      'Vėjas spaudžia varčią prie tarpinės, didindamas sandarumą',
      'Visiškai laisva vidinė palangė',
      'Saugi vaikų atidarymo fiksacija',
    ],
  },
];

export const ALUMINUM_WINDOWS_SUBPAGES: SubpageCategoryItem[] = [
  {
    id: 'aliuminio-langai-vidaus-patalpoms',
    slug: 'aliuminio-langai-vidaus-patalpoms',
    title: 'Aliuminio langai vidaus patalpoms',
    subtitle: 'Pertvaros, vitrinos ir stumdomos sistemos biurams bei loftams',
    description: 'Siauro rėmo aliuminio konstrukcijos vidaus patalpų zonavimui, loftų pertvaroms ir moderniam interjerui. Lengvas, ilgaamžis metalas suteikia griežtą estetiką ir maksimalų šviesos pralaidumą.',
    imageUrl: '/images/termolangai/aliuminiai_langai/alium_pertvaros.jpg',
    specs: [
      { label: 'Paskirtis', value: 'Vidaus erdvės ir biurai' },
      { label: 'Stiklas', value: 'Grūdintas / matinis / akustinis' },
      { label: 'Spalva', value: 'Visa RAL paletė, anoduotas' },
    ],
    features: [
      'Itin plonas matomas profilis',
      'Aukšta garso izoliacija tarp patalpų',
      'Atsparumas drėgmei ir intensyviam naudojimui',
    ],
  },
  {
    id: 'aliuminio-langai-namams-ir-kt-pastatams',
    slug: 'aliuminio-langai-namams-ir-kt-pastatams',
    title: 'Aliuminio langai namams ir pastatams',
    subtitle: 'Architektūriniai fasadai, didelių matmenų vitrinos ir kampiniai stiklinimai',
    description: 'Šilumą izoliuojantys aliuminio profiliai gyvenamiesiems namams ir kotedžams. Leidžia įgyvendinti drąsiausias architektų vizijas: ištisines stiklo sienas nuo grindų iki lubų be perteklinių rėmų.',
    imageUrl: '/images/termolangai/aliuminiai_langai/alium_langai.jpg',
    specs: [
      { label: 'Profilio gylis', value: '75 – 86 mm' },
      { label: 'Termotiltelis', value: 'Poliamido daugiasluoksnė izoliacija' },
      { label: 'Maks. varčios svoris', value: 'Iki 400 kg' },
    ],
    features: [
      'Didžiausias konstrukcijų stabilumas rinkoje',
      'Atsparumas temperatūrų svyravimams ir saulės kaitrai',
      'Spalvų atsparumas UV spinduliams dešimtmečiams',
    ],
  },
  {
    id: 'aliuminio-langai-pasyviam-namui',
    slug: 'aliuminio-langai-pasyviam-namui',
    title: 'Aliuminio langai pasyviam namui',
    subtitle: 'A++ energinio naudingumo aliuminio konstrukcijos',
    description: 'Specialios serijos Aluprof ir Reynaers profiliai su praplėsta šilumos izoliacijos zona ir aerogelio intarpais. Atitinka griežčiausius A++ energinės klasės reikalavimus.',
    imageUrl: '/images/termolangai/aliuminiai_langai/termo_alium.jpg',
    specs: [
      { label: 'Šilumos laidumas', value: 'Uw nuo 0.78 W/m²K' },
      { label: 'Stiklo paketas', value: '3 stiklai (selektyvas + argonas)' },
      { label: 'Sandarumas', value: '4 klasė pagal EN 12207' },
    ],
    features: [
      'Garantuotas sandarumas be kondensato rizikos',
      'Puiki šilumos izoliacija ir minimalistinis dizainas',
    ],
  },
  {
    id: 'aliuminio-langai-balkonams-ir-terasoms',
    slug: 'aliuminio-langai-balkonams-ir-terasoms',
    title: 'Aliuminio langai balkonams ir terasoms',
    subtitle: 'Stumdomos ir varstomos sistemos apsaugai nuo vėjo ir kritulių',
    description: 'Patogios stumdomos aliuminio sistemos balkonų ir terasų įstiklinimui. Apsaugo erdvę nuo dulkių, sniego, lietaus ir triukšmo, prailgindamos terasos sezoną nuo ankstyvo pavasario iki vėlyvo rudens.',
    imageUrl: '/images/termolangai/aliuminiai_langai/alium_terasoms_balkon.jpg',
    specs: [
      { label: 'Sistema', value: 'Stumdoma 2, 3 ar 4 bėgelių' },
      { label: 'Priežiūra', value: 'Minimali, lengvai valomi bėgeliai' },
    ],
    features: [
      'Galimybė nustumti visas varčias į vieną pusę',
      'Tylūs nerūdijančio plieno guoliniai ratukai',
      'Integruotos spynelės saugumui',
    ],
  },
];

export const DOORS_SUBPAGES: SubpageCategoryItem[] = [
  {
    id: 'plastikines-balkono-durys',
    slug: 'plastikines-balkono-durys',
    title: 'Plastikinės balkono durys',
    subtitle: 'Sandarios ir ekonomiškos Veka balkono durys su vėdinimo funkcija',
    description: 'Termo balkono durys yra itin funkcionalios, patvarios ir dera tiek prie interjero, tiek prie fasado. Komplektuojamos su pažemintu aliuminio slenksčiu, atvertimo mechanizmu bei trauktuku iš lauko pusės.',
    imageUrl: '/images/termolangai/durys/balkonines_durys.jpg',
    specs: [
      { label: 'Profilis', value: 'VEKA 82 mm (A++ klasė)' },
      { label: 'Slenkstis', value: 'Šiltas pažemintas aliuminio slenkstis' },
      { label: 'Furnitūra', value: 'Winkhaus ActivPilot' },
    ],
    features: [
      'Rūkoriaus rankenėlė ir fiksatorius lauko pusėje',
      'Mikrovėdinimo ir laipsniško atvertimo parinktis',
    ],
  },
  {
    id: 'plastikines-lauko-durys',
    slug: 'plastikines-lauko-durys',
    title: 'Plastikinės lauko durys',
    subtitle: 'Sustiprintos pagrindinės įėjimo durys namams ir kotedžams',
    description: 'Gražios, sandarios ir lengvai prižiūrimos plastikinės lauko durys. Specialūs plieno kampiniai suvirinimai varčioje ir daugiataškės spynos užtikrina formos stabilumą ir saugumą.',
    imageUrl: '/images/termolangai/durys/PVC_lauko_durys.jpg',
    specs: [
      { label: 'Varčios profilis', value: '120 mm sustiprinta varčia' },
      { label: 'Užraktai', value: '3 taškų automatinis užraktas' },
      { label: 'Vyriai', value: '3D reguliuojami sustiprinti vyriai' },
    ],
    features: [
      'Dekoratyviniai termoizoliaciniai užpildai',
      'Saugūs rakinimo cilindrai',
    ],
  },
  {
    id: 'aliuminio-durys',
    slug: 'aliuminio-durys',
    title: 'Aliuminio durys',
    subtitle: 'Itin ilgaamžės durys intensyviam naudojimui',
    description: 'Tinka tiek komerciniams pastatams, tiek moderniems namams. Aliuminis atlaiko šimtus tūkstančių varstymo ciklų be jokio sureguliavimo poreikio.',
    imageUrl: '/images/termolangai/durys/alium_vidaus_durys.jpg',
    specs: [
      { label: 'Medžiaga', value: 'Aliuminio lydinys 6060' },
      { label: 'Spalvos', value: 'Visa RAL paletė + struktūriniai dažai' },
    ],
    features: [
      'Gali būti komplektuojamos su praėjimo kontrole ir kodine spyna',
      'Atsparios smūgiams ir deformacijai',
    ],
  },
  {
    id: 'aliuminio-lauko-durys',
    slug: 'aliuminio-lauko-durys',
    title: 'Aliuminio lauko durys',
    subtitle: 'Aukščiausios klasės įėjimo durys su vientisa varčia ir termoizoliacija',
    description: 'Moderniausio dizaino lauko durys su paslėptais vyriais, pirštų atspaudų skaitytuvu bei vientisa plokšte iš abiejų pusių. Užtikrina pasyvaus namo šilumos standartą.',
    imageUrl: '/images/termolangai/durys/alium_lauko_durys.jpg',
    specs: [
      { label: 'Užpildas', value: 'Vientisas 75–90 mm termo skydas' },
      { label: 'Šilumos laidumas', value: 'Ud iki 0.8 W/m²K' },
    ],
    features: [
      'Integruotas LED apšvietimas rankenoje',
      'Išmani automatika ir biometrinis atidarymas',
    ],
  },
  {
    id: 'aliuminio-terasines-durys',
    slug: 'aliuminio-terasines-durys',
    title: 'Aliuminio terasinės durys (HST)',
    subtitle: 'Pakeliamos-stumdomos panoraminės vitrinos iki 6.5 metrų pločio',
    description: 'Didžiausio formato stiklinimas su lengvu varstymu vienu pirštu. Nulinio aukščio slenkstis sukuria tobulą perėjimą iš svetainės tiesiai į terasą.',
    imageUrl: '/images/termolangai/durys/terasines_durys.jpg',
    specs: [
      { label: 'Maks. plotis', value: 'Iki 6500 mm' },
      { label: 'Maks. aukštis', value: 'Iki 3000 mm' },
      { label: 'Slenkstis', value: 'Plokščias, įleidžiamas į grindis' },
    ],
    features: [
      'Varčia slysta be garso ir vibracijų',
      'Grūdintas saugus 3 stiklų paketas',
    ],
  },
  {
    id: 'sarvuotos-buto-durys',
    slug: 'sarvuotos-buto-durys',
    title: 'Šarvuotos buto durys',
    subtitle: 'Aukščiausia garso izoliacija (iki 42 dB) ir patikima apsauga',
    description: 'Saugios šarvuotos durys butams su akmens vatos užpildu, dviguba tarpinių sistema ir sertifikuotomis itališkomis spynomis (Mottura, Securemme, Iseo).',
    imageUrl: '/images/termolangai/durys/sarv_buto_L.jpg',
    specs: [
      { label: 'Plieno lakštas', value: '1.5 – 2.0 mm šaltai valcuotas plienas' },
      { label: 'Garso izoliacija', value: '40 – 42 dB' },
      { label: 'Spynos', value: 'Seifinė + cilindrinė aukščiausios saugumo klasės' },
    ],
    features: [
      'Nedegus akmens vatos užpildas',
      'Platus frezuotų MDF plokščių dizainų pasirinkimas',
    ],
  },
  {
    id: 'sarvuotos-lauko-durys',
    slug: 'sarvuotos-lauko-durys',
    title: 'Šarvuotos lauko durys',
    subtitle: 'Specialiai lauko sąlygoms su termo tiltelio nutraukimu',
    description: 'Šarvuotos durys namo įėjimui, pagamintos naudojant drėgmei atsparią Okoume ar MDF plokštę bei staktos termo tiltelio nutraukimą, kuris neleidžia durims peršalti ir rasoti.',
    imageUrl: '/images/termolangai/durys/sarvo_lauko_310x310.jpg',
    specs: [
      { label: 'Termotiltelis', value: 'Poliamido intarpas staktoje ir varčioje' },
      { label: 'Atsparumas drėgmei', value: 'Sertifikuota lauko apdaila' },
    ],
    features: [
      'Neperšąla net prie -30°C šalčio',
      'Nerūdijančio plieno slenkstis',
    ],
  },
];

export const GATES_SUBPAGES: SubpageCategoryItem[] = [
  {
    id: 'buitiniai-vartai',
    slug: 'buitiniai-vartai',
    title: 'Buitiniai garažo vartai',
    subtitle: 'Šilti segmentiniai vartai privačių namų garažams',
    description: 'Garažas – nepamainoma vieta jūsų automobiliui. Vienas iš pagrindinių garažo saugumo ir šilumos garantų yra kokybiški segmentiniai vartai. Pagaminti iš 40–45 mm poliuretano plokščių su perimetrinėmis tarpinėmis.',
    imageUrl: '/images/termolangai/vartai/buitiniai_vartai_L.jpg',
    specs: [
      { label: 'Skydo storis', value: '40 – 45 mm poliuretano užpildas' },
      { label: 'Spyruoklės', value: 'Iki 25 000 ciklų resursas' },
      { label: 'Automatika', value: 'Somfy / Hormann su 2 pulteliais' },
    ],
    features: [
      'Apsauga nuo pirštų prispaudimo',
      'Avarinis atidarymas dingus elektrai',
      'Tylus slydimas nailoniniais ratukais su guoliais',
    ],
  },
  {
    id: 'pramoniniai-vartai',
    slug: 'pramoniniai-vartai',
    title: 'Pramoniniai garažo vartai',
    subtitle: 'Intensyvaus naudojimo vartai logistikos centrams, servisams ir sandėliams',
    description: 'Pramoniniai vartai montuojami įmonėse, sandėliuose, autoservisuose ir gamybos cechuose. Pasižymi sustiprintu karkasu, galingomis pramoninėmis spyruoklėmis (iki 100 000 ciklų) ir galimybe integruoti panoraminius langus ar personalo duris.',
    imageUrl: '/images/termolangai/vartai/pramoniniai_L.jpg',
    specs: [
      { label: 'Intensyvumas', value: 'Iki 100 000 varstymo ciklų' },
      { label: 'Valdymas', value: 'Pramoninė veleno pavara su grandine' },
    ],
    features: [
      'Galimybė įmontuoti praėjimo duris varčioje',
      'Panoraminis akrilo stiklinimas natūraliai šviesai',
      'Saugos fotoelementai ir optiniai jutikliai',
    ],
  },
];
