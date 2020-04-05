import React, { Component } from 'react';
import axios from "axios";
import { lightSpeedIn,lightSpeedOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    lightSpeedIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn'),
        animationDuration: '10s',
        showRemoveEfect:false
    },
    lightSpeedOut: {
        animation: 'x 1s',
        animationName: Radium.keyframes(lightSpeedOut, 'lightSpeedOut'),
        animationDuration: '10s',
        showRemoveEfect:false
    }
}

export default class MsgToWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Waiting for message"
        }
    }

    componentDidMount() {
        setInterval(() => {
            axios.get("http://localhost:3456/getMessage")
                .then((res) => {
                    if (res.data !== this.state.message && res.data ){

                        let a = document.getElementById( "hello" )
                        console.log(a);

                        this.setState({showRemoveEfect:true},()=>{
                            setTimeout(()=>{
                                this.setState({showRemoveEfect:false})
                                this.setState({ message: res.data })

                            },2000)
                        })

                        // if(a)   
                        //     a.remove();

                    }
                       
                })
        }, 3000)
    }




    render() {
        return (
            <div  style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden', background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)" }}>

                <StyleRoot id="hello" >
                    <div style={ (this.state.showRemoveEfect) ?  styles.lightSpeedOut :styles.lightSpeedIn} >
                        <h1 style={{
                            "textShadow":"0 1px 0 #ccc,                0 2px 0 #c9c9c9,                0 3px 0 #bbb,                0 4px 0 #b9b9b9,                0 5px 0 #aaa,                0 6px 1px rgba(0,0,0,.1),                0 0 5px rgba(0,0,0,.1),                0 1px 3px rgba(0,0,0,.3),                0 3px 5px rgba(0,0,0,.2),                0 5px 10px rgba(0,0,0,.25),                0 10px 10px rgba(0,0,0,.2),                0 20px 20px rgba(0,0,0,.15)",
                            paddingLeft: "25%", color: "white", paddingTop: "5%",fontSize:80
                        }}>{this.state.message}</h1>
                    </div>
                </StyleRoot>

            </div>
        )
    }

}

