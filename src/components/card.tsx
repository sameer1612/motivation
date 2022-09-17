import { useDispatch } from "react-redux";
import { destroy, update } from "../redux/features/motivationSlice";
import { Motivation } from "./home";

interface ICardProps {
  motivation: Motivation;
}

export default function Card({ motivation }: ICardProps) {
  const dispatch = useDispatch();

  function handleCompletion() {
    dispatch(update({ ...motivation, completed: !motivation.completed }));
  }

  return (
    <div
      className="card bg-dark text-light p-3 mb-2"
      onClick={handleCompletion}
    >
      <h5 className={motivation.completed ? "completed" : ""}>
        {motivation.title}
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(destroy(motivation));
          }}
        >
          Delete
        </button>
      </h5>
    </div>
  );
}
