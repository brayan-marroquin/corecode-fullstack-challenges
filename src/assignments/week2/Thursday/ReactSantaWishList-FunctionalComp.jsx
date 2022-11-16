/*
Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

The form should be a React component and should contain:

    an input field for the child's name (with id 'name')
    a text area to describe the wish (id: 'wish')
    a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
    the keys in the state to store the corresponding values should be named the same as the element's id
    an onSubmit action calling the function handleSubmit
    a function called handleSubmit, which
        calls send (a function that is already provided as part of the injected properties props)
        passes the current state as a parameter to send
        calls event.preventDefault
    it should be a controlled component (i.e. using onChange to bind input to the component's state)

*/
import { useState } from "react";

const WishlistForm = ({ send }) => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e) => {
    send([name, wish, priority]);
    e.preventDefault();
  };

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Wish List:
        <textarea
          id="wish"
          value={wish}
          onChange={e => setWish(e.target.value)}
        />
      </label>
      <label>
        Indicate the priority of the wish:
        <select
          id="priority"
          value={priority}
          onChange={e => setPriority(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default WishlistForm;
