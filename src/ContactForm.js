import {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';

const ContactForm = (props) =>{
    
    const[phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
    <Form unstackable onSubtmit={handleSubmit}>
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
    <Button type='submit'>Add Contact</Button>
  </Form>
    )
}
export default ContactForm