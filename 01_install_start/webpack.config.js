/*
 * @Author: yanhengfu yanhengfu@jimengio.com
 * @Date: 2023-04-28 17:46:40
 * @LastEditors: yanhengfu yanhengfu@jimengio.com
 * @LastEditTime: 2023-04-28 18:24:19
 * @FilePath: \webpackStudy\01_install_start\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path")


module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    }
}