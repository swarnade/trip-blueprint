import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';
import Collapsible from './Collapsible';
export default function Plans(props) {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_GEMINI);
  const place = props.place;
  const [out, setOut] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const jsonnn = '```json';
        const prompt = `Create a detailed ${props.date}-day tour plan for ${props.person} person(s) visiting ${props.place}. The plan should be structured in the following raw JSON format, suitable for direct use with JavaScript's map function:

        [
          {
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
          }
        ]
        
        Important Notes:
        1. Ensure the JSON is valid and does not include any additional formatting such as \`\`\`json or any other code block markers.
        2. The output should only contain the raw JSON content.
        3. Maintain a consistent structure across all days with realistic and concise descriptions.
        4. Avoid adding any extraneous text or comments outside the JSON object.`
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        const data = JSON.parse(text);
        setOut(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);


  if (loading) {
    return <>
    <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
    </div>

    </>
  }
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
