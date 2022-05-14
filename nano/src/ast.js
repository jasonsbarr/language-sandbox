import { createType, VariantInfo } from "@jasonsbarr/functional-core";

const variantInfos = [
  VariantInfo("IntegerLiteral", ["value"]),
  VariantInfo("BooleanLiteral", ["value"]),
  VariantInfo("Identifier", ["name"]),
  VariantInfo("BinaryOperation", ["left", "operator", "right"]),
  VariantInfo("UnaryOperation", ["operator", "operand"]),
  VariantInfo("LetExpression", "assign", "body"),
  VariantInfo("CallExpression", ["fn", "args"]),
  VariantInfo("BlockExpression", ["children"]),
  VariantInfo("LambdaExpression", ["args", "body"]),
];

export const Ast = createType("Ast", variantInfos);
