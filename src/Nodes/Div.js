const Node = require("./Node");

class Div extends Node {

    matching () {
        return this.DOMNode.nodeName === "DIV" ;
    }

    data () {
        return null
    }
}

module.exports = Div;