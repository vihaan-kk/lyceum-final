// This is the UI component for each flashcard
import type { Card } from "../lib/types";

interface CardProps {
    card: Card
}

export default function Flashcard({ card }: CardProps) {
    let text = "";
    if (!card.flipped) {
        text = card.front;
    }
    else {
        text = card.back;
    }

    return (
        <div className="card">
            { text }
        </div>
    );
}