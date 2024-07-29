import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';
import Collapsible from './Collapsible';
export default function Plans(props) {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_GEMINI);
  const place=props.place;
  const [out, setOut] = useState([]);

  const data = async () => {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const jsonnn = '```json';
    const prompt = `Make a ${props.date} Days & ${props.person} Person Tour Plan For ${props.place}  In Format "[{
      "day": "",
      "title": "",
      "description": "",
      "locations": [
        {
          "name": "",
          "type": "",
          "description": "",
          "time": ""
        }
      ],
      "notes": ""
    }] " Format Such That It Directly Compatible In Map Function Of JS And Only Directly The Json Only & And Make Sure Not To Print "${jsonnn}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); // Corrected await
    const data = eval(text);
    setOut(data);
    console.log('Hello');
    console.log(data);
  };

  useEffect(() => {
    data(); // Called with initialized state value
  }, []); // Empty dependency array to run only once

  return (
    // <div>
    //   <h1>Input: {props.date}</h1>
    //   <div>
    //     {out.map((item, index) => (
    //       <div key={index}>
    //         <h2>{item.day}</h2>
    //         <p>{item.title}</p>
    //         <p>{item.description}</p>
    //         <ul>
    //           {item.locations.map((location, locIndex) => (
    //             <li key={locIndex}>
    //               {location.name} - {location.type} - {location.description} - {location.time}
    //             </li>
    //           ))}
    //         </ul>
    //         <p>{item.notes}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
<div className="p-6">
      <Collapsible items={out} />
    </div>
    </>
  );
}
