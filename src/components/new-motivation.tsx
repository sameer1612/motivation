import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../redux/features/motivationSlice";
import { RootState } from "../redux/store";

export default function NewMotivation() {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const motivations = useSelector(
    (state: RootState) => state.motivations.value
  );

  function handleCreate() {
    const motivation = {
      id: motivations.length + 1,
      title: title.trim(),
      completed: false,
    };

    dispatch(create(motivation));

    setTitle("");
  }

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-dark form-control text-light mt-4"
      />
      <button
        disabled={!title.trim()}
        onClick={handleCreate}
        className="btn btn-info w-100 mt-2"
      >
        Create
      </button>
    </>
  );
}
