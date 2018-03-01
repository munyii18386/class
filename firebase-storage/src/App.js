import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: {}
        }
    }
    componentDidMount() {
        // Create references to the 'imgs' endpoings on database and storage
        

        // When the database 'value' changes, change the state of `imgs`
        
    }

    // Event when the input changes
    fileChange(event) {
        // Get the uploaded file and its name
        

        // Create a new child reference (on storage) for the image using its name
        // Then, `put` the file contents. *then()*
        // Using the `snapshot.downloadURL` value, push a new element into 
        // The _database_ `imgs` reference
        

    }
    render() {
        return (
            <div className="App">
              <div>
                <input type="file" onChange={ (e) => this.fileChange(e) } />
              </div>
              { /* Iterate through the keys of the `imgs` state and render an image*/ }
              
            </div>
            );
    }
}

export default App;
