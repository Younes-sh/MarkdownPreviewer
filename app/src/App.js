import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    
      <MarkdownEditor
      value="# This is a H1  \n## This is a H2  \n###### This is a H6"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />

    
  );
}

export default App;


// Younes sheikhlar 