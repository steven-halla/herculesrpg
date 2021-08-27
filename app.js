function welcomeAlert() {
  alert("Time for some training. Follow the instructions and use lower case for all commands.");
}
welcomeAlert();

const hercules = {
   "health" : 12,
   "attackPower" : 5,
  "attacks" : ["Sword Slash", "Falco Punch"]
};

const hades = {
  "health" :12,
  "attackPower" :5,
  "attacks" : ["Skull Throw", "Laser Blaster"]
};

const learny = {
  "health": 12,
  "attackPower" : 5,
  "attacks" : ["Head Smash", "Fire Breath"]
};

const thesus = {
  "health" : 12,
  "attackPower" : 5,
  "attacks" : ["Lance Thrust", "Divine Favor"]
};

function battle() {
  herculesAttacks();
}

console.log(hercules.health)

function herculesAttacks() {
  let input = prompt("type in 's' for 'Sword Slash' or 'f' for 'Falco Punch'");
  if (input === 's') {
    hercules.attacks[0];
    console.log("sword slash")
  } else if (input === 'f') {
    hercules.attacks[1];
    console.log("Falcon Punch")
  } else console.log("wrong command type s or f")
  (herculesAttacks())
  return input;
}
herculesAttacks();

function battleThesus() {
  alert(" Time to escape from Hades. Thesus is barring your way out. Time to show him who's the boss. ")
}

battleThesus();

function getEnemyAttack(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  // console.log(item);
  return item;
}

function thesusAttacks() {
  const grabAttack = thesus["attacks"];
   let attackState = getEnemyAttack(grabAttack);
  console.log("you were attacked");
  console.log(attackState);
  herculesAttacks();
  return attackState;
}

thesusAttacks()

function battleLearny() {
  alert(" The hydra, Learny, is in your way. Time to put him out of your misery. ")
}

battleLearny();

function learnyAttacks() {
  const grabAttack = learny["attacks"];
  let attackState = getEnemyAttack(grabAttack);
  console.log("you were attacked");
  console.log(attackState);
  herculesAttacks();
  return attackState;
}

learnyAttacks();

function battleHades() {
  alert(" The god of the underworld, hades, is blocking your way, out of hades. ")
}

battleHades();

function hadesAttacks() {
  const grabAttack = hades["attacks"];
  let attackState = getEnemyAttack(grabAttack);
  console.log("you were attacked");
  console.log(attackState);
  herculesAttacks();
  return attackState;
}

hadesAttacks()
