import * as C from './styles'
import { Item } from '../../Types/Item'
import { useState } from 'react'

//sempre colocar o tipo do que recebe de Props.
type Props = {
    item: Item;
    handleRemove: (id: number) => void;
}

export const ListItem = ({ item, handleRemove }: Props) => {

    //No item vai pegar a propriedade DONE da prop pra ver se ta feito ou nao
    const [isChecked, setIsChecked] = useState(item.done);


    return (
        <C.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => {
                setIsChecked(e.target.checked);
                item.done = e.target.checked;

            }} />
            <label>{item.name} - {item.done.toString()}</label>
            <button onClick={()=> handleRemove(item.id)}> Remover </button>
        </C.Container>
    )
}