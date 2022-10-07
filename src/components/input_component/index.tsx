import './styles.css';

type Props = {
  type?: string;
  placeHolder?: string;
  onHandle?: React.ChangeEventHandler<HTMLInputElement>;
  valueState?: string;
}


function InputComponent({ type, placeHolder, onHandle, valueState }: Props) {
  return (<input data-testid="input" type={type} placeholder={placeHolder} className='input' value={valueState} onChange={onHandle} />);

}


export default InputComponent;