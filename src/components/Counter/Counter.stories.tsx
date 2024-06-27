import Counter from "./Counter";

export default {
  component: Counter,
  title: "Counter",
  decorators: [
    (Story: () => JSX.Element) => (
      <div
        style={{
          height: "72px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Primary = {
  args: {
    quantity: 1,
    variant: "primary",
    size: 24,
    border: false,
    pulse: false,
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    variant: "secondary"
  },
};
