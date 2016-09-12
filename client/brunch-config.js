module.exports = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        stylesheets: {
            joinTo: {
                'css/app.css': ['app/styles/app.scss'],
                'css/bootstrap.css': ['app/styles/bootstrap.scss']
            }
        },
        templates: {
            joinTo: 'app.js'
        }
    },
    plugins: {
        babel: {

        },
        assetsmanager: {
            copyTo: {
                'vendor': ['node_modules/bootstrap', 'node_modules/jquery', 'node_modules/font-awesome']
            },
            minTimeSpanSeconds: 10 // assets won't be copied more frequent than once per X seconds.npm
        },
        sass: {
            mode: 'native',
            includePaths: ['app/styles/app', 'app/styles/bootstrap', 'app/styles/app/material']

        }
    }
};
