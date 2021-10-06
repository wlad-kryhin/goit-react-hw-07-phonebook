import "./index.css";
import { useSelector } from "react-redux";
import PhoneList from "./components/PhoneList/PhoneList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import { getItems } from "./redux/selectors";

function App() {
  const items = useSelector(getItems);
  return (
    <div className="container">
      <h1>PhoneBooks</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items.length > 1 && <Filter />}

      <PhoneList />
    </div>
  );
}
export default App;
