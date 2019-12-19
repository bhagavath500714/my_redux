// import React, { Component } from 'react';
// import NewFile from './NewFile';
// import AddRecord from './AddRecord';

// class App extends Component {

//   state = {
//     records : [
//       {name: 'R', age: 30, belt: 'black', id: 1},
//       {name: 'Y', age: 20, belt: 'green', id: 2},
//       {name: 'C', age: 14, belt: 'pink', id: 3},
//     ]
//   }
//   addRecord = (rec) => {
//     // console.log(rec);
//     rec.id = Math.random();
//     let records = [...this.state.records, rec];
//     this.setState({
//       records: records
//     }) 
//   }
//   deleteRecord = (id) => {
//     // console.log(id);
//     let records = this.state.records.filter(file => {
//       return file.id !== id
//     });
//     this.setState({
//       records: records
//     })
//   }
//   componentDidMount(){
//     console.log('component mounded only once when component loded at first time');
//   }

//   componentDidUpdate(prevProps, prevstate){
//     console.log('component updated');
//     console.log(prevProps, prevstate);
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>React App</h1>
//         <p>Welcome</p>
//         <NewFile deleteRecord={this.deleteRecord} records={this.state.records}/>
//         <AddRecord addRecord={this.addRecord} />
//       </div>
//     );
//   }  
// }

// export default App;

import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Nabar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario'}
    ]
  }

  deleteTodo =(id) =>{
    // console.log(id);
    const todos = this.state.todos.filter(file => {
      return file.id !== id
    });
    this.setState({
      todos
      // todos: todos   -- key and value same name we can remove one
    })
  } 
  addTodo = (val) => {
    val.id = Math.random();
    let todos = [...this.state.todos, val];
    this.setState({
      todos
    })
  }

  render(){
        return (
          <BrowserRouter>
          <div className="todo-app">
            <div className="container">
            <h1 className="center blue-text">Todo's</h1> 
              <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} /> 
              <AddTodo addTodo={this.addTodo}/> 
            </div>              
              <Nabar />
              <Switch>
                <Route exact path='/' component={Home} />        
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/:post_id' component={Post} />
              </Switch>
          </div>
          </BrowserRouter>
        );
      }  
    }
    
    export default App;