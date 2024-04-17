import React from 'react'
import './userData.css'

export default function UserData({users}) {
  
  return (
   
        <tbody>
     {
        
        users.map((curUsers) => {
            const {id, firstName, lastName} = curUsers;

          return(
            <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
            </tr>
          )

        })
     }
     </tbody>
    
  )
}
