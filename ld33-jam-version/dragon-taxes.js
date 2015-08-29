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
  if(this.day && this.season)
  return ordinal(this.day) + " of " + this.season;
});

Handlebars.registerHelper('dragonEpithet', function() {
  var epithets = ["dragon","lava breath","smoggy","sky lizard","gasbag","wing worm","blasto","smoke snout","scale face"];
  return getRandom(epithets);
}); 

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
    ];
  var farmerAppeals = [
    "My fields will never be fertile again.",
    "I've nothing left but fields of ash.",
    "My farmland is in ruins."
    ];
  var herderAppeals = [
    "My fields are littered in bones.",
    "I've but a single sheep left.",
    "My fields are permeated by an enduring stench of death.",
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
    "I'm letting the council know."
    ];
Handlebars.registerHelper('peasantNotice', function() {
    return getRandom(peasantNotices);
});

var townieGripes = [
  "Your last flyby blew the roof off of my shop!",
  "When you raided the town last week you really did a number on my shop!",
  "You blew out all my windows of my inn on your last flyby",
  "You wrecked my storefront!",
  "Last time you came to town you left a hole the size of a dragon foot in my roof!",
  "You scared off all my best customers!",
  "On your last visit to town you kicked over my shed!",
  "You're firebreath scorched the walls of my tavern!",
  "You have utterly destroyed my business.",
];
Handlebars.registerHelper('townieGripe', function() {
    return getRandom(townieGripes);
});

var partingShots = [
  "You'll pay for this!",
  "Just you you wait!",
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
var royalComplaint = Handlebars.compile($("#royal-complaint").html());
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
var treasureAdjectives = ["golden","jeweled","ancient","jade","sapphire","ruby","platinum","engraved","glass","onyx","silver"];
var artDescriptors = ["Rare","Renowned","Masterful","Famous","Extraordinary","Elaborate"];
var artworks = ["painting", "sculpture", "statue", "vase", "tapestry"];
var artAdjectives = ["gloomy","sinister","radiant","beautiful","stunning","mysterious","bizarre","strange","colossal","miniature","majestic"];
var artSubjects = ["landscape", "mountain", "lake", "castle", "village", "tree", "bridge", "cave", "battlefield"];
var nobleTitles = ["Queen","King","Prince","Princess","Duke","Duchess","Count","Countess","Baron","Baroness"];
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
    opal:     getRandomInt(55,   90) * 10,
    amyethyst: 0,
    pearl: 0,
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
  this.value = getRandomInt(100,1000) * getRandomInt(1,10) * 10;
};

var Art = function() {
  this.descriptor = toTitleCase(getRandom(artDescriptors));
  this.item = getRandom(artworks);
  this.adjective = getRandom(artAdjectives);
  this.subject = getRandom(artSubjects);
  this.quality = getRandom(ranking);
  this.condition = getRandom(ranking);
  this.value = getRandomInt(10, 1000) * getRandomInt(1,5) * 10;
};

var Treasure = function() {
  this.item = getRandom(treasures);
  this.adjective = toTitleCase((getRandom(treasureAdjectives)));
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
  this.location = getRandom(lands);
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

$('body').append(instructions({rules:taxRules,rates:gemRates}));


complaintStacker = new Stacker($('body'), 12, 22, -2, -2, 'right', 'bottom');
var complaints = [];
var mayhem = {};
mayhem.peasants = 0;
mayhem.townsfolk = 0;
mayhem.nobles = 0;

var nobleComplaints = getRandomInt(3, 5);
for (var i = 0; i < nobleComplaints; i++) {
    item = new RoyalGrievance();
    complaints.push(item);
    if (taxRules.exemptClasses.nobles.indexOf(item.title) === -1) {
        mayhem.nobles += item.value;
    }
    complaintStacker.add(royalComplaint(item));
}    

var townieComplaints = getRandomInt(2, 4);
for (i = 0; i < townieComplaints; i++) {
    item = new TownieGrievance();
    complaints.push(item);
    if (item.value > taxRules.exemptionLimits.provincial) {
        mayhem.townsfolk += item.value;
    }
    complaintStacker.add(townieComplaint(item));
}

var peasantComplaints = getRandomInt(3, 5);
for (i = 0; i < peasantComplaints; i++) {
    item = new PeasantGrievance();
    complaints.push(item);
    if ((item.type === "crops" && item.value > taxRules.exemptionLimits.crops) ||
        (item.type === "herds" && item.value > taxRules.exemptionLimits.herds)) {
        mayhem.peasants += item.value;
    }
    if (item.type === "crops")
      complaintStacker.add(farmerComplaint(item));
    else //herds
      complaintStacker.add(herderComplaint(item));
}

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
            if (gemSchedule.indexOf(scehduleDay) > -1) {
                var num_gems = getRandomInt(3,80);
                var gem = getRandom(Object.keys(gemRates));
                income.gems += num_gems * gemRates[gem];
                gem = (gem == "ruby") ? " rubies" : " " + gem + "s";
                ledgerTable.append(ledgerRow({description: "- " + num_gems + gem}));
            }
            if (magicSchedule.indexOf(scehduleDay) > -1) {
                item = new MagicItem();
                hoard.magicItems.push(item);
                if ((taxRules.exemptClasses.enchantments.indexOf(item.enchantment) === -1) &&
                    (taxRules.exemptClasses.auras.indexOf(item.aura) === -1) &&
                    (taxRules.exemptClasses.runes.indexOf(item.runes) === -1))
                income.magic += item.value;
                appraisalStacker.add(magicAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- Magic " + item.item}));
            }
            if (artSchedule.indexOf(scehduleDay) > -1) {
                item = new Art();
                hoard.art.push(item);
                if (item.value >= taxRules.exemptionLimits.art) {
                   income.art += item.value;
                }
                appraisalStacker.add(artAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- " + toTitleCase(item.item) + " of " + item.subject}));
            }
            if (treasureSchedule.indexOf(scehduleDay) > -1) {
                item = new Treasure();
                hoard.treasures.push(item);
                if (item.value >= taxRules.exemptionLimits.treasure) {
                   income.other += item.value;
                }
                appraisalStacker.add(treasureAppraisalReport(item));
                ledgerTable.append(ledgerRow({description:"- " + toTitleCase(item.adjective) + " " + item.item}));
            }
        }
    }
}

var callCourier = function() {
    console.log("courier");
    $("#courier").removeClass("js-hide").addClass("js-show");
    done = false;
};

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
    $("#intro").removeClass("js-show").addClass("js-hide");
    $("#howto").removeClass("js-show").addClass("js-hide");
    $("#courier").removeClass("js-show").addClass("js-hide");
    startTime = Date.now();
    timer();
};

var showHelp = function () {
    $("#intro").removeClass("js-show").addClass("js-hide");
    $("#howto").removeClass("js-hide").addClass("js-show");
};

var line = function (id) {
    if ($("#" + id).val() == 0) {
      return(0);
    }
    return Number(stripCommas( parseInt($("#" + id).val()) ));
};



var evaluateTaxes = function() {
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
  diffs.b5 = line("b6") - nobleAdjustment;
  var mayhemAdjustment = commonerAdjustment + nobleAdjustment;
  diffs.b6 = line("b7") - mayhemAdjustment;
  var mayhemAdjustedGrossIncome = grossIncome + mayhemAdjustment;
  diffs.c1 = line("c1") - mayhemAdjustedGrossIncome;
  var taxesOwed = mayhemAdjustedGrossIncome / 10;
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
      console.log(l);
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
  } $('#report').removeClass("js-hide").addClass("js-show");
};
var restart = function(){
  location.reload();
};
$(".button-go").bind("click", startGame);
$(".button-help").bind("click", showHelp);
$(".button-finish").bind("click", evaluateTaxes);
$(".button-ready").bind("click", callCourier);
$(".button-restart").bind("click", restart);







