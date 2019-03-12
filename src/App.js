import React, { Component } from 'react';
import List from './List/List'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      list: []
    }
  }
  updateNoteText(noteText) {
    this.setState({
      noteText :noteText.target.value
    })
  }
  handleKeyPress = (e)=> {
  if(e.key === 'Enter') {

  }
  }
  addNote() {
    if(this.state.noteText === ''){
      return
    }
    let listArr = this.state.list;
    listArr.push(this.state.noteText);
    this.setState({
      list : listArr ,
      noteText : ''
    });
    this.textInput.focus();
  }
  deleteNote(key) {
    let listArr = this.state.list;
    listArr.splice(key ,1);
    this.setState( {
      list : listArr
    })
    console.log(this.state.list);
  }
render() {
  let lists = this.state.list.map((val ,key) => {
    return (
      <List 
      key={key} 
      text = {val}
      deleteMethod = {() => {this.deleteNote(key)}} />
    )
  
  });
  return (
    <div className="container">
    <div className = "header">React todo APP</div>
    <div>{lists}</div>
    <div className ="btn" onClick = {this.addNote.bind(this)}>+</div>

    <input type = "text" 
    className = "textInput"
    onChange = {noteText => {this.updateNoteText(noteText)}}
    value = {this.state.noteText} 
    onKeyPress = {this.handleKeyPress.bind(this)}
    ref = {((input => {this.textInput = input}))}/> 
    </div>
  );
}
}
export default App;
