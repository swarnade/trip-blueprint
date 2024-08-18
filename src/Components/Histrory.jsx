import React, { useEffect, useState } from 'react'

export default function Histrory(props) {

    useEffect(() => {
        const data = [{
            Place: props.place,
            date: props.date,
            Person: props.person
        }]
        var history = localStorage.getItem('history')
        if (history) {
            var history_json = JSON.parse(history)
            history_json.push(data)
            localStorage.setItem('history', JSON.stringify(history_json))
        }
        else {
            localStorage.setItem('history', JSON.stringify(data))
        }

        console.log(history_json)
    }, [])
    return (
        <>
        </>
    )
}
