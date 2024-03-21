import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과값)
// 2. 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보여짐
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패 가리기
// 6. 승패결과에 따라 테두리 색이 변함 (이김-초록, 짐-빨강, 비김-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://imageengine.victorinox.com/mediahub/31970/1280Wx1120H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer : tie
    // user == rock, computer == scissors : user win
    // user == rock, computer == paper : user lose
    // user == scissors, computer == paper : user win
    // user == scissors, computer == rock : user lose
    // user == paper, computer == rock : user win
    // user == paper, computer == scissors : user lose
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "win" : "lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "win" : "lose";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "win" : "lose";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 인자로 받은 객체의 속성 이름들을 배열로 반환
    console.log("item array", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);

    let final = itemArray[randomItem];
    console.log("final", final);

    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
