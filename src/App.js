import { useCallback, useMemo, useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  // console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  // const onClickCountUp = () => setCount(count + 1);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
