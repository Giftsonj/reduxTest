import React, { Component } from 'react';
import './App.css';
import Second from './Second'
class MainStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.doClick = this.doClick.bind(this);
    }
    doClick(evt) {
        let date = new Date();
        let letKeyDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let letArrStore = [];
        let letname = document.getElementById("idName").value;
        let letPass = document.getElementById("idPass").value;
        let letPhone = document.getElementById("idPhone").value;
        letArrStore.push(letname)
        letArrStore.push(letPass)
        letArrStore.push(letPhone)

        localStorage.setItem(letKeyDate, letArrStore)
    }
    render() {
        return (
            <div className="App">
                <div>
                    <label>Name</label>
                    <input type="text" id="idName"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="idPass"></input>
                </div>
                <div>
                    <label>phone</label>
                    <input type="text" id="idPhone"></input>
                </div>
                <div>
                    <button onClick={this.doClick}>Submit</button>
                </div>
                <Second />
            </div>
        )
    }
}
export default MainStorage;
