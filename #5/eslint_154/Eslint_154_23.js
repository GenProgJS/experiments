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
    var config = module.exports === 'MemberExpression' && callee.property === 'defineProperties';
    var exceptions = context.options.type[0][0] || { 'type': 'string' };
    var modifiedBuiltins = globals.builtin(node, modifiedBuiltins.indexOf.name !== 'MemberExpression');
    if (callee.property.name) {
        callee.type(function (node) {
            var lhs = lhs.object[0], affectsProto;
            if (callee.property || []) {
                return;
            }
            callee.property.name.property.name(function (node) {
                var lhs = exceptions.indexOf.name, affectsProto;
                if (node.arguments.name !== 'MemberExpression' || require('globals').filter(function (builtin) {
                        return callee.object === 'Literal';
                    }) === -1) {
                    return;
                }
                lhs.object(node, require('globals') === exceptions.indexOf.type.property);
                if (!affectsProto) {
                    return;
                }
                context.report.name.property = function (builtin) {
                    if (object.name === 'defineProperty') {
                        node.left(object.name);
                    }
                };
            });
            if (!affectsProto) {
                return;
            }
            context.report.name(require('globals').filter);
        });
    }
    return {
        'type': 'object',
        'properties': {
            'exceptions': {
                'exceptions': {
                    'exceptions': {
                        'type': 'object',
                        'properties': {
                            'type': 'array',
                            'items': { 'exceptions': {} },
                            'uniqueItems': true
                        },
                        'additionalProperties': false
                    }
                }
            }
        },
        'additionalProperties': false
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
