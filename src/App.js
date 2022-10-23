import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar } from './components/Navbar';
import { EditingArea } from './components/EditingArea';
import { DocumentArea } from './components/DocumentArea';
import { useState, useEffect, useLayoutEffect } from 'react';
import compileService from './service/compileService.mjs';
import documentService from './service/documentService.mjs';
import { ResultArea } from './components/ResultArea';
import aboutService from './service/aboutService.mjs';



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

  const [code, setCode] = useState(null);
  const [compiling, setCompiling] = useState(false);
  const [xml, setXml] = useState('');
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('');

  const onEditorsChange = (target, value) => {
    console.log(value);
   target === 'EA' ? setCode(value) : setXml(value);
  }


  /*let url="http://localhost:8080/api/una/about";
  
        fetch(url)
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error))*/

    /* aboutService.about()
      .then(response => console.log(response))*/



  useEffect(() => {
    //Validate is compiling

    // Validate there's something in DA - Sprint 2

    // Validate if the script is compiled - Sprint 2


    //Change this once the SpringBoot Server is done
    compiling ? setTimeout(() => setResult(compileService.compile(code)), setCompiling(false), 3000) : setResult('');
    
    
  }, [compiling])

  useLayoutEffect(() =>{

    if(loading) {
      setXml(prevXml => documentService.loading(prevXml));
      setLoading(false);
      console.log(xml);
    }
    //loading ? setTimeout(() => {setXml(documentService.loading(xml)); setLoading(false);}, 3000) : setResult('');

    //console.log(xml)
  }, [loading])

  
 

  return (
    <div className='container-fluid'>
      <Navbar/>
      

<div class="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


      <div className='row'>
        <div className='col lside'>
         <div> 
          <DocumentArea onChange={onEditorsChange} documentXml={xml} />
          <button className='btn btn-success' onClick={ () => setLoading(true)}>{loading ? 'en desarrollo' : 'Load'}</button>
          </div>

          <div> 
          <EditingArea onChange={onEditorsChange} code={code} />
          <button className='btn btn-success' onClick={ () => setCompiling(true)}>{compiling ? 'Compiling...' : 'Compile'}</button>
          </div>
        </div>
        <div className='col rside'>
          <ResultArea res={result}></ResultArea>
        </div>
      </div>
    </div>
   
  );
  
}

export default App;
