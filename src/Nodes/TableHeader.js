const Node = require("./Node");

class TableHeader extends Node {

    matching () {
        return this.DOMNode.nodeName === "TH" ;
    }

    data () {
        return {
            type: 'table_header'
        }
    }
}

module.exports = TableHeader;