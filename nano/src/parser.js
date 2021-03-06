import { lexer, rule } from "@jasonsbarr/lexer";
import { createParser } from "@jasonsbarr/pratt-generator";

const keywords = [
  "true",
  "false",
  "let",
  "in",
  "fun",
  "if",
  "then",
  "else",
  "do",
  "end",
];

const rules = [
  ...keywords.map((kw) => rule(kw.toUpperCase(), kw + String.raw`\b`)),
  rule("INTEGER", String.raw`\d+`),
  rule("ARROW", String.raw`->`),
  rule("PLUS", String.raw`\+`),
  rule("EXP", String.raw`\*\*`),
  rule("MUL", String.raw`\*`),
  rule("MINUS", String.raw`-`),
  rule("DIV", String.raw`/`),
  rule("EQ", String.raw`==`),
  rule("GT", String.raw`>`),
  rule("GTE", String.raw`>=`),
  rule("LT", String.raw`<`),
  rule("LTE", String.raw`<=`),
  rule("NE", String.raw`!=`),
  rule("AND", String.raw`&&`),
  rule("OR", String.raw`\|\|`),
  rule("NOT", String.raw`!`),
  rule("ASSIGN", String.raw`=`),
  rule("IDENT", String.raw`[a-z_][\w]*`),
  rule("WS", String.raw`[\t ]+`),
  rule("NL", String.raw`\r?\n`),
  rule("LPAREN", String.raw`\(`),
  rule("RPAREN", String.raw`\)`),
  rule("COMMA", String.raw`,`),
];

const ops = [
  {
    type: "oper",
    id: "integerLiteral",
    nToken: "INTEGER",
    lToken: null,
    oToken: null,
    prec: 0,
    assoc: "NONE",
    affix: "NONE",
    arity: "NONE",
  },
  {
    type: "oper",
    id: "trueLiteral",
    nToken: "TRUE",
    lToken: null,
    oToken: null,
    prec: 0,
    assoc: "NONE",
    affix: "NONE",
    arity: "NONE",
  },
  {
    type: "oper",
    id: "falseLiteral",
    nToken: "FALSE",
    lToken: null,
    oToken: null,
    prec: 0,
    assoc: "NONE",
    affix: "NONE",
    arity: "NONE",
  },
  {
    type: "oper",
    id: "identifier",
    nToken: "IDENT",
    lToken: null,
    oToken: null,
    prec: 0,
    assoc: "NONE",
    affix: "NONE",
    arity: "NONE",
  },
  {
    type: "oper",
    id: "plus",
    nToken: null,
    lToken: "PLUS",
    oToken: null,
    prec: 30,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "sub",
    nToken: null,
    lToken: "MINUS",
    oToken: null,
    prec: 30,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "mul",
    nToken: null,
    lToken: "MUL",
    oToken: null,
    prec: 40,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "div",
    nToken: null,
    lToken: "DIV",
    oToken: null,
    prec: 40,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "exp",
    nToken: null,
    lToken: "EXP",
    oToken: null,
    prec: 40,
    assoc: "RIGHT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "lt",
    nToken: null,
    lToken: "LT",
    oToken: null,
    prec: 25,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "lte",
    nToken: null,
    lToken: "LTE",
    oToken: null,
    prec: 25,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "gt",
    nToken: null,
    lToken: "GT",
    oToken: null,
    prec: 25,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "gte",
    nToken: null,
    lToken: "GTE",
    oToken: null,
    prec: 25,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "eq",
    nToken: null,
    lToken: "EQ",
    oToken: null,
    prec: 20,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "ne",
    nToken: null,
    lToken: "NE",
    oToken: null,
    prec: 20,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "and",
    nToken: null,
    lToken: "AND",
    oToken: null,
    prec: 15,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "or",
    nToken: null,
    lToken: "OR",
    oToken: null,
    prec: 14,
    assoc: "LEFT",
    affix: "INFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "not",
    nToken: "NOT",
    lToken: null,
    oToken: null,
    prec: 50,
    assoc: "RIGHT",
    affix: "PREFIX",
    arity: "UNARY",
  },
  {
    type: "oper",
    id: "uMinus",
    nToken: "MINUS",
    lToken: null,
    oToken: null,
    prec: 50,
    assoc: "RIGHT",
    affix: "PREFIX",
    arity: "UNARY",
  },
  {
    type: "oper",
    id: "let",
    nToken: "LET",
    lToken: "IN",
    oToken: null,
    prec: 5,
    assoc: "NONE",
    affix: "MIXFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "lambda",
    nToken: "FUN",
    lToken: "ARROW",
    oToken: null,
    prec: 10,
    assoc: "LEFT",
    affix: "MIXFIX",
    arity: "BINARY",
  },
  {
    type: "oper",
    id: "ifThenElse",
    nToken: "IF",
    lToken: "THEN",
    oToken: "ELSE",
    prec: 5,
    assoc: "LEFT",
    affix: "MIXFIX",
    arity: "TERNARY",
  },
  {
    type: "oper",
    id: "parenthesize",
    nToken: "LPAREN",
    lToken: null,
    oToken: "RPAREN",
    prec: 100,
    assoc: "NONE",
    affix: "MATCHFIX",
    arity: "UNARY",
  },
  {
    type: "oper",
    id: "block",
    nToken: "DO",
    lToken: null,
    oToken: "END",
    prec: 0,
    assoc: "NONE",
    affix: "MATCHFIX",
    arity: "VARIABLE",
  },
  {
    type: "oper",
    id: "call",
    nToken: null,
    lToken: "LPAREN",
    oToken: "RPAREN",
    prec: 90,
    assoc: "LEFT",
    affix: "MATCHFIX",
    arity: "BINARY",
  },
  {
    type: "sequence",
    id: "Comma",
    name: "COMMA",
  },
  {
    type: "assign",
    id: "assign",
    name: "ASSIGN",
  },
];

const parser = createParser(ops);

const filterWs = (tokens) =>
  tokens.filter((tok) => tok.type !== "WS" && tok.type !== "NL");

export const parse = (input) =>
  parser(filterWs(lexer(rules).compile().input(input).tokenize()));
