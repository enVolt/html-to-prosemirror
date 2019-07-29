const Node = require("./Node");

class OrderedList extends Node {

    matching () {
        return this.DOMNode.nodeName === "OL";
    }

    data () {
        return {
            type: "ordered_list",
            attrs: {
                order: 1
            }
        };
    }
}

module.exports = OrderedList;