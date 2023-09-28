import React from "react";
import "./App.css";
import Button from "./components/button/Button";
import Avatar from "./components/avatar/Avatar";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Button label="Saya button 1" variant="primary" />
      <Button label="Saya button 2" variant="secondary" />
      <Avatar
        url="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        label="Gambar 1"
        size="lg"
      />
      <Avatar
        url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        label="Gambar 2"
        size="sm"
      />
      <Input
        placeholder="Username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <br />
      <br />
      <Input placeholder="Password" type="password" />
      <br />
      <br />
      <Input placeholder="Umur" type="number" />
    </div>
  );
}

export default App;
