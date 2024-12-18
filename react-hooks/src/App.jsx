import UseEffectHook from "./components/useeffect/UseEffectHook";

import Counter from "./components/usestatehook/Counter";

import RegisterForm from "./components/forms/RegisterForm";
import Checkbox from "./components/checkbox/Checkbox";
import Cart from "./components/shoppingcart/Cart";
import Board from "./components/tictactoe/Board";
import FetchPhotos from "./components/useeffect/FetchPhotos";
import FetchUsers from "./components/useeffect/FetchUsers";
import FetchPhotoById from "./components/useeffect/FetchPhotoById";


function App() {
  return (
    <>
      <UseEffectHook />
     
      <Counter />
    {/*<FetchPosts />   <A />import A from "./components/usecontexthook/A";
    import FetchComments from "./components/useeffect/FetchComments";
    <FetchComments /> <FetchPhotos /><FetchUsers />
    */ }  
    <RegisterForm />
    <Checkbox />
    <Cart />
    <Board />
    <FetchPhotoById />
    
    
  
    </>
  );
}
export default App;
