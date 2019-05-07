import React from 'react';

export default class Post extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <article>
                <header>
                    <h2>{this.props.title}</h2>
                    <span>{this.props.date}</span>
                    <p>{this.props.postBody}</p>
                </header>
            </article>
        )
    }
} 