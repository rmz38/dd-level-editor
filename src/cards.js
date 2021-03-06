const cards = {
    "Slash":{
      "id": 0,
      "name": "Slash",
      "texture": "slash",
      "reactions": [0,1,2,3],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "lunge",
      "level": 1
    },
    "Bide Time":{
      "id": 1,
      "name": "Bide Time",
      "texture": "bidetime",
      "reactions": [4,5,6,7,29],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "blade",
      "level": 1
    },
    "Guard":{
      "id": 2,
      "name": "Guard",
      "texture": "guard",
      "reactions": [8,9,10,11],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "brawn",
      "level": 1
    },
    "Grab":{
      "id": 3,
      "name": "Grab",
      "texture": "grab",
      "reactions": [12,13,14,25],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "flourish",
      "level": 1
    },
    "Grappled":{
      "id": 4,
      "name": "Grappled",
      "texture": "grappled",
      "reactions": [15,16,17,18],
      "resources": {
          "blade": 5,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "flourish",
      "level": 2
    },
    "Exposed":{
      "id": 5,
      "name": "Exposed",
      "texture": "exposed",
      "reactions": [19,20,21,22],
      "resources": {
          "blade": 0,
          "flourish": 5,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "lunge",
      "level": 2
    },
    "Staggered":{
      "id": 6,
      "name": "Staggered",
      "texture": "staggered",
      "reactions": [23,24],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 5,
          "brawn": 0
        },
      "responseType": "brawn",
      "level": 2
    },
    "Stunned":{
      "id": 7,
      "name": "Stunned",
      "texture": "stunned",
      "reactions": [27,28],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 10
        },
      "responseType": "lunge",
      "level": 3
    },
    "Wounded":{
      "id": 8,
      "name": "Wounded",
      "texture": "wounded",
      "reactions": [31,32,33],
      "resources": {
          "blade": 0,
          "flourish": 10,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "flourish",
      "level": 3
    },
    "Blinded":{
      "id": 9,
      "name": "Blinded",
      "texture": "blinded",
      "reactions": [34,35,36,37],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 10,
          "brawn": 0
        },
      "responseType": "blade",
      "level": 3
    },
    "Crushed":{
      "id": 10,
      "name": "Crushed",
      "texture": "crushed",
      "reactions": [38,39,40],
      "resources": {
          "blade": 15,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "brawn",
      "level": 4
    },
    "Impaled":{
      "id": 11,
      "name": "Impaled",
      "texture": "impaled",
      "reactions": [41,42,43],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 15
        },
      "responseType": "blade",
      "level": 4
    },
    "Incapacitated":{
      "id": 12,
      "name": "Incapacitated",
      "texture": "incapacitated",
      "reactions": [],
      "resources": {
          "blade": 0,
          "flourish": 0,
          "lunge": 0,
          "brawn": 0
        },
      "responseType": "none",
      "level": 5
    }
  }


export default cards;
  