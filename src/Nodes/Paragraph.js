const Node = require("./Node");

class Paragraph extends Node {

    matching () {
        return this.DOMNode.nodeName === "P";
    }

    data () {
        return {
            type: "paragraph"
        };
    }
}

module.exports = Paragraph;