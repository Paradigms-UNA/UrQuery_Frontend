import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <div className='row'>
        <div className='col lside'>
          <h1>Hello from react!!</h1>
        </div>
        <div className='col rside'>
        </div>
      </div>
    </div>
  );
}

export default App;
