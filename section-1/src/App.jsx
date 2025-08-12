import { SplitScreen } from "./components/split-screen";

const LeftSideCmp = () => <h2 style={{ backgroundColor: "red" }}>Left</h2>;
const RightSideCmp = () => <h2 style={{ backgroundColor: "blue" }}>Right</h2>;

function App() {
  return (
    <SplitScreen lefWidth={1} rightWidth={2}>
      <LeftSideCmp />
      <RightSideCmp />
    </SplitScreen>
  );
}

export default App;
