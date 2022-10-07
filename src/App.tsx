import { ChangeEvent, useState } from 'react'
import InputComponent from '../components/input_component';
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [password, setPassword] = useState('')


  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleSobreName(e: ChangeEvent<HTMLInputElement>) {
    setSobreNome(e.target.value);
  }

  function handleSave() {
    if (name && sobreNome != '')
      alert(`Nome: ${name} ${sobreNome}`);

    setName('')
    setPassword('')
    setSobreNome('')

  }

  return (
    <div className='container'>
      <h1>Formulario</h1>
      <div>

        <InputComponent
          type='text'
          onHandle={handleName}
          placeHolder="Digite seu nome"
          valueState={name}
        />

        <InputComponent
          type='text'
          onHandle={handleSobreName}
          placeHolder="Digite seu sobreNome"
          valueState={sobreNome}
        />

        <InputComponent
          type='password'
          placeHolder='Digite sua senha'
          onHandle={handlePassword}
          valueState={password}
        />

      </div>

      <button className='button' onClick={handleSave}> Fazer Login </button>
    </div>
  );
}

export default App
