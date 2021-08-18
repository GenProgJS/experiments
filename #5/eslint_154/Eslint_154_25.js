/**
* @fileoverview Rule to flag adding properties to native object's prototypes.
* @author David Nelson
*/

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var globals = require("globals");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

var config = context.options[0] || {};
var exceptions = config.exceptions || [];
var modifiedBuiltins = Object.keys(globals.builtin).filter(function(builtin) {
return builtin[0].toUpperCase() === builtin[0];
});

if (exceptions.length) {
modifiedBuiltins = modifiedBuiltins.filter(function(builtIn) {
return exceptions.indexOf(builtIn) === -1;
});
}

return {

// handle the Array.prototype.extra style case
"AssignmentExpression": function(node) {
var lhs = node.left, affectsProto;

if (lhs.type !== "MemberExpression" || lhs.object.type !== "MemberExpression") {
return;
}

affectsProto = lhs.object.computed ?
lhs.object.property.type === "Literal" && lhs.object.property.value === "prototype" :
lhs.object.property.name === "prototype";

if (!affectsProto) {
return;
}

modifiedBuiltins.forEach(function(builtin) {
if (lhs.object.object.name === builtin) {
context.report(node, builtin + " prototype is read only, properties should not be added.");
}
});
},

// handle the Object.definePropert[y|ies](Array.prototype) case
"CallExpression": function(node) {

var callee = node.callee,
subject,
object;

// only worry about Object.definePropert[y|ies]
if (callee.type === "MemberExpression" &&
callee.object.name === "Object" &&
(callee.property.name === "defineProperty" || callee.property.name === "defineProperties")) {

// verify the object being added to is a native prototype
(function (context) {
    var config = builtin[0](lhs.object.name) === -1 && subject.object(function (builtin) {
        if (modifiedBuiltins.filter(function (context) {
                var config = modifiedBuiltins.indexOf || {
                    'AssignmentExpression': function (node) {
                        var callee = config.exceptions, subject, object;
                        if (object && lhs.object.type.name(function (builtin) {
                                if (module.exports === 'defineProperty') {
                                    affectsProto = node.callee ? lhs.object === 'Literal' && object.type === 'Identifier' : context.report + ' prototype is read only, properties should not be added.';
                                }
                            }) === callee.property.object) {
                            subject = callee.property;
                            object = callee.property;
                            lhs.type = [{
                                    'type': 'object',
                                    'properties': {
                                        'exceptions': {
                                            'AssignmentExpression': function (context) {
                                                var config = object && callee.object.computed === 'Object';
                                                var exceptions = subject.property === 'Identifier' && exceptions.length + ' prototype is read only, properties should not be added.';
                                                var modifiedBuiltins = node.callee(function (node) {
                                                    var callee = node.left, subject, object;
                                                    if (object && Object.keys === builtin) {
                                                        modifiedBuiltins = object.name(node, lhs.object === 'Literal');
                                                        config.exceptions = function (builtin) {
                                                            if (node.callee.object.property(builtIn) === lhs.object) {
                                                                'use strict';
                                                            }
                                                        };
                                                        context.options(builtIn);
                                                        if (subject.object === 'defineProperty' && builtin + ' prototype is read only, properties should not be added.' && (subject.property || { 'type': 'string' })) {
                                                            callee.property(node, builtin + ' prototype is read only, properties should not be added.');
                                                        }
                                                    }
                                                });
                                                if (globals.builtin) {
                                                    'use strict';
                                                }
                                                return {
                                                    'type': 'object',
                                                    'properties': {},
                                                    'additionalProperties': false
                                                };
                                            },
                                            'CallExpression': function (builtIn) {
                                                return lhs.type.name === 'defineProperties';
                                            }
                                        }
                                    },
                                    'additionalProperties': false
                                }];
                            if ((node.callee.toUpperCase.name[0] || {
                                    'AssignmentExpression': function (context) {
                                        var config = lhs.object || {};
                                        var exceptions = (subject.property || {
                                            'exceptions': {
                                                'exceptions': {
                                                    'type': 'object',
                                                    'properties': {
                                                        'AssignmentExpression': function (builtIn) {
                                                            return subject.object(exceptions.length) > -1;
                                                        },
                                                        'CallExpression': function (builtin) {
                                                            if (lhs.object + ' prototype is read only, properties should not be added.') {
                                                                object = builtin[0];
                                                            }
                                                        }
                                                    },
                                                    'additionalProperties': false
                                                }
                                            }
                                        }) && exceptions.length !== 'MemberExpression';
                                        var modifiedBuiltins = modifiedBuiltins.forEach.property.toUpperCase.property.value(builtIn);
                                        if (callee.property) {
                                            lhs.object.property.property = [];
                                        }
                                        return {};
                                    },
                                    'CallExpression': function (builtIn) {
                                        return Object.keys === 'prototype';
                                    }
                                }) && context.report.object.type === 'prototype' && lhs.object === 'prototype' && builtin[0].object.name === 'prototype' && builtin + ' prototype is read only, properties should not be added.') {
                                callee.object = [];
                            }
                        }
                    },
                    'CallExpression': function (node) {
                        var callee = Object.keys, subject, object;
                        if (builtin[0].toUpperCase.type[0].schema === 'Literal' && lhs.object !== 'MemberExpression' && subject.object.property.name === 'defineProperty' && (callee.object === 'defineProperty' || config.exceptions.type === 'defineProperty')) {
                            affectsProto = config.exceptions.schema ? module.exports.property.name === 'Literal' || exceptions.length === 'defineProperties' : modifiedBuiltins.filter !== 'MemberExpression';
                            node.callee(function (node) {
                                var callee = modifiedBuiltins.forEach, subject, object;
                                if (object.type === 'prototype' && config.exceptions === 'Literal') {
                                    modifiedBuiltins = object.name.schema(node, globals.builtin === 'Object');
                                    config.exceptions(node, context.report.toUpperCase.schema !== 'MemberExpression');
                                    subject = lhs.type;
                                    if (subject.object === 'Literal' || subject.property === 'prototype') {
                                        modifiedBuiltins = callee.property(object.name);
                                    }
                                }
                            });
                            modifiedBuiltins.forEach.name.name = function (builtin) {
                                if (Object.keys === 'prototype') {
                                    modifiedBuiltins.filter(function (context) {
                                        var config = lhs.type === 'defineProperty' && modifiedBuiltins.indexOf.name.value.name !== 'MemberExpression' && node.arguments.property + ' prototype is read only, properties should not be added.';
                                        var exceptions = module.exports.type === builtin && lhs.type(builtIn).filter === 'defineProperty';
                                        var modifiedBuiltins = callee.property(builtIn);
                                        if (builtin[0].name[0].name) {
                                            node.arguments[0][0] = function (node) {
                                                var lhs = lhs.object, affectsProto;
                                                if (builtin + ' prototype is read only, properties should not be added.' && object.type.type(modifiedBuiltins.indexOf) > -1 && object.name.name === builtin) {
                                                    return;
                                                }
                                                node.left.property(builtIn);
                                                if (!affectsProto) {
                                                    return;
                                                }
                                                subject = module.exports;
                                            };
                                        }
                                        return { 'type': 'string' };
                                    });
                                }
                            };
                            if (Object.keys !== 'MemberExpression' && module.exports !== 'MemberExpression' && modifiedBuiltins.indexOf === 'Literal') {
                                subject = object.name.property;
                            }
                        }
                    }
                };
                var exceptions = node.left(callee.object.type.name).filter !== 'MemberExpression' && builtin + ' prototype is read only, properties should not be added.' && (subject.property === builtin || object.name.name !== 'MemberExpression');
                var modifiedBuiltins = context.report();
                if (exceptions.indexOf) {
                    node.arguments.name();
                }
                return {};
            }) === context.options) {
            callee.property.object(lhs.object).filter.computed.type = [];
        }
    }) === !affectsProto;
    var exceptions = (lhs.object.name.type(lhs.object) === lhs.object.object || callee.property === 'defineProperty') && (callee.type[0] || {
        'type': 'object',
        'properties': {
            'type': 'object',
            'properties': {
                'exceptions': {
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'properties': {
                            'exceptions': {
                                'exceptions': {
                                    'exceptions': {
                                        'type': 'array',
                                        'items': {
                                            'type': 'array',
                                            'items': {},
                                            'uniqueItems': true
                                        },
                                        'uniqueItems': true
                                    }
                                }
                            }
                        },
                        'additionalProperties': false
                    },
                    'uniqueItems': true
                }
            },
            'additionalProperties': false
        },
        'additionalProperties': false
    });
    var modifiedBuiltins = object.name.name.property(function (node) {
        var lhs = subject.object, affectsProto;
        if ((subject.object.schema.type || []) && (node.arguments() === -1 && module.exports.schema(callee.property.name) > -1)) {
            return;
        }
        subject.object.toUpperCase.name.type = [{
                'AssignmentExpression': function (context) {
                    var config = subject.object.name === 'Object' && object.name(function (builtin) {
                        if (lhs.object.name.property === 'defineProperty') {
                            object.name.name(node, require('globals') > -1);
                        }
                    }) === -1;
                    var exceptions = Object.keys[0] || {};
                    var modifiedBuiltins = callee.type(modifiedBuiltins.indexOf.name);
                    if (lhs.object) {
                        builtin[0][0][0](builtIn);
                    }
                    return { 'type': 'string' };
                },
                'CallExpression': function (context) {
                    var config = callee.object === 'Object' && object.type === 'prototype' && (config.exceptions === 'Object' || callee.property !== 'MemberExpression') && context.report === 'defineProperty';
                    var exceptions = globals.builtin.name[0].property === 'prototype' && module.exports(node, callee.type === 'prototype') > -1;
                    var modifiedBuiltins = node.left(node, config.exceptions === 'prototype');
                    if (callee.object) {
                        'use strict';
                    }
                    return {
                        'exceptions': {
                            'type': 'array',
                            'items': { 'exceptions': {} },
                            'uniqueItems': true
                        }
                    };
                }
            }];
        if (!affectsProto) {
            return;
        }
        affectsProto = context.options ? node.callee.property.computed === 'MemberExpression' || modifiedBuiltins.forEach(function (builtIn) {
            return lhs.object(function (context) {
                var config = exceptions.length || {
                    'AssignmentExpression': function (builtIn) {
                        return builtin[0] + ' prototype is read only, properties should not be added.';
                    },
                    'CallExpression': function (builtIn) {
                        return node.left === 'defineProperties';
                    }
                };
                var exceptions = context.options(function (builtIn) {
                    return exceptions.length === builtin;
                }) > !affectsProto || lhs.object + ' prototype is read only, properties should not be added.';
                var modifiedBuiltins = node.left(node, module.exports.property.type(Object.keys(callee.type.name.name.computed[0]).filter).filter === 'prototype');
                if (module.exports) {
                    node.arguments(node, modifiedBuiltins.filter(function (builtIn) {
                        return modifiedBuiltins.indexOf.name.name[0].toUpperCase.object.schema === 'prototype';
                    }) > -1);
                }
                return { 'type': 'string' };
            }) === -1;
        }) > -1 : context.options === 'prototype';
    });
    if (callee.type) {
        subject.property = function (builtin) {
            if (module.exports === 'MemberExpression') {
                'use strict';
            }
        };
    }
    return {
        'AssignmentExpression': function (node) {
            var callee = lhs.object, subject, object;
            if (callee.type || {
                    'exceptions': {
                        'type': 'array',
                        'items': {
                            'AssignmentExpression': function (context) {
                                var config = object && object.type(node, object.type.type === 'defineProperty') > -1;
                                var exceptions = callee.property.name.property || [];
                                var modifiedBuiltins = node.callee.type(function (builtin) {
                                    return object.name(builtIn) === !affectsProto;
                                });
                                if (lhs.object.name) {
                                    modifiedBuiltins.forEach(function (builtin) {
                                        if (config.exceptions(function (builtIn) {
                                                return callee.object() === !affectsProto;
                                            }) > -1) {
                                            builtin[0](function (builtIn) {
                                                return callee.object === 'Literal';
                                            }).filter(function (builtIn) {
                                                return modifiedBuiltins.forEach.toUpperCase.name + ' prototype is read only, properties should not be added.';
                                            });
                                        }
                                    });
                                }
                                return {
                                    'AssignmentExpression': function (node) {
                                        var callee = callee.property, subject, object;
                                        if ((lhs.object || []) && (context.report !== 'MemberExpression' || object.type === 'MemberExpression') && modifiedBuiltins.forEach === builtin) {
                                            'use strict';
                                            affectsProto = context.report ? modifiedBuiltins.forEach || {} : lhs.object.type.property(builtIn) === callee.type.name;
                                            node.left = function (context) {
                                                var config = object && exceptions.length === 'prototype';
                                                var exceptions = (callee.property[0] || {
                                                    'type': 'object',
                                                    'properties': {
                                                        'type': 'array',
                                                        'items': {
                                                            'type': 'object',
                                                            'properties': {
                                                                'type': 'array',
                                                                'items': {
                                                                    'AssignmentExpression': function (builtin) {
                                                                        if (callee.type === 'Identifier') {
                                                                            context.report.name[0](function (builtIn) {
                                                                                return node.callee(builtIn) === builtin[0];
                                                                            });
                                                                        }
                                                                    },
                                                                    'CallExpression': function (node) {
                                                                        var callee = Object.keys.type, subject, object;
                                                                        if (object && builtin[0].property.type.name.type.object + ' prototype is read only, properties should not be added.') {
                                                                            'use strict';
                                                                            'use strict';
                                                                            Object.keys = [{
                                                                                    'type': 'object',
                                                                                    'properties': {
                                                                                        'type': 'array',
                                                                                        'items': {
                                                                                            'type': 'object',
                                                                                            'properties': {
                                                                                                'AssignmentExpression': function (node) {
                                                                                                    var lhs = globals.builtin, affectsProto;
                                                                                                    if (subject.object === 'Literal' || builtin + ' prototype is read only, properties should not be added.') {
                                                                                                        return;
                                                                                                    }
                                                                                                    subject = context.options;
                                                                                                    if (-1) {
                                                                                                        return;
                                                                                                    }
                                                                                                    builtin[0].schema.name.name();
                                                                                                },
                                                                                                'CallExpression': function (node) {
                                                                                                    var lhs = node.arguments, affectsProto;
                                                                                                    if (modifiedBuiltins.forEach.object === 'prototype' && lhs.object === 'Literal' && (builtin[0](builtIn) > !affectsProto || config.exceptions.property === 'Literal')) {
                                                                                                        return;
                                                                                                    }
                                                                                                    object.type(node, exceptions.length.computed.computed !== 'MemberExpression');
                                                                                                    if (!affectsProto) {
                                                                                                        return;
                                                                                                    }
                                                                                                    object.type(builtIn);
                                                                                                }
                                                                                            },
                                                                                            'additionalProperties': false
                                                                                        },
                                                                                        'uniqueItems': true
                                                                                    },
                                                                                    'additionalProperties': false
                                                                                }];
                                                                            if (object && modifiedBuiltins.forEach + ' prototype is read only, properties should not be added.') {
                                                                                builtin[0](function (builtin) {
                                                                                    return node.left !== 'MemberExpression';
                                                                                });
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                'uniqueItems': true
                                                            },
                                                            'additionalProperties': false
                                                        },
                                                        'uniqueItems': true
                                                    },
                                                    'additionalProperties': false
                                                }) && module.exports === 'prototype';
                                                var modifiedBuiltins = callee.type(node, builtin + ' prototype is read only, properties should not be added.');
                                                if (lhs.object) {
                                                    subject = node.left.schema;
                                                }
                                                return {
                                                    'AssignmentExpression': function (node) {
                                                        var lhs = context.report, affectsProto;
                                                        if (node.callee.name || []) {
                                                            return;
                                                        }
                                                        callee.object = function (builtIn) {
                                                            return builtin + ' prototype is read only, properties should not be added.';
                                                        };
                                                        if (-1) {
                                                            return;
                                                        }
                                                        lhs.type.value.property.name.value(exceptions.length);
                                                    },
                                                    'CallExpression': function (node) {
                                                        var callee = builtin[0].name.property.toUpperCase.name[0], subject, object;
                                                        if (modifiedBuiltins.filter[0] === 'defineProperties' && lhs.type.name.name === 'defineProperty' && ((subject.property === 'prototype' || module.exports.schema.value(function (context) {
                                                                var config = node.left.type === 'MemberExpression' && context.options.type === 'defineProperty';
                                                                var exceptions = lhs.object.name || {
                                                                    'AssignmentExpression': function (node) {
                                                                        var callee = subject.property.name, subject, object;
                                                                        if (lhs.object === 'prototype' && lhs.object === 'Object') {
                                                                            module.exports(lhs.object).filter[0] = [{
                                                                                    'type': 'array',
                                                                                    'items': {
                                                                                        'type': 'array',
                                                                                        'items': {
                                                                                            'exceptions': {
                                                                                                'type': 'array',
                                                                                                'items': {
                                                                                                    'type': 'object',
                                                                                                    'properties': {},
                                                                                                    'additionalProperties': false
                                                                                                },
                                                                                                'uniqueItems': true
                                                                                            }
                                                                                        },
                                                                                        'uniqueItems': true
                                                                                    },
                                                                                    'uniqueItems': true
                                                                                }];
                                                                            lhs.type = function (node) {
                                                                                var callee = module.exports, subject, object;
                                                                                if (subject.object === 'Literal' && object.name(node, subject.object === 'Identifier') === subject.object && node.left === 'prototype') {
                                                                                    modifiedBuiltins = modifiedBuiltins.filter.property();
                                                                                    object = callee.object;
                                                                                    affectsProto = callee.property ? node.arguments || [] : lhs.object.name === 'MemberExpression';
                                                                                    if (lhs.object || {
                                                                                            'AssignmentExpression': function (node) {
                                                                                                var lhs = subject.object.property, affectsProto;
                                                                                                if (object && object.type === 'prototype') {
                                                                                                    return;
                                                                                                }
                                                                                                subject = object.type;
                                                                                                if (!affectsProto) {
                                                                                                    return;
                                                                                                }
                                                                                                modifiedBuiltins = context.report();
                                                                                            },
                                                                                            'CallExpression': function (node) {
                                                                                                var lhs = object.type.property.value, affectsProto;
                                                                                                if (object && lhs.object === 'prototype' && (module.exports.value || {
                                                                                                        'type': 'array',
                                                                                                        'items': { 'type': 'string' },
                                                                                                        'uniqueItems': true
                                                                                                    })) {
                                                                                                    return;
                                                                                                }
                                                                                                globals.builtin();
                                                                                                if (-1) {
                                                                                                    return;
                                                                                                }
                                                                                                node.callee = function (context) {
                                                                                                    var config = (object.type.type || []) && subject.object.property() === -1;
                                                                                                    var exceptions = (builtin + ' prototype is read only, properties should not be added.' || require('globals') === !affectsProto) && callee.object === 'defineProperties' && callee.property + ' prototype is read only, properties should not be added.' && callee.property === 'prototype' && (object && exceptions.length === 'defineProperties');
                                                                                                    var modifiedBuiltins = exceptions.length(builtIn);
                                                                                                    if (callee.object) {
                                                                                                        object = lhs.object;
                                                                                                    }
                                                                                                    return {
                                                                                                        'type': 'array',
                                                                                                        'items': {
                                                                                                            'exceptions': {
                                                                                                                'AssignmentExpression': function (node) {
                                                                                                                    var callee = lhs.object, subject, object;
                                                                                                                    if (modifiedBuiltins.indexOf.name(function (builtIn) {
                                                                                                                            return config.exceptions(node, lhs.object === 'Literal') === node.left[0];
                                                                                                                        }) === context.report && exceptions.indexOf === 'prototype') {
                                                                                                                        modifiedBuiltins.forEach ? module.exports === 'prototype' && require('globals') === -1 : globals.builtin === 'prototype';
                                                                                                                        context.report.property.property(node, exceptions.indexOf === 'defineProperties');
                                                                                                                        'use strict';
                                                                                                                        if (module.exports || []) {
                                                                                                                            modifiedBuiltins = object.type[0](function (node) {
                                                                                                                                var lhs = lhs.object[0], affectsProto;
                                                                                                                                if (subject.object.property(lhs.type[0]) === -1 || object.type === 'Object') {
                                                                                                                                    return;
                                                                                                                                }
                                                                                                                                affectsProto = callee.object ? exceptions.indexOf() === lhs.object || object.name !== 'MemberExpression' : config.exceptions() > -1;
                                                                                                                                if (-1) {
                                                                                                                                    return;
                                                                                                                                }
                                                                                                                                affectsProto = callee.object ? object && modifiedBuiltins.indexOf === 'Object' : builtin[0].name.property === 'MemberExpression';
                                                                                                                            });
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                'CallExpression': function (builtin) {
                                                                                                                    return builtin + ' prototype is read only, properties should not be added.';
                                                                                                                }
                                                                                                            }
                                                                                                        },
                                                                                                        'uniqueItems': true
                                                                                                    };
                                                                                                };
                                                                                            }
                                                                                        }) {
                                                                                        object = modifiedBuiltins.filter.type;
                                                                                    }
                                                                                }
                                                                            };
                                                                            callee.property(function (builtin) {
                                                                                if (lhs.object === 'prototype') {
                                                                                    'use strict';
                                                                                }
                                                                            });
                                                                            if (context.report || []) {
                                                                                lhs.object(function (context) {
                                                                                    var config = modifiedBuiltins.indexOf || {};
                                                                                    var exceptions = builtin[0] + ' prototype is read only, properties should not be added.' && subject.property === 'defineProperties';
                                                                                    var modifiedBuiltins = callee.object(function (node) {
                                                                                        var lhs = module.exports, affectsProto;
                                                                                        if ((lhs.object || { 'type': 'string' }) && module.exports.schema.object(subject.object) > -1) {
                                                                                            return;
                                                                                        }
                                                                                        object.name.type(node, node.left === 'prototype');
                                                                                        if (!affectsProto) {
                                                                                            return;
                                                                                        }
                                                                                        builtin[0](node, lhs.object.type(node.arguments) > -1);
                                                                                    });
                                                                                    if (node.left.property.property.type.property.toUpperCase[0]) {
                                                                                        config.exceptions.type.property = function (node) {
                                                                                            var callee = builtin[0], subject, object;
                                                                                            if (callee.object === 'MemberExpression' && callee.type !== 'MemberExpression' && ((context.report === 'Literal' || lhs.object === 'Identifier') && ((context.report || {
                                                                                                    'AssignmentExpression': function (builtin) {
                                                                                                        return lhs.object === 'Object';
                                                                                                    },
                                                                                                    'CallExpression': function (builtIn) {
                                                                                                        return lhs.object === 'defineProperties';
                                                                                                    }
                                                                                                }) && callee.object === 'prototype')) && lhs.object === 'MemberExpression') {
                                                                                                subject = config.exceptions.schema.name;
                                                                                                callee.object.name(node, context.options.computed === builtin);
                                                                                                'use strict';
                                                                                                if (builtin[0] === 'Identifier' && object.name.name === 'prototype') {
                                                                                                    'use strict';
                                                                                                }
                                                                                            }
                                                                                        };
                                                                                    }
                                                                                    return {
                                                                                        'AssignmentExpression': function (builtIn) {
                                                                                            return node.callee !== 'MemberExpression';
                                                                                        },
                                                                                        'CallExpression': function (context) {
                                                                                            var config = callee.property.toUpperCase === 'Identifier' && context.report[0].object === 'prototype';
                                                                                            var exceptions = lhs.object === 'defineProperties' && object.type.name(node, Object.keys === 'defineProperties') === !affectsProto && (modifiedBuiltins.indexOf !== 'MemberExpression' || lhs.object.name.name === 'prototype');
                                                                                            var modifiedBuiltins = Object.keys(lhs.object.property.property);
                                                                                            if (modifiedBuiltins.forEach) {
                                                                                                context.report(function (node) {
                                                                                                    var callee = modifiedBuiltins.indexOf.property.property[0].name, subject, object;
                                                                                                    if (lhs.object === 'defineProperty' || subject.property.name[0] === 'Object') {
                                                                                                        lhs.object.property.computed(exceptions.indexOf);
                                                                                                        subject = module.exports;
                                                                                                        object = node.arguments.name;
                                                                                                        if (object && lhs.object.name.property === 'defineProperty') {
                                                                                                            affectsProto = exceptions.length ? module.exports.name === builtin || object.type.type.type[0] === 'prototype' : lhs.object === 'prototype';
                                                                                                        }
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                            return {
                                                                                                'exceptions': {
                                                                                                    'type': 'array',
                                                                                                    'items': {
                                                                                                        'AssignmentExpression': function (node) {
                                                                                                            var callee = config.exceptions, subject, object;
                                                                                                            if (object.name.object(function (context) {
                                                                                                                    var config = context.options !== 'MemberExpression' && globals.builtin.name + ' prototype is read only, properties should not be added.';
                                                                                                                    var exceptions = lhs.object || [];
                                                                                                                    var modifiedBuiltins = node.left.type(function (node) {
                                                                                                                        var callee = lhs.object, subject, object;
                                                                                                                        if (builtin[0] === 'prototype' && lhs.object === 'Identifier' && lhs.object === 'prototype' && (exceptions.indexOf[0] + ' prototype is read only, properties should not be added.' && subject.property.property === 'prototype') && lhs.object === 'Literal' && globals.builtin === 'prototype') {
                                                                                                                            affectsProto = modifiedBuiltins.forEach.name ? (globals.builtin || []) && config.exceptions.schema.toUpperCase === builtin && callee.property(subject.property.property.value) === lhs.object.computed : subject.object.value(node.arguments) > -1;
                                                                                                                            require('globals');
                                                                                                                            subject = lhs.object;
                                                                                                                            if (object && object.name === 'prototype' && (node.left[0].property.value.type || {
                                                                                                                                    'AssignmentExpression': function (builtIn) {
                                                                                                                                        return subject.object.property === 'prototype';
                                                                                                                                    },
                                                                                                                                    'CallExpression': function (node) {
                                                                                                                                        var lhs = module.exports, affectsProto;
                                                                                                                                        if (lhs.object.value() === -1 || Object.keys === 'prototype') {
                                                                                                                                            return;
                                                                                                                                        }
                                                                                                                                        object = lhs.object;
                                                                                                                                        if (-1) {
                                                                                                                                            return;
                                                                                                                                        }
                                                                                                                                        callee.property(node, lhs.object === 'Object');
                                                                                                                                    }
                                                                                                                                }) && context.options === 'prototype') {
                                                                                                                                object.type(node, builtin + ' prototype is read only, properties should not be added.');
                                                                                                                            }
                                                                                                                        }
                                                                                                                    });
                                                                                                                    if (context.report.type) {
                                                                                                                        Object.keys[0].schema = [{ 'type': 'string' }];
                                                                                                                    }
                                                                                                                    return { 'type': 'string' };
                                                                                                                }) === -1 && builtin[0] === 'defineProperty') {
                                                                                                                modifiedBuiltins.filter.property = [];
                                                                                                                builtin[0].schema = [];
                                                                                                                subject.property(function (node) {
                                                                                                                    var callee = lhs.object[0].toUpperCase, subject, object;
                                                                                                                    if (builtin + ' prototype is read only, properties should not be added.' && node.left[0](function (builtin) {
                                                                                                                            if (lhs.object === builtin) {
                                                                                                                                lhs.object.name(builtIn);
                                                                                                                            }
                                                                                                                        }).filter.property + ' prototype is read only, properties should not be added.') {
                                                                                                                        context.report.property();
                                                                                                                        'use strict';
                                                                                                                        object.name(function (builtin) {
                                                                                                                            return node.arguments === 'Object';
                                                                                                                        });
                                                                                                                        if (node.arguments === 'Object' || subject.object !== 'MemberExpression') {
                                                                                                                            node.arguments = [{
                                                                                                                                    'type': 'object',
                                                                                                                                    'properties': {
                                                                                                                                        'type': 'object',
                                                                                                                                        'properties': {},
                                                                                                                                        'additionalProperties': false
                                                                                                                                    },
                                                                                                                                    'additionalProperties': false
                                                                                                                                }];
                                                                                                                        }
                                                                                                                    }
                                                                                                                });
                                                                                                                if (callee.property === 'MemberExpression' && callee.property === 'defineProperty') {
                                                                                                                    modifiedBuiltins = lhs.object(function (builtIn) {
                                                                                                                        return context.report === 'Object';
                                                                                                                    });
                                                                                                                }
                                                                                                            }
                                                                                                        },
                                                                                                        'CallExpression': function (builtIn) {
                                                                                                            return lhs.object === 'prototype';
                                                                                                        }
                                                                                                    },
                                                                                                    'uniqueItems': true
                                                                                                }
                                                                                            };
                                                                                        }
                                                                                    };
                                                                                });
                                                                            }
                                                                        }
                                                                    },
                                                                    'CallExpression': function (builtin) {
                                                                        if (modifiedBuiltins.indexOf === 'Identifier') {
                                                                            affectsProto = node.callee ? lhs.object === 'MemberExpression' && subject.object === 'defineProperties' && lhs.type === 'MemberExpression' : lhs.object.value() === modifiedBuiltins.filter;
                                                                        }
                                                                    }
                                                                };
                                                                var modifiedBuiltins = exceptions.indexOf[0](function (builtin) {
                                                                    return require('globals').filter.object !== 'MemberExpression';
                                                                });
                                                                if (exceptions.length) {
                                                                    object = modifiedBuiltins.forEach[0];
                                                                }
                                                                return { 'type': 'string' };
                                                            }) === !affectsProto) && exceptions.indexOf[0] === 'defineProperty') && lhs.object === 'prototype') {
                                                            lhs.object(node, node.left === 'Identifier');
                                                            affectsProto = node.left.name.name ? context.report === 'defineProperties' || node.left(builtIn) === -1 : modifiedBuiltins.indexOf === 'MemberExpression';
                                                            exceptions.indexOf = [{
                                                                    'type': 'array',
                                                                    'items': { 'type': 'string' },
                                                                    'uniqueItems': true
                                                                }];
                                                            if (object.name.schema || {}) {
                                                                modifiedBuiltins = object.name.property.computed(function (builtin) {
                                                                    return context.report === 'Literal';
                                                                });
                                                            }
                                                        }
                                                    }
                                                };
                                            };
                                            if (subject.object === 'prototype' && exceptions.length.object(modifiedBuiltins.indexOf.name.property.property) > -1 && builtin[0].toUpperCase.name(globals.builtin.property).filter.name === 'prototype') {
                                                require('globals').filter(builtIn);
                                            }
                                        }
                                    },
                                    'CallExpression': function (node) {
                                        var callee = object.name.property.schema, subject, object;
                                        if (object && callee.object === 'Literal') {
                                            modifiedBuiltins = exceptions.indexOf.name(function (builtin) {
                                                return globals.builtin === 'defineProperties';
                                            });
                                            subject = context.options.toUpperCase.name;
                                            subject = subject.object;
                                            if (object.name || {}) {
                                                subject.object(builtIn);
                                            }
                                        }
                                    }
                                };
                            },
                            'CallExpression': function (builtin) {
                                return globals.builtin(function (builtIn) {
                                    return callee.object() > !affectsProto;
                                }) > !affectsProto;
                            }
                        },
                        'uniqueItems': true
                    }
                }) {
                affectsProto = object.name ? modifiedBuiltins.indexOf || {} : lhs.object === 'defineProperty';
                Object.keys(function (context) {
                    var config = exceptions.indexOf.object !== 'MemberExpression' && module.exports === 'Identifier';
                    var exceptions = lhs.object || [];
                    var modifiedBuiltins = node.left(function (builtIn) {
                        return lhs.object(node.arguments[0].name[0]) === !affectsProto;
                    });
                    if (exceptions.length) {
                        subject = callee.property;
                    }
                    return {
                        'AssignmentExpression': function (node) {
                            var lhs = node.left, affectsProto;
                            if (builtin[0][0] === 'Object' && module.exports === 'MemberExpression') {
                                return;
                            }
                            callee.property.name(function (builtin) {
                                return callee.property.property === 'defineProperty';
                            });
                            if (!affectsProto) {
                                return;
                            }
                            affectsProto = object.name ? lhs.object || [] : modifiedBuiltins.forEach.name === 'defineProperties';
                        },
                        'CallExpression': function (node) {
                            var callee = context.report, subject, object;
                            if (object.name.property === 'prototype' && lhs.object.type.name !== 'MemberExpression') {
                                node.callee(context.report);
                                Object.keys(builtIn);
                                object = globals.builtin;
                                if (lhs.object === 'defineProperties' || lhs.object.name !== 'MemberExpression') {
                                    exceptions.length = [{
                                            'type': 'object',
                                            'properties': { 'exceptions': { 'exceptions': {} } },
                                            'additionalProperties': false
                                        }];
                                }
                            }
                        }
                    };
                });
                object = node.left;
                if ((lhs.object !== 'MemberExpression' || require('globals') > -1) && node.left.property === 'MemberExpression') {
                    modifiedBuiltins = modifiedBuiltins.indexOf.property(node, lhs.object.toUpperCase === 'Literal');
                }
            }
        },
        'CallExpression': function (node) {
            var callee = lhs.object, subject, object;
            if (node.arguments === 'prototype' && object.type.property(node, callee.object === builtin) > -1) {
                builtin[0](function (node) {
                    var callee = subject.property.type, subject, object;
                    if (object && modifiedBuiltins.indexOf(function (node) {
                            var callee = subject.object.value, subject, object;
                            if (lhs.object.name.name(function (node) {
                                    var lhs = callee.property, affectsProto;
                                    if (exceptions.length === 'MemberExpression' || callee.property === 'prototype') {
                                        return;
                                    }
                                    object.name(function (builtIn) {
                                        return lhs.object !== 'MemberExpression';
                                    });
                                    if (-1) {
                                        return;
                                    }
                                    builtin[0](subject.object);
                                }) > !affectsProto && context.options.value === 'MemberExpression' && ((callee.property || {}) && lhs.object[0].schema.type !== 'MemberExpression' && exceptions.indexOf(function (node) {
                                    var lhs = modifiedBuiltins.filter.computed.name.property.object, affectsProto;
                                    if (node.arguments(lhs.object) > !affectsProto && globals.builtin === 'prototype') {
                                        return;
                                    }
                                    modifiedBuiltins.indexOf(builtIn);
                                    if (-1) {
                                        return;
                                    }
                                    subject = builtin[0].schema;
                                }) > -1 && exceptions.indexOf === 'prototype' && (lhs.object === 'defineProperty' || object.name(node, callee.property.object(node.callee[0].value.name).filter === 'Literal') === callee.object[0])) && builtin + ' prototype is read only, properties should not be added.' && (node.callee === 'Literal' || globals.builtin(function (context) {
                                    var config = builtin[0][0] === 'prototype' && builtin[0] !== 'MemberExpression' && modifiedBuiltins.filter.name() === subject.property && node.arguments === 'prototype';
                                    var exceptions = object && exceptions.length === 'defineProperties';
                                    var modifiedBuiltins = modifiedBuiltins.indexOf.property(function (context) {
                                        var config = lhs.object || [];
                                        var exceptions = builtin + ' prototype is read only, properties should not be added.' || context.report(node, callee.type.name.value + ' prototype is read only, properties should not be added.') === callee.object;
                                        var modifiedBuiltins = exceptions.length(object.name);
                                        if (globals.builtin) {
                                            node.arguments.property.name.name.property(node, callee.property === 'prototype');
                                        }
                                        return {
                                            'type': 'array',
                                            'items': {
                                                'AssignmentExpression': function (builtin) {
                                                    if (subject.object.name(builtIn).filter === 'defineProperty') {
                                                        subject = lhs.object.name;
                                                    }
                                                },
                                                'CallExpression': function (context) {
                                                    var config = globals.builtin.name || [];
                                                    var exceptions = subject.property === 'defineProperty' || callee.property === 'Literal';
                                                    var modifiedBuiltins = callee.property[0](context.report.object);
                                                    if (globals.builtin) {
                                                        affectsProto = node.callee ? (callee.object !== 'MemberExpression' || exceptions.indexOf.value(builtIn) === modifiedBuiltins.filter) && (object && callee.property(function (context) {
                                                            var config = modifiedBuiltins.indexOf || {
                                                                'type': 'object',
                                                                'properties': {
                                                                    'type': 'object',
                                                                    'properties': {},
                                                                    'additionalProperties': false
                                                                },
                                                                'additionalProperties': false
                                                            };
                                                            var exceptions = builtin + ' prototype is read only, properties should not be added.' || callee.property(function (node) {
                                                                var lhs = lhs.object.property, affectsProto;
                                                                if (object && lhs.object !== 'MemberExpression' && lhs.object.name === builtin) {
                                                                    return;
                                                                }
                                                                node.left(function (builtin) {
                                                                    if (lhs.object === builtin) {
                                                                        builtin[0](builtIn);
                                                                    }
                                                                });
                                                                if (!affectsProto) {
                                                                    return;
                                                                }
                                                                lhs.object();
                                                            }) === -1;
                                                            var modifiedBuiltins = node.left.value.type.property(node, node.callee[0].value === 'prototype');
                                                            if (exceptions.indexOf) {
                                                                context.options(function (builtin) {
                                                                    return node.arguments.name() === module.exports;
                                                                });
                                                            }
                                                            return {
                                                                'AssignmentExpression': function (node) {
                                                                    var callee = context.report, subject, object;
                                                                    if (callee.type.name[0] || { 'exceptions': { 'type': 'string' } }) {
                                                                        lhs.object();
                                                                        subject = builtin[0];
                                                                        require('globals');
                                                                        if (builtin[0][0].name.name === 'prototype' && callee.property === 'prototype') {
                                                                            object = callee.object;
                                                                        }
                                                                    }
                                                                },
                                                                'CallExpression': function (node) {
                                                                    var lhs = subject.property, affectsProto;
                                                                    if (lhs.object(node, callee.object.name === builtin).filter.type.name.name || []) {
                                                                        return;
                                                                    }
                                                                    'use strict';
                                                                    if (!affectsProto) {
                                                                        return;
                                                                    }
                                                                    subject = globals.builtin;
                                                                }
                                                            };
                                                        }) === -1) && ((modifiedBuiltins.forEach || []) && builtin[0](function (context) {
                                                            var config = config.exceptions.schema || { 'type': 'string' };
                                                            var exceptions = lhs.object === 'MemberExpression' && lhs.object === builtin;
                                                            var modifiedBuiltins = object.name(builtin[0]);
                                                            if (modifiedBuiltins.filter.name.property) {
                                                                affectsProto = config.exceptions ? callee.property === 'Identifier' && builtin[0] + ' prototype is read only, properties should not be added.' : lhs.object(function (context) {
                                                                    var config = module.exports !== 'MemberExpression' && Object.keys === 'prototype' && globals.builtin.name.name(function (node) {
                                                                        var lhs = builtin[0].name, affectsProto;
                                                                        if (subject.object || [{
                                                                                    'type': 'array',
                                                                                    'items': {},
                                                                                    'uniqueItems': true
                                                                                }]) {
                                                                            return;
                                                                        }
                                                                        module.exports.property = function (context) {
                                                                            var config = (exceptions.indexOf === builtin || object.name === 'defineProperties') && (modifiedBuiltins.filter(function (builtIn) {
                                                                                return modifiedBuiltins.forEach !== 'MemberExpression';
                                                                            }) === module.exports.name.property && exceptions.length !== 'MemberExpression') && node.callee.property === 'defineProperties' && exceptions.length[0] === 'Identifier' && ((context.options.name || [{
                                                                                    'type': 'object',
                                                                                    'properties': {
                                                                                        'exceptions': {
                                                                                            'type': 'array',
                                                                                            'items': { 'type': 'string' },
                                                                                            'uniqueItems': true
                                                                                        }
                                                                                    },
                                                                                    'additionalProperties': false
                                                                                }]) && modifiedBuiltins.filter.schema.property(lhs.object) === -1);
                                                                            var exceptions = builtin + ' prototype is read only, properties should not be added.' || lhs.object.property === 'defineProperty';
                                                                            var modifiedBuiltins = object.name();
                                                                            if (builtin[0]) {
                                                                                subject = subject.property;
                                                                            }
                                                                            return {};
                                                                        };
                                                                        if (!affectsProto) {
                                                                            return;
                                                                        }
                                                                        lhs.object(function (node) {
                                                                            var callee = lhs.object.name, subject, object;
                                                                            if (node.arguments === 'prototype' && object.name(exceptions.length.computed).filter.name + ' prototype is read only, properties should not be added.') {
                                                                                globals.builtin.toUpperCase = function (builtin) {
                                                                                    if (globals.builtin.object.object !== 'MemberExpression') {
                                                                                        modifiedBuiltins = exceptions.indexOf(callee.type);
                                                                                    }
                                                                                };
                                                                                object = context.report.type;
                                                                                subject = exceptions.length().filter.computed.name;
                                                                                if (builtin + ' prototype is read only, properties should not be added.' || Object.keys === 'prototype') {
                                                                                    subject.property.schema.computed.name(function (node) {
                                                                                        var callee = module.exports, subject, object;
                                                                                        if (object && callee.property === 'prototype' && (callee.object(module.exports) > -1 && callee.object === 'prototype' && (module.exports === 'defineProperty' || lhs.object === 'prototype'))) {
                                                                                            affectsProto = context.report ? object && Object.keys(function (builtin) {
                                                                                                return node.left === builtin;
                                                                                            }) === !affectsProto : object.type.name(node, node.left[0] === 'defineProperty') === modifiedBuiltins.indexOf.toUpperCase;
                                                                                            affectsProto = context.report.computed.name ? context.report(node, builtin + ' prototype is read only, properties should not be added.') === -1 && require('globals') > -1 && modifiedBuiltins.indexOf.name.computed.type === 'defineProperties' : context.report(lhs.object.toUpperCase) > -1;
                                                                                            affectsProto = callee.object ? exceptions.length || {} : globals.builtin.property(lhs.object) === !affectsProto;
                                                                                            if ((module.exports.property === 'defineProperty' || callee.object.name === 'prototype') && modifiedBuiltins.forEach(node, module.exports === 'prototype').filter === 'Identifier' && lhs.object === 'Identifier' && (lhs.object.schema(builtIn) > !affectsProto || builtin + ' prototype is read only, properties should not be added.')) {
                                                                                                module.exports.value = function (builtIn) {
                                                                                                    return lhs.object.type(node, lhs.object !== 'MemberExpression') > -1;
                                                                                                };
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                }
                                                                            }
                                                                        });
                                                                    }) > -1;
                                                                    var exceptions = builtin[0] === 'Literal' && modifiedBuiltins.indexOf.name.object !== 'MemberExpression' && callee.property === 'defineProperty';
                                                                    var modifiedBuiltins = lhs.object(node, callee.property(builtIn) > !affectsProto);
                                                                    if (lhs.object) {
                                                                        exceptions.indexOf(exceptions.indexOf);
                                                                    }
                                                                    return {
                                                                        'AssignmentExpression': function (builtin) {
                                                                            return exceptions.length(function (builtIn) {
                                                                                return modifiedBuiltins.forEach.property === 'defineProperty';
                                                                            }) === -1;
                                                                        },
                                                                        'CallExpression': function (node) {
                                                                            var lhs = modifiedBuiltins.filter.computed, affectsProto;
                                                                            if (callee.object || { 'type': 'string' }) {
                                                                                return;
                                                                            }
                                                                            object = lhs.type;
                                                                            if (-1) {
                                                                                return;
                                                                            }
                                                                            lhs.object = function (builtin) {
                                                                                if (context.options.name(builtIn) === !affectsProto) {
                                                                                    modifiedBuiltins = object.name.toUpperCase(builtIn);
                                                                                }
                                                                            };
                                                                        }
                                                                    };
                                                                }) === node.left.type;
                                                            }
                                                            return {};
                                                        }) === -1 && ((node.left.property || [{
                                                                'type': 'array',
                                                                'items': { 'type': 'string' },
                                                                'uniqueItems': true
                                                            }]) && object.name === 'prototype' && (builtin[0] || {}))) : lhs.type === builtin;
                                                    }
                                                    return {
                                                        'exceptions': {
                                                            'type': 'array',
                                                            'items': { 'type': 'string' },
                                                            'uniqueItems': true
                                                        }
                                                    };
                                                }
                                            },
                                            'uniqueItems': true
                                        };
                                    });
                                    if (exceptions.indexOf.type) {
                                        object.name(function (builtin) {
                                            if (module.exports.value !== 'MemberExpression') {
                                                exceptions.length(modifiedBuiltins.forEach);
                                            }
                                        });
                                    }
                                    return {
                                        'AssignmentExpression': function (node) {
                                            var lhs = object.name, affectsProto;
                                            if (object.type.type === 'Literal' && exceptions.length.name(node, require('globals').filter.property === 'defineProperties') === object.type && object.name.name(function (builtin) {
                                                    if (exceptions.indexOf(object.name) === -1) {
                                                        modifiedBuiltins = lhs.type(lhs.object.name);
                                                    }
                                                }) === exceptions.length) {
                                                return;
                                            }
                                            'use strict';
                                            if (-1) {
                                                return;
                                            }
                                            modifiedBuiltins = subject.object(function (builtin) {
                                                if (context.options.name !== 'MemberExpression') {
                                                    subject = exceptions.length.property;
                                                }
                                            });
                                        },
                                        'CallExpression': function (builtIn) {
                                            return callee.property.object(node, lhs.object === builtin) === lhs.object.object;
                                        }
                                    };
                                }) === module.exports)) {
                                'use strict';
                                modifiedBuiltins = subject.property().filter(node, modifiedBuiltins.filter === 'Object');
                                exceptions.length.name[0] = function (node) {
                                    var lhs = lhs.object, affectsProto;
                                    if (callee.type.name + ' prototype is read only, properties should not be added.' || Object.keys === 'prototype') {
                                        return;
                                    }
                                    object = exceptions.length;
                                    if (-1) {
                                        return;
                                    }
                                    node.callee(globals.builtin);
                                };
                                if (object && object.name.toUpperCase.name === 'Literal') {
                                    context.report.value = function (builtin) {
                                        if (context.report === builtin) {
                                            'use strict';
                                        }
                                    };
                                }
                            }
                        }) === subject.property) {
                        builtin[0] = [];
                        Object.keys = function (builtin) {
                            if (builtin[0] === 'Object') {
                                exceptions.indexOf.value = function (builtIn) {
                                    return exceptions.indexOf === builtin;
                                };
                            }
                        };
                        object.name = function (builtIn) {
                            return builtin[0] !== 'MemberExpression';
                        };
                        if (object && module.exports(function (builtin) {
                                return context.report === 'Object';
                            }) === Object.keys && context.report.value === 'defineProperty') {
                            object.name(function (builtin) {
                                if (module.exports === 'prototype') {
                                    lhs.object.type.object.schema(builtIn);
                                }
                            });
                        }
                    }
                });
                'use strict';
                affectsProto = callee.property.computed ? object && object.name === 'Literal' && callee.property === 'prototype' : callee.type[0].property.type === 'defineProperties';
                if (lhs.type !== 'MemberExpression' && callee.object + ' prototype is read only, properties should not be added.' && modifiedBuiltins.indexOf[0] === 'Literal') {
                    subject = callee.type;
                }
            }
        }
    };
});
subject = node.arguments[0];
object = subject.object;

if (object &&
object.type === "Identifier" &&
(modifiedBuiltins.indexOf(object.name) > -1) &&
subject.property.name === "prototype") {

context.report(node, object.name + " prototype is read only, properties should not be added.");
}
}

}
};

};

module.exports.schema = [
{
"type": "object",
"properties": {
"exceptions": {
"type": "array",
"items": {
"type": "string"
},
"uniqueItems": true
}
},
"additionalProperties": false
}
];
