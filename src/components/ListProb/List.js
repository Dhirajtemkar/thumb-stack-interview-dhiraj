import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDrag} from 'react-dnd';
import { ItemTypes } from '../utils/items';

// import {DragSource} from 'react-dnd';

// const itemSource = {
//     beginDrag(props) {
//         return props.messages;
//     },
//     endDrag(props, monitor, component) {
//         props.handleDrop(props.messages.id)
//     }
// }
// function collect(connect, monitor) {
//     return {
//         connectDragSource: connect.dragSource(),
//         connectDragPreview: connect.dragPreview(),
//         isDragging: monitor.isDragging(),
//     }
// }
// const ListItems = props.messages.map((m) => {
//     return (
//     <div 
//     key={m.id} 
//     className="ListProb__list"
//     ref={drag}
//     >
//         <p>{m.message}</p>
//         <IconButton onClick={() => props.handleDelete(m.id)}>
//             <DeleteIcon />
//         </IconButton> 
//     </div>)
// })

function List(props) {
    const [{extraProps}, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.message.id,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            
        })
    })

    return (
        <div >
            <div 
            ref={drag}
            key={props.message.id} 
            className="ListProb__list"
            ref={drag}
            >
                <p>{props.message.message}</p>
                <IconButton onClick={() => props.handleDelete(props.message.id)}>
                    <DeleteIcon />
                </IconButton> 
            </div>      
        </div>
    )
}

// export default DragSource('card', itemSource, collect)(List);
export default List;