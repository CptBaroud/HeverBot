module.exports = {
    name : "info",
    permissions : {
        "*" : "*"
    },
    execute(message, args, client){

        const parse = message.content.split(/ +/);
        const info = require('../../json/joueurs/'+message.author.id+'.json');
        let infoR =function(){
            return require('../../json/joueurs/'+parse[1]+'.json');
        };
        const pseudoMc = info['pseudoMinecraft'];
        const pseudoDs = info['pseudoDiscord'];
        const grade = info['grade'];
        const id = info['id'];

        let fileExist = function()
        {
            if(fs.existsSync('./json/joueurs/'+message.author.id+'.json')){
                Log.success("Le fichier existe");
            }else{
                Log.error("Le fichier n'existe pas");
                Msg.error("Tu n'a pas de fichier joueur utilise la commande &joueur \n elle s'utilise comme ça : ```&joueur [PseudoMc]```")
            }
            return fs.existsSync('./json/joueurs/'+message.author.id+'.json');
        };

        let playerFileExist = function()
        {
            if(fs.existsSync('./json/joueurs/'+parse[1]+'.json')){
                Log.success("Le joueur à un fichier");
            }else{
                Log.error("Le fichier n'existe pas");
                Msg.error("Le joueur "+parse[1]+"n'a pas de fichier joueur")
            }
            return fs.existsSync('./json/joueurs/'+parse[1]+'.json');
        };

        if(fileExist() && parse[1] === undefined){
            const embed = {
                "title": "Info",
                "description": "Informations à propos du joueur "+pseudoMc,
                "color": 2899536,
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": "HeverMine | Info | " + message.author.tag
                },
                "author": {
                    "name": message.author.tag,
                    "icon_url": message.author.displayAvatarURL,
                },
                "fields": [
                    {
                        "name": "Info",
                        "value": "Pseudo Minecraft : "+pseudoMc + "\nPseudo Discord : " + pseudoDs + "\nGrade : " + grade + "\nId : " +id
                    },
                ]
            };
            message.author.send({embed});

        }else if(playerFileExist()){
            const infoR = require('../../json/joueurs/'+parse[1]+'.json');

            const pseudoMcR = infoR['pseudoMinecraft'];
            const pseudoDsR = infoR['pseudoDiscord'];
            const gradeR = infoR['grade'];
            const idR = infoR['id'];

            const embed = {
                "title": "Info",
                "description": "Informations à propos du joueur "+pseudoMcR,
                "color": 2899536,
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": "HeverMine | Info | " + message.author.tag
                },
                "author": {
                    "name": message.author.tag,
                    "icon_url": message.author.displayAvatarURL,
                },
                "fields": [
                    {
                        "name": "Info",
                        "value": "Pseudo Minecraft : "+pseudoMcR + "\nPseudo Discord : " + pseudoDsR + "\nGrade : " + gradeR + "\nId : " +idR
                    },
                ]
            };
            message.author.send({embed});
        }
    }
};