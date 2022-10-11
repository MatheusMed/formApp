import { useContext } from 'react';
import './App.css'
import FormComponent from './components/formComponent';

import { Context } from './store/contexts/contextProvider';


function App() {

  const { state, dispatch } = useContext(Context);

  return (
    <div className='container'>
      <h1 className='h1' >Formulario</h1>
      {state.user.name != '' && state.user.lastName != '' && state.user.age > 0 && <code className='code'> <p className='p' >{`Usuario(a): 
        ${state.user.name} ${state.user.lastName} 
        Idade: ${state.user.age}`}</p>
      </code>}

      <FormComponent />
    </div>
  );
}

export default App
