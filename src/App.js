import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'semantic-ui-react';
// example of renaming on import
import { Container, Header as Headerz} from 'semantic-ui-react';
// example of renaming default import
import ContactList from './ContactList';

class App extends React.Component {

  state = { 
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656", },
      { id: 2, name: "George", phone: "626-567-1872", },
      { id: 3, name: "Cosmo", phone: "802-134-9876", },
    ],
  };

  render() {

    //es6 destructing
    const {contacts} = this.state;
    
    return (
      <Container>
       <Header as='h1'>React Contact List</Header>
       {/* this could get messy */}
       {/* {this.state.contacts.map(c => {
         <h1>{c.name}</h1>
       })} */}
       <ContactList listOfContacts={contacts}/>
      </Container>
    );
  };
}

export default App;
