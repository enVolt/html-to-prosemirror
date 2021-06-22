const Node = require("./Node");

class Span extends Node {

    matching () {
        return this.DOMNode.nodeName === "SPAN" ;
    }

    data () {
        return null
    }
}

module.exports = Span;