import {useRef} from 'react';

const FileExplorerButton = (props) => {
  const handleClick = () => {
  // 👇️ open file input box on click of another element
    inputRef.current.click();
  };
  
  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
        return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  
  const inputRef = useRef(null);

  return (
    <div>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button onClick={handleClick}>{props.text}</button>
    </div>
  );
};
  
export default FileExplorerButton;
  