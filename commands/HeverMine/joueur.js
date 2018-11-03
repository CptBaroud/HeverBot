module.exports = {
    name: "link",
    permissions: {
        "*": "*"
    },
    execute(message, args) {
        const parse = message.content.split(/ +/);
        const pseudo = parse[1];

        var save = {};
        save.pseudoMinecraft = pseudo;
        save.pseudoDiscord = message.author.tag;
        save.grade = "Joueur";
        save.id = message.author.id;
        save = JSON.stringify(save);
        fs.writeFile("json/joueurs/" + message.author.id + ".json", save, 'utf8');

        message.reply("Ton fichier joueur a été update");
    }
};