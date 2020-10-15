import React, { useState, useEffect} from 'react';
import { Form, Card, Image, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import "./styles/Info.css"
import { Table } from 'react-bootstrap'

function Info() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);
    const [type, setType] = useState('');
    const [id, setId] = useState('');
    const [html_url, setUrl] = useState('')
      

    useEffect(() => {
        fetch("https://api.github.com/users/Camilo95VP/repos")
        .then (res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    }, []);

    const setData = ({ 
        name, 
        login, 
        followers, 
        following, 
        public_repos, 
        avatar_url,
        type,
        id,
        html_url, 
       }) => {
        setName(name)
        setUserName(login)
        setFollowers(followers)
        setFollowing(following)
        setRepos(public_repos)
        setAvatar(avatar_url)
        setType(type)
        setId(id)
        setUrl(html_url)
    };

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setError(data.message)
            }
            else {
                setData(data);
                setError(null);
            }
        })
}

    return (
        <div className="container1">
            <div className="search">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Input placeholder='Digite usuario GitHub' name='name' onChange={handleSearch} />
                <Form.Button id="button"content='Buscar' />
              </Form.Group>
            </Form>
            </div>
            { error ? (<h1>{error}</h1>) : (<div className="card">
              <Card>
                  <Image src={avatar} wrapped ui={false} />
                  <Card.Content>
                <Card.Header>{name} </Card.Header>
                <Card.Header>{userName} </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                     <Icon name='user' />
                     {followers} Followers
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                     <Icon name='user' />
                     {repos} Repositorios
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                     <Icon name='user' />
                     {following} Following
                  </a>
                </Card.Content>
              </Card>
            </div>)}
            <Table striped bordered hover>
                <thead>
                    <tr><td colSpan={2}></td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Descripción</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>Número</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Repositorios en GitHub</td>
                        <td><a>{html_url}</a></td>
                    </tr>                
                </tbody>
            </Table>
        </div>
        
    )
}

export default Info;
