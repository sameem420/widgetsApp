import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import { useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
  },
  {
    title: "Why use React?",
    content:
      "It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.",
  },
  {
    title: "How do you use React?",
    content:
      "Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.",
  },
];

const options = [
  {
    label: "The Red Color",
    value: "red",
  },
  {
    label: "The Blue Color",
    value: "blue",
  },
  {
    label: "The Yellow Color",
    value: "yellow",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
}

export default App;
