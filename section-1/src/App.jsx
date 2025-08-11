import { SplitScreen } from "./components/split-screen";

const LeftSideCmp = () => <h2 style={{ backgroundColor: "red" }}>Left</h2>;
const RightSideCmp = () => <h2 style={{ backgroundColor: "blue" }}>Right</h2>;

function App() {
  return <SplitScreen Left={LeftSideCmp} Right={RightSideCmp} />;
}

export default App;
