"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

interface TiptapProps {
  content?: string; // Content is optional
  setValue: (name: any, value: string) => void; // Assuming 'exampleRequired' is a name 
}

const Tiptap = ({ content, setValue }: TiptapProps) => {

  const editor = useEditor({
    extensions: [StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
      },
    }), Underline],
    editorProps: {
      attributes: {
        class:
          "px-4 py-3 justify-start border-b border-r border-l border-gray-400 items-start w-full rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => setValue('exampleRequired', editor.getHTML()),
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;