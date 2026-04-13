import "./restart-button.tsx";

interface RestartGame {
    restart: () => void;
}

export default function RestartGame({ restart }: RestartButtonProps) {
    return (
        <button
            className="restart"
            type="button"
            onClick={restart}
        >
            Restart
        </button>
    )
}