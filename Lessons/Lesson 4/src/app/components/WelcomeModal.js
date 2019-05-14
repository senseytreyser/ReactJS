import React from 'react';

export default class WelcomeModal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modal: false
        }

        this.handleClick = handleClick.bind(this);
    }

    render(){
        const modalStyle = {
            alignItems: "center",
            backgroundColor: "gray",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "400px"

        }
        const body = (
            <div style={modalStyle}>
                <p> Добро пожаловать! </p> 
                <button onClick={this.handleClick}>Благодарю</button>
            </div>
        ); 

        return this.state.modal && body 
    }

    componentDidMount(){
        console.log("Вывод модального окна");
        this.setState({
            modal: true
        })
    }
}

function handleClick(){
    console.log("Нажатие на кнопку");
    this.setState({
        modal: false
    });
}