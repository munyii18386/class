import React, { Component } from 'react';
import './App.css';


// Create a SearchApp Component
class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            search: ''
        };
    }
    handleChange(event) {
        // Get event value
        let searchValue = event.target.value;

        // Set the state to trigger a re-rendering
        this.setState({
            search: searchValue
        });
    }
    render() {
        // Filter the table data
        let employees = this.props.data,
            searchString = this.state.search.trim().toLowerCase();

        if (searchString.length > 0) {
            // We are searching. Filter the results.
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
        }
        // Set the `update` property of the `UserInput` element
        return (
            <div>
              <UserInput update={ this.handleChange } />
              <Table data={ employees } />
            </div>
        )
    }
}

// UserInput component
class UserInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
                  <input className="form-control mb-2" placeholder="Search Employees..." onChange={ (e) => this.props.update(e) } />
                </div>)
    }
}

// Simple TableRow component for showing a <tr>
class TableRow extends React.Component {
    render() {
        return (
            <tr>
              <td>
                { this.props.name }
              </td>
              <td>
                { this.props.title }
              </td>
              <td>
                { this.props.salary }
              </td>
            </tr>)
    }
}
;

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Salary</th>
                  </tr>
                  { this.props.data.map(function(d, i) {
                        return <TableRow key={ 'person-' + i } name={ d.name } salary={ d.salary } title={ d.title } />
                    }) }
                </tbody>
              </table>
            </div>
        )
    }
}


export default SearchApp;
