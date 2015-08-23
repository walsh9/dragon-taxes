/* Helper methods */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(array) {
  return  array[getRandomInt(0, array.length - 1)];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
var familyNameParts = ["rock","wood","shard","bottom","wild","brook","berry","tall","swine","grove","barrel"];
var familyNameSuffixes = ["sson","son","sworth","sford","smith","saar","stad","sen","berg","s"];
var simpleGivenNames = ["John","Mary","Donna","William","Sarah","Terry","Saul","Prudence","Lucas","Oliver","James","Jack","Magnus","Charles","Jacob","Emma","Elise","Elsinore","Sofia","Clara","Anna","Lily"];
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
        return toTitleCase(getRandom(familyNameParts) + getRandom(familyNameParts));
    } else if (chance < 0.9) {
        return toTitleCase(getRandom(familyNameParts) + getRandom(familyNameSuffixes));
    }
    return toTitleCase(getRandom(familyNameParts) + getRandom(familyNameParts) + getRandom(familyNameSuffixes));
};
var randomName = function() {
  return randomGivenName() + " " + randomFamilyName();
};

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

Handlebars.registerHelper('randomName', function() {
  return  randomName();
}); 

Handlebars.registerHelper('date', function(person) {
  return ordinal(this.day) + " of " + this.season;
});

Handlebars.registerHelper('dragonEpithet', function() {
  var epithets = ["dragon","lava breath","smoggy","sky lizard","gasbag","wing worm","blasto","smoke snout","scale face"];
  return getRandom(epithets);
}); 

/* Compile Templates */
var magicAppraisalReport = Handlebars.compile($("#magic-appraisal-report").html());
var artAppraisalReport = Handlebars.compile($("#art-appraisal-report").html());
var complaintNote = Handlebars.compile($("#complaint-note").html());
var ledgerRow = Handlebars.compile($("#ledger-row").html());
var instructions = Handlebars.compile($("#main-tax-instructions").html());

/* Lists */
var races = ["dragon","erk","drev","gronk","glorn"];
var treasures = ["sword","book","amulet","goblet","ring","helmet","shield","spear",
"lance","boots","flute","panpipes","whistle","battleaxe","mace","trinket","bracers","dice"];
var runes = ["ancient","indecipherable","profane","mysterious"];
var enchantments = ["protection","swiftness","luck","life","death","ancient","mysterious"];
var auras = ["teal","holy","unholy","golden","orange","wistful","pale"];
var ranking = ["AAA","AA","A","B","C"];
var treasureAdjectives = ["golden","jeweled","ancient","jade","sapphire","ruby","platinum","engraved"];
var artDescriptors = ["Rare","Renowned","Masterful","Famous","Extraordinary"];
var artworks = ["painting", "sculpture", "statue", "vase", "tapestry"];
var artAdjectives = ["gloomy","sinister","radiant","beautiful","stunning","mysterious","bizzare","strange","colossal","miniature","majestic"];
var artSubjects = ["landscape", "mountain", "lake", "castle", "village", "tree", "bridge", "cave", "battlefield"];
var nobleTitles = ["Queen","King","Prince","Princess","Duke","Duchess"];
var lands = ["Northland","Eastland","Southland"]; // No one lives in Westland.


races.forEach(function(race) {
    treasures.push(race + " figurine");
    runes.push(race == "dragon" ? "draconic" : race + "ish");
    enchantments.push(race + "-slaying");
    artSubjects.push(race);
});
var gemRates = {
    diamond:  getRandomInt(280, 360) * 10,
    emerald:  getRandomInt(210, 300) * 10,
    ruby:     getRandomInt(95,  190) * 10,
    sapphire: getRandomInt(55,   90) * 10,
    opal:     getRandomInt(55,   90) * 10
};
var seasons = ["Frost","Feast","Roast","Xaust"]; // The four seasons of the dragon fiscal calendar
var days = 92;


/* Items */
var MagicItem = function() {
  this.item = getRandom(treasures);
  this.runes = getRandom(runes);
  this.enchantment = getRandom(enchantments);
  this.aura = getRandom(auras);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(1000,10000) * getRandomInt(1,10);
};

var Treasure = function() {
  this.item = getRandom(treasures);
  this.adjective = getRandom(treasureAdjectives);
  this.value = getRandomInt(100, 10000) * getRandomInt(1,7);
};

var Art = function() {
  this.descriptor = getRandom(artDescriptors);
  this.item = getRandom(artworks);
  this.adjective = getRandom(artAdjectives);
  this.subject = getRandom(artSubjects);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(100, 10000) * getRandomInt(1,5);
};

var Grievance = function() {
 this.name = "John Rockshard";
 this.value = getRandomInt(8, 130) * 10;
 this.location = getRandom(lands);

};

/* TaxRules */
taxRules = {
    exemptionLimits : {
        art:  getRandomInt(500, 900) * 10,
        crops: getRandomInt(20, 50) * 10,
        herds: getRandomInt(30, 80) * 10,
        provincial: getRandomInt(60, 360) * 10,
    }
};

$('body').append(instructions({rules:taxRules,rates:gemRates}));
var numMagicItems = getRandomInt(0, 5);
var magicItems = [];
for (var i = 0; i < numMagicItems; i++) {
    item = new MagicItem();
    magicItems.push(item);
    $('body').append(magicAppraisalReport(item));
}

var numArts = getRandomInt(0, 5);
var arts = [];
for (var i = 0; i < numArts; i++) {
    item = new Art();
    arts.push(item);
    $('body').append(artAppraisalReport(item));
}

var numComplaints = getRandomInt(0, 5);
var complaints = [];
for (var i = 0; i < numArts; i++) {
    item = new Grievance();
    complaints.push(item);
    $('body').append(complaintNote(item));
}

var hoard = getRandomInt(100000,10000000);
ledgerTable = $('#ledger-table');
seasons.forEach(function(season){
    for (var day = 1; day <= days; day++)
    if (getRandomInt(1,15) == 1) {
        console.log(ordinal(day) + " of " + season);
        var amount = getRandomInt(-20000,20000);
        hoard += amount;
        ledgerTable.append(ledgerRow({day:day,season:season,description:"Test Entry",amount:amount,balance:hoard}));
    }
});
var startTime = Date.now();
var timer = function(){
  var timeLimit = 5 * 60 * 1000;
  var currentTime = Date.now();
  var elapsed = currentTime - startTime;
  if (elapsed <= timeLimit) {
    $('#timer').text(milliToTime(timeLimit - elapsed));
    requestAnimationFrame(timer);
  } else {
    //Times up!
    requestAnimationFrame(timer);  
  }
};
timer();





