import React, { useEffect, useState } from 'react';

export default function History(props) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('history'));
        setHistory(data);
        console.log(history);
    }, []); 

    return (
        <>
        </>
    );
}
