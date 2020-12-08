import {useState} from 'react';
import ContactForm from './ContactForm';
const { List, Image, Button} = require("semantic-ui-react");

const Contact = ({name, phone, id, editContact, removeContact}) => {
    const [showForm, setShowForm] = useState(false);
return (
<List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>{phone}</List.Description>
      </List.Content>
      <List.Content floated="right">
          <Button icon="pencil"onClick={() => setShowForm(!showForm)}></Button>
          <Button color="red" icon="trash" onClick={()=> removeContact(id)}></Button>
      </List.Content>
      {showForm && 
      <ContactForm 
      editContact={editContact} 
      id={id} 
      name={name} 
      phone={phone}
      hideEditForm={() => setShowForm(false)}
      />}
</List.Item>
)
}

export default Contact;