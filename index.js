const semver = require('semver');

module.exports = function(api) {
    if (!semver.satisfies(api.version, '>=7.0.0-0')) {
        throw new Error('Requires Babel "^7.0.0-0", but was loaded with "' + api.version + '". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version.');
    }

    // Cache the returned value forever and don't call this function again.
    api.cache(true);

    return {
        presets: [
        ],
        plugins: [
            // Stage 0
            '@babel/plugin-proposal-function-bind',

            // Stage 1
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-logical-assignment-operators',
            ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
            ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
            ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
            '@babel/plugin-proposal-do-expressions',

            // Stage 2
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',

            // Stage 3
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
        ]
    };
};
