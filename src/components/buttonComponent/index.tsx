
type Props = {
  handleTap: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonComponent({ handleTap }: Props) {

  return (
    <button className='button' onClick={handleTap}> Fazer Login </button>
  );

}



export default ButtonComponent;