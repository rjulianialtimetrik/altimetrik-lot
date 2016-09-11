module.exports = {
    files: {
        javascripts: {
            joinTo: 'app.js'
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
                'vendor': ['node_modules/bootstrap', 'node_modules/jquery']
            },
            minTimeSpanSeconds: 10 // assets won't be copied more frequent than once per X seconds.npm
        }
    }
};
