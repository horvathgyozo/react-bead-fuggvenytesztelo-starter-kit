import { FunctionTester } from "./function-tester/FunctionTester";
// import json_data from "./stories/example-data/the-example";

function App() {
  return (
    <FunctionTester
      fn={({ a, b }) => a + b}
      input={{ a: "number", b: "number" }}
      output={"number"}
      tests={[
        { name: "1 + 0", testFn: (fn) => fn({ a: 1, b: 0 }) === 1, points: 25 },
        { name: "0 + 10", testFn: (fn) => fn({ a: 0, b: 10 }) === 10, points: 25 },
        { name: "1 + -1", testFn: (fn) => fn({ a: 1, b: -1 }) === 0, points: 25 },
        { name: "10 + -20", testFn: (fn) => fn({ a: 10, b: -20 }) === -10, points: 25 },
      ]}
      onFinish={(result) => console.log(result)}
    />
  );
}

export default App;
