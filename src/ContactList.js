import Contact from './Contact';
import { List } from 'semantic-ui-react';
const Contacts = ({listOfContacts, editContact, remove}) =>{
    let getContacts = () => {
        return listOfContacts.map(c =>{
            // return <Contact 
            // key={c.id}
            // name={c.name}
            // phone={c.phone}
            // />;
            return <Contact 
            key={c.id} {...c} 
            editContact={editContact} 
            removeContact={remove}
            />;
        });
        
    }
    return(
        <div>
            <List divided>
                {getContacts()}
            </List>
        </div>
    );
};
export default Contacts