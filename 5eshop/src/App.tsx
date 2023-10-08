import './App.css';
import ItemListProvider from './modules/hooks/5eItemList';
import ItemSelector from './modules/components/itemSelector';

function App() {
  return <>
    <div className='absolute inset-0 bg-sig-medium p-5 flex-col gap-2 flex'>
      <ItemListProvider>
        <ItemSelector />
      </ItemListProvider>
    </div>
  </>
}

export default App;
