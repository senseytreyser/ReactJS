import React from 'react';
import Post from "./Post"

export default class Blog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const postArr = this.props.posts.map((item,i)=>{
            return <Post title={item.title} date={item.date} postBody={item.postBody} key={i}/>
        }) 

        return postArr;
    }
}