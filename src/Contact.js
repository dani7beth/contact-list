const { List, Image } = require("semantic-ui-react");

const Contact = () => {
return (
<List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header>Rachel</List.Header>
        <List.Description>
            801-123-4566
        </List.Description>
      </List.Content>
</List.Item>
)
}

export default Contact;