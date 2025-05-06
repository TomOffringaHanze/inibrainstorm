const subjects = [
    "Een kijkdoos",
    "Een spiegel",
    "Interactieve muziek",
    "Kunst",
    "Een robot",
    "Een interactief schilderij",
    "Een boek",
    "Een beamerinstallatie",
    "Een doolhof",
    "Een VR installatie",
    "Een audioverhaal",
    "Een escaperoom",
    "Een interactief dashboard",
    "Een toekomstbeeld",
    "Een keuzewinkel",
    "Een digitale spiegel",
    "Een zintuigentunnel",
    "Een projectiemapping op objecten",
    "Een interactieve vloer",
    "Een AI-gedreven gesprekspartner",
    "Een menselijke bibliotheek",
    "Een wandelinstallatie met QR-codes",
    "Een tastbare tijdlijn",
    "Een geluidendoolhof",
    "Een lichtinstallatie",
    "Een klimaatklok",
    "Een 'smart' kledingstuk",
    "Een interactieve kaart van de stad",
    "Een brief aan het toekomst-station",
    "Een installatie met polaroids",
    "Een stemkastje met morele dilemma's",
    "Een installatie met warmtesensoren",
    "Een interactieve muur met post-its of touchpads",
    "Een augmented reality app",
    "Een 'levende' databoom (data als bladeren)"
  ];
  const verbs = ["over"];
  const objects = [
    "controle van natuur",
    "technologie versus natuur",
    "identiteit",
    "diversiteit",
    "zelfbeeld",
    "herinnering",
    "menselijk spoor",
    "vergankelijkheid",
    "privacy",
    "data-eigendom",
    "surveillance",
    "empathie",
    "sociale ongelijkheid",
    "migratie",
    "representatie",
    "inclusiviteit",
    "een levensverhaal",
    "arbeid",
    "discriminatie",
    "AI en vooroordelen",
    "klimaat",
    "ecologie",
    "menselijke impact",
    "verbondenheid",
    "stress",
    "gezondheid",
    "vertrouwen",
    "toegankelijkheid",
    "beperking als kracht",
    "burn-out en prestatiedruk",
    "werk-privébalans",
    "flexwerk en economische onzekerheid",
    "woonkrapte en betaalbaar wonen",
    "digitale identiteit en sociale media",
    "eenzaamheid in een verbonden wereld",
    "mentale gezondheid",
    "klimaatangst",
    "zoektocht naar zingeving en identiteit",
    "gender en seksualiteit",
    "diversiteit en inclusie op de werkvloer",
    "carrièreverwachtingen versus realiteit",
    "digitale detox en overprikkeling",
    "relaties en veranderende gezinspatronen",
    "cancelcultuur en meningsvrijheid",
    "studentenschulden en financiële druk",
    "activisme en maatschappelijke betrokkenheid",
    "toekomstonzekerheid door globalisering",
    "mobiliteit en migratie (studie/werk in het buitenland)",
    "AI, automatisering en toekomst van werk",
    "digitale vermoeidheid",
    "fear of missing out (FOMO)",
    "digitale verslaving",
    "zoektocht naar community en verbondenheid",
    "verlies van vertrouwen in instituties",
    "duurzaamheid versus consumptiedrang",
    "tijdelijke versus permanente relaties",
    "veranderende mannelijkheid/vrouwelijkheid",
    "intergenerationele kloof (Gen Z vs Millennials vs Boomers)",
    "ontwikkeling van zelfvertrouwen en zelfregie",
    "impact van algoritmes op wereldbeeld",
    "vergelijkingscultuur (via Instagram/TikTok)",
    "duurzaam reizen versus vliegschamte",
    "culturele identiteit en hybriditeit",
    "alternatieve leefvormen (co-housing, vanlife, etc.)",
    "maatschappelijke druk om 'succesvol' te zijn",
    "informatiestress (nieuwsmoeheid)",
    "leven in een 24/7 economie",
    "decolonisatie van denken en onderwijs",
    "emotionele intelligentie en kwetsbaarheid tonen",
    "ethische dilemma’s rond technologie",
    "zoektocht naar autonomie in een verbonden wereld",
    "klassenongelijkheid",
    "vriendschappen onderhouden in drukke levens",
    "mentorschap en het missen van rolmodellen",
  ];

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function spin(slotElement, array, delay) {
    return new Promise((resolve) => {
      let count = 0;
      const interval = setInterval(() => {
        slotElement.textContent = getRandomItem(array);
        count++;
        if (count > 15) {
          clearInterval(interval);
          const finalWord = getRandomItem(array);
          slotElement.textContent = finalWord;
          resolve(finalWord);
        }
      }, delay);
    });
  }

  async function spinSlots() {
    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");
    
    const word1 = await spin(slot1, subjects, 100);
    const word2 = await spin(slot2, verbs, 0);
    const word3 = await spin(slot3, objects, 100);

    console.log(`Gegenereerde zin: ${word1} ${word2} ${word3}.`);
  }