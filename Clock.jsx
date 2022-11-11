import React, {useEffect, useState} from 'react';

const Clock = () => {

    const Start = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Engelhard',
        apellidos: 'Pacheco'
    }

    const [User, setUser] = useState(Start);

    const actualiceUser = () =>{
        return setUser({
            fecha: User.fecha,
            edad: User.edad+1,
            nombre:User.nombre,
            apellidos: User.apellidos,
        })
    }

    useEffect(() => {
        const AgeChangeRate = setInterval(() => {
            actualiceUser();
        }, 1000);
        return () => {
            clearInterval(AgeChangeRate)
        };
    });

    return (
        <div>
            <h2>
            Fecha Actual:
                {User.fecha.toLocaleDateString()}
            </h2>
            <h3>
                {User.nombre} {User.apellidos}
            </h3>
            <h3>Edad: {User.edad}</h3>
        </div>
    );
};

export default Clock;
