import Header from "./components/Header";
import FlashCardGrid from "./components/FlashCardGrid";
import data from "./data/flashcard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header
        title="The React Flash Cards."
        subtitle="Test your react knowledge by answering the flashcards below"
        badge="From Beginner to Advanced Questions"
      />
      <main className="main">
        <FlashCardGrid cards={data} />
      </main>
    </div>
  );
}

export default App;
