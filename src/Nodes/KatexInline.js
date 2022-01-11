const Node = require("./Node");

class KatexInline extends Node {
  matching() {
    return this.DOMNode.nodeName === "KI";
  }

  data() {
    return {
      type: "math_inline",
      content: [
        {
          type: "text",
          text: this.DOMNode.getAttribute("src"),
        },
      ],
    };
  }
}

module.exports = KatexInline;
