import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import PostList from "./components/PostList";
function App() {
  return (
    <Container>
      <Header>Facebook</Header>
      <PostList />
    </Container>
  );
}

export default App;
