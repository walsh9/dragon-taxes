function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandom(array) {
  return  array[getRandomInt(0, array.length - 1)];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  return  "John Rockshard";
}); 

Handlebars.registerHelper('date', function(person) {
  return ordinal(this.day) + " of " + this.season;
});

Handlebars.registerHelper('dragonEpithet', function() {
  var epithets = ["dragon","lava breath","smoggy","sky lizard","gasbag","wing worm","blasto","smokey"];
  return getRandom(epithets);
}); 

var appraisalReport = Handlebars.compile($("#appraisal-report").html());
var complaintNote = Handlebars.compile($("#complaint-note").html());
var ledgerRow = Handlebars.compile($("#ledger-row").html());
$('body').append(complaintNote({value: 432, location: "Northlands"}));
$('body').append(complaintNote({value: 2232, location: "Eastlands"}));
$('body').append(complaintNote({value: 132, location: "Southlands"}));
$('body').append(complaintNote({value: 932, location: "Southlands"}));

var races = ["dragon","erk","drev","gronk","glorn"];

var treasures = ["sword","book","amulet","goblet","ring","helmet","shield","spear",
"lance","boots","flute","panpipes","whistle","battleaxe","mace","trinket","bracers","dice"];
var runes = ["ancient","indecipherable","profane","mysterious"];
var enchantments = ["protection","swiftness","luck","life","death","ancient","mysterious"];
var auras = ["teal","holy","unholy","golden","orange","wistful","pale"];
var ranking = ["AAA","AA","A","B","C"];
var treasureAdjectives = ["golden","jeweled","ancient","jade","sapphire","ruby","platinum"];
races.forEach(function(race) {
    treasures.push(race + " figurine");
    runes.push(race == "dragon" ? "draconic" : race + "ish");
    enchantments.push(race + "-slaying");
});
var seasons = ["Frost","Feast","Roast","Xaust"];
var days = 92;

var hoard = getRandomInt(100000,10000000);

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

var numMagicItems = getRandomInt(0, 5);
var magicItems = [];
for (var i = 0; i < numMagicItems; i++) {
    item = new MagicItem();
    magicItems.push(item);
    $('body').append(appraisalReport(item));
}

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





