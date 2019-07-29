const Node = require("./Node");

class CodeBlockWrapper extends Node {
    matching () {
        return this.DOMNode.nodeName === "PRE";
    }

    data () {
        return null;
    }
}

module.exports = CodeBlockWrapper;