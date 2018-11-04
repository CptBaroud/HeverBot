const fs = require('modules/FS');

module.exports = class FS
{
    constructor() {

    }

    exists(path) {
        return fs.existsSync('./' + path);
    }

    isFile(path) {
        if (this.exists(path))
            return fs.lstatSync('./' + path).isFile();
        return false;
    }

    isDir(path) {
        if (this.exists(path))
            return fs.lstatSync('./'+path).isDirectory();
        return false;
    }

    read(path) {
        if (!this.isFile(path))
            return false;
        return require('../' + path);
    }

    write(path, data, callbacl = null) {
        var data = JSON.stringify(data);
        fs.writeFile('./' + path, data, function(error) {
            console.error(error);
            if (typeof callback == 'function')
                callback(error, path, data);
        });
    }

    list(path) {
        if (!this.isDir(path))
            return false;
        return fs.readdirSync('./' + path);
    }
};