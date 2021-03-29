const reactions = {
      "Slash1":{
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
      "Slash2":{
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
      "Slash3":{
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
      "Slash4":{
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
      "BideTime1":{
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
      "BideTime2":{
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
      "BideTime3":{
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
      "BideTime4":{
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
      "Guard1":{
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
      "Guard2":{
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
      "Guard3":{
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
      "Guard4":{
        "id": 11,
        "name":"Grab",
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
      "Grab1":{
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
      "Grab2":{
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
      "Grab3":{
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
      "Grappled1":{
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
      "Grappled2":{
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
      "Grappled3":{
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
      "Grappled4":{
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
      "Exposed1":{
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
      "Exposed2":{
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
      "Exposed3":{
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
      "Exposed4":{
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
      "Staggered1":{
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
      "Staggered2":{
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
      "Staggered3":{
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
      "Staggered4":{
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
      "Stunned1":{
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
      "Stunned2":{
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
      "Stunned3":{
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
      "Stunned4":{
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
      "Wounded1":{
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
      "Wounded2":{
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
      "Wounded3":{
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
      "Blinded1":{
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
      "Blinded2":{
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
      "Blinded3":{
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
      "Blinded4":{
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
      "Crushed1":{
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
      "Crushed2":{
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
      "Crushed3":{
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
      "Impaled1":{
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
      "Impaled2":{
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
      "Impaled3":{
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