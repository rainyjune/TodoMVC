import { observer } from "mobx-react";

const TodoView = observer(({ todo } : { todo: any }) => (
  <li>
      <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
      {todo.title}
  </li>
))

export default TodoView;