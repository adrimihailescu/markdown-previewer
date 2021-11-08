import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownPreviewer = ({ editorArea }) => {
	return (
		<div id="preview">
			<h1>Markdown Previewer</h1>

			<ReactMarkdown children={editorArea} remarkPlugins={[remarkGfm]} />
		</div>
	);
};

export default MarkdownPreviewer;
