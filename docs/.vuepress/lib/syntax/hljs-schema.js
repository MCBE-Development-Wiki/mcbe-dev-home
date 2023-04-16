module.exports = function (_hljs) {
    return {
        name: "Schema",
        keywords: 'opt',
        contains: [
            _hljs.QUOTE_STRING_MODE,
            _hljs.C_LINE_COMMENT_MODE,
            _hljs.C_BLOCK_COMMENT_MODE,
            {
                scope: 'meta',
                begin: /(?<=:)(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*)(\.(0|[1-9][0-9]*)(?:\-((?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0)(?:\.(?:(?:(?:(?:0[0-9]*[A-Za-z-])|[1-9A-Za-z-])[0-9A-Za-z-]*)|0))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?)?)?(?=:)/,
            },
            _hljs.C_NUMBER_MODE,
            _hljs.BINARY_NUMBER_MODE,
            _hljs.REGEXP_MODE,
            {
                scope: 'literal',
                begin: 'opt',
            },
            {
                scope: 'title',
                begin: /(?<=^)\w+?(?=:)/,
            },
            {
                scope: 'strong',
                begin: /(?<=^\s*)\w+?(?=( |$))/,
            },
            {
                scope: 'number',
                begin: /\*/,
            },
        ]
    };
};
