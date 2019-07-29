const Node = require("./Node");

class CodeBlock extends Node {
    matching () {
        return this.DOMNode.nodeName === "CODE" &&
            this.DOMNode.parentNode.nodeName === "PRE";
    }

    getLanguage () {
        const language = this.DOMNode.getAttribute("class");
        return language ? replace(/^language-/, "") : language;
    }

    data () {
        const language = this.getLanguage();

        if (language) {
            return {
                type: "code_block",
                attrs: {
                    language
                }
            };
        }

        return {
            type: "code_block"
        };
    }
}

module.exports = CodeBlock;