import React from 'react';

const users = [
    {id: 1, name: 'AAAA'},
    {id: 2, name: 'SSSS'},
    {id: 3, name: 'DDDD'},
    {id: 4, name: 'FFFF'}
]

const UsersList = () => {

    const renderedUsers = users.map(({id, name}) => {
        return <li key={id}>{name}</li>
    })
    return (
        <ul>
            {renderedUsers}
        </ul>
    )
}

export default UsersList;