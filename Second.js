import React, { Component } from 'react';

class Second extends Component {
    constructor(props) {
        super(props);

        this.doLogin = this.doLogin.bind(this);
    }
    doLogin(evt) {
        let letLoginName = document.getElementById("secName").value;
        let getLocalStorage = Object.entries(localStorage);
        let letTemp = "", letTemp1 = [], letTemp3 = [];
        for (let i in getLocalStorage) {
            letTemp = getLocalStorage[i][1]
            let letSplit = letTemp.split(",")
            letTemp1.push(letSplit)
        }
        let letTempValidation = "";
        for (let j = 0; j < letTemp1.length; j++) {
            letTempValidation = letTemp1[j][0];
            if (letLoginName == letTempValidation) {
                // console.log("Hii")
                break;
            }
        }
        // console.log("1"+ letLoginName)
        // console.log("2"+ letTempValidation)

    }
    render() {
        return (
            <div className="App">
                <div>
                    <label>Name</label>
                    <input type="text" id="secName"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="secPass"></input>
                </div>

                <div>
                    <button onClick={this.doLogin}>Login</button>
                    {/* <button>Submit</button> */}

                </div>
            </div>
        )
    }
}

export default Second