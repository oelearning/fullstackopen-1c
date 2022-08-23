export const Button = ({ onclick, text, color }) => {
  return (
    <button className={`${color} px-4 py-2 text-white`} onClick={onclick}>{text}</button>
  )
}
