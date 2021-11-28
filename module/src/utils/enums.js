const MMR = Object.freeze({
  "iron4": 200,
  "iron3": 400,
  "iron": 600,
  "iron2": 800,
  "iron1": 1000,
  "bronze4": 1100,
  "bronze3": 1150,
  "bronze":1200,
  "bronze2":1250,
  "bronze1":1300,
  "silver4":1400,
  "silver3":1450,
  "silver":1500,
  "silver2":1550,
  "silver1":1600,
  "gold4":1700,
  "gold3":1750,
  "gold":1800,
  "gold2":1850,
  "gold1":1900,
  "platinum4":2000,
  "platinum3":2050,
  "platinum":2100,
  "platinum2":2150,
  "platinum1":2200,
  "diamond4":2300,
  "diamond3":2350,
  "diamond":2400,
  "diamond2":2450,
  "diamond1":2500,
  "master":2750,
  "grandmaster":3000,
  "challenger":3250
})

const MMR_MODIFIER = Object.freeze({
  "fill":1,
  "primary":1,
  "secondary": .9,
  "autofill": .5,
})

const ROLES_BY_INDEX = Object.freeze(["top", "jug", "mid", "bot", "sup", "top", "jug", "mid", "bot", "sup"])


module.exports = { MMR_MODIFIER, MMR, ROLES_BY_INDEX }