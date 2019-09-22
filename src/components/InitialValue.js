import { Value } from 'slate';

const initialValue = Value.fromJSON({
  object: "value",
  document: {
    object: "document",
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "This is editable "
          },
          {
            object: "text",
            text: "rich",
            marks: [{ "type": "bold" }]
          },
          {
            object: "text",
            text: " text, "
          },
          {
            object: "text",
            text: "much",
            marks: [{ "type": "italic" }]
          },
          {
            object: "text",
            text: " better than a "
          },
          {
            object: "text",
            text: "<textarea>",
            marks: [{ "type": "code" }]
          },
          {
            object: "text",
            text: "!"
          }
        ]
      },
      {
        object: "block",
        "type": "paragraph",
        "nodes": [
          {
            object: "text",
            text:
              "Since it's rich text, you can do things like turn a selection of text "
          },
          {
            object: "text",
            text: "bold",
            marks: [{ "type": "bold" }]
          },
          {
            object: "text",
            text:
              ", or add a semantically rendered block quote in the middle of the page, like this:"
          }
        ]
      },      
      {
        object: "block",
        "type": "block-quote",
        "nodes": [
          {
            object: "text",
            text: "A wise quote."
          }
        ]
      },
      {
        object: "block",
        "type": "paragraph",
        "nodes": [
          {
            object: "text",
            text: "Try it out for yourself!"
          }
        ]
      },
      {
        object: "block",
        type: "image",
        data: {
          "src":
            "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/news/speaking-of-science/wp-content/uploads/sites/36/2015/10/as12-49-7278-1024x1024.jpg&w=1484"
        }
      },
      {
        object: "block",
        type: "file",
        data: {
          "src":
            "http://www.africau.edu/images/default/sample.pdf"
        }
      }
    ]
  }
});

export default initialValue;
