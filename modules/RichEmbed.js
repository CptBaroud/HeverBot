const Discord = require('discord.js');

module.exports = class RichEmbed extends Discord.RichEmbed
{
    constructor(format=null)
    {
        super();

        this.colors = {
            default: 0xCCCCCC,
            info: 0x33CCFF,
            success: 0x00FF00,
            warning: 0xFF6600,
            error: 0XFF0000
        };
        this.format(format);
    }

    format(format) {
        if (format == null)
            return ;

        if (format.embed !== undefined)
            format = format.embed;
        if (format.color !== undefined)
        {
            if (this.colors[format.color] !== undefined)
                this.setColor(this.colors[format.color]);
            else
                this.setColor(format.color);
        }
        else
            this.setColor(this.colors.info);
        if (format.title !== undefined)
            this.setTitle(format.title);
        if (format.description !== undefined)
            this.setDescription(format.description);
        if (format.thumbnail !== undefined)
            this.setThumbnail(format.thumbnail);
        if (format.image !== undefined)
            this.setImage(format.image);
        if (format.url !== undefined)
            this.setImage(format.url);
        if (format.timestamp !== undefined && format.timestamp === true)
            this.setTimestamp();
        if (format.author !== undefined)
        {
            let name = format.author.name !== undefined ? format.author.name : "";
            let icon_url = format.author.icon_url !== undefined ? format.author.icon_url : "";
            this.setAuthor(name, icon_url);
        }
        if (format.footer !== undefined)
        {
            let text = format.footer.text !== undefined ? format.footer.text : "";
            let icon_url = format.footer.icon_url !== undefined ? format.footer.icon_url : "";
            this.setFooter(text, icon_url);
        }
        if (format.fields !== undefined && typeof format.fields === "object" && format.fields != null)
        {
            for (let data of format.fields)
            {
                if (typeof data === 'string' && ['blank', 'empty', 'space', 'spacer'].includes(data))
                    data = false;
                if (data.name !== undefined && data.value !== undefined)
                    this.addField(data.name, data.value);
                else if(typeof data === 'boolean')
                    this.addBlankField(!data);
            }
        }
    }

    reset() {
        this.author = null;
        this.color = null;
        this.description = null;
        this.fields = null;
        this.file = null;
        this.files = null;
        this.footer = null;
        this.image = null;
        this.thumbnail = null;
        this.timestamp = null;
        this.title = null;
        this.url = null;
    }
};