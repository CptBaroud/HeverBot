const FS = require('./FS.js');

module.exports = new class Loader extends FS
{
    constructor()
    {
        super();

        this.file = this.read;
        this.fileList = this.list;
    }

    util(path) {
        path = this.setExt(path, 'js');
        return this.file('utils/' + path);
    }

    command(path) {
        path = this.setExt(path, 'js');
        return this.file('commands/' + path);
    }

    help(commandName) {
        return this.file('commands/' + commandName + '/help.json');
    }

    config(path=null) {
        if (path != null)
        {
            path = this.setExt(path, 'json');
            return this.file('./config/' + path);
        }

        var files = this.fileList('./config');
        var config = {};
        for (let file of files)
        {
            let baseName = file.substr(0, file.length - 5);
            config[baseName] = this.config(file);
        }

        return config;
    }

    helper(path) {
        path = this.setExt(path, 'js');
        return this.file('helpers/' + path);
    }

    core(path) {
        path = this.setExt(path, 'js');
        return this.file('core/' + path);
    }

    setExt(path, extension)
    {
        return path.endsWith('.' + extension) ? path : path + '.' + extension;
    }
};