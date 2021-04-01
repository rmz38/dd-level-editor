const reactions = {
      "Block":{
        "id": 0,
        "name":"Block",
        "description":"Shuffle GRAB into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [3],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Side Step":{
        "id": 1,
        "name":"Side Step",
        "description":"Shuffle BIDE TIME into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [1],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Parry":{
        "id": 2,
        "name":"Parry",
        "description":"Shuffle GUARD into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 1,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [2],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Roll Behind":{
        "id": 3,
        "name":"Roll Behind",
        "description":"Shuffle EXPOSED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [5],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Lunge":{
        "id": 4,
        "name":"Lunge",
        "description":"Shuffle GRAB into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [3],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Guard":{
        "id": 5,
        "name":"Guard",
        "description":"Shuffle SLASH into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [0],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Stab":{
        "id": 6,
        "name":"Stab",
        "description":"Shuffle GUARD into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [2],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Feint":{
        "id": 7,
        "name":"Feint",
        "description":"Shuffle STAGGERED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 1,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [6],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Strike":{
        "id": 8,
        "name":"Strike",
        "description":"Shuffle GRAB into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [3],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Probe":{
        "id": 9,
        "name":"Probe",
        "description":"Shuffle SLASH into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 1,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [0],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Jump Back":{
        "id": 10,
        "name":"Jump Back",
        "description":"Shuffle BIDE TIME into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [1],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Grasp":{
        "id": 11,
        "name":"Grasp",
        "description":"Shuffle GRAPPLED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 2,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [4],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Break Free":{
        "id": 12,
        "name":"Break Free",
        "description":"Shuffle BIDE TIME into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [1],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Twist":{
        "id": 13,
        "name":"Twist",
        "description":"Shuffle GRAPPLED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 2,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [4],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Kick":{
        "id": 14,
        "name":"Kick",
        "description":"Shuffle STAGGERED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [6],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Firm Grip":{
        "id": 15,
        "name":"Firm Grip",
        "description":"Shuffle GRAPPLED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 2,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [4],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Wrench":{
        "id": 16,
        "name":"Wrench",
        "description":"Shuffle STAGGERED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [6],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Face Grab":{
        "id": 17,
        "name":"Face Grab",
        "description":"Shuffle BLINDED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 3,
          "lunge": 0,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [9],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Headbutt":{
        "id": 18,
        "name":"Headbutt",
        "description":"Shuffle STUNNED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 2
        },
        "reward": 0,
        "addToDeck": [7],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Evade":{
        "id": 19,
        "name":"Evade",
        "description":"Shuffle EXPOSED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [5],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Whack":{
        "id": 20,
        "name":"Whack",
        "description":"Shuffle STUNNED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 3,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [7],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Cut Above the Eyes":{
        "id": 21,
        "name":"Cut Above the Eyes",
        "description":"Shuffle BLINDED into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 3,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [9],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Backstab":{
        "id": 22,
        "name":"Backstab",
        "description":"Shuffle WOUNDED into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 0,
          "lunge": 3,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [8],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Juke":{
        "id": 23,
        "name":"Juke",
        "description":"Shuffle EXPOSED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 1,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [5],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Tackle":{
        "id": 24,
        "name":"Tackle",
        "description":"Shuffle GRAPPLED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [4],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Blunt Strike":{
        "id": 25,
        "name":"Blunt Strike",
        "description":"Shuffle STUNNED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 3,
          "lunge": 0,
          "brawn": 1
        },
        "reward": 0,
        "addToDeck": [7],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Quick Slice":{
        "id": 26,
        "name":"Quick Slice",
        "description":"Shuffle WOUNDED into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 3,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [8],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Eye Stab":{
        "id": 27,
        "name":"Eye Stab",
        "description":"Shuffle BLINDED into the Deck",
        "cost": {
          "blade": 1,
          "flourish": 3,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [9],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Shield Bash":{
        "id": 28,
        "name":"Shield Bash",
        "description":"Shuffle WOUNDED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 4
        },
        "reward": 0,
        "addToDeck": [8],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Run Through":{
        "id": 29,
        "name":"Run Through",
        "description":"Shuffle IMPALED into the Deck",
        "cost": {
          "blade": 2,
          "flourish": 0,
          "lunge": 4,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [11],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Suplex":{
        "id": 30,
        "name":"Suplex",
        "description":"Shuffle CRUSHED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 4,
          "brawn": 2
        },
        "reward": 0,
        "addToDeck": [10],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Wound":{
        "id": 31,
        "name":"Wound",
        "description":"Shuffle WOUNDED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 3,
          "lunge": 1,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [8],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Hammer Kick":{
        "id": 32,
        "name":"Hammer Kick",
        "description":"Shuffle CRUSHED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 6,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [10],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Pierce":{
        "id": 33,
        "name":"Pierce",
        "description":"Shuffle IMPALED into the Deck",
        "cost": {
          "blade": 2,
          "flourish": 4,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [11],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Discombobulate":{
        "id": 34,
        "name":"Discombobulate",
        "description":"Shuffle BLINDED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 4
        },
        "reward": 0,
        "addToDeck": [9],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Mangle":{
        "id": 35,
        "name":"Mangle",
        "description":"Shuffle WOUNDED into the Deck",
        "cost": {
          "blade": 2,
          "flourish": 0,
          "lunge": 0,
          "brawn": 2
        },
        "reward": 0,
        "addToDeck": [8],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Impale":{
        "id": 36,
        "name":"Impale",
        "description":"Shuffle IMPALED into the Deck",
        "cost": {
          "blade": 6,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [11],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Ankle Slash":{
        "id": 37,
        "name":"Ankle Slash",
        "description":"Shuffle CRUSHED into the Deck",
        "cost": {
          "blade": 6,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [10],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Skewer":{
        "id": 38,
        "name":"Skewer",
        "description":"Shuffle IMPALED into the Deck",
        "cost": {
          "blade": 2,
          "flourish": 2,
          "lunge": 2,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [11],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Boot Stomp":{
        "id": 39,
        "name":"Boot Stomp",
        "description":"Shuffle CRUSHED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 6,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [10],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Pulverize":{
        "id": 40,
        "name":"Pulverize",
        "description":"Shuffle INCAPACITATED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 8
        },
        "reward": 0,
        "addToDeck": [12],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Perforate":{
        "id": 41,
        "name":"Perforate",
        "description":"Shuffle IMPALED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 6,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [11],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Shield Crush":{
        "id": 42,
        "name":"Shield Crush",
        "description":"Shuffle CRUSHED into the Deck",
        "cost": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 6
        },
        "reward": 0,
        "addToDeck": [10],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Decapitate":{
        "id": 43,
        "name":"Decapitate",
        "description":"Shuffle INCAPACITATED into the Deck",
        "cost": {
          "blade": 8,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
        "reward": 0,
        "addToDeck": [12],
        "delete": [],
        "win": false,
        "lose":false
      },
      "Win":{
        "id": 44,
        "name":"Win",
        "description":"Win the fight",
        "cost": {
          "heavy": 0,
          "flourish": 0,
          "lunge": 0,
          "block": 0
        },
        "reward": 0,
        "addToDeck": [12],
        "delete": [],
        "win": true,
        "lose":false
      }
  }

  export default reactions