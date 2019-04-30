module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",

    "plugins": [
        "react-hooks",
    ],

    "rules": {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "implicit-arrow-linebreak": "off",
        "class-methods-use-this": "off",
        "no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "no-confusing-arrow": "off",
        "no-unused-expressions": ["error", { "allowTernary": true }],

        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }],

        "react/forbid-prop-types": "off",

        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": ["warning", { "extensions": [".js"] }],
        "react-hooks/rules-of-hooks": "error",
    },
}
