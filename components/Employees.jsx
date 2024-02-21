import React from 'react'
import Adem from '../assets/adem.jpg'
import Hafe from '../assets/hafe.jpg'
import Ado from '../assets/ado.jpg'
import Elvir from '../assets/elvir.jpg'
let employees = [{
    name:"Elvir Agic",
    position:"CEO",
    img:Elvir.src
    
},
{
    name:"Adem Drpić ",
    position:"Costumer",
    img:Adem.src
},
{
 name:"Adnan Galijašević",
 position:"System administrator",
 img:Ado.src
},
{
    name:"Abdullah Mrkonjić",
    position:"Computer Tehnician",
    img:Hafe.src

}]
const Employees = () => {
  return (
    <div className="employees-container">
    <h1 className="emp-h1">Employees</h1>
    <div className="employees" >
        {
            employees.map(em=>{
                return <div>
                    <img src={em.img} />
                    <h2>{em.name}</h2>
                    <h3>{em.position}</h3>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default Employees