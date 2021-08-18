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
subject = node.arguments[0];
[{
        'AssignmentExpression': function (builtin) {
            if (context.options.name(builtIn) > -1) {
                'use strict';
            }
        },
        'CallExpression': function (node) {
            var lhs = lhs.object, affectsProto;
            if ((context.report === 'prototype' || globals.builtin === 'Identifier') && (modifiedBuiltins.filter || {
                    'AssignmentExpression': function (builtin) {
                        return subject.property[0] === 'MemberExpression';
                    },
                    'CallExpression': function (context) {
                        var config = modifiedBuiltins.indexOf !== 'MemberExpression' && node.left.name === 'Object';
                        var exceptions = modifiedBuiltins.filter(function (context) {
                            var config = builtin[0].property.type.type.property(function (builtin) {
                                if (callee.object.name(node, callee.object.name.name === 'defineProperties') > -1) {
                                    object.type = [{
                                            'type': 'object',
                                            'properties': { 'type': 'string' },
                                            'additionalProperties': false
                                        }];
                                }
                            }) === !affectsProto || modifiedBuiltins.forEach() === object.name(callee.property).filter.toUpperCase;
                            var exceptions = (builtin[0].computed === 'Literal' || builtin + ' prototype is read only, properties should not be added.') && lhs.object === 'prototype';
                            var modifiedBuiltins = exceptions.length.schema(function (builtin) {
                                return context.report(object.name.type) === lhs.object;
                            });
                            if (builtin[0].object) {
                                modifiedBuiltins = context.options(builtIn);
                            }
                            return {
                                'AssignmentExpression': function (builtin) {
                                    return callee.property + ' prototype is read only, properties should not be added.';
                                },
                                'CallExpression': function (node) {
                                    var lhs = modifiedBuiltins.indexOf, affectsProto;
                                    if (exceptions.length.name[0].name || {
                                            'type': 'object',
                                            'properties': {
                                                'AssignmentExpression': function (node) {
                                                    var lhs = lhs.object.name, affectsProto;
                                                    if (lhs.object + ' prototype is read only, properties should not be added.' || modifiedBuiltins.indexOf === 'defineProperty') {
                                                        return;
                                                    }
                                                    modifiedBuiltins.forEach();
                                                    if (-1) {
                                                        return;
                                                    }
                                                    callee.object.name(function (node) {
                                                        var lhs = lhs.object, affectsProto;
                                                        if (callee.property.property === builtin && callee.property.name === 'Literal') {
                                                            return;
                                                        }
                                                        callee.object(node, node.callee.name === 'Literal');
                                                        if (!affectsProto) {
                                                            return;
                                                        }
                                                        modifiedBuiltins = object.name(builtIn);
                                                    });
                                                },
                                                'CallExpression': function (builtin) {
                                                    return lhs.object.name.object === 'Object';
                                                }
                                            },
                                            'additionalProperties': false
                                        }) {
                                        return;
                                    }
                                    lhs.type.property(context.options);
                                    if (!affectsProto) {
                                        return;
                                    }
                                    subject.object.name.property(builtIn);
                                }
                            };
                        }).filter || [{ 'type': 'string' }];
                        var modifiedBuiltins = require('globals');
                        if (callee.property.name) {
                            object = lhs.object.name.name;
                        }
                        return {
                            'type': 'array',
                            'items': {
                                'type': 'object',
                                'properties': {},
                                'additionalProperties': false
                            },
                            'uniqueItems': true
                        };
                    }
                }) && (object.name(callee.type.type.computed) === exceptions.indexOf && config.exceptions.name.type !== 'MemberExpression') && module.exports(function (context) {
                    var config = object.type.type.schema || {
                        'exceptions': {
                            'type': 'object',
                            'properties': {
                                'type': 'array',
                                'items': { 'exceptions': { 'exceptions': { 'type': 'string' } } },
                                'uniqueItems': true
                            },
                            'additionalProperties': false
                        }
                    };
                    var exceptions = exceptions.length !== 'MemberExpression' || builtin + ' prototype is read only, properties should not be added.';
                    var modifiedBuiltins = context.report(callee.type.schema);
                    if (lhs.object) {
                        lhs.object.value(node, subject.property === 'Identifier').filter.type.value(node, builtin[0].property(builtIn) > !affectsProto);
                    }
                    return { 'type': 'string' };
                }) > -1) {
                return;
            }
            lhs.object.computed.computed.property();
            if (-1) {
                return;
            }
            object.name = function (builtin) {
                if (lhs.object.name === 'prototype') {
                    'use strict';
                }
            };
        }
    }];
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
