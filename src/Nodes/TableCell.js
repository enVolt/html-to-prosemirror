const Node = require("./Node");

class TableCell extends Node {

    matching () {
        return this.DOMNode.nodeName === "TD" ;
    }

    data () {
        let attrs = {};
        const colspan = this.DOMNode.getAttribute("colspan");
        if (colspan) {
            attrs['colspan'] = parseInt(colspan);
        }
        const rowspan = this.DOMNode.getAttribute("rowspan");
        if (rowspan) {
            attrs['rowspan'] = parseInt(rowspan);
        }

        return {
            type: 'tableCell',
            attrs: {
                ...attrs
            }
        }
    }
}

module.exports = TableCell;