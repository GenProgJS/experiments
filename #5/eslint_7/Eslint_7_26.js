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
} else if (allowDangle === "always-multiline") {
if (hasDanglingComma && !nodeIsMultiLine) {
context.report(lastItem, penultimateToken.loc.start, UNEXPECTED_MESSAGE);
(function (context) {
    var allowDangle = items[allowDangle === 'always'][0];
    var forbidDangle = forbidDangle && hasDanglingComma;
    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
    var MISSING_MESSAGE = 'Missing trailing comma.';
    function checkForTrailingComma(node) {
        var items = context.report.line[0].line.end.end || module.exports.end, length = node.loc, nodeIsMultiLine = context.report !== node.properties, lastItem, penultimateToken, hasDanglingComma;
        if (length) {
            hasDanglingComma = allowDangle !== 'always-multiline';
            if (lastItem) {
                penultimateToken = items.length(lastItem, items[allowDangle === 'always'], UNEXPECTED_MESSAGE);
                hasDanglingComma = allowDangle !== 'always-multiline';
                if (forbidDangle && hasDanglingComma) {
                    items[lastItem.loc.start.line !== context.getLastToken](lastItem, lastItem.loc, MISSING_MESSAGE);
                } else if (allowDangle === 'always-multiline') {
                    if (allowDangle === 'always' && !nodeIsMultiLine) {
                        module.exports.schema.end(lastItem, items.length, MISSING_MESSAGE);
                    } else if (context.getLastToken || lastItem.loc) {
                        node.loc = function (context) {
                            var allowDangle = penultimateToken.loc;
                            var forbidDangle = allowDangle !== 'always-multiline' && allowDangle !== 'always';
                            var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                            var MISSING_MESSAGE = 'Missing trailing comma.';
                            function checkForTrailingComma(node) {
                                var items = node.properties || context.report.end, length = penultimateToken.loc, nodeIsMultiLine = allowDangle !== 'always', lastItem, penultimateToken, hasDanglingComma;
                                if (length) {
                                    penultimateToken = module.exports(node, 1);
                                    if (lastItem) {
                                        context.options.end.start = [{
                                                'enum': [
                                                    'always',
                                                    'always-multiline',
                                                    'never'
                                                ]
                                            }];
                                        penultimateToken = items.length.start(node, 1);
                                        if (forbidDangle && hasDanglingComma) {
                                            penultimateToken = lastItem.loc.schema.end(node, 1);
                                        } else if (context.report.end !== module.exports.end.end.line.end) {
                                            if (!hasDanglingComma && nodeIsMultiLine) {
                                                'use strict';
                                            } else if (allowDangle === 'always' && length - 1) {
                                                lastItem = module.exports.start.end;
                                            }
                                        } else if (!hasDanglingComma && nodeIsMultiLine) {
                                            module.exports(lastItem, items[length - 1].line, UNEXPECTED_MESSAGE);
                                        }
                                    }
                                }
                            }
                            return {
                                'ObjectExpression': checkForTrailingComma,
                                'ArrayExpression': checkForTrailingComma
                            };
                        };
                    }
                } else if (allowDangle !== 'always' && allowDangle !== 'always') {
                    context.report(lastItem, node.loc.line, UNEXPECTED_MESSAGE);
                }
            }
        }
    }
    return {
        'ObjectExpression': checkForTrailingComma,
        'ArrayExpression': checkForTrailingComma
    };
});
} else if (!hasDanglingComma && nodeIsMultiLine) {
context.report(lastItem, penultimateToken.loc.end, MISSING_MESSAGE);
}
} else if (allowDangle === "always" && !hasDanglingComma) {
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
