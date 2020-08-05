import React from 'react'
import './Snakes.css'
import Square from '../Tic-tac-toe/Square'

function Snakes() {
    // const [newArr, setNewArr] = useState(Array.from(Array(10).keys()));
    const newArr = Array.from(Array(10).keys());

    return (
        <div className="Snakes__main">
            <div className="Sankes__row">
                {newArr.slice(0).reverse().map((arr)=>{
                    return <Square key={newArr[arr]+91} value={newArr[arr]+91} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.map((arr)=>{
                    return <Square key={newArr[arr]+81} value={newArr[arr]+81} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.slice(0).reverse().map((arr)=>{
                    return <Square  key={newArr[arr]+71} value={newArr[arr]+71} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.map((arr)=>{
                    return <Square  key={newArr[arr]+61} value={newArr[arr]+61} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.slice(0).reverse().map((arr)=>{
                    return <Square  key={newArr[arr]+51} value={newArr[arr]+51} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.map((arr)=>{
                    return <Square  key={newArr[arr]+41} value={newArr[arr]+41} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.slice(0).reverse().map((arr)=>{
                    return <Square  key={newArr[arr]+31} value={newArr[arr]+31} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.map((arr)=>{
                    return <Square  key={newArr[arr]+21} value={newArr[arr]+21} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.slice(0).reverse().map((arr)=>{
                    return <Square key={newArr[arr]+11} value={newArr[arr]+11} />
                })}
            </div>
            <div className="Sankes__row">
                {newArr.map((arr)=>{
                    return <Square key={newArr[arr]+1} value={newArr[arr]+1} />
                })}
            </div>
        </div>
    )
}

export default Snakes
