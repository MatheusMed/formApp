import { useState, ChangeEvent } from 'react';
import ButtonComponent from '../buttonComponent';
import InputComponent from '../input_component';


function FormComponent() {

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
    console.log("caiu aq "),
    <>
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


      <ButtonComponent handleTap={handleSave} />
    </>
  );
}



export default FormComponent;