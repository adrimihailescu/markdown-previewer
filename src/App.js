import { useState } from "react";
import "./App.css";
import MarkdownEditor from "./Components/MarkdownEditor";
import MarkdownPreviewer from "./Components/MarkdownPreviewer";

function App() {
	const [editorArea, setEditorArea] = useState(`
  # Adrianas page
  `);

	const onTextChange = (e) => {
		setEditorArea(e.target.value);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Markdown Previewer</h1>
				<MarkdownEditor editorArea={editorArea} onTextChange={onTextChange} />
				<MarkdownPreviewer editorArea={editorArea} />
			</header>
		</div>
	);
}

export default App;
