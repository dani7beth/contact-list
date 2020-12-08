import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Divider, Header } from 'semantic-ui-react';
// example of renaming on import
import { Container, Header as Headerz} from 'semantic-ui-react';
// example of renaming default import
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class App extends React.Component {

  state = { 
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656", },
      { id: 2, name: "George", phone: "626-567-1872", },
      { id: 3, name: "Cosmo", phone: "802-134-9876", },
    ],
  };

  addContact = (contactObj) =>{
    let newContact = {id: Math.random(), name: contactObj.name, phone: contactObj.phone}
    
    let contacts = [...this.state.contacts, newContact];
    this.setState({contacts});
  }

  editContact = (contactObj) =>{
    // let contact = {id:3, name: 'update', phone: '812-123-2344'};

    let contacts = this.state.contacts.map(c=> c.id === contactObj.id ? contactObj : c)

    this.setState({contacts});
  }

  deleteContact = (id) =>{
    let contacts = this.state.contacts.filter(c => c.id !== id);

    this.setState({contacts});

  }

  render() {

    //es6 destructing
    const {contacts} = this.state;

    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <ContactForm addContact={this.addContact} />

        <Divider />
       {/* this could get messy */}
       {/* {this.state.contacts.map(c => {
         <h1>{c.name}</h1>
       })} */}
       <ContactList 
       listOfContacts={contacts} 
       editContact={this.editContact}
       remove={this.deleteContact}
       />
      </Container>
    );
  };
}

export default App;
