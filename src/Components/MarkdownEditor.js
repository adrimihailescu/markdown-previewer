import "./MarkdownEditor.scss";

const MarkdownEditor = ({ onTextChange, editorArea }) => {
	return (
		<div className="editor-area">
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
