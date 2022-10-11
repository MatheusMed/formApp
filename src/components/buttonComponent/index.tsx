
type Props = {
  handleTap: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonComponent({ handleTap }: Props) {

  return (
    <button className='button' onClick={handleTap}> Salvar Usuario </button>
  );

}



export default ButtonComponent;