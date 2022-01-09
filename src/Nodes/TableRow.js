const Node = require("./Node");

class TableHeader extends Node {

    matching () {
        return this.DOMNode.nodeName === "TR" ;
    }

    data () {
        return {
            type: 'tableRow'
        }
    }
}

module.exports = TableHeader;