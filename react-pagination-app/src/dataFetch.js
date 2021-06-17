import axios from 'axios';
import React, { Component } from 'react';


class DataFetch extends React.Component {

componentDidMount =()=>{
    axios.get("https://reqres.in/api/users?page=2")
    .then(response=>console.log(response.data))
    

}
    


   state={setData:""}
 


    render() {
        return (
        <div>
<h1>this is my state{this.state.setData}</h1>
       </div>
        );
    }
}

export default DataFetch;
