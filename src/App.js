import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar } from './components/Navbar';

/**
 * TODO Components to program:
 * -> Navbar exists but, we have to do the click button logic (the aboutService.js)
 * -> DA make from 0, also do the documentService.js, which should connect with the /document/DDDD service 
 *    -- Must render the load button which triggers the call to the service
 * 
 * -> EA make from 0, also do the compileService.js file.
 *     --- must render the compile button, which triggers logic
 *  
 * -> RA make from 0, must listen to the change of the value in EA. 
 *    -- Probably using "useContext" hook
 *    -- After EA and DA are complete
 * 
 */

const App = () => {
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
