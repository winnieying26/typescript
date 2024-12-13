import UseEffectHook from "./components/useeffect/UseEffectHook";
import A from "./components/usecontexthook/A";
import Counter from "./components/usestatehook/Counter";
import FetchPosts from "./components/useeffect/FetchPosts";

function App() {
  return (
    <>
      <UseEffectHook />
      <A />
      <Counter />
      <FetchPosts />
    </>
  );
}
export default App;
