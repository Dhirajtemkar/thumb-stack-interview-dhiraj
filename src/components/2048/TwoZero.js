import React, {useState} from 'react'
import Square from '../Tic-tac-toe/Square'
import './TwoZero.css'

function TwoZero() {
    const arrCreate = () => {
        var b = Array(5)
        for(var i=0; i<b.length;i++){
            b[i] = [];
        }
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(i===0){
                    b[i][j] = i+j;
                }
                if(i===1){
                    b[i][j] = i+j+4;
                }
                if(i===2){
                    b[i][j] = i+j+8;
                }
                if(i===3){
                    b[i][j] = i+j+12;
                }
                if(i===4){
                    b[i][j] = i+j+17;
                }
            }
        }
        return b;
    }
    const renderBtn = (ele) =>{

        return ele;
    }

    const renderRow = (ele) => {
        if(ele[0]%5==0){
            return <div className="TwoZero__Ele">{ele.map((element) => 
                <Square onClick={renderBtn(ele)}/>
            )}</div>
        } else {
            return (<div className="TwoZero__Ele">
                {ele.map((element) => 
                    <Square  />
                )}
                </div>
            ) 
        }
    }

    return (
        <div className="TwoZero">
            <h1>2048</h1>
            <p>An attempt to make the 2048 game :)</p>
            {arrCreate().map(ele => 
                    renderRow(ele)
                )
            }
        </div>
    )
}

export default TwoZero
