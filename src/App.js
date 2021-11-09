import { useState } from "react";
import "./App.scss";
import MarkdownEditor from "./Components/MarkdownEditor";
import MarkdownPreviewer from "./Components/MarkdownPreviewer";

function App() {
	const [editorArea, setEditorArea] = useState(`
  # This is a h1
  ## And this is a h2
  Heres some code they want top see, \`<div></div>\`, between 2 backticks. 
  > Block quote here

  \`\`\`
  // Below is a multi-line code:
  
  const Editor = (props) => {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  );
};
  `);

	const onTextChange = (e) => {
		setEditorArea(e.target.value);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">My React Markdown Previewer</h1>
				<div className="container">
					<MarkdownEditor editorArea={editorArea} onTextChange={onTextChange} />
					<MarkdownPreviewer editorArea={editorArea} />
				</div>
			</header>
		</div>
	);
}

export default App;
