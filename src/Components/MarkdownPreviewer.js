import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkdownPreviewer.scss";

const MarkdownPreviewer = ({ editorArea }) => {
	return (
		<div id="preview" className="previewer">
			<h1>Markdown Previewer</h1>
			<ReactMarkdown children={editorArea} remarkPlugins={[remarkGfm]} />
		</div>
	);
};

export default MarkdownPreviewer;
