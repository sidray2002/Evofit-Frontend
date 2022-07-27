import 'boxicons';
import List from './components/List';

function App() {

  
  return (
    <div className="App px-6 pt-12 pb-24 h-screen">
      <div className='container mx-auto h-full rounded-2xl shadow-2xl shadow-black p-6' style={{ backgroundColor: "#101317" }}>
        <div className='grid grid-cols-11 gap-2 w-full py-2 pb-4'>
          <div className='col-start-5 col-span-2 text-white text-2xl text-center font-semibold'><box-icon name='walk' color='white'></box-icon> Steps</div>
          <div className='col-span-2 text-white text-center text-2xl font-semibold'><box-icon name='dumbbell' color='white'></box-icon> Workout</div>
          <div className='col-span-2 text-white text-center text-2xl font-semibold'><box-icon name='bowl-rice' color='white'></box-icon> Nutrition</div>
        </div>

        <List></List>
      </div>
    </div>
  );
}

export default App;
