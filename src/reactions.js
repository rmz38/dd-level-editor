const reactions = {
  "Block":{
    "id": 0,
    "name":"Block",
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
    "lose":false,
    "fontSize":1,
    "animation":1
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
    "lose":false,
    "fontSize": 0.75,
    "animation":1
  },
  "Parry":{
    "id": 2,
    "name":"Parry",
    "description":"Shuffle GUARD into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 1,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [2],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
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
    "lose":false,
    "fontSize":0.75,
    "animation":1
  },
  "Lunge":{
    "id": 4,
    "name":"Lunge",
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Guard":{
    "id": 5,
    "name":"Guard",
    "description":"Shuffle SLASH into the Deck",
    "cost": {
      "blade": 1,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [0],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Feint":{
    "id": 7,
    "name":"Feint",
    "description":"Shuffle STAGGERED into the Deck",
    "cost": {
      "blade": 2,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [6],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Stand By":{
    "id": 29,
    "name":"Stand By",
    "description":"Shuffle BIDE TIME into the Deck",
    "cost": {
      "blade": 1,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [1],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.9,
    "animation":1
  },
  "Strike":{
    "id": 8,
    "name":"Strike",
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Probe":{
    "id": 9,
    "name":"Probe",
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Jump Back":{
    "id": 10,
    "name":"Jump Back",
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
    "lose":false,
    "fontSize":0.85,
    "animation":1
  },
  "Grasp":{
    "id": 11,
    "name":"Grasp",
    "description":"Shuffle GRAPPLED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 2
    },
    "reward": 0,
    "addToDeck": [4],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Break Free":{
    "id": 12,
    "name":"Break Free",
    "description":"Shuffle BIDE TIME into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 1,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [1],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.8,
    "animation":1
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Kick":{
    "id": 14,
    "name":"Kick",
    "description":"Shuffle STAGGERED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 2,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [6],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Slip Away":{
    "id": 25,
    "name":"Slip Away",
    "description":"Shuffle EXPOSED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 2,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [5],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.85,
    "animation":1
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
    "lose":false,
    "fontSize":0.9,
    "animation":1
  },
  "Wrench":{
    "id": 16,
    "name":"Wrench",
    "description":"Shuffle STAGGERED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 2,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [6],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Face Grab":{
    "id": 17,
    "name":"Face Grab",
    "description":"Shuffle BLINDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 4,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [9],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.85,
    "animation":1
  },
  "Headbutt":{
    "id": 18,
    "name":"Headbutt",
    "description":"Shuffle STUNNED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 4,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [7],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.9,
    "animation":1
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Whack":{
    "id": 20,
    "name":"Whack",
    "description":"Shuffle STUNNED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 4,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [7],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Cut Above the Eyes":{
    "id": 21,
    "name":"Cut Above the Eyes",
    "description":"Shuffle BLINDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 4,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [9],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.45,
    "animation":1
  },
  "Backstab":{
    "id": 22,
    "name":"Backstab",
    "description":"Shuffle WOUNDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 4,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [8],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Juke":{
    "id": 23,
    "name":"Juke",
    "description":"Shuffle EXPOSED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 2
    },
    "reward": 0,
    "addToDeck": [5],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Tackle":{
    "id": 24,
    "name":"Tackle",
    "description":"Shuffle GRAPPLED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 2
    },
    "reward": 0,
    "addToDeck": [4],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Eye Stab":{
    "id": 27,
    "name":"Eye Stab",
    "description":"Shuffle BLINDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 4,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [9],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.9,
    "animation":1
  },
  "Shield Bash":{
    "id": 28,
    "name":"Shield Bash",
    "description":"Shuffle WOUNDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 4,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [8],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.78,
    "animation":1
  },
  "Re-Wound":{
    "id": 31,
    "name":"Re-Wound",
    "description":"Shuffle WOUNDED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 4,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [8],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.85,
    "animation":1
  },
  "Hammer Kick":{
    "id": 32,
    "name":"Hammer Kick",
    "description":"Shuffle CRUSHED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 6,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [10],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.65,
    "animation":1
  },
  "Pierce":{
    "id": 33,
    "name":"Pierce",
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
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Discombobulate":{
    "id": 34,
    "name":"Discombobulate",
    "description":"Shuffle BLINDED into the Deck",
    "cost": {
      "blade": 4,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [9],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.56,
    "animation":1
  },
  "Mangle":{
    "id": 35,
    "name":"Mangle",
    "description":"Shuffle WOUNDED into the Deck",
    "cost": {
      "blade": 4,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [8],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
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
    "lose":false,
    "fontSize":1,
    "animation":1
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
    "lose":false,
    "fontSize":0.73,
    "animation":1
  },
  "Skewer":{
    "id": 38,
    "name":"Skewer",
    "description":"Shuffle IMPALED into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 6
    },
    "reward": 0,
    "addToDeck": [11],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":1,
    "animation":1
  },
  "Boot Stomp":{
    "id": 39,
    "name":"Boot Stomp",
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
    "lose":false,
    "fontSize":0.75,
    "animation":1
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
    "win": true,
    "lose":false,
    "fontSize":0.9,
    "animation":1
  },
  "Perforate":{
    "id": 41,
    "name":"Perforate",
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
    "lose":false,
    "fontSize":0.9,
    "animation":1
  },
  "Shield Crush":{
    "id": 42,
    "name":"Shield Crush",
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
    "lose":false,
    "fontSize":0.69,
    "animation":1
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
    "win": true,
    "lose":false,
    "fontSize":0.85,
    "animation":1
  },
  "Back Pocket":{
    "id": 45,
    "name":"Back Pocket",
    "description":"Shuffle SECOND WIND into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [-1],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.72,
    "animation":1
  },
  "Save DeckBoost":{
    "id": 46,
    "name":"Save DeckBoost",
    "description":"Shuffle DECK BOOST into the Deck",
    "cost": {
      "blade": 0,
      "flourish": 0,
      "lunge": 0,
      "brawn": 0
    },
    "reward": 0,
    "addToDeck": [-1],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.72,
    "animation":1
  },
  "Symbiosis":{
    "id": 47,
    "name":"Symbiosis",
    "description":"Shuffle PARASITE into the Deck",
    "cost": {
      "blade": 1,
      "flourish": 1,
      "lunge": 1,
      "brawn": 1
    },
    "reward": 0,
    "addToDeck": [-1],
    "delete": [],
    "win": false,
    "lose":false,
    "fontSize":0.9,
    "animation":1
  }
}
  export default reactions