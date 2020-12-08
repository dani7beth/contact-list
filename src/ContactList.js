import Contact from './Contact';
import { List } from 'semantic-ui-react';
const Contacts = ({listOfContacts}) =>{
    let getContacts = () => {
        return listOfContacts.map(c =>{
            // return <Contact 
            // key={c.id}
            // name={c.name}
            // phone={c.phone}
            // />;
            return <Contact key={c.id} {...c} />;
        });
        
    }
    return(
        <div>
            <List>
                {getContacts()}
            </List>
        </div>
    );
};
export default Contacts