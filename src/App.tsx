import { useState, useEffect } from 'react'
import { Item } from './Types/Item'
import * as C from './App.styles';
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar cafe', done: true },
    { id: 2, name: 'Comprar um bolo na padaria', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);

  };

  const handleRemove = (id: number) => {
    setList(list.filter((todo) => todo.id !== id));
  };



  return (

    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} handleRemove={handleRemove}  />
        ))}

      </C.Area>
    </C.Container>

  )
}

export default App;

/* 
Como estamos dentro do COMPONENTE colocando os dados, teremos que criar uma funcao para que no ADDAREA receba o ITEM para colocar na lsita
visto que a lista esta do lado de fora
*/