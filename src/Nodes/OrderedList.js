const Node = require("./Node");

class OrderedList extends Node {

    matching () {
        return this.DOMNode.nodeName === "OL";
    }

    data () {
        return {
            type: "orderedList",
            attrs: {
                order: 1
            }
        };
    }
}

module.exports = OrderedList;