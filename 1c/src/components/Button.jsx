export const Button = ({ onclick, children, bgcolor, textcolor, hover = '' }) => {
  return (
    <button
      className={`${bgcolor} px-4 py-2 ${textcolor} py-2 px-5 rounded hover:${hover}`}
      onClick={onclick}
    >
      {children}
    </button>
  )
}
