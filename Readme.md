# Markdown Previewer
---
- A markdown previewer is a tool that allows a user to see how their markdown text will look once it is rendered. This is useful for previewing how a document will look before it is published, or for seeing how changes to a markdown document will look without having to actually render the document


### Technology used :

- React js
 ``` npx create-react-app markdown ```
 
 ``` cd markdown ```
### dependency :
```
 $ npm install @uiw/react-markdown-preview --save
```
```
import React from "react";
// import ReactDOM from "react-dom";
import MarkdownEditor from '@uiw/react-markdown-editor';

const title2 = {
  name: 'title2',
  keyCommand: 'title2',
  button: { 'aria-label': 'Add title text' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 512 512">
      <path fill="currentColor" d="M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z" />
    </svg>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = '#';
    const matchMark = lineInfo.text.match(/^#+/)
    if (matchMark && matchMark[0]) {
      const txt = matchMark[0];
      if (txt.length < 6) {
        mark = txt + '#';
      }
    }
    if (mark.length > 6) {
      mark = '#';
    }
    const title = lineInfo.text.replace(/^#+/, '')
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark}${title}`
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: lineInfo.from + mark.length },
    });
  },
};

const Dome = () => (
  <MarkdownEditor
    value="Hello Markdown!"
    toolbars={[
      'bold', 'italic', 'header', title2
    ]}
  />
);

export default Dome;
```
### Run 
``` npm start ```
### Features : 
- Support dark-mode/night-mode. @v4
- GitHub style: The markdown content is rendered as close to the way it's rendered on GitHub as possible.
- Support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
- Support for defining styles via comment.
- Support for GFM footnotes.

[Available online](https://musical-kitsune-379bc1.netlify.app/)

![](Gif_markdown.gif)

---

#### Builds the app for production to the build folder.
```
 npm run build
```

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

##### I deployed this project by [Netlify.com](https://www.netlify.com/)
