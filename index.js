const franc = require("franc");
const lang = require("langs");
const color = require("colors");
const input = process.argv[2];
const lan = franc(input);
if(lan =='und')
{
    console.log("can't figure out the given input of language try simple text".red);
}
else
{
const language = lang.where("3", lan);
console.log(`the best guess is ${language.name}`.green);
}