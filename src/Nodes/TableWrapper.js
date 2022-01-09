const Node = require("./Node");

class TableWrapper extends Node {

    matching () {
        return this.DOMNode.nodeName === "TABLE" ;
    }

    data () {
        return null
    }
}

module.exports = TableWrapper;