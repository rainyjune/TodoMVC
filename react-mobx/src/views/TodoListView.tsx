import { observer } from "mobx-react";
import TodoView from "./TodoView";

const TodoListView = observer(({ todoList } : { todoList: any }) => (
  <div>
      <ul>
          {todoList.todos.map((todo: any) => (
              <TodoView todo={todo} key={todo.id} />
          ))}
      </ul>
      Tasks left: {todoList.unfinishedTodoCount}
  </div>
))

export default TodoListView;