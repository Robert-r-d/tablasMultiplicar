import React, { Component } from "react";

export default class Form extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          username : ''
        }
        
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        
        updateInput(event){
        this.setState({username : event.target.value})
        }
        
        
        handleSubmit(){
        console.log('Your input value is: ' + this.state.username)
        for(var i = 1; i <= 10; i++){
            var res = (this.state.username * i);

            

        }
        }
        
        
        
        render(){
        return (
            <div>
            <input type="text" onChange={this.updateInput}></input>
            {/* <input type="submit" onClick={this.handleSubmit} ></input> */}
            
            <table border="1">
                <caption>La tabla del <h4>{this.state.username}</h4></caption>
                <tr>
                    <th>Multiplicacion</th>
                    <th>Resultado</th>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p>x <br/>1      </td>
                    <td>{this.state.username * 1}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>2</td>
                    <td>{this.state.username * 2}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>3</td>
                    <td>{this.state.username * 3}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>4</td>
                    <td>{this.state.username * 4}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>5</td>
                    <td>{this.state.username * 5}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>6</td>
                    <td>{this.state.username * 6}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>7</td>
                    <td>{this.state.username * 7}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>8</td>
                    <td>{this.state.username * 8}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>9</td>
                    <td>{this.state.username * 9}</td>
                </tr>
                <tr>
                    <td><p>{this.state.username}</p> x <br/>10</td>
                    <td>{this.state.username * 10}</td>
                </tr>
		</table>

            
            
            </div>
          );
        }
        } 


