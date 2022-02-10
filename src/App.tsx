import "./styles.css";
import CodeBlock from "./components/codeblock";

export default function App() {
  const defaultCode = `() => {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count === 0 ? 0 : count - 1)

 return (
  <div
  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
>
  <button
    onClick={increment}
    style={{
      background: "black",
      color: "white",
      padding: "0.5rem",
      border: "2px solid black",
      cursor: "pointer",
      marginRight: "1rem",
    }}
  >
    Increment
  </button>

  <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{count}</span>

  <button
    onClick={decrement}
    style={{
      background: "white",
      color: "black",
      border: "2px solid black",
      padding: "0.5rem",
      cursor: "pointer",
      marginLeft: "1rem",
    }}
  >
    Decrement
  </button>
</div>
    )
  }`;
  return (
    <div className="App">
      <CodeBlock rawCode={defaultCode} language="jsx" />
    </div>
  );
}
