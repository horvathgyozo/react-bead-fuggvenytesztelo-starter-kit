export function FunctionTester({ fn, input, output, tests, onFinish }) {
  console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests);
  return (
    <>
      <h1>FunctionTester</h1>
      <button
        onClick={() =>
          onFinish({
            givenTests: [],
            testResult: { achieved: 100, all: 100 },
            customTests: [],
          })
        }
      >
        OK
      </button>
    </>
  );
}
