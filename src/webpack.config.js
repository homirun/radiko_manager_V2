const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: '/static/js/app.js',

    output:{
        filename: "[name]-[hash].js",
        path: path.resolve('/static/bundles/'),
    },

    plugins:[
        new BundleTracker({filename: './webpack-stats.json'})
    ],
}