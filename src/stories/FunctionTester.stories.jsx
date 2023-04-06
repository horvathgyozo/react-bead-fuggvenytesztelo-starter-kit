import { FunctionTester } from "../function-tester/FunctionTester";
import theSimpleExample from "./example-data/the-simple-example";
import theComplexExample from "./example-data/the-complex-example";

export default {
  title: "FunctionTester",
  component: FunctionTester,
  argTypes: {
    onFinish: {
      action: "finish",
    },
  },
};

const Template = (args) => <FunctionTester {...args} />;

export const TheSimpleExample = Template.bind({});
TheSimpleExample.args = theSimpleExample;

export const TheComplexExample = Template.bind({});
TheComplexExample.args = theComplexExample;
