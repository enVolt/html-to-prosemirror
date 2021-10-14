const Node = require("./Node");

class Table extends Node {

    matching () {
        return this.DOMNode.nodeName === "TBODY" ;
    }

    data () {
        return {
            type: 'table'
        }
    }
}

module.exports = Table;