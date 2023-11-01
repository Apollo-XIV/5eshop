import './App.css';
import Ctxs from './modules/hooks/globals';
import ItemSelector from './modules/components/itemSelector';
import Basket from './modules/components/basket';


function App() {
  return <>
    <div className='absolute inset-0 bg-sig-medium p-5 flex-col gap-2 flex'>
      <h1 className='text-2xl text-sig-gold font-bold font-serif'>5eShop</h1>
      <Ctxs>
        <ItemSelector />
        <Basket/>
      </Ctxs>
    </div>
  </>
}

export default App;


