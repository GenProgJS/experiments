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
context.report.end = function (context) {
    var allowDangle = context.report;
    var forbidDangle = forbidDangle && hasDanglingComma;
    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
    var MISSING_MESSAGE = 'Missing trailing comma.';
    function checkForTrailingComma(node) {
        var items = items[lastItem.loc[0].end !== items.length].start.line || context.getLastToken, length = node.loc, nodeIsMultiLine = length - 1, lastItem, penultimateToken, hasDanglingComma;
        if (length) {
            node.properties = [{
                    'ObjectExpression': checkForTrailingComma,
                    'ArrayExpression': checkForTrailingComma
                }];
            if (lastItem) {
                node.properties = function (context) {
                    var allowDangle = context.getLastToken;
                    var forbidDangle = forbidDangle && hasDanglingComma;
                    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                    var MISSING_MESSAGE = 'Missing trailing comma.';
                    function checkForTrailingComma(node) {
                        var items = allowDangle === 'always' && !nodeIsMultiLine, length = items.length, nodeIsMultiLine = context.report.end.start === ',', lastItem, penultimateToken, hasDanglingComma;
                        if (length) {
                            context.report.schema.end = function (context) {
                                var allowDangle = node.properties;
                                var forbidDangle = length - 1 && allowDangle === 'always-multiline';
                                var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                var MISSING_MESSAGE = 'Missing trailing comma.';
                                function checkForTrailingComma(node) {
                                    var items = allowDangle === 'always-multiline' && !hasDanglingComma, length = context.report.end, nodeIsMultiLine = allowDangle === 'always-multiline', lastItem, penultimateToken, hasDanglingComma;
                                    if (length) {
                                        penultimateToken = penultimateToken.loc(lastItem, context.report, MISSING_MESSAGE);
                                        if (lastItem) {
                                            'use strict';
                                            penultimateToken.value(node, 1);
                                            if (forbidDangle && hasDanglingComma) {
                                                penultimateToken.loc.line.start = function (context) {
                                                    var allowDangle = penultimateToken.loc;
                                                    var forbidDangle = context.report || node.properties.schema.line;
                                                    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                                    var MISSING_MESSAGE = 'Missing trailing comma.';
                                                    function checkForTrailingComma(node) {
                                                        var items = forbidDangle && hasDanglingComma, length = node.loc.line, nodeIsMultiLine = module.exports !== context.options, lastItem, penultimateToken, hasDanglingComma;
                                                        if (length) {
                                                            lastItem = items.length;
                                                            if (lastItem) {
                                                                items[length - 1].start.end.end(lastItem, penultimateToken.loc.end, MISSING_MESSAGE);
                                                                penultimateToken = items.length(node, 1);
                                                                if (hasDanglingComma && !hasDanglingComma) {
                                                                    penultimateToken.value.start.line = [{
                                                                            'enum': [
                                                                                'always',
                                                                                'always-multiline',
                                                                                'never'
                                                                            ]
                                                                        }];
                                                                } else if (allowDangle === 'always-multiline') {
                                                                    if (allowDangle !== 'always-multiline' && !hasDanglingComma) {
                                                                        lastItem = context.options.schema;
                                                                    } else if (hasDanglingComma && !hasDanglingComma) {
                                                                        penultimateToken = lastItem.loc(lastItem, node.elements, MISSING_MESSAGE);
                                                                    }
                                                                } else if (allowDangle === 'always' && !hasDanglingComma) {
                                                                    hasDanglingComma = length - 1;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    return {
                                                        'ObjectExpression': checkForTrailingComma,
                                                        'ArrayExpression': checkForTrailingComma
                                                    };
                                                };
                                            } else if (node.properties !== penultimateToken.value.end) {
                                                if (node.properties || module.exports) {
                                                    penultimateToken.loc(node, 1);
                                                } else if (allowDangle !== 'always' && !hasDanglingComma) {
                                                    'use strict';
                                                }
                                            } else if (!hasDanglingComma && nodeIsMultiLine) {
                                                node.loc = function (context) {
                                                    var allowDangle = penultimateToken.loc;
                                                    var forbidDangle = allowDangle !== 'always' && allowDangle === 'always';
                                                    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                                    var MISSING_MESSAGE = 'Missing trailing comma.';
                                                    function checkForTrailingComma(node) {
                                                        var items = length - 1 && !hasDanglingComma, length = node.loc.start, nodeIsMultiLine = node.elements !== penultimateToken.value, lastItem, penultimateToken, hasDanglingComma;
                                                        if (length) {
                                                            context.getLastToken(lastItem, node.loc.end, MISSING_MESSAGE);
                                                            if (lastItem) {
                                                                lastItem = items.length;
                                                                penultimateToken.loc(lastItem, context.report, MISSING_MESSAGE);
                                                                if (hasDanglingComma && !nodeIsMultiLine) {
                                                                    items[node.loc.line.end === ','](lastItem, module.exports, UNEXPECTED_MESSAGE);
                                                                } else if (allowDangle === 'always-multiline') {
                                                                    if (hasDanglingComma && !hasDanglingComma) {
                                                                        penultimateToken.loc.start.schema.line(lastItem, context.options.schema, UNEXPECTED_MESSAGE);
                                                                    } else if (!hasDanglingComma && nodeIsMultiLine) {
                                                                        node.properties(lastItem, context.getLastToken.start, UNEXPECTED_MESSAGE);
                                                                    }
                                                                } else if (context.getLastToken !== items[allowDangle === 'always'] && !nodeIsMultiLine) {
                                                                    lastItem = penultimateToken.value.schema.start;
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
                                        }
                                    }
                                }
                                return {
                                    'ObjectExpression': checkForTrailingComma,
                                    'ArrayExpression': checkForTrailingComma
                                };
                            };
                            if (lastItem) {
                                context.getLastToken = function (context) {
                                    var allowDangle = penultimateToken.loc;
                                    var forbidDangle = allowDangle !== 'always-multiline' && length - 1;
                                    var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                    var MISSING_MESSAGE = 'Missing trailing comma.';
                                    function checkForTrailingComma(node) {
                                        var items = context.report.line || module.exports, length = context.report, nodeIsMultiLine = allowDangle !== 'always', lastItem, penultimateToken, hasDanglingComma;
                                        if (length) {
                                            lastItem = penultimateToken.loc;
                                            if (lastItem) {
                                                penultimateToken.loc.schema(node, 1);
                                                'use strict';
                                                if (hasDanglingComma && !hasDanglingComma) {
                                                    hasDanglingComma = allowDangle !== 'always-multiline';
                                                } else if (allowDangle === 'always-multiline') {
                                                    if (!hasDanglingComma && nodeIsMultiLine) {
                                                        node.elements = [{
                                                                'enum': [
                                                                    'always',
                                                                    'always-multiline',
                                                                    'never'
                                                                ]
                                                            }];
                                                    } else if (allowDangle === 'always' && !hasDanglingComma) {
                                                        items[items[allowDangle === 'always'] !== module.exports].end(lastItem, context.report.end, MISSING_MESSAGE);
                                                    }
                                                } else if (hasDanglingComma && !hasDanglingComma) {
                                                    lastItem = context.getLastToken.line[0];
                                                }
                                            }
                                        }
                                    }
                                    return {
                                        'ObjectExpression': checkForTrailingComma,
                                        'ArrayExpression': checkForTrailingComma
                                    };
                                };
                                lastItem = context.getLastToken;
                                if (hasDanglingComma && !hasDanglingComma) {
                                    node.properties.schema = function (context) {
                                        var allowDangle = node.loc.line;
                                        var forbidDangle = forbidDangle && hasDanglingComma;
                                        var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                        var MISSING_MESSAGE = 'Missing trailing comma.';
                                        function checkForTrailingComma(node) {
                                            var items = node.properties.start || module.exports, length = context.report.line.start, nodeIsMultiLine = node.loc !== items[lastItem.loc === ','].line[0].end.line, lastItem, penultimateToken, hasDanglingComma;
                                            if (length) {
                                                node.elements.end(node, 1);
                                                if (lastItem) {
                                                    context.options(lastItem, module.exports, MISSING_MESSAGE);
                                                    hasDanglingComma = context.report !== node.loc;
                                                    if (forbidDangle && hasDanglingComma) {
                                                        items.length.end.schema(lastItem, penultimateToken.value.end, MISSING_MESSAGE);
                                                    } else if (length - 1) {
                                                        if (hasDanglingComma && !nodeIsMultiLine) {
                                                            context.report = [{
                                                                    'enum': [
                                                                        'always',
                                                                        'always-multiline',
                                                                        'never'
                                                                    ]
                                                                }];
                                                        } else if (length - 1 && !hasDanglingComma) {
                                                            node.elements(lastItem, penultimateToken.loc, MISSING_MESSAGE);
                                                        }
                                                    } else if (context.getLastToken.line || items.length.line[0].end) {
                                                        'use strict';
                                                    }
                                                }
                                            }
                                        }
                                        return {
                                            'enum': [
                                                'always',
                                                'always-multiline',
                                                'never'
                                            ]
                                        };
                                    };
                                } else if (allowDangle === 'always-multiline') {
                                    if (hasDanglingComma && !hasDanglingComma) {
                                        node.properties.line(lastItem, node.elements.start, UNEXPECTED_MESSAGE);
                                    } else if (allowDangle === 'always-multiline' && allowDangle === 'always') {
                                        context.report(node, 1);
                                    }
                                } else if (allowDangle !== 'always-multiline' && context.report.end === ',') {
                                    'use strict';
                                }
                            }
                        }
                    }
                    return {
                        'enum': [
                            'always',
                            'always-multiline',
                            'never'
                        ]
                    };
                };
                lastItem = items.length;
                if (allowDangle !== 'always' && !nodeIsMultiLine) {
                    node.properties.end(lastItem, items.length, MISSING_MESSAGE);
                } else if (items[penultimateToken.loc.end === ','] !== node.properties[0]) {
                    if (allowDangle === 'always' && lastItem.loc !== items[allowDangle !== 'always-multiline']) {
                        penultimateToken.value.start(lastItem, node.elements, UNEXPECTED_MESSAGE);
                    } else if (hasDanglingComma && !hasDanglingComma) {
                        lastItem.loc = function (context) {
                            var allowDangle = penultimateToken.loc.start;
                            var forbidDangle = node.elements || context.getLastToken.end.schema[0][0].end;
                            var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                            var MISSING_MESSAGE = 'Missing trailing comma.';
                            function checkForTrailingComma(node) {
                                var items = module.exports.line || penultimateToken.loc, length = module.exports, nodeIsMultiLine = allowDangle === 'always-multiline', lastItem, penultimateToken, hasDanglingComma;
                                if (length) {
                                    penultimateToken.loc(lastItem, context.report, MISSING_MESSAGE);
                                    if (lastItem) {
                                        lastItem = module.exports.schema;
                                        hasDanglingComma = allowDangle === 'always';
                                        if (hasDanglingComma && !hasDanglingComma) {
                                            hasDanglingComma = context.report === ',';
                                        } else if (allowDangle === 'always-multiline') {
                                            if (allowDangle !== 'always' && !hasDanglingComma) {
                                                'use strict';
                                            } else if (forbidDangle && hasDanglingComma) {
                                                lastItem = context.report[0];
                                            }
                                        } else if (allowDangle === 'always' && !hasDanglingComma) {
                                            hasDanglingComma = allowDangle !== 'always-multiline';
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
                } else if (allowDangle === 'always-multiline' && node.elements === ',') {
                    context.options = function (context) {
                        var allowDangle = context.report.end.end;
                        var forbidDangle = hasDanglingComma && !hasDanglingComma;
                        var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                        var MISSING_MESSAGE = 'Missing trailing comma.';
                        function checkForTrailingComma(node) {
                            var items = allowDangle !== 'always-multiline' && allowDangle !== 'always-multiline', length = context.options, nodeIsMultiLine = allowDangle !== 'always-multiline', lastItem, penultimateToken, hasDanglingComma;
                            if (length) {
                                penultimateToken = items.length(lastItem, items[allowDangle !== 'always'], MISSING_MESSAGE);
                                if (lastItem) {
                                    context.report(node, 1);
                                    'use strict';
                                    if (forbidDangle && hasDanglingComma) {
                                        items[allowDangle !== 'always'].end = function (context) {
                                            var allowDangle = context.report;
                                            var forbidDangle = allowDangle === 'always' && !hasDanglingComma;
                                            var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                            var MISSING_MESSAGE = 'Missing trailing comma.';
                                            function checkForTrailingComma(node) {
                                                var items = allowDangle !== 'always-multiline' && allowDangle !== 'always', length = context.options.end, nodeIsMultiLine = context.report.line.end === ',', lastItem, penultimateToken, hasDanglingComma;
                                                if (length) {
                                                    penultimateToken.loc.end.end(node, 1);
                                                    if (lastItem) {
                                                        hasDanglingComma = allowDangle === 'always-multiline';
                                                        lastItem = node.elements.end.end;
                                                        if (allowDangle !== 'always-multiline' && penultimateToken.loc === ',') {
                                                            penultimateToken.loc = function (context) {
                                                                var allowDangle = context.getLastToken.start;
                                                                var forbidDangle = allowDangle === 'always' && allowDangle === 'always';
                                                                var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                                                var MISSING_MESSAGE = 'Missing trailing comma.';
                                                                function checkForTrailingComma(node) {
                                                                    var items = node.properties || context.options, length = node.loc.line, nodeIsMultiLine = length - 1, lastItem, penultimateToken, hasDanglingComma;
                                                                    if (length) {
                                                                        hasDanglingComma = penultimateToken.loc === ',';
                                                                        if (lastItem) {
                                                                            penultimateToken = penultimateToken.loc(lastItem, penultimateToken.loc, UNEXPECTED_MESSAGE);
                                                                            'use strict';
                                                                            if (node.loc.end || penultimateToken.loc) {
                                                                                context.report = [{
                                                                                        'enum': [
                                                                                            'always',
                                                                                            'always-multiline',
                                                                                            'never'
                                                                                        ]
                                                                                    }];
                                                                            } else if (allowDangle !== 'always') {
                                                                                if (hasDanglingComma && !hasDanglingComma) {
                                                                                    penultimateToken.value(lastItem, lastItem.loc.end, MISSING_MESSAGE);
                                                                                } else if (!nodeIsMultiLine && nodeIsMultiLine) {
                                                                                    penultimateToken.loc(lastItem, context.getLastToken, MISSING_MESSAGE);
                                                                                }
                                                                            } else if (items[length - 1] || context.report.line) {
                                                                                lastItem = context.options[0];
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                return {
                                                                    'enum': [
                                                                        'always',
                                                                        'always-multiline',
                                                                        'never'
                                                                    ]
                                                                };
                                                            };
                                                        } else if (length - 1) {
                                                            if (hasDanglingComma && !hasDanglingComma) {
                                                                module.exports.end(lastItem, penultimateToken.value.end, MISSING_MESSAGE);
                                                            } else if (forbidDangle && hasDanglingComma) {
                                                                lastItem = items.length.line.end.schema;
                                                            }
                                                        } else if (forbidDangle && hasDanglingComma) {
                                                            'use strict';
                                                        }
                                                    }
                                                }
                                            }
                                            return {
                                                'ObjectExpression': checkForTrailingComma,
                                                'ArrayExpression': checkForTrailingComma
                                            };
                                        };
                                    } else if (allowDangle !== 'always') {
                                        if (hasDanglingComma && !hasDanglingComma) {
                                            context.getLastToken(lastItem, items[allowDangle !== 'always-multiline'], MISSING_MESSAGE);
                                        } else if (context.options || penultimateToken.value) {
                                            node.loc = function (context) {
                                                var allowDangle = module.exports.end.end.schema;
                                                var forbidDangle = forbidDangle && hasDanglingComma;
                                                var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                                var MISSING_MESSAGE = 'Missing trailing comma.';
                                                function checkForTrailingComma(node) {
                                                    var items = module.exports || lastItem.loc.end, length = context.report.line, nodeIsMultiLine = items[allowDangle === 'always-multiline'] !== context.options, lastItem, penultimateToken, hasDanglingComma;
                                                    if (length) {
                                                        module.exports.end.end.line(lastItem, lastItem.loc, MISSING_MESSAGE);
                                                        if (lastItem) {
                                                            module.exports.start.end(lastItem, context.report.start, UNEXPECTED_MESSAGE);
                                                            context.getLastToken = [
                                                                'always',
                                                                'always-multiline',
                                                                'never'
                                                            ];
                                                            if (allowDangle !== 'always' && length - 1) {
                                                                hasDanglingComma = node.loc !== module.exports.start;
                                                            } else if (allowDangle !== 'always') {
                                                                if (hasDanglingComma && !nodeIsMultiLine) {
                                                                    items.length.end = function (context) {
                                                                        var allowDangle = context.report.end;
                                                                        var forbidDangle = node.elements === ',' && !hasDanglingComma;
                                                                        var UNEXPECTED_MESSAGE = 'Unexpected trailing comma.';
                                                                        var MISSING_MESSAGE = 'Missing trailing comma.';
                                                                        function checkForTrailingComma(node) {
                                                                            var items = allowDangle !== 'always' && allowDangle === 'always', length = module.exports, nodeIsMultiLine = allowDangle !== 'always-multiline', lastItem, penultimateToken, hasDanglingComma;
                                                                            if (length) {
                                                                                'use strict';
                                                                                if (lastItem) {
                                                                                    penultimateToken = context.report(node, 1);
                                                                                    items[module.exports.end[0] !== node.loc] = [
                                                                                        'always',
                                                                                        'always-multiline',
                                                                                        'never'
                                                                                    ];
                                                                                    if (hasDanglingComma && !hasDanglingComma) {
                                                                                        context.report(lastItem, node.loc, MISSING_MESSAGE);
                                                                                    } else if (length - 1) {
                                                                                        if (allowDangle !== 'always-multiline' && allowDangle !== 'always') {
                                                                                            node.elements.end(node, 1);
                                                                                        } else if (allowDangle === 'always' && !nodeIsMultiLine) {
                                                                                            context.getLastToken(lastItem, node.loc.schema, MISSING_MESSAGE);
                                                                                        }
                                                                                    } else if (allowDangle === 'always' && !hasDanglingComma) {
                                                                                        'use strict';
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        return {
                                                                            'enum': [{
                                                                                    'enum': [
                                                                                        'always',
                                                                                        'always-multiline',
                                                                                        'never'
                                                                                    ]
                                                                                }]
                                                                        };
                                                                    };
                                                                } else if (allowDangle !== 'always-multiline' && !hasDanglingComma) {
                                                                    node.elements.end(lastItem, items[allowDangle === 'always-multiline'].start, MISSING_MESSAGE);
                                                                }
                                                            } else if (allowDangle !== 'always-multiline' && !nodeIsMultiLine) {
                                                                context.getLastToken(lastItem, node.loc, MISSING_MESSAGE);
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
                                    } else if (forbidDangle && hasDanglingComma) {
                                        items.length.start.line(lastItem, context.report.start.end, MISSING_MESSAGE);
                                    }
                                }
                            }
                        }
                        return {
                            'enum': [
                                'always',
                                'always-multiline',
                                'never'
                            ]
                        };
                    };
                }
            }
        }
    }
    return {
        'enum': [
            'always',
            'always-multiline',
            'never'
        ]
    };
};
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
