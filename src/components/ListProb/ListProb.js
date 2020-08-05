import React, { useState, createContext } from 'react'
import './ListProb.css'
import {TextField, Button} from '@material-ui/core';
import List from './List';
import ListB from './ListB';
import { DndProvider } from 'react-dnd';
import { HTML5Backend }  from 'react-dnd-html5-backend';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export const CardContext = createContext({
    transferList: null
}) 


function ListProb() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {id: 0, message: "React.js"},
        {id: 1, message: "Angular.js"},
        {id: 2, message: "Vue.js"},
    ]);
    const [listBMessage, setlistBMessage] = useState([
        {id: 0, message: "React.js", enteredB: true},
    ]);

    const handleListMessage = (e) => {   
        e.preventDefault();
        setInput(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, {id:Date.now() , message:input}])
        setInput("")
        // console.log(messages)
    }
    const handleDelete = (id) => {
        const filteredItems = messages.filter(item => item.id!==id);
        setMessages(filteredItems);
    }
    const handleDeleteB = (id) => {
        const filteredItems = listBMessage.filter(item => item.id!==id);
        setlistBMessage(filteredItems);
    }

    const transferList = (id) => {
        const selectedList = messages.filter(item => item.id === id);
        setlistBMessage([...listBMessage, {id:selectedList.id, message: selectedList.message, enteredB:true}])
    }

    const onDragEnd = (result) => {
        const {destination, source, reason}= result;

        if(!destination || reason === 'CANCEL') {
            return;
        }
        if(destination.droppableId=== source.droppableId && destination.id===source.id){
            return;
        }

        const messageB= Object.assign([].listBMessage);
        const droppedMessage = listBMessage[source.id];
        messageB.splice(source.id, 1);
        messageB.splice(destination.id, 0,droppedMessage);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <CardContext.Provider value={{ transferList }}>
        <div className="ListProb">
            <form onSubmit={handleSubmit}>
                <TextField value={input} onChange={handleListMessage} label="Add item" />
                <Button onClick={handleSubmit} variant="contained">Add</Button>
            </form>
            <DndProvider backend={HTML5Backend}>    
                <div className="ListProb__A">
                    <h3>List-A</h3>
                    {
                        messages.map((message) =>{
                            return <List message={message} handleDelete={handleDelete} />
                        })
                    }
                </div>
                <div className="ListProb__B">
                    <h3>List-B</h3>
                    <Droppable droppableId='dp1' >    
                    {(provided)=> (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                        {
                            listBMessage.map((message) => {
                                return (
                                    // <Draggable
                                    // key={message.id}
                                    // draggableId={message.id + ''}
                                    // index={message.id}>
                                    // {
                                    //     (provided)=>(<div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                                    //                     <ListB message={message} handleList={transferList} handleDelete={handleDeleteB} />
                                    //                     {message.message}
                                                            // {provided.placeholder}

                                    //                 </div>)
                                    // }
                                    // <div>
                                        
                                    // </div>
                                    // </Draggable>
                                    <div>
                                    {
                                        <ListB message={message} handleList={transferList} handleDelete={handleDeleteB} />
                                    }
                                    </div>
                                    
                                    )
                            })
                            
                        }
                        {console.log(listBMessage)}
                        </div>)
                    }
                    </Droppable>
                </div>
            </DndProvider>
        </div>
        </CardContext.Provider>
        </DragDropContext>
    )
}

export default ListProb;