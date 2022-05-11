import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { fetchContacts } from "../../redux/phonebook/phonebook-operations";
import {
  Wrapper,
  Title,
  TitleContacts,
  Text,
} from "../../views/ContactsView/ContactsView.styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";

export default function ContactView() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Wrapper>
      <Toaster />

      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      <Filter />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <Text>Your phonebook is empty.</Text>
      )}
    </Wrapper>
  );
}
