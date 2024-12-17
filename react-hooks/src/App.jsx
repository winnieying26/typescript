import UseEffectHook from "./components/useeffect/UseEffectHook";
import A from "./components/usecontexthook/A";
import Counter from "./components/usestatehook/Counter";

import RegisterForm from "./components/forms/RegisterForm";
import Checkbox from "./components/checkbox/Checkbox";
import Cart from "./components/shoppingcart/Cart";

function App() {
  return (
    <>
      <UseEffectHook />
      <A />
      <Counter />
    {/*<FetchPosts />*/ }  
    <RegisterForm />
    <Checkbox />
    <Cart />
    </>
  );
}
export default App;
