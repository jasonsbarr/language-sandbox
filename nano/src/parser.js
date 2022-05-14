import { lexer as makeLexer, rule } from "@jasonsbarr/lexer";
import { createParser } from "@jasonsbarr/pratt-generator";

const keywords = [
  "true",
  "false",
  "let",
  "in",
  "fun",
  "if",
  "else",
  "do",
  "end",
];

const rules = [
  ...keywords.map((kw) => rule(kw.toUpperCase(), kw)),
  rule("INTEGER", String.raw`\d+`),
  rule("PLUS", String.raw`\+`),
  rule("TIMES", String.raw`\*`),
  rule("MINUS", String.raw`\-`),
  rule("DIV", String.raw`\/`),
  rule("EQ", String.raw`==`),
  rule("GT", String.raw`>`),
  rule("GTE", String.raw`>=`),
  rule("LT", String.raw`<`),
  rule("LTE", String.raw`<=`),
  rule("NE", String.raw`!=`),
  rule("AND", String.raw`&&`),
  rule("OR", String.raw`||`),
  rule("NOT", String.raw`!`),
  rule("ASSIGN", String.raw`=`),
  rule("SEMI", String.raw`;`),
  rule("IDENT", String.raw`[a-z_][\w]*`),
  rule("WS", String.raw`[\t ]+`),
  rule("NL", String.raw`\r?\n`),
];

const lexer = makeLexer(rules);

const ops = [];

const parser = createParser(ops);

const filterWs = (tokens) =>
  tokens.filter((tok) => tok.type !== "WS" && tok.type !== "NL");

export const parse = (input) =>
  parser(filterWs(lexer(rules).input(input).tokenize()));
