import './index.css'

const ButtonComponent = props => {
  const {details, clickButton, isActive} = props
  const {id, buttonText} = details

  const activeButton = isActive ? 'button active' : 'button'

  const onClickButton = () => {
    clickButton(id)
  }

  return (
    <li className="list-container">
      <button onClick={onClickButton} type="button" className={activeButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonComponent
