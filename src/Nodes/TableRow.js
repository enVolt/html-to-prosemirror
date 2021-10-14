const Node = require("./Node");

class TableHeader extends Node {

    matching () {
        return this.DOMNode.nodeName === "TR" ;
    }

    data () {
        return {
            type: 'table_row'
        }
    }
}

module.exports = TableHeader;