import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

import '@toast-ui/editor/dist/toastui-editor.css';

function MarkdownEditor({ onContentChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });

    return () => {
      editor.remove();
    };
  }, [onContentChange]);

  return <div ref={editorRef}></div>;
}

export default MarkdownEditor;
