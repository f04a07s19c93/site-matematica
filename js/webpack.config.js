const path = require('path')

module.exports = {
    entry: path.resolve('main.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve('..','dist')
    }
}