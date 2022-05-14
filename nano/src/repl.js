import readlineSync from "readline-sync";
import { parse } from "./parser.js";

const REP = (input) => console.log(parse(input));

export const repl = () => {
  while (true) {
    let line = readlineSync.question("nano> ");
    if (line === "") break;
    REP(line);
  }
};
