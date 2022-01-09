const Node = require("./Node");

class HorizontalRule extends Node {

    matching () {
        return this.DOMNode.nodeName === "HR" ;
    }

    data () {
        return {
            type: 'horizontalRule'
        }
    }
}

module.exports = HorizontalRule;