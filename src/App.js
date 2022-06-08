import { useEffect, useState } from "react";
import GuessCard from "./guess/GuessCard/GuessCard";

const App = () => {
  const [guess, setGuess] = useState([]);

  const test = (e) => {
    if (!isNaN(e.key)) {
      console.log(guess.length);
      guess.length <= 4 ?? console.log("t");
      setGuess((prev) => {
        let temp = [...prev];
        temp.push(e.key);
        return temp;
      });
    }
  };

  useEffect(() => {
    document.addEventListener(
      "keypress",
      (e) => {
        // var name = e.key;
        // var code = e.code;
        test(e);
      },
      false
    );
  }, []);

  return (
    <div>
      <GuessCard value={guess} />
      {/* <GuessCard></GuessCard> */}
    </div>
  );
};

export default App;
