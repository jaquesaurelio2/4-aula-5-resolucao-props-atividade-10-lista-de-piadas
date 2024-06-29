export default function Joke({ punchline, setup }) {
  return (
    <div data-testid="Joke">
      {setup && <h3>Setup: {setup}</h3>}
      <p>Punchline: {punchline}</p>
      <hr />
    </div>
  );
}
