import React, { Component } from 'react';

class PostsForm extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      body:''
    };
    this.onChange =this.onChange.bind(this);
    this.onSubmit =this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    const post ={
      title:this.state.title,
      body:this.state.body
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method :"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
  }
  render() {
    const {title,body} = this.state;
    const {onChange,onSubmit} = this;
    return (
      <div>
        <h4>new Post</h4>
        <form onSubmit={onSubmit}>
          <div>
            <label>title:</label>
            <input type="text" name="title" value={title} onChange={onChange}/>
          </div>
          <div>
            <label>body:</label>
            <input type="text" name="body" value={body} onChange={onChange}/>
          </div>
          <div><button type="submit">전송</button></div>
        </form>
      </div>
    );
  }
}

export default PostsForm;