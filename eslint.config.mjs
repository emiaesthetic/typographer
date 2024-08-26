import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:jsdoc/recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            parser: "babel-eslint",
        },
    },

    rules: {
        "no-console": "off",
        "no-loop-func": ["error"],
        eqeqeq: ["error", "always"],
        strict: ["error", "global"],

        "max-nested-callbacks": ["error", {
            max: 7,
        }],

        "new-parens": ["error"],
        "no-unneeded-ternary": ["error"],
        "no-whitespace-before-property": ["error"],
        "operator-assignment": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error"],

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,

            overrides: {
                typeof: false,
            },
        }],

        "no-unreachable": ["error"],
        "no-global-assign": ["error"],
        "no-self-compare": ["error"],
        "no-unmodified-loop-condition": ["error"],

        "no-constant-condition": ["error", {
            checkLoops: false,
        }],

        "no-useless-concat": ["error"],
        "no-useless-escape": ["error"],
        "no-shadow-restricted-names": ["error"],

        "no-use-before-define": ["error", {
            functions: false,
        }],

        "arrow-body-style": ["error", "as-needed"],
        "arrow-spacing": ["error"],

        "no-confusing-arrow": ["error", {
            allowParens: true,
        }],

        "no-useless-computed-key": ["error"],
        "no-useless-rename": ["error"],
        "object-shorthand": ["error", "always"],
        "prefer-arrow-callback": ["error"],
        "prefer-numeric-literals": ["error"],
        "template-curly-spacing": ["error", "never"],
        "no-cond-assign": "off",
        "no-irregular-whitespace": "error",
        "no-unexpected-multiline": "error",
        curly: ["error", "multi-line"],
        "guard-for-in": "error",
        "no-caller": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-invalid-this": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-with": "error",
        "prefer-promise-reject-errors": "error",

        "no-unused-vars": ["error", {
            args: "none",
        }],

        "array-bracket-newline": "off",
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": "off",
        "block-spacing": ["error", "never"],
        "brace-style": "error",

        camelcase: ["error", {
            properties: "never",
        }],

        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",

        indent: ["error", 2, {
            CallExpression: {
                arguments: 2,
            },

            FunctionDeclaration: {
                body: 1,
                parameters: 2,
            },

            FunctionExpression: {
                body: 1,
                parameters: 2,
            },

            MemberExpression: 2,
            ObjectExpression: 1,
            SwitchCase: 1,
            ignoredNodes: ["ConditionalExpression"],
        }],

        "key-spacing": "error",
        "keyword-spacing": "error",

        "max-len": ["error", {
            code: 80,
            tabWidth: 2,
            ignoreUrls: true,
            ignorePattern: "goog.(module|require)",
        }],

        "new-cap": "error",
        "no-array-constructor": "error",
        "no-mixed-spaces-and-tabs": "error",

        "no-multiple-empty-lines": ["error", {
            max: 2,
        }],

        "no-new-object": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": "error",

        "one-var": ["error", {
            var: "never",
            let: "never",
            const: "never",
        }],

        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent"],

        quotes: ["error", "single", {
            allowTemplateLiterals: true,
        }],

        semi: "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",

        "space-before-function-paren": ["error", {
            asyncArrow: "always",
            anonymous: "never",
            named: "never",
        }],

        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "no-var": "error",

        "prefer-const": ["error", {
            destructuring: "all",
        }],

        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "rest-spread-spacing": "error",
        "yield-star-spacing": ["error", "after"],
        "jsdoc/check-access": 1,
        "jsdoc/check-alignment": 1,
        "jsdoc/check-param-names": 1,
        "jsdoc/check-property-names": 1,
        "jsdoc/check-tag-names": 1,
        "jsdoc/check-types": 1,
        "jsdoc/check-values": 1,
        "jsdoc/empty-tags": 1,
        "jsdoc/implements-on-classes": 1,
        "jsdoc/multiline-blocks": 1,
        "jsdoc/no-multi-asterisks": 1,
        "jsdoc/no-undefined-types": 1,
        "jsdoc/require-jsdoc": 1,
        "jsdoc/require-param": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-property": 1,
        "jsdoc/require-property-description": 1,
        "jsdoc/require-property-name": 1,
        "jsdoc/require-property-type": 1,
        "jsdoc/require-returns": 1,
        "jsdoc/require-returns-check": 1,
        "jsdoc/require-returns-description": 1,
        "jsdoc/require-returns-type": 1,
        "jsdoc/require-yields": 1,
        "jsdoc/require-yields-check": 1,
        "jsdoc/tag-lines": 1,
        "jsdoc/valid-types": 1,
    },
}];