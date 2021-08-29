function welcomeAlert() {
  alert("Time for some training. Follow the instructions and use lower case for all commands.");
}

welcomeAlert();

const swordSlash = {
  name: "Sword Slash",
  damage: 10
};
const falcoPunch = {
  name: "Falco Punch",
  damage: 3
};
const hydraHeadSmash = {
  name: "Head Smash",
  damage: 2
};
const hydraFireBreath = {
  name: "Fire Breath",
  damage: 3
};

const lanceThrust = {
  name: "Lance Thrust",
  damage: 2
};
const divineFavor = {
  name: "Divine Favor",
  damage: 3
};

function getTotalDamage(hero, attack) {
  return hero.attackPower * attack.damage;
}



const hercules = {
  hp: 30,
  attackPower: 5,
  attacks: [swordSlash, falcoPunch]
};

const learny = {
  name: "Learny",
  hp: 30,
  attackPower: 5,
  attacks: [hydraHeadSmash, hydraFireBreath]
};


const thesus = {
  name: "Thesus",
  hp: 30,
  attackPower: 5,
  attacks: [lanceThrust, divineFavor]
}

const thesusDamage = {
  "Lance Thrust": thesus.attackPower * 2,
  "Divine Favor" : thesus.attackPower * 3
}

function getAttackFromCommand(input) {
  switch (input) {
    case 's':
    case 'sword slash':
      return swordSlash;

    case 'f':
    case 'falco punch':
      return falcoPunch;

    default:
      return herculesAttack();
  }
}

function herculesAttack(enemy) {
  const input = prompt("type in 's' for 'Sword Slash' or 'f' for 'Falco Punch'");
  const attack = getAttackFromCommand(input);
  const damage = getTotalDamage(hercules, attack);
  enemy.hp -= damage;

  console.log("Hercules used " + attack.name + " and dealt " + damage + " damage.");
  console.log(enemy.name + " has " + enemy.hp + "hp.");
}

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function enemyAttack(enemy) {
  const attack = getRandomItem(enemy.attacks);
  const damage = getTotalDamage(enemy, attack);
  hercules.hp -= damage;

  console.log(enemy.name + " used " + attack.name + " and dealt " + damage + " damage.");
  console.log("Hercules has " + hercules.hp + "hp.");

}



function battle(enemy) {
  while (true) {

    herculesAttack(enemy);

    if (hercules.hp <= 0 || enemy.hp <= 0) {
      battleOver();
      return;
    }

    enemyAttack(enemy);

    if (hercules.hp <= 0 || enemy.hp <= 0) {
      battleOver();
      return;
    }
  }
}

battle(thesus);

function battleOver() {
  console.log("You escaped the battle loop");
}

console.log("game on");


function thesusAlert() {
  alert("Brave hero, it's time to face your next foe, the mighty hero Thesus.");
}

thesusAlert();

function thesusAttack() {
  let attackState = getEnemyAttack(thesus.attacks);
  console.log("Thesus used " + attackState + " and dealt " + thesusDamage[attackState] + " damage ");
  hercules.hp -= thesus
}
