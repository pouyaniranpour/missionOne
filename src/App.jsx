import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";

export default function App() {
  // a local state to store the currently selected file.
  const [type, setType] = useState();
  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState();
  const [uploaded, setUploaded] = useState(false);

  
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:4000/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
      setUploaded(!uploaded);
    });
  }


  
  function handleAnalyze(e) {
    e.currentTarget.disabled = true;
        const url = 'http://localhost:4000/type';
    
      axios.get(url).then((response) => {
        console.log(response.data);
        setType(response.data.type);
        // handleLoading();
      });
    
  }
  
  function formatType(type) {
    if (type === 'hatchback' || type === 'sedan' || type === 'van') {
      return type;
    } else if (type === 'utilityVehicle') {
      return 'utility vehicle'
    } else if (type === 'suv') {
      return 'sports utility vehicle'
    }
  }

function handleChange(event) {
    setFilePath(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  }


  return (
    <div>
      <Header />
      
      <div className='mainContainer'>
        <div className='contentContainer'>
      <h1>Car Type</h1>
        <form onSubmit={handleSubmit}>
          <img className='carImage' src={file ? filePath : '/carPlaceholder.jpg'} /><br />
          <input type="file" onChange={handleChange} />
          <br />
          <p>
          {/* <button onClick={e=> e.currentTarget.disabled = true} type="submit" disabled={file ? false: true}>Upload</button><button disabled={file? false: true} onClick={handleAnalyze}>Get Type</button> */}
          </p>
        </form>
        
        
        {type && <p>Your car is a {formatType(type)}.</p>}

        </div>
      </div>
    </div>
    );

  }

