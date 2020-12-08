import Contact from './Contact';
import { List } from 'semantic-ui-react';
const Contacts = ({listOfContacts}) =>{
    let getContacts = () => {
        return listOfContacts.map(c =>{
            return <Contact />;
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