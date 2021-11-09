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

\`\`\`

 **I will make this text bold**.
 Or _italic_.
 Or... wait for it... **_both!_**
 And i will go crazy ~crossing stuff out~.
 
 Numbered list below:
  1. apples
  2. oranges
  3. pears
---
Got an image over here.

![react logo](https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg)
  
#### And here is where i have placed a link :
[adrimihailescu](https://github.com/adrimihailescu "adrimihailescu")

---
  `);

	const onTextChange = (e) => {
		setEditorArea(e.target.value);
	};

	return (
		<div className="App responsive-app">
			<header className="App-header">
				<h1 className="title">My React Markdown Previewer</h1>
			</header>
			<div className="container">
				<MarkdownEditor editorArea={editorArea} onTextChange={onTextChange} />
				<MarkdownPreviewer editorArea={editorArea} />
			</div>
		</div>
	);
}

export default App;
