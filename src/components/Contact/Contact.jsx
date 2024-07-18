import css from "./Contact.module.css";

const Contact = ({ contact, handleDelete }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  return (
    <div className={css.contactList}>
      <div className={css.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
