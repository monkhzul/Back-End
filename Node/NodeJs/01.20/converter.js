
const args = process.argv.slice(2);
let regex = /[fcFC]+/g;

if (!isNaN(args[0])) {
    if (args[1] === args[1].match(regex).join('')) {
        var temp = args[0];
        var cToFahr = temp * 9 / 5 + 32;
        console.log(`Celsius ${args[0]}° C = Franheit ${cToFahr}° F`);
    } 
    if (args[1] === args[1].match(regex).join('')) {
        var temp = args[0];
        var fToCels = (temp - 32) * 5 / 9;
        console.log(`Franheit ${args[0]}° F = Celsius ${fToCels}° C`);
    }
} else {
    console.log("Ehnii utga deer too oruulna uu!");
}
