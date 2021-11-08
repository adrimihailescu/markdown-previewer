import React from "react";

const MarkdownEditor = ({ onTextChange, editorArea }) => {
	return (
		<div>
			<h1>Markdown Editor</h1>
			<textarea
				id="editor"
				value={editorArea}
				onChange={onTextChange}
			></textarea>
		</div>
	);
};

export default MarkdownEditor;
