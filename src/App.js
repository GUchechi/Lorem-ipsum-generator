import { useEffect, useState } from 'react';
import './App.css';
import Options from './components/Options';
import Output from './components/Output';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState('h1');
  const [inputValue, setInputValue] = useState(1)
  const [includeHtml, setIncludeHtml] = useState("yes");

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
    fetch (url)
    .then(res => res.json())
    .then(data => setParagraphs(data))
  },[inputValue])

  return (
    <div className="App">
     <div className="container">
      <div className="title">
        Lorem Ipsum Text Generator
      </div>
      <Options
        paragraphs={paragraphs}
        includeHtml={includeHtml}
        setIncludeHtml={setIncludeHtml}
        inputValue={inputValue}
        setInputValue={setInputValue}
        tag={tag}
        setTag={setTag}
       />
       <Output
          paragraphs={paragraphs}
          tag={tag}
          includeHtml={includeHtml}
        />
     </div>
    </div>
  );
}

export default App;
