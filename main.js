function welcomeAlert() {
  alert("Time for some training. Follow the instructions and use lower case for all commands.");
}

welcomeAlert();

const swordSlash = {
  name: "Sword Slash",
  damage: 2
};
const falcoPunch = {
  name: "Sword Slash",
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

function getTotalDamage(hero, attack) {
  return hero.attackPower * attack.damage;
}

const hercules = {
  hp: 25,
  attackPower: 5,
  attacks: [swordSlash, falcoPunch]
};

const learny = {
  name: "Learny",
  hp: 100,
  attackPower: 5,
  attacks: ["Head Smash", "Fire Breath"]
};

const hydraDamage = {
  "Head Smash": learny.attackPower * 2,
  "Fire Breath": learny.attackPower * 3
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

  console.log("Hercules used " + attack.name + " and dealt " + attack.damage + " damage.");
  console.log(enemy.name + " has " + enemy.hp + "hp.");
}

function getEnemyAttack(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function learnyAttack() {
  let attackState = getEnemyAttack(learny.attacks);
  console.log("Learny used " + attackState + " and dealt " + hydraDamage[attackState] + " damage.");
  hercules.hp -= hydraDamage[attackState];
}

let isGameOver = false;
function learnyBattle() {
  while (!isGameOver) {
    herculesAttack(learny);

    learnyAttack();
    hercules.hp -= hydraDamage;
    console.log(hercules.hp);

    if (hercules.hp <= 0 || learny.hp <= 0) {
      learnyBattleOver();
    }
  }
}

learnyBattle();

function learnyBattleOver() {
  console.log("You escaped the battle loop");
  isGameOver = true;
}

// function battleLearny() {
//
//   // while ( hercules.heroHealth > 1 && learny.enemyHealth > 1) {
//   {
//     if(hercules.heroHealth > 4) {
//       hercules.heroHealth = 1;
//     }
//     console.log(hercules.heroHealth);
//     // herculesAttack();
//     // learnyAttack();
//   }
// }
//
// battleLearny();


function gameOver() {
  console.log("you are dead");
}

function deadHydra() {
  console.log("you won the game, for now")
}

function damageTaken() {

}
