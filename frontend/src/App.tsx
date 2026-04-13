import "./App.css";
import Flashcard from "./components/Flashcard";
import type { Card } from "./lib/types";

export default function App() {
  function handleCardClick(card: Card) {
    if (canClick(card)) {
      card.flipped == true;
    }
  }

  function canClick(card: Card): boolean {
    if (card.flipped == true) {
      return false;
    }

    return true;
  }

  return <Flashcard card={}></Flashcard>;
}
