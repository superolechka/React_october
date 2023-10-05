import React from 'react';
import MarkdownEditor from './MarkdownEditor.jsx';

function App() {
  return (
    <MarkdownEditor onContentChange={console.log} />
  );
}


export default App;
