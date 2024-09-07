export const Button = ({isClosed, content})=>{
  const typeButton = isClosed? "danger" : "success"
  const clases = ["btn", typeButton]
  const close = ()=>{
    window.close();
  }
  const success = ()=>{
    alert("Aceptado");
  }
  return (
    <button
      className={ clases.join(' ')}
      onClick={isClosed? close: success}
    >{content}</button>
  )
}