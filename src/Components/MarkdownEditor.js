import "./MarkdownEditor.scss";

const MarkdownEditor = ({ onTextChange, editorArea }) => {
	return (
		<div className="editor-area">
			<h2>Edit in here</h2>
			<textarea
				id="editor"
				value={editorArea}
				onChange={onTextChange}
			></textarea>
		</div>
	);
};

export default MarkdownEditor;
