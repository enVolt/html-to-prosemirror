const Node = require("./Node");

class Div extends Node {

    matching () {
        return ["DIV", "ARTICLE", "MAIN", "SECTION", "FOOTER", "ADDRESS","FIGURE","FIGCAPTION","CITE"].includes(this.DOMNode.nodeName);
    }

    data () {
        return null
    }
}

module.exports = Div;