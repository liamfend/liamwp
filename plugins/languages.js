const chokidar = require('chokidar');
const path = require('path')

let basePath = path.join(process.cwd(), 'src')
chokidar.watch(path.join(basePath, 'container/**/locales/*.js')).on('all', (event, path) => {
    console.log(event, path);
});