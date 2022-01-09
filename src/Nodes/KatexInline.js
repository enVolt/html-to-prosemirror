const Node = require("./Node");

class KatexInline extends Node {
  matching() {
    return this.DOMNode.nodeName === "KI";
  }

  data() {
    return {
      type: "mathInline",
      content: this.DOMNode.getAttribute("src"),
    };
  }
}

module.exports = KatexInline;
