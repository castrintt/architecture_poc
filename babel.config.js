module.exports = function (api) {
    api.cache(true)
    return {
        presets: [
            ["babel-preset-expo", {jsxImportSource: "nativewind"}],
            "nativewind/babel",
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            'babel-plugin-transform-typescript-metadata',
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
                        "@domain": "./@business/domain",
                        "@api": "./@business/api",
                        "@application": "./@business/application",
                        "@core": "./@business/core",
                        "@shared": "./@business/shared",
                        "@repository": "./@business/repository",
                        "@utils": "./src/utils",
                        "@tests": "./@tests"


                    },
                },
            ],
        ],
    }
}