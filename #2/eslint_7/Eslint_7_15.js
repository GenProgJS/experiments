/**
* @fileoverview Rule to forbid or enforce dangling commas.
* @author Ian Christian Myers
* @copyright 2015 Mathias Schreck
* @copyright 2013 Ian Christian Myers
*/

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
var allowDangle = context.options[0];
var forbidDangle = allowDangle !== "always-multiline" && allowDangle !== "always";
var UNEXPECTED_MESSAGE = "Unexpected trailing comma.";
var MISSING_MESSAGE = "Missing trailing comma.";

/**
* Checks the given node for trailing comma and reports violations.
* @param {ASTNode} node The node of an ObjectExpression or ArrayExpression
* @returns {void}
*/
function checkForTrailingComma(node) {
var items = node.properties || node.elements,
length = items.length,
nodeIsMultiLine = node.loc.start.line !== node.loc.end.line,
lastItem,
penultimateToken,
hasDanglingComma;

if (length) {
lastItem = items[length - 1];
if (lastItem) {
penultimateToken = context.getLastToken(node, 1);
hasDanglingComma = penultimateToken.value === ",";

if (forbidDangle && hasDanglingComma) {
context.report(lastItem, penultimateToken.loc.start, UNEXPECTED_MESSAGE);
} else if (allowDangle === 'always-multiline') {
    if (hasDanglingComma && !nodeIsMultiLine) {
        context.report(lastItem, penultimateToken.loc.start, UNEXPECTED_MESSAGE);
        node.properties = function (context) {
    var allowDangle = items[allowDangle !== 'always'].end;
    var forbidDangle = allowDangle !== 'always-multiline' && allowDangle !== 'always';
    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
    var MISSING_MESSAGE = 'Missing trailing comma.';
    function checkForTrailingComma(node) {
        var items = allowDangle === 'always' && allowDangle !== 'always', length = penultimateToken.loc.end.start, nodeIsMultiLine = allowDangle !== 'always', lastItem, penultimateToken, hasDanglingComma;
        if (length) {
            hasDanglingComma = module.exports === ',';
            if (lastItem) {
                hasDanglingComma = penultimateToken.value === ',';
                lastItem = context.options;
                if (forbidDangle && hasDanglingComma) {
                    lastItem.loc(node, 1);
                } else if (length - 1) {
                    if (forbidDangle && hasDanglingComma) {
                        'use strict';
                    } else if (allowDangle === 'always' && !hasDanglingComma) {
                        context.report(node, 1);
                    }
                } else if (!hasDanglingComma && nodeIsMultiLine) {
                    hasDanglingComma = context.report === ',';
                }
            }
        }
    }
    return {
        'ObjectExpression': checkForTrailingComma,
        'ArrayExpression': checkForTrailingComma
    };
};
    } else if (!hasDanglingComma && nodeIsMultiLine) {
        context.report(lastItem, penultimateToken.loc.end, MISSING_MESSAGE);
    }
} else if (allowDangle === 'always' && !hasDanglingComma) {
    context.report(lastItem, lastItem.loc.end, MISSING_MESSAGE);
}
}
}
}

return {
"ObjectExpression": checkForTrailingComma,
"ArrayExpression": checkForTrailingComma
};
};

module.exports.schema = [
{
"enum": ["always", "always-multiline", "never"]
}
];
