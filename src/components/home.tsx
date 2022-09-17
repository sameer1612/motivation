import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMotivations } from "../apis/motivationsApi";
import { init } from "../redux/features/motivationSlice";
import { RootState } from "../redux/store";
import Card from "./card";
import NewMotivation from "./new-motivation";

export interface Motivation {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const dispatch = useDispatch();
  const motivations = useSelector(
    (state: RootState) => state.motivations.value
  );

  useEffect(() => {
    getMotivations().then((data) => dispatch(init(data)));
  }, []);

  return (
    <div className="container pt-3">
      <h1 className="text-center text-info display-3">Motivations</h1>
      <NewMotivation />
      <div className="motivations mt-5">
        {motivations.map((motivation) => (
          <Card motivation={motivation} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
