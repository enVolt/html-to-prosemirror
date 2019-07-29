class Node {
    constructor (DomNode) {
        this.wrapper = null;
        this.type = "node";
        this.DOMNode = DomNode;
    }

    matching () {
        return false;
    }

    data () {
        return [];
    }
}

module.exports = Node;