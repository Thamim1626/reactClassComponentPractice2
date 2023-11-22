import './index.css'

const TodoItem = props => {
  const {todosLists, todelte} = props
  const {id} = todosLists
  const delFun = () => {
    todelte(id)
  }

  return (
    <li className="card">
      <p className="card-heading">{todosLists.title}</p>
      <button type="button" onClick={delFun} className="button">
        delete
      </button>
    </li>
  )
}

export default TodoItem
