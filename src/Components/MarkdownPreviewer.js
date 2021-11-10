import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./MarkdownPreviewer.scss";

const MarkdownPreviewer = ({ editorArea }) => {
	return (
		<div className="previewer">
			<h2 className="h2-only">See changes here</h2>
			<div id="preview">
				<ReactMarkdown children={editorArea} remarkPlugins={[remarkGfm]} />
			</div>
		</div>
	);
};

export default MarkdownPreviewer;
