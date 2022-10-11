import { useState, ChangeEvent, useContext } from 'react';
import { Context } from '../../store/contexts/contextProvider';
import ButtonComponent from '../buttonComponent';
import InputComponent from '../input_component';
import { actions } from '../../store/reducers/userReducer';


function FormComponent() {
  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState(state.user.name)

  const [lastName, setLastName] = useState(state.user.lastName)

  const [age, setAge] = useState(state.user.age)


  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleAge(e: ChangeEvent<HTMLInputElement>) {
    setAge(parseInt(e.target.value));
  }
  function handleSobreName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleSave() {
    dispatch({
      type: actions.CHANGE_NAME,
      payload: {
        name
      }
    });
    dispatch({
      type: actions.CHANGE_LASTNAME,
      payload: {
        lastName
      }
    });
    dispatch({
      type: actions.CHANGE_AGE,
      payload: {
        age
      }
    });


    setAge(0);
    setLastName('')
    setName('')

  }

  return (
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
        valueState={lastName}
      />

      <InputComponent
        type='text'
        placeHolder='Digite sua idade'
        onHandle={handleAge}
        valueState={age}
      />

      <ButtonComponent handleTap={handleSave} />
    </>
  );
}



export default FormComponent;