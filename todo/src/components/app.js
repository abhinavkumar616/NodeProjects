import React, { Component } from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);

       
        this.state = {
            userInput: "",
            list: []
        }
    }

    
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    
    addItem() {
        if (this.state.userInput !== '') {
            const userInput = {

               
                id: Math.random(),

                
                value: this.state.userInput
            };

           
            const list = [...this.state.list];
            list.push(userInput);

           
            this.setState({
                list,
                userInput: ""
            });
        }
    }

    
    render() {
        return (
        <div>
        <div className="container-fluid">
<div className="row" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '3rem',
                fontWeight: 'bolder',
            }}>TODO LIST</div>

            <hr />
            <div className="row">
            <div className="col-6 offset-3">
                
            <div class="input-group mb-3">
                        <input
                        className="form-control"
                            placeholder="add item . . . "
                            size="lg"
                            value={this.state.userInput}
                            onChange={item => this.updateInput(item.target.value)}
                            aria-label="add something"
                            aria-describedby="basic-addon2"
                        />

            <div class="input-group-append">
            <button onClick={() => this.addItem()}>ADD</button>
                  </div>
                    </div>

                </div>
                </div>
                <div className="row">
                <div className="col-4 offset-4">
                <ul class="list-group">

                        
                        {this.state.list.map(item => {
                            return (

                              <li class="list-group-item" variant="dark" action
                              >{item.value}</li>



                            )
                        })}
                    </ul>
                </div>
                </div>
        </div>
</div>
        );
    }
}

export default App;
