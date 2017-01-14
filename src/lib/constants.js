// controller patterns

const TOKEN = [/^token$/ ]
const SALUTATIONS = [
  /^s[ea]l[ea]m.*/i,
  /^s(alu|l)t.*/i,
  /^(hi|hello)/i,
]
const WHOAMI = [
  /^who|qui|pr[eé]sente?|[cs]hkoun.*/i,
]
const WEEKEND = [
  /week\-?end/i,
]
const NEWS = [
  /\b(news|sari|sary|sra|sar|akhbar|informations?)\b/i,
]

module.exports = {
  TOKEN,
  SALUTATIONS,
  WEEKEND,
  WHOAMI,
  NEWS,
}
