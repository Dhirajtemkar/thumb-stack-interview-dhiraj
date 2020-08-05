import React, { useContext } from 'react'
import './ListProb.css'
import {useDrop} from 'react-dnd';
import { ItemTypes } from '../utils/items';
import { CardContext } from './ListProb';
import List from './List';

function ListB(props) {
    const { transferList } = useContext(CardContext);


    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => transferList(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })

    // [isOver] ? alert("working") : alert("Not working") 

    return (
        <div>
            <div ref={drop}>
                <List message={props.message} handleDelete={props.handleDelete} />
            </div>
        </div>
    )
}

export default ListB;
