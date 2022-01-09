const Node = require("./Node");

class TableHeader extends Node {

    matching () {
        return this.DOMNode.nodeName === "TH" ;
    }

    data () {
        return {
            type: 'tableHeader'
        }
    }
}

module.exports = TableHeader;