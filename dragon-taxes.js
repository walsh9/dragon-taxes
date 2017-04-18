/*Preload Assets*/
WebFontConfig = {
  active: function() {
    $('#loadscreen').fadeOut(400);
    console.log('Fonts loaded.');
  },
  google: {
    families: ['Shadows Into Light','Waiting for the Sunrise','Annie Use Your Telescope','Kaushan Script','Roboto Mono','Satisfy','Great Vibes','Merriweather','Special Elite','Rye','Miltonian Tattoo','Sancreek']
  },
  custom: {
    families: ['typobackgroundsregular'],
    urls: ['fonts/typoBackgrounds/typoBackgrounds.css']
  }
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  s.parentNode.insertBefore(wf, s);
})(document);

/* Helper methods */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle (array) {
  //Fisher–Yates shuffle
  var i = 0;
  var j = 0;
  var temp = null;
  var newArray = array.slice();
  for (i = newArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

function uniqueRandomInts(min, max, num) {
    if (max + 1 - min  < num) {
        throw new Error("There aren't " + num + " unique ints in that range.");
    }
    var array = [];
    while (array.length < num) {
        var random = getRandomInt(min, max);
        if (array.indexOf(random) === -1) {
            array.push(random);
        }
    }
    return array;
}

function getRandom(array) {
  return  array[getRandomInt(0, array.length - 1)];
}

function getRandoms(array, num) {
    return shuffle(array).slice(0,num);
} 

function numberWithCommas(n) {
    if (n)
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else
        return '0';
}

function stripCommas(s){
  if (s.replace)
    return s.replace(/,/g, "");
  return(s);
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function milliToTime(milli) {
    var min = Math.floor(milli / (60 * 1000));
    var sec = Math.floor(milli % (60 * 1000) / 1000);
    if (sec.toString().length == 1) sec = "0" + sec;
    return "" + min + ":" + sec;
}

function ordinal(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

/* Random Names */
var familyNameParts = ["rock","wood","shard","bottom","wild","brook","berry","tall","swine","grove","barrel","stout","valley","vale","tail","feather"];
var familyNameSuffixes = ["sson","son","sworth","sford","smith","saar","stad","sen","berg","s"];
var simpleGivenNames = ["John","Mary","Donna","William","Sarah","Terry","Saul","Prudence","Lucas","Oliver","James","Jack","Magnus","Charles","Jacob","Emma","Elise","Elsinore","Sofia","Clara","Anna","Lily","Thomas","Arthur","Elsie"];
var givenNamePrefixes = ["ber","den","don","gib","sal","ter","lil","wil","del","tem","zel","pal","tid","bren","til"];
var givenNameMiddles = ["en","on","al","am","s","us","em","es","ss","min"];
var givenNameSuffixes = ["na","ton","mi","mu","mo","la","va","jun","dun","da","do","to","ta","tus"];

var randomGivenName = function() {
    var chance = Math.random();
    if (chance < 0.5) {
        return getRandom(simpleGivenNames);
    } else if (chance < 0.8) {
        return toTitleCase(getRandom(givenNamePrefixes) + getRandom(givenNameSuffixes));
    }
    return toTitleCase(getRandom(givenNamePrefixes) + getRandom(givenNameMiddles) + getRandom(givenNameSuffixes));        
};

var randomFamilyName = function() {
    var chance = Math.random();
    if (chance < 0.2) {
        return toTitleCase(getRandom(familyNameParts));
    } else if (chance < 0.5) {
        return toTitleCase(getRandoms(familyNameParts,2).join(''));
    } else if (chance < 0.9) {
        return toTitleCase(getRandom(familyNameParts) + getRandom(familyNameSuffixes));
    }
    return toTitleCase(getRandoms(familyNameParts,2).join('') + getRandom(familyNameSuffixes));
};
var randomName = function() {
  return randomGivenName() + " " + randomFamilyName();
};

/* Lists */
var races = ["dragon","erk","drev","gronk","glorn"];
var treasures = ["sword","tome","amulet","goblet","ring","helmet","shield","spear",
"lance","boots","flute","panpipes","whistle","battleaxe","mace","trinket","bracers","dice","lantern","staff","necklace","brooch","sphere","cube","pyramid","talisman","device","music box","spoon","token","totem","cauldron","bottle","mask","key","urn","mirror","locket","bircage","crown","idol","chalice","mechanism","apparatus","box","bell"];
var runed = ["engraved", "marked", "painted", "etched", "inscribed","adorned"];
var runes = ["ancient","indecipherable","profane","mysterious"];
var enchantments = ["protection","swiftness","luck","life","death","ancient","mysterious","creation","banishment","sealing","clockwork","equation"];
var auras = ["teal","holy","unholy","golden","orange","wistful","pale"];
var ranking = ["AAA","AA","A","B","C"];
var treasureAdjectives = ["ancient","engraved","shimmering","masterwork","slimy","ornate","antique","shiny","radiant","unusual","flawless","curious"];
var treasureMaterials = ["golden","jeweled","jade","sapphire","emerald","ruby","platinum","glass","onyx","silver","bronze","brass","ivory","copper","titanium"];
var artDescriptors = ["Rare","Masterpiece","Famous","Extraordinary","Elaborate","One of a kind","Exquisite","Antique","Priceless","Audacious","Timeless"];
var artworks = ["painting","sculpture","vase","tapestry"];
var artAdjectives = ["gloomy","sinister","radiant","beautiful","stunning","mysterious","bizarre","strange","colossal","miniature","majestic","haunting","wispy","grotesque","resplendent","eerie","forgotten","underground","golden","ethereal","twisted","bizzare","burning","underwater","ancient","quiet","striking","unusual","old"];
var artSubjects = ["landscape","mountain","lake","castle","village","tree","bridge","cave","battlefield","tundra","desert","sunset","sunrise","spirit","doorway","manor","forest","waterway","city","tower","palace","kingdom","marketplace","tunnel","mausoleum","garden","orchard","glade"];
var nobleTitles = ["Queen","King","Prince","Princess","Duke","Duchess","Count","Countess","Baron","Baroness"];
var lands = ["Northland","Eastland","Southland"]; // No one lives in Westland.
races.forEach(function(race) {
    var raceAdjective = race == "dragon" ? "draconic" : race + "ish";
    treasures.push(race + " figurine");
    runes.push(raceAdjective);
    artSubjects.push(raceAdjective + " warrior");
    artSubjects.push(raceAdjective + " wizard");
    artSubjects.push(raceAdjective + " ruler");
});

/* Handlebars.js helpers */
Handlebars.registerHelper('random', function(n) {
  return  getRandomInt(1, n);
});

Handlebars.registerHelper('ordinal', function(n) {
  return  ordinal(n);
});

Handlebars.registerHelper('withCommas', function(n) {
  return  numberWithCommas(n);
});

Handlebars.registerHelper('currency', function(n) {
  if (isNaN(n)) {
    return n
  } else {
    return  numberWithCommas(n);
  }
});


Handlebars.registerHelper('formatInput', function(n) {
  if (isNaN(n)) {
    return n
  } else {
    return numberWithCommas(n) + " G";
  }
});

Handlebars.registerHelper('randomName', function() {
  return  randomName();
}); 

Handlebars.registerHelper('date', function(person) {
  if(this.day && this.season)
  return ordinal(this.day) + " of " + this.season;
});

// The month names of the ground dwellers
var humanoidMonths = ["Gnat", "Fly", "Flea", "Tick", "Spider", "Ant", "Bee", "Moth", "Roach", "Worm", "Beetle", "Weevil"];
Handlebars.registerHelper('randomHumanoidDate', function() {
  return ordinal(getRandomInt(1,30)) + " of " + getRandom(humanoidMonths) + ", 2015.";
});

var fancyTitles = ["Esq.","Adv."];
Handlebars.registerHelper('fancyTitle', function(chance) {
  if (Math.random() < chance) {
    return ", " + getRandom(fancyTitles);
  }
  return "";
});

Handlebars.registerHelper('randomLetter', function() {
  return  getRandom("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678".split(""));
}); 

var aideTitles = ["Aide", "Secretary", "Clerk", "Assistant", "Personal Aide", "Personal Clerk"];
Handlebars.registerHelper('aideTitle', function() {
  return getRandom(aideTitles);
});

Handlebars.registerHelper('dragonEpithet', function() {
  var epithets = ["dragon","lava breath","smoggy","sky lizard","gasbag","wing worm","blasto","smoke snout","scale face","flame frog","gassy gecko"];
  return getRandom(epithets);
});

/*Shop names*/
var shopNouns = ["Elephant","Hedgehog","Grasshopper","Lamb","Eagle","Falcon","Lion","Hound","Swan","Horse","Rodent","Ghost","Bishop","Sailor","Fiddler","Traveler","Wanderer","Farmer","Snake","Serpent","Squirrel","Owl","Squid","Spirit","Anchor","Bell","Lock","Key","Lute","Harp","Castle","Tower","Helm","Crown","Rose","Vine"];
shopNouns = shopNouns.concat("Gnat", "Flea", "Tick", "Spider", "Ant", "Bee", "Moth", "Worm", "Beetle", "Weevil");
shopNouns = shopNouns.concat(races.map(toTitleCase));
var shopAdjectives = ["Blue","Golden","Gilded","Silver","Lucky","Wretched","Rusty","Brazen","Green","Red","Half","Old","Third","Second","First","Seventh","Silent","Wistful","Rowdy","Smiling","Laughing","Finest","Unfortunate","Fortunate","Lost","Leaping","Soaring","Coy","Charming","Clever","Sleepy","Dancing","Waltzing"];
var shopTypes = ["Anvil","Forge","Carpentry","Larder","Supplies","Traders","Planks","Candles","Goods","Fishes","Fishery","Pies","Meats","Grains","Herbs","Textiles","Cloths","Fabrics","Ointments","Liniments","Medicines","Talismans","Charms","Fortune Telling","Pots","Glass","Lenses","Ropes","Books","Jewelry","Pharmacy","Apothecary","Delights","Wonders","Curiosities","Oddities","Sundries","Financing","Valuation","Shipping","Trinkets","Wholesale","Gear","Provisions","Junk Shop","Used Goods","Secrets","Solutions","Finery"];
var barTypes = ["Tavern","Alehouse","Pub","Lodge","Inn","House"];
var randomShopName = function(ownerName, isBar) {
  ownerName = ownerName || randomName();
  ownerGivenName = ownerName.split(" ")[0];
  ownerSurname = ownerName.split(" ")[1];
  var chance = Math.random();
  if (isBar) {
    if        (chance < 0.10) { // "n things"
      return  getRandom(["Two","Three","Four","Seven","Ten","One Hundred"]) + 
        " " + getRandom(shopNouns) + "s";
    } else if (chance < 0.30) { // "The noble/race's thing"
      return  "The " + getRandom(nobleTitles.concat(races.map(toTitleCase)).map(function(t){return t + "'s";})) + " " + getRandom(shopNouns);
    } else if (chance < 0.60) { // "The thing and the otherthing"
      return  "The " + getRandom(shopNouns) + " and The "  + getRandom(shopNouns);
    } else if (chance < 0.80) { // "The adjective thing"
      return  "The " + getRandom(shopAdjectives) + " " + getRandom(shopNouns);
    } else { // "adjective thing bar"
      return  getRandom(shopAdjectives) + " " + getRandom(shopNouns) + " " + getRandom(barTypes);
    }
  } else { // notBar
    if        (chance < 0.10) { // "n things shop"
      return  getRandom(["Two","Three","Four","Seven","Ten","One Hundred"]) + 
        " " + getRandom(shopNouns) + "s "  + getRandom(shopTypes);
    } else if (chance < 0.45) { // "adjective thing shop"
      return  getRandom(shopAdjectives) + " " + getRandom(shopNouns) + " " + getRandom(shopTypes);
    } else if (chance < 0.80) { // "lastname shop"
      return  ownerSurname + " " + getRandom(shopTypes);
    } else { // "firstname's shop"
      return ownerGivenName + "'s " + getRandom(shopTypes);
    }
  }
};

/* Townnames */
var townPrefixes = ["Village of ", "Town of", "Hamlet of ", "City of ", ];
var townSuffixes = ["ville", "burg", "ton", "stead", " Village", " City", " Settlement"];
var randomTownName = function() {
  var chance = Math.random();
  if (chance < 0.66) {
    return randomFamilyName() + getRandom(townSuffixes);
  } 
  return getRandom(townPrefixes) + randomFamilyName();
};

var exasperatedComplaints = [
    "Enough is enough!",
    "What the hell!",
    "Why is it always me?",
    "Could you please stop!",
    "Go pick on someone your own size!",
    "This is really starting to get old!",
    "I can't believe this!",
    "Give me a break!",
    "I can't believe this!",
    "Do you have something against me?",
    "Is it me?",
    "Why would you do this?"];
Handlebars.registerHelper('exasperatedComplaint', function() {
  return getRandom(exasperatedComplaints);
}); 
   var peasantAppeals = [
    "I'm just a poor farmer!",
    "I have a family!",
    "I have children to feed",
    "I have a family to feed!",
    "You've ruined me!",
    "Please show mercy!",
    "I have nothing left!",
    ];
  var farmerAppeals = [
    "My fields will never be fertile again.",
    "I've nothing left but fields of ash.",
    "My farmland is in ruins.",
    "Four months of tending my fields wasted!",
    ];
  var herderAppeals = [
    "My fields are littered in bones.",
    "I've but a single sheep left.",
    "My fields are permeated by an enduring stench of death.",
    "I still find new bones in the field every day.",
    "I'm down to a two cows.",
    ];
Handlebars.registerHelper('farmerAppeal', function() {
  return getRandom(peasantAppeals.concat(farmerAppeals));   
});
Handlebars.registerHelper('herderAppeal', function() {
  return getRandom(peasantAppeals.concat(herderAppeals));   
});

var peasantNotices = [
    "I've filed a formal complaint with the dragon council!",
    "I've made an official complaint!",
    "I've registered a formal complaint!",
    "Consider this my notice of a formal complaint to your council!",
    "I've told the dragon council all about it!",
    "I'm letting the council know.",
    ];
Handlebars.registerHelper('peasantNotice', function() {
    return getRandom(peasantNotices);
});

var townieGripes = [
  "On your last visit to town you kicked over my shed!",
  "Last time you came to town you left a hole the size of a dragon foot in my roof!",
  "When you flew over town you made my roof collapse!",
  "That rocky landing in town tipped over all my shelves!"
];
var shopkeeperGripes = [
  "When you raided the town last week you really did a number on my shop!",
  "You have utterly destroyed my business.",
  "You scared off all my best customers!",
  "Your last flyby blew the roof off of my shop!",
  "You wrecked my storefront!",
];
var barkeeperGripes = [
  "Your firebreath scorched the walls of my tavern!",
  "You blew out all my windows of my inn on your last flyby",
  "You knocked over all my bottles!",
  "It wasn't funny when you roared and made my customers spill their drinks!",
].concat(shopkeeperGripes);

Handlebars.registerHelper('gripe', function(person) {
  switch(person) {
    case "townie":
      return getRandom(townieGripes);
    case "shopkeeper":
      return getRandom(shopkeeperGripes);
    case "barkeeper":
      return getRandom(barkeeperGripes);
  }
});

var partingShots = [
  "You'll pay for this!",
  "Just you wait!",
  "You'll see!",
  "I know my rights!",
  "I know the law!",
  "Justice will be mine!",
  "I have to do what I have to do.",
  ];
Handlebars.registerHelper('partingShot', function() {
    return getRandom(partingShots);
});

var epithets = ["dragon","lava breath","smoggy","sky lizard","gasbag","wing worm","blasto","smoke snout","scale face"];
Handlebars.registerHelper('dragonEpithet', function() {
  return getRandom(epithets);
}); 

Handlebars.registerHelper('grovelling', function(person) {
  return getRandom([
    "Please don't eat me!", 
    "Spare my family!", 
    "I'm so sorry!", 
    "Spare my life!", 
    "Forgive me!",
    "No offense",
    "I have the utmost respect for dragons.",
    "Please don't take this personally!",
    "I mean, if that's okay with you.",
    "I am the worst. Don't hurt me.",
    "It's just business. You understand, right?",
    ]);
});

/* Compile Handlebar Templates */
var magicAppraisalReport = Handlebars.compile($("#magic-appraisal-report").html());
var artAppraisalReport = Handlebars.compile($("#art-appraisal-report").html());
var treasureAppraisalReport = Handlebars.compile($("#treasure-appraisal-report").html());
var farmerComplaint = Handlebars.compile($("#farmer-complaint-note").html());
var herderComplaint = Handlebars.compile($("#herder-complaint-note").html());
var townieComplaint = Handlebars.compile($("#townie-complaint-note").html());
var shopkeeperComplaint = Handlebars.compile($("#shopkeeper-complaint").html());
var royalComplaint = Handlebars.compile($("#royal-complaint").html());
var ledgerRow = Handlebars.compile($("#ledger-row").html());
var instructions = Handlebars.compile($("#main-tax-instructions").html());
var detailedReport = Handlebars.compile($("#detailed-report").html());

var gemRates = {
    diamond:  getRandomInt(280, 360) * 10,
    emerald:  getRandomInt(210, 300) * 10,
    ruby:     getRandomInt(95,  190) * 10,
    sapphire: getRandomInt(55,   90) * 10,
    opal:     getRandomInt(55,   90) * 10,
    amyethyst: 0,
    pearl: 0,
};
var seasons = ["Frost","Feast","Roast","Xaust"]; // The four seasons of the dragon fiscal calendar
var days = 92;

/* Items */
var MagicItem = function() {
  this.item = getRandom(treasures);
  this.runed = getRandom(runed);
  this.runes = getRandom(runes);
  this.enchantment = getRandom(enchantments);
  this.aura = getRandom(auras);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(100,1000) * getRandomInt(1,10) * 10;
};

var Art = function() {
  this.descriptor = getRandom(artDescriptors);
  this.item = getRandom(artworks);
  this.adjective = getRandom(artAdjectives);
  this.subject = getRandom(artSubjects);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(10, 1000) * getRandomInt(1,5) * 10;
};

var Treasure = function() {
  this.item = getRandom(treasures);
  this.adjective = toTitleCase((getRandom(treasureAdjectives))) + " " + getRandom(treasureMaterials);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(10, 1000) * getRandomInt(1,3) * 10;
};

var PeasantGrievance = function() {
  this.name = randomName();
  this.value = getRandomInt(4, 130) * 10;
  this.location = getRandom(lands);
  this.type = getRandom(["herds","crops"]);
};

var TownieGrievance = function() {
  this.name = randomName();
  this.value = getRandomInt(10, 600) * 10;
  this.location = randomTownName() + ", " + getRandom(lands);
};

var ShopkeeperGrievance = function() {
  this.name = randomName();
  this.value = getRandomInt(10, 600) * 10;
  this.location =  randomTownName() + ", " + getRandom(lands);
  this.isBar = Math.random() < 0.35;
  this.shopName = randomShopName(this.name, this.isBar);
};

var RoyalGrievance = function() {
  this.title = getRandom(nobleTitles);
  this.name = randomFamilyName();
  this.value = getRandomInt(10, 80) * 100;
  this.aide = randomName();
  this.location = getRandom(lands);
};

var Stacker = function($target, x, y, xOffset, yOffset, xDir, yDir) {
    this.$target = $target;
    this.x = x;
    this.y = y;
    this.xOffset = xOffset;
    if (xOffset === undefined)
      this.xOffset = 2;
    this.yOffset = yOffset;
    if (yOffset === undefined)
      this.yOffset = 2;
    this.xDir = xDir || 'left';
    this.yDir = yDir || 'top';
};

Stacker.prototype.add = function(el) {
    $el = $(el);
    this.$target.append($el);
    $el.css(this.xDir, this.x + 'px');
    $el.css(this.yDir, this.y + 'px');
    this.x += this.xOffset;
    this.y += this.yOffset;
};

/* TaxRules */
var taxRules = {
    exemptionLimits : {
        art:  getRandomInt(500, 900) * 10,
        treasure: getRandomInt(400,700) * 10,
        crops: getRandomInt(30, 60) * 10,
        herds: getRandomInt(40, 80) * 10,
        provincial: getRandomInt(100, 360) * 10,
    },
    exemptClasses: {
        nobles: getRandom([["Duke","Duchess"],["Count","Countess"],["Baron","Baroness"]]),
        enchantments: getRandoms(enchantments,2),
        auras: getRandoms(auras,2),
        runes: getRandoms(runes,2),
    }
};

var record = {};

var addToRecord = function(lineKey, goldValue, description, exceptionReason) {
  if (!record[lineKey]) {
    record[lineKey] = {};
    record[lineKey].number = lineKey;
    record[lineKey].entries = [];
    record[lineKey].total = 0;
  }
  record[lineKey].entries.push({"goldValue": goldValue, "description": description, "exceptionReason": exceptionReason});
  if (!exceptionReason) {delete record[lineKey].exceptionReason;}
  record[lineKey].total += goldValue;
};

var finalizeRecord = function() {
  var a6Value = record.A1.total + record.A2.total + record.A3.total + record.A4.total + record.A5.total;
  var a6Desc = "A1 + A2 + A3 + A4 + A5";
  addToRecord("A6", a6Value, a6Desc);

  var b3Value = record.B1.total + record.B2.total;
  var b3Desc = "B1 + B2";
  addToRecord("B3", b3Value, b3Desc);

  var b4Value = Math.floor(record.B3.total / 10);
  var b4Desc = "B3 divided by 10";
  addToRecord("B4", b4Value, b4Desc);

  var b6Value = Math.floor(record.B5.total / 2);
  var b6Desc = "B5 divided by 2";
  addToRecord("B6", b6Value, b6Desc);

  var b7Value = record.B4.total + record.B6.total;
  var b7Desc = "B4 + B6";
  addToRecord("B7", b7Value, b7Desc);

  var c1Value = record.A6.total + record.B7.total;
  var c1Desc = "A6 + B7";
  addToRecord("C1", c1Value, c1Desc);

  var c2Value = Math.floor(record.C1.total / 10);
  var c2Desc = "C1 divided by 10";
  addToRecord("C2", c2Value, c2Desc);
};

var sortRecord = function(record) {
  var keys = Object.keys(record);
  var newRecord = {};
  keys.sort().forEach( function(key) {
    newRecord[key] = record[key];
  });
  return newRecord;
};

var paginateRecord = function(record, maxLinesPerPage) {
  var pages = [];
  pages[0] = {};
  var currentPage = 0;
  var currentPageLines = 0;
  Object.keys(record).forEach( function(key) {
    var sectionLines = record[key].entries.length + 5;
    if (currentPageLines !== 0 && 
        currentPageLines + sectionLines > maxLinesPerPage) {
      currentPage++;
      currentPageLines = 0;
      pages[currentPage] = {};
    } else {
      currentPageLines += sectionLines;
    }
    currentPageLines += sectionLines;
    pages[currentPage][key] = record[key];
  });
  return pages;
};

var debugRecord = function(record) {
  var lines, lineDetails, lineTotal;
  lines = ["A1", "A2", "A3", "A4", "A5"];
  for (var i = 0; i < lines.length; i++) {
    lineDetails = record[lines[i]];
    lineTotal = 0;
    for (var j = 0; j < lineDetails.length; j++) {
      detail = lineDetails[j];
      lineTotal += detail.goldValue;
    }
  }
};

$('body').append(instructions({rules:taxRules,rates:gemRates}));

complaintStacker = new Stacker($('body'), 22, 22, -2, -2, 'right', 'bottom');
var complaints= [];
var bigNotes = [];
var smallNotes = [];
var mayhem = {};
mayhem.peasants = 0;
mayhem.townsfolk = 0;
mayhem.nobles = 0;

var numNobleComplaints = getRandomInt(3, 4);
var numPeasantComplaints = getRandomInt(3, 4);
var numTownsefolkeComplaints = getRandomInt(3, 4);

for (var i = 0; i < numNobleComplaints; i++) {
    item = new RoyalGrievance();
    bigNotes.push(royalComplaint(item));
    complaints.push(item);
    description = "Damages to " + item.title + " " + item.name + "'s lands (" + numberWithCommas(item.value) + " G)";
    if (taxRules.exemptClasses.nobles.indexOf(item.title) === -1) {
        mayhem.nobles += item.value;
        addToRecord("B5", item.value, description);
    } else {
        addToRecord("B5", 0, description, "Exc. for " + item.title + (item.title.slice(-2) == "ss" ? "es" : "s"));
    }
}    

for (i = 0; i < numPeasantComplaints; i++) {
    item = new PeasantGrievance();
    if (item.type === "crops") {
      smallNotes.push(farmerComplaint(item));
    } else { //herds
      smallNotes.push(herderComplaint(item));
    }
    description = "Damages to " + item.name + "'s " + item.type + " (" + numberWithCommas(item.value) + " G)";
    complaints.push(item);
    if ((item.type === "crops" && item.value > taxRules.exemptionLimits.crops) ||
        (item.type === "herds" && item.value > taxRules.exemptionLimits.herds)) {
        mayhem.peasants += item.value;
        addToRecord("B1", item.value, description);
    } else {
        addToRecord("B1", 0, description, "Exc. for damages to " + item.type +" under "  + numberWithCommas(taxRules.exemptionLimits[item.type]) + " G" );      
    }

}
for (i = 0; i < numTownsefolkeComplaints; i++) {
  var chance = Math.random();
  if (chance < 0.25) { // 25% of small complaint note
    item = (Math.random() < 0.5) ? new TownieGrievance() : new ShopkeeperGrievance();
    smallNotes.push(townieComplaint(item));
  } else { // 75% chance of fancy shop note note
    item = new ShopkeeperGrievance();    
    bigNotes.push(shopkeeperComplaint(item));
  }
  complaints.push(item);
  description = "Damages to " + (item.shopName || item.name + "'s property") + " (" + numberWithCommas(item.value) + " G)";
  if (item.value > taxRules.exemptionLimits.provincial) {
    mayhem.townsfolk += item.value;
    addToRecord("B2", item.value, description);
  } else {
    addToRecord("B2", 0, description, "Exc. for provincial damages under "  + numberWithCommas(taxRules.exemptionLimits.provincial) + " G" );      
  }

}
// Shuffle complaint notes
shuffle(bigNotes).forEach(function(note) {
  complaintStacker.add.call(complaintStacker, note);
});
shuffle(smallNotes).forEach(function(note) {
  complaintStacker.add.call(complaintStacker, note);
});

var hoard = {};
hoard.gold = getRandomInt(100000,10000000);
hoard.magicItems = [];
hoard.art = [];
hoard.treasures = [];
var income = {};
income.gold = 0;
income.gems = 0;
income.magic = 0;
income.art = 0;
income.other = 0;
ledgerTable = $('#ledger-table');

appraisalStacker = new Stacker($('body'), 340, 22, -2, -2, 'right', 'bottom');
formStacker = new Stacker($('body'), 2, 2, 4, 4);
formStacker.add($('.instructions.p3'));
formStacker.add($('.instructions.p2'));
formStacker.add($('.instructions.p1'));
formStacker.add($('.d1045'));
ledgerStacker = new Stacker($('body'), 450, 2);
ledgerStacker.add($('.ledger'));

var numEvents = getRandomInt(7,9);
var numMagicItems = getRandomInt(3,4);
var numArt = getRandomInt(3,4);
var numTreasures = getRandomInt(3,4);
var numGems = getRandomInt(2,3);
var schedule = uniqueRandomInts(1, days * seasons.length, numEvents);
var magicSchedule = getRandoms(schedule, numMagicItems);
var artSchedule = getRandoms(schedule, numArt);
var treasureSchedule = getRandoms(schedule, numTreasures);
var gemSchedule = getRandoms(schedule, numGems);

var magicItemExceptionReason = function(item, taxRules) {
  var rules = taxRules.exemptClasses;
  var enchantmentExceptionIndex = rules.enchantments.indexOf(item.enchantment);
  var auraExceptionIndex = rules.auras.indexOf(item.aura);
  var runeExceptionIndex = rules.runes.indexOf(item.runes);
  if (enchantmentExceptionIndex >= 0) {return rules.enchantments[enchantmentExceptionIndex] + " enchantment";}
  if (auraExceptionIndex >= 0) {return rules.auras[auraExceptionIndex] + " aura";}
  if (runeExceptionIndex >= 0) {return rules.runes[runeExceptionIndex] + " runes";}
  return false;
};

for (var season = 0; season < seasons.length; season++) {
    for (var day = 1; day <= days; day++) {
        var item;
        var eventChance = Math.random();
        var scehduleDay = (season) * days + day;
        if (schedule.indexOf(scehduleDay) > -1) {
            var amount = getRandomInt(1000,20000);
            hoard.gold += amount;
            income.gold += amount;
            var raidtype = getRandom(["Plundering " + getRandom(races.slice(1)) + "s",
                                      "Raiding " + getRandom(races.slice(1)) + "s",
                                      "Pillaging " + getRandom(races.slice(1)) + "s",
                                      "Treasure Hunt"]) + " in " + getRandom(lands);
            ledgerTable.append(ledgerRow({day:day,season:seasons[season], description:raidtype}));
            ledgerTable.append(ledgerRow({description:"- Gold", amount:amount, balance:hoard.gold}));
            addToRecord("A1", amount, raidtype);
            if (gemSchedule.indexOf(scehduleDay) > -1) {
                var num_gems = getRandomInt(3,30);
                var gem = getRandom(Object.keys(gemRates));
                income.gems += num_gems * gemRates[gem];
                gem_plural = (gem == "ruby") ? " rubies" : " " + gem + "s";
                ledgerTable.append(ledgerRow({description: "- " + num_gems + gem_plural}));
                gemValue = gemRates[gem] || 0;
                addToRecord("A2",  num_gems * gemValue, gem_plural + " (" + num_gems + " x " + numberWithCommas(gemValue) + ")", gemValue ? '' : "No tax on " + gem_plural);
            }
            if (magicSchedule.indexOf(scehduleDay) > -1) {
                item = new MagicItem();
                hoard.magicItems.push(item);
                description = "Magic " + item.item + " (" + numberWithCommas(item.value) + " G)";
                exceptionReason = magicItemExceptionReason(item, taxRules);
                if (!exceptionReason) {
                    income.magic += item.value; 
                    addToRecord("A3", item.value, description); 
                } else {
                    addToRecord("A3", 0, description, "Exc. for " + exceptionReason);
                }
                appraisalStacker.add(magicAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- Magic " + item.item}));
            }
            if (artSchedule.indexOf(scehduleDay) > -1) {
                item = new Art();
                hoard.art.push(item);
                description = item.item + " of " + item.subject + " (" + numberWithCommas(item.value) + " G" + ")";
                if (item.value >= taxRules.exemptionLimits.art) {
                   income.art += item.value;
                    addToRecord("A4", item.value, description); 
                } else {
                    addToRecord("A4", 0, description, "Exc. for art valued under " +  numberWithCommas(taxRules.exemptionLimits.art) + " G"); 
                }
                appraisalStacker.add(artAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- " + toTitleCase(item.item) + " of " + item.subject}));
            }
            if (treasureSchedule.indexOf(scehduleDay) > -1) {
                item = new Treasure();
                hoard.treasures.push(item);
                description = item.adjective + " " + item.item + " (" + numberWithCommas(item.value) + " G" + ")";
                if (item.value >= taxRules.exemptionLimits.treasure) {
                   income.other += item.value;
                    addToRecord("A5", item.value, description); 
                } else {
                    addToRecord("A5", 0, description, "Exc. for treasure valued under " +  numberWithCommas(taxRules.exemptionLimits.treasure) + " G"); 
                }
                appraisalStacker.add(treasureAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- " + toTitleCase(item.adjective) + " " + item.item}));
            }
        }
    }
}

var callCourier = function() {
    $("#courier").fadeIn();
    done = false;
};

finalizeRecord();

var askedForExtraTime = -1;
var done = false;
var startTime = Date.now();
var timer = function(){
  var timeLimit = (askedForExtraTime <= 0) ? 10 * 60 * 1000 : 5 * 60 * 1000;
  var currentTime = Date.now();
  var elapsed = currentTime - startTime;
  if (elapsed <= timeLimit && done === false) {
    $('#time').text(milliToTime(timeLimit - elapsed));
    requestAnimationFrame(timer);
  } else {
    //Times up!
    callCourier();
  }
};

var startGame = function () {
    askedForExtraTime++;
    $("#intro").fadeOut();
    $("#howto").fadeOut();
    $("#courier").fadeOut();
    startTime = Date.now();
    timer();
};

var showHelp = function () {
    $("#intro").hide();
    $("#howto").show();
};

var line = function (id) {
    var value = $("#" + id.toLowerCase()).val();
    if (value == 0) { // counting blank fields as 0 with ==
      return(0);
    } else if (isNaN(value)) {
      return value;
    }
    return Number(stripCommas( parseInt(value) ));
};

var createManualScoreTable = function() {
  var expected = {};
  expected.a1 = income.gold;
  expected.a2 = income.gems;
  expected.a3 = income.magic;
  expected.a4 = income.art;
  expected.a5 = income.other;
  var grossIncome = income.gold + income.gems + income.magic + income.art + income.other;
  expected.a6 = grossIncome;  
  expected.b1 = mayhem.peasants;
  expected.b2 = mayhem.townsfolk;
  var commonerMayhemSubtotal =  mayhem.peasants + mayhem.townsfolk;
  expected.b3 = commonerMayhemSubtotal;
  var commonerAdjustment = (mayhem.peasants + mayhem.townsfolk) / 10;
  expected.b4 = commonerAdjustment;
  expected.b5 = mayhem.nobles;
  var nobleAdjustment = mayhem.nobles / 2;
  expected.b6 = nobleAdjustment;
  var mayhemAdjustment = commonerAdjustment + nobleAdjustment;
  expected.b7 = mayhemAdjustment;
  var mayhemAdjustedGrossIncome = grossIncome + mayhemAdjustment;
  expected.c1 = mayhemAdjustedGrossIncome;
  var taxesOwed = Math.floor(mayhemAdjustedGrossIncome / 10);
  expected.c2 = taxesOwed;
  cols = shuffle(["a","b","c"]);
  rows = shuffle([1,2,3,4,5,6,7]);

  var table = $('<table />');
  for(var row = -1; row < rows.length; row++) {
    var currentRow = $('<tr />');
    for(var col = -1; col < cols.length; col++) {
      var cell;
      if ((row == -1) || (col == -1)) {
        cell = $('<th />');
      } else {
        cell = $('<td />');
      }
      var c = cols[col] || "";
      var r = (rows[row] || "").toString();
      if ((row == -1) || (col == -1)) {
        cell.text((c+r).toUpperCase());
      } else if (expected[c+r] !== undefined) {
        cell.text(numberWithCommas((expected[c+r])) || "0,000");
      } else {
        cell.text(Math.random() < 0.05 ? "0,000" : numberWithCommas(getRandomInt(40,20000) * 10));
      }
      currentRow.append(cell);
    }
    table.append(currentRow);
  }
  $("#solution-page div").append(table);
};

createManualScoreTable();




var evaluateTaxes = function() {
  Object.keys(record).forEach(function(lineNumber) {
    record[lineNumber].youPut = line(lineNumber)
    if (record[lineNumber].total != line(lineNumber)) {
      record[lineNumber].error = true;
    }
  });

  let finalRecord = paginateRecord(sortRecord(record), 16)
  for (var index = finalRecord.length - 1; index >= 0; index--) {
    var page = finalRecord[index];
    ledgerStacker.add(detailedReport({pageNo: index + 1, pageContents: page}));
  };

  var diffs = {};
  diffs.a1 = line("a1") - income.gold;
  diffs.a2 = line("a2") - income.gems;
  diffs.a3 = line("a3") - income.magic;
  diffs.a4 = line("a4") - income.art;
  diffs.a5 = line("a5") - income.other;
  var grossIncome = income.gold + income.gems + income.magic + income.art + income.other;
  diffs.a6 = line("a6") - grossIncome;  
  diffs.b1 = line("b1") - mayhem.peasants;
  diffs.b2 = line("b2") - mayhem.townsfolk;
  var commonerMayhemSubtotal =  mayhem.peasants + mayhem.townsfolk;
  diffs.b3 = line("b3") - commonerMayhemSubtotal;
  var commonerAdjustment = (mayhem.peasants + mayhem.townsfolk) / 10;
  diffs.b4 = line("b4") - commonerAdjustment;
  diffs.b5 = line("b5") - mayhem.nobles;
  var nobleAdjustment = mayhem.nobles / 2;
  diffs.b6 = line("b6") - nobleAdjustment;
  var mayhemAdjustment = commonerAdjustment + nobleAdjustment;
  diffs.b7 = line("b7") - mayhemAdjustment;
  var mayhemAdjustedGrossIncome = grossIncome + mayhemAdjustment;
  diffs.c1 = line("c1") - mayhemAdjustedGrossIncome;
  var taxesOwed = Math.floor(mayhemAdjustedGrossIncome / 10);
  diffs.c2 = line("c2") - taxesOwed;
  var over = 0;
  var under = 0;
  var matherrors = 0;
  var blanklines = 0;
  var result;
  if ($("#dnw").val() !== "") {
    $('#final-report').append($("<li><b>You seriously wrote in the 'Do not write' space!? May the dragon god have mercy on your soul.</b></li>"));
    $('#tips').append($("<li>I'm sorry. I have to leave.</li>"));
  } else {
  for (var l in diffs) {
    if (diffs.hasOwnProperty(l)) {
      var difference = diffs[l];
      result = "<li><b>Line " + l.toUpperCase() +":</b> ";
      if (["a1","a2","a3","a4","a5","b1","b2","b5"].indexOf(l) > -1) {
        if (difference === 0) {
          result += "No problems here!";
        } else if (isNaN(difference)) {
          result += "What did you even write here? Numbers only. That's an audit.";
        } else if (difference > 0) {
          result += "You overreported by " + numberWithCommas(difference) + " G.";
          over++;
        } else {
          result += "You underreported by " + numberWithCommas(Math.abs(difference)) + " G.";
          under++;
        }
      } else if (["c2"].indexOf(l) > -1) {
        if (Math.floor(difference) === 0) {
          result += "No problems here!";
        } else if (isNaN(difference)) {
          result += "What did you even write here? Numbers only. That's an audit.";
        } else if (Math.floor(difference) > 0) {
          result += "You overpaid by " + numberWithCommas(Math.floor(difference)) + " G. You won't get that back!";
        } else {
          result += "You underpaid by " + numberWithCommas(Math.abs(Math.floor(difference))) + " G.";
          if (Math.abs(difference) > 5000) {
              result += " Expect a visit from the auditor!";
          }
        }
      } else {
        if (difference === 0) {
          result += "No problems here!";
        } else if (isNaN(difference)) {
          result += "What did you even write here? Numbers only. That's an audit.";
        } else if (difference > 0)  {
          result += "This line was too high by " + numberWithCommas(difference) + " G.";
          matherrors++;
        } else {
          matherrors++;
          result += "This line was too low by " + numberWithCommas(Math.abs(difference)) + " G.";
        }
      }
      result+= "</li>";
      $('#final-report').append($(result));
    }
  }
  if (askedForExtraTime > 0) {
    result = "<li><b>You asked for extra time";
    result += (askedForExtraTime > 1) ? (" " + askedForExtraTime + " times? ") : "? ";
    result += "That goes on your permanent record!</b></li>";
    $('#final-report').append($(result));
  }
  if (over + under + matherrors + blanklines > 6) {
    $('#tips').append($("<li>Wow. You really bungled this. I don't even know where to start.</li>"));
  } else {
    if (over > 1) {
      $('#tips').append($("<li>You overreported your income sometimes. Don't forget to check the instructions for exceptions.</li>"));
    } 
    if (under > 1) {
      $('#tips').append($("<li>You underreported your income sometimes. Try to keep your paperwork organized.</li>"));
    }
    if (over <= 1 && under <= 1 && matherrors > 0) {
      $('#tips').append($("<li>It looks you had your numbers in order but you messed up an important step. Be careful!</li>"));
    }
    if ($("#tips").length === 0 && diffs.c2 !== 0) {
      $('#tips').append($("<li>You were really close. Pay better attention next year.</li>"));
    }
    if ($("#tips").length === 0 && diffs.c2 === 0) {
      $('#tips').append($("<li>You got it perfect!  Great Job! Are you sure you aren't a PDA yourself?</li>"));
    }
  }  
  } 
  $('#courier').hide();
  $('#report').show();
};

var viewDetailedReport = function() {
  $("#report").hide();
  $(".detailed-report").draggable().mousedown(function() {
    $(this).parent().append(this);
  }); 
  $(".button-ready").text("Play Again!").on("click", restart);
}

var restart = function(){
  location.reload();
};
$("#d1045")[0].reset(); //clear form
$(".button-go").on("click", startGame);
$(".button-help").on("click", showHelp);
$(".button-ready").on("click", callCourier);
$(".button-finish").one("click", evaluateTaxes);
$(".button-view").one("click", viewDetailedReport);




