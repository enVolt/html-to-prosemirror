const Node = require("./Node");

class Blockquote extends Node {

    matching () {
        return this.DOMNode.nodeName === "BLOCKQUOTE" ;
    }

    data () {
        return {
            type: 'blockquote'
        }
    }
}

module.exports = Blockquote;