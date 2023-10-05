import './App.css';

function App() {
  return <>
    <div className='absolute inset-0 bg-sig-medium p-5 flex-col gap-2 flex'>
      <h1 className='text-3xl font-bold text-sig-gold'>5eShop</h1>
      <div className='flex w-full gap-4'>
        <div className='bg-sig-dark rounded-lg grow basis-60 h-60'></div>
        <div className='bg-sig-dark rounded-lg basis-1/3 h-60'></div>
      </div>
    </div>
  </>
}

export default App;
