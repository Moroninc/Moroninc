let additions = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]
let Swifz = []
console.log(additions)

//  Logic
if (additions[0] === 1) {
    Swifz.push("$")
} else {
    Swifz.push("S")
}
if (additions[1] === 1) {
    Swifz.push("ω")
} else {
    Swifz.push("w")
}
if (additions[2] === 1) {
    Swifz.push("ᓰ")
} else {
    Swifz.push("i")
}
if (additions[3] === 1) {
    Swifz.push("千")
} else {
    Swifz.push("f")
}
if (additions[4] === 1) {
    Swifz.push("ʑ")
} else {
    Swifz.push("z")
}
console.log(Swifz[0] + Swifz[1] + Swifz[2] + Swifz[3] + Swifz[4])