import Button from './Button';

export default {
  component: Button,
  title: 'Button',
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
        <div style={{
          maxWidth: '200px'
        }}>
          <Story />
        </div>
      </div>
    ),
  ], 
}

export const PrimaryNoCounter = {
  args: {
    variant: "primary",
    label: "Что сделать",
    counter: false,
    size: 56,
    state: 'enabled'
  }
}

export const PrimaryWithCounter = {
  args: {
    ...PrimaryNoCounter.args,
    counter: true
  }
}

export const SecondaryNoCounter = {
  args: {
    ...PrimaryNoCounter.args,
    variant: 'secondary'
  }
}

export const SecondaryWithCounter = {
  args: {
    ...PrimaryWithCounter.args,
    variant: 'secondary'
  }
}
