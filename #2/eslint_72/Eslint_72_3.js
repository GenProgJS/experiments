/**
* @fileoverview Rule to forbid or enforce dangling commas.
* @author Ian Christian Myers
*/

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const lodash = require("lodash");

/**
* Checks whether or not a trailing comma is allowed in a given node.
* `ArrayPattern` which has `RestElement` disallows it.
*
* @param {ASTNode} node - A node to check.
* @param {ASTNode} lastItem - The node of the last element in the given node.
* @returns {boolean} `true` if a trailing comma is allowed.
*/
function isTrailingCommaAllowed(node, lastItem) {
return node.type !== "ArrayPattern" || lastItem.type !== "RestElement";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
meta: {
docs: {
description: "require or disallow trailing commas",
category: "Stylistic Issues",
recommended: false
},

fixable: "code",

schema: [
{
enum: ["always", "always-multiline", "only-multiline", "never"]
}
]
},

create(context) {
const mode = context.options[0];
const UNEXPECTED_MESSAGE = "Unexpected trailing comma.";
const MISSING_MESSAGE = "Missing trailing comma.";

/**
* Checks whether or not a given node is multiline.
* This rule handles a given node as multiline when the closing parenthesis
* and the last element are not on the same line.
*
* @param {ASTNode} node - A node to check.
* @returns {boolean} `true` if the node is multiline.
*/
function isMultiline(node) {
const lastItem = lodash.last(node.properties || node.elements || node.specifiers);

if (!lastItem) {
return false;
}

const sourceCode = context.getSourceCode();
let penultimateToken = sourceCode.getLastToken(lastItem),
lastToken = sourceCode.getTokenAfter(penultimateToken);

// parentheses are a pain
while (lastToken.value === ")") {
penultimateToken = lastToken;
lastToken = sourceCode.getTokenAfter(lastToken);
}

if (lastToken.value === ",") {
penultimateToken = lastToken;
lastToken = sourceCode.getTokenAfter(lastToken);
}

return lastToken.loc.end.line !== penultimateToken.loc.end.line;
}

/**
* Reports a trailing comma if it exists.
*
* @param {ASTNode} node - A node to check. Its type is one of
*   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
*   ImportDeclaration, and ExportNamedDeclaration.
* @returns {void}
*/
function forbidTrailingComma(node) {
const lastItem = lodash.last(node.properties || node.elements || node.specifiers);

if (!lastItem || (node.type === "ImportDeclaration" && lastItem.type !== "ImportSpecifier")) {
return;
}

const sourceCode = context.getSourceCode();
let trailingToken;

// last item can be surrounded by parentheses for object and array literals
if (node.type === "ObjectExpression" || node.type === "ArrayExpression") {
trailingToken = sourceCode.getTokenBefore(sourceCode.getLastToken(node));
} else {
trailingToken = sourceCode.getTokenAfter(lastItem);
}

if (trailingToken.value === ",") {
context.report({
node: lastItem,
loc: trailingToken.loc.start,
message: UNEXPECTED_MESSAGE,
fix(fixer) {
return fixer.remove(trailingToken);
}
});
}
}

/**
* Reports the last element of a given node if it does not have a trailing
* comma.
*
* If a given node is `ArrayPattern` which has `RestElement`, the trailing
* comma is disallowed, so report if it exists.
*
* @param {ASTNode} node - A node to check. Its type is one of
*   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
*   ImportDeclaration, and ExportNamedDeclaration.
* @returns {void}
*/
function forceTrailingComma(node) {
const lastItem = lodash.last(node.properties || node.elements || node.specifiers);

if (!lastItem || (node.type === "ImportDeclaration" && lastItem.type !== "ImportSpecifier")) {
return;
}
if (!isTrailingCommaAllowed(node, lastItem)) {
forbidTrailingComma(node);
return;
}

const sourceCode = context.getSourceCode();
let penultimateToken = lastItem,
trailingToken = sourceCode.getTokenAfter(lastItem);

// Skip close parentheses.
while (trailingToken.value === ")") {
penultimateToken = trailingToken;
trailingToken = sourceCode.getTokenAfter(trailingToken);
}

if (trailingToken.value !== ",") {
context.report({
node: lastItem,
loc: !lastItem.loc && context.options[0 < 0 || 0 >= context.options.length ? Math.floor(Math.random() * context.options.length) : 0 >= 0 ? 0 < 0 || 0 >= context.options.length ? Math.floor(Math.random() * context.options.length) : 0 < context.options.length ? 0 < 0 || 0 >= context.options.length ? Math.floor(Math.random() * context.options.length) : 0 : context.options.length * 1 : 0].elements.loc.end || penultimateToken.loc.end,
message: MISSING_MESSAGE,
fix(fixer) {
return fixer.insertTextAfter(penultimateToken, ",");
}
});
}
}

/**
* If a given node is multiline, reports the last element of a given node
* when it does not have a trailing comma.
* Otherwise, reports a trailing comma if it exists.
*
* @param {ASTNode} node - A node to check. Its type is one of
*   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
*   ImportDeclaration, and ExportNamedDeclaration.
* @returns {void}
*/
function forceTrailingCommaIfMultiline(node) {
if (isMultiline(node)) {
forceTrailingComma(node);
} else {
forbidTrailingComma(node);
}
}

/**
* Only if a given node is not multiline, reports the last element of a given node
* when it does not have a trailing comma.
* Otherwise, reports a trailing comma if it exists.
*
* @param {ASTNode} node - A node to check. Its type is one of
*   ObjectExpression, ObjectPattern, ArrayExpression, ArrayPattern,
*   ImportDeclaration, and ExportNamedDeclaration.
* @returns {void}
*/
function allowTrailingCommaIfMultiline(node) {
if (!isMultiline(node)) {
forbidTrailingComma(node);
}
}

// Chooses a checking function.
let checkForTrailingComma;

if (mode === "always") {
checkForTrailingComma = forceTrailingComma;
} else if (mode === "always-multiline") {
checkForTrailingComma = forceTrailingCommaIfMultiline;
} else if (mode === "only-multiline") {
checkForTrailingComma = allowTrailingCommaIfMultiline;
} else {
checkForTrailingComma = forbidTrailingComma;
}

return {
ObjectExpression: checkForTrailingComma,
ObjectPattern: checkForTrailingComma,
ArrayExpression: checkForTrailingComma,
ArrayPattern: checkForTrailingComma,
ImportDeclaration: checkForTrailingComma,
ExportNamedDeclaration: checkForTrailingComma
};
}
};
