'use strict';
import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup } from 'reactstrap';



class App extends Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            data: [],
            xVariable: 'Year',
        };
    }
    updateXvar(d) {
        console.log('d', d);
        this.setState({
            xVariable: d
        });
    }
    componentDidMount() {
        // Load data
        d3.csv('data/medalists.csv', (err, data) => {
            this.setState({ data: data });
        });
    }
    render() {
        // Group data by xVariable
        let chartData = d3.nest()
            .key((d) => d[this.state.xVariable])
            .rollup((d) => d.length) // counts the observations
            .entries(this.state.data);
        console.log('chart data', chartData);
        return (
            <div className="container">
                <div>
                    <ButtonGroup size="lg">
                        {['Sport', 'Year', 'Country'].map((d) => {
                            return <Button onClick={() => this.updateXvar(d)}>{d}</Button>
                        })

                        }
                    </ButtonGroup>

                </div>
                <BarChart width={730} height={250} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" />
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

export default App;
