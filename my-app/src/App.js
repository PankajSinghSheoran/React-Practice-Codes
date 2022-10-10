/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import "./App.css";
import React from "react";
// import ReactDOM from 'react-dom';
import Header from "./MyComponents/Header";
import ToDos from "./MyComponents/ToDos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Get up early",
      desc:
        "You have to get up early in the morning because you have to go to college",
    },
    {
      sno: 2,
      title: "Get your chores done",
      desc: "You have to complete your chores before going to college",
    },
    {
      sno: 3,
      title: "Go to college",
      desc: "Now go to college and study hard",
    },
    {
      sno: 4,
      title: "Do coding",
      desc: "After coming back from college, you have to do coding",
    },
  ];
  return (
    <>
      <Header Title="My ToDo List" searchBar={true} />
      <ToDos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
