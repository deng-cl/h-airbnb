const path = require("path")
const CracoLessPlugin = require("craco-less")

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    webpack: { // -- webpack 配置
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components"),
            "utils": resolve("src/utils"),
            // '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    },

    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // ...
            },
        },
    ],
}