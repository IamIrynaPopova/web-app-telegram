import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Popup from "./components/Popup/Popup";

function App() {
  const [formSubmit, setFormSubmit] = useState(false);


  const handleSubmitForm = () => {
    setFormSubmit(true);
  
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmitForm} />
      <Popup formSubmit={formSubmit} setFormSubmit={setFormSubmit} />
    </div>
  );
}

export default App;
