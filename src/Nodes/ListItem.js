const Node = require("./Node");

class ListItem extends Node {

    constructor (...args) {
        super(...args);
        this.wrapper = {
            type: "paragraph"
        };
    }

    matching () {
        return this.DOMNode.nodeName === "LI";
    }

    data () {
        if (this.DOMNode.childNodes.length === 1 &&
            this.DOMNode.childNodes[0].nodeName === "P") {
            this.wrapper = null;
        }

        return {
            type: "list_item"
        };
    }
}

module.exports = ListItem;