import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends React.Component {

    constructor(){
        super();
        this.posts = [
            { 
                title: "Первый пост",
                postBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt, tempora quisquam corrupti at repudiandae vel, doloremque possimus dignissimos voluptas molestiae voluptatum non explicabo, magnam numquam dolorum pariatur dicta. Perspiciatis ut, itaque quasi natus sed necessitatibus odio voluptatum commodi, illum tempore dignissimos odit placeat totam corrupti quam, amet possimus repellat?",
                date: "01.02.2010"    
            },
            { 
                title: "Второй пост",
                postBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt, tempora quisquam corrupti at repudiandae vel, doloremque possimus dignissimos voluptas molestiae voluptatum non explicabo, magnam numquam dolorum pariatur dicta. Perspiciatis ut, itaque quasi natus sed necessitatibus odio voluptatum commodi, illum tempore dignissimos odit placeat totam corrupti quam, amet possimus repellat?",
                date: "22.12.2011"
            }
        ]
    }

    render(){
        return (
            <div>
                <WelcomeModal />
                <Blog posts={this.posts} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));