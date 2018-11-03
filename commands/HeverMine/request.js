module.exports = {
    name : "request",
    permissions : {
        "*": "*"
    },
    execute(message, args){
        const parse = message.content.split(/ +/);
        const pseudoD = message.author.tag;
        const iconD = message.author.displayAvatarURL;
        const pseudoM = parse[1];
        const grade = parse[2];
        const id = message.author.id;

        const Rappel = new Discord.RichEmbed();
        Rappel.setTitle("Demande de grade ");
        Rappel.setAuthor("Staff HVM");
        Rappel.setColor('2980b9');
        Rappel.setDescription("Le joueur "+ message.author +" à fait une demande de " +grade);
        Rappel.addField("Pseudo Minecraft", pseudoM);
        Rappel.addField("Grade", grade);
        Rappel.addField("Id", id);
        Rappel.setFooter("HeverBot | Demande de grade | " +pseudoD.tag);

        client.channels.get('503667249660559380').send(Rappel);

        const Reponse = new Discord.RichEmbed();
        Reponse.setTitle("Ta demande à été Prise en compte");
        Reponse.setDescription("Demande du grade "+grade);
        Reponse.setAuthor(pseudoD, iconD);
        Reponse.setColor('2ecc71');

        message.author.send(Reponse);
    }
};