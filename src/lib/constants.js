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

module.exports = {
  TOKEN,
  SALUTATIONS,
  WEEKEND,
  WHOAMI,
}
