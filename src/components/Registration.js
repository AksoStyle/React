import React, { Component } from 'react';
import './Registration.css';

export class Registration extends Component{
    render(){
        return(
            <div className="container">
            <h1>Regisztráció</h1>
            <form className="form">
                <label className="label_email">E-MAIL CÍM:</label><br></br>
                <input className="input_field" placeholder="jatekos@moonproject.io" type="email"></input><br></br>
                <label className="label_name">NÉV:</label><br></br>
                <input className="input_field" placeholder="Szabó János" type="text"></input><br></br>
                <div className="wrapper" >
                    <input  type="checkbox"></input>
                    <label>Elolvastam és elfogadom a játékszabályokat</label>
                </div>
                
            </form>
            <button className="button" type="submit">Regisztrálok</button>
        </div>
        )
    }
}