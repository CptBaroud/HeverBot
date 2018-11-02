module.exports = {
    name : "role",
    permissions: {
        "*": "*"
    },
    execute(message, args){

        const embed = {
            "title": "Demande de Grade",
            "description": "Si vous avez acheter un grade sur le serveur vous pouvez le reclamer sur discord",
            "url": "http://www.hevermine.fr/",
            "color": 1011449,
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": "HeverMine | Demande de Grade | " + message.author.tag
            },
            "author": {
                "name": "Staff HeverMine",
                "icon_url": message.author.displayAvatarURL,
            },
            "fields": [
                {
                    "name": "Commande",
                    "value": "Utilise la commande &request```\n&request [PseudoMC] [Grade]```"
                },
                {
                    "name": "Liste des grade a reclamer ",
                    "value": " - HeVip \n - HeVip+ \n - HeLite"
                },
                {
                    "name": "Attention !!",
                    "value": "N'utilise pas cette commande si tu n'a pas le grade sur le serveur \n\n L'equipe de modération se reserve le droit d'appliquer une sanction"
                },
            ]
        };

        message.author.send({embed});
        message.reply(", Regarde tes Messages privé");
    }
};