import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { List, Text, Button, Item } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
