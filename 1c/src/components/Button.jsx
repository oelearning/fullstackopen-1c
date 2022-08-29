export const Button = ({ onclick, children, bgcolor, textcolor, hover = '', width = '' }) => {
  return (
    <button
      className={`${bgcolor} px-4 py-2 ${textcolor} py-2 px-5 rounded 
      hover:${hover} ${width}`}
      onClick={onclick}
    >
      {children}
    </button>
  )
}
