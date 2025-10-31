module.exports = function (api) {
    api.cache(true)
    return {
        presets: [
            ["babel-preset-expo", {jsxImportSource: "nativewind"}],
            "nativewind/babel",
        ],
        plugins: [
            "react-native-reanimated/plugin",
            "@babel/plugin-proposal-export-namespace-from",
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "@pages": "./src/pages",
                        "@extensions": "./src/extensions",
                        "@components": "./src/components",
                        "@router": "./src/routes",
                        "@hooks": "./src/hooks",
                        "@global": "./src/globals",
                        "@store": "./src/stores",
                        "@assets": "./src/assets",
                        "@libs": "./@libs",
                        "@enums": "./@domain/enum",
                        "@models*": "./@domain/models",
                        "@IoC": "./@IoC",
                        "@facade": "./@facade",
                        "@gateway": "./@gateway",
                        "@service": "./@service",
                        "@repository": "./@repository",
                        "@utils": "./src/utils",
                        "@tests": "./@tests"


                    },
                },
            ],
        ],
    }
}