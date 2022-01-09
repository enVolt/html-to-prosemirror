const Mark = require("./Mark");

class Strike extends Mark {
    matching () {
        return this.DOMNode.nodeName === "STRIKE" || this.DOMNode.nodeName === "S" || this.DOMNode.nodeName === "DEL"
    }

    data () {
        return {
            type: "strike",
        };
    }
}

module.exports = Strike;