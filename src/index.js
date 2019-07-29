import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
const Person = ({img,name,job,children}) =>{
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    
    return (

        <article className="person">
            <img src={url} alt="person"/>
            <h4> {name}</h4>
            <h4>{job} </h4>
            {children}
        </article>
    );
}


const PersonList = () =>{
    return (
        <section className="person-list">
        <Person img="34" name="kobi" job="developer"/>
        <Person img="22" name="bob" job="designer" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores cumque blanditiis iusto corrupti incidunt velit pariatur excepturi itaque delectus!</p>
        </Person>
        <Person img="56" name="david" job="the boss"/>
        </section>
    );
}








ReactDom.render(<PersonList /> , document.getElementById('root'));