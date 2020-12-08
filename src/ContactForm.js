import {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';

const ContactForm = (props) =>{
    
    const[phone, setPhone] = useState(props.phone ? props.phone : '');
    const [name, setName] = useState(props.name ? props.name : '');
    const [contact, setContact] = useState({name: "", phone: ""}); 

    const handleSubmit = (e) => {
        // e.preventDefault();
        if(props.id){
          props.editContact({name, phone,id: props.id});
          props.hideEditForm();
        }else{
        props.addContact({name, phone});
        }
        setName('');
        setPhone('');
    };

    return (
    <Form style={{padding: '7%'}} unstackable onSubmit={handleSubmit}>
    <Form.Group widths={2}>
      <Form.Input 
      name="name" 
      onChange={(e)=>{setName(e.target.value)}} 
      size="small" 
      label='Name' 
      value={name}
      placeholder='Name' />

      <Form.Input 
      size="small"
      name="phone"
      onChange={(e)=>{setPhone(e.target.value)}}
      label='Phone' 
      value={phone}
      placeholder='Phone' />
    </Form.Group>
    {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
    <Button style={{marginTop: "20px"}} color="green" type='submit'>{
    props.id ? "Edit Contact" : "Add Contact"}
    </Button>
  </Form>
    )
}
export default ContactForm