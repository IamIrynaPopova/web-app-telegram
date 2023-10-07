import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Popup from "./components/Popup/Popup";

const tg = window.Telegram.WebApp;

function App() {
  const [formSubmit, setFormSubmit] = useState(false);

  
  useEffect(() => {
console.log(tg.viewportHeight);
  },[])

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
