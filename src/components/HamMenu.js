export default function HamMenu ({onClick,isOnTouch}){
  return(
    <>
      {isOnTouch ? (
        <div onClick={onClick} class="animated-icon3 open">
          <span></span><span></span><span></span>
        </div>
      ) : (
        <div onClick={onClick} class="animated-icon3">
          <span></span><span></span><span></span>
        </div>
      )}
    </>
  )
}