# HTML to Prosemirror
 (JS)

(This package is based on [html-to-prosemirror](https://github.com/scrumpy/html-to-prosemirror), which was originally written for PHP.)

Takes HTML and outputs ProseMirror JSON.

## Installation
```bash
npm install html-to-prosemirror --save
```

## Usage

```js
const Renderer = require("html-to-prosemirror").Renderer;

const renderer = new Renderer();

console.log(
    JSON.stringify(
        renderer.render(`<p>Example Text</p>`)
    )
);
/*
    {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "Example Text"
                    }
                ]
            }
        ]
    }
*/
```

## Supported Nodes

* BulletList
* CodeBlock
* CodeBlockWrapper (with `pre`)
* HardBreak
* Heading
* Image (different from the [scrumpy's implementations](https://github.com/scrumpy/html-to-prosemirror/blob/master/src/Nodes/Image.php))
* ListItem
* OrderedList
* Paragraph

## Supported Marks

* Bold
* Code
* Italic
* Link

## Custom Nodes

Define your node as a class -

```js
const Node = require("html-to-prosemirror").Node;

class CustomNode extends Node {
    matching () {
        return this.DOMNode.nodeName === "USER"; // uses `jsdom` library
    }

    data () {
        return {
            type: "user",
            attrs: {
                id: this.DOMNode.getAttribute("data-id")
            }
        };
    }
}
```

Feed it to `renderer` instance -
```js
renderer.addNode(CustomNode);
```