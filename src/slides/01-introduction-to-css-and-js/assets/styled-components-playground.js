export default `
const Button = styled.button\`
  background-color: red;
\`;

function CustomButton() {
  return <Button>Click me</Button>;
}

render(<CustomButton />);
`.trim();
