import "./App.css";
import ConditionalWrapper from "./components/ConditionalWrapper";

function App() {
  const highlight = true;

  return (
    <>
    <ConditionalWrapper
      condition={highlight}
      wrapper={(children) => <div style={{backgroundColor: 'red', color: 'white'}}>{children}</div>}
    >
      <p>Yeeee!</p>
    </ConditionalWrapper>

    <ConditionalWrapper
      condition={!highlight}
      wrapper={(children) => <div style={{backgroundColor: 'red', color: 'white'}}>{children}</div>}
    >
      <p>Yeeee!</p>
    </ConditionalWrapper>
    </>
  );
}

export default App;
