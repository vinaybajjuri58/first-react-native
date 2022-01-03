import {CounterProvider} from "./Context"
import {Counter} from "./Components"


export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
