const Renderer = require("./src/Renderer");
const assert = require("assert");

const html = "<p>\n"
            + "    Example Text\n"
            + "</p>\n"
            + "<pre><code>\n"
            + "Line of Code\n"
            + "    Line of Code 2\n"
            + "Line of Code</code></pre>";

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Example Text"
                        }
                    ]
                },
                {
                    "type": "code_block",
                    "content": [
                        {
                            "type": "text",
                            "text": "Line of Code\n    Line of Code 2\nLine of Code"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));