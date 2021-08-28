function welcomeAlert() {
  alert("Time for some training. Follow the instructions and use lower case for all commands.");
}
welcomeAlert();

const hercules = {
  "heroHealth" : 5,
  "attackPower" : 5,
  "attacks" : ["Sword Slash" , "Falco Punch"]
};

const learny = {
  "enemyHealth": 10,
  "attackPower" : 5,
  "attacks" : ["Head Smash", "Fire Breath"]
};

const heroDamage = {


}


// function herculesAttack() {
//   let input = prompt("type in 's' for 'Sword Slash' or 'f' for 'Falco Punch'");
//   if (input === 's') {
//     let heroDamage = hercules.attackPower * 2;
//     console.log("You used" + " " + hercules.attacks[0] + " " +  "and dealt" + " " + heroDamage + " " + "damage.");
//   } else if (input === 'f') {
//     let heroDamage =  hercules.attackPower * 3;
//     console.log("You used" + " " + hercules.attacks[1] +  " " + "and dealt" + " " + heroDamage + " "  + "damage.");
//   } else(herculesAttack());
// }

function getEnemyAttack(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function learnyAttack() {
  const grabAttack = learny["attacks"];
   let attackState = getEnemyAttack(grabAttack);
   if (attackState === "Head Smash" ) {
     let hydraDamage = learny.attackPower * 2;
     console.log("Learny used" + " " +  attackState + " " + "and dealt" + " " + hydraDamage + " "  + "damage.");
   } else if(attackState === "Fire Breath") {
     let hydraDamage = learny.attackPower * 3;
     console.log("Learny used" + " " +  attackState + " " + "and dealt" + " " + hydraDamage + " " + "damage.");

   }
  return attackState;
}








function gameOver() {
  console.log("you are dead");
}

function deadHydra() {
  console.log("you won the game, for now")
}
