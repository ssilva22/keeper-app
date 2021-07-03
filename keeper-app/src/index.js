import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app"
import Header from "./components/header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"

function createNotes(noteItem){
return <Note 
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
/>
}

ReactDOM.render(
  <div>
   <Header />
  {  notes.map(createNotes)}
   <Footer />
  </div>,document.getElementById("root")
)