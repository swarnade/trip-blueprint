import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import Collapsible from "./Collapsible";
export default function Plans(props) {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_GEMINI);
  const place = props.place;
  const [out, setOut] = useState([]);
  const [loading, setLoading] = useState(true);
  const itinerarySchema = {
    type: "array",
    items: {
      type: "object",
      properties: {
        day: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        locations: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" },
              description: { type: "string" },
              time: { type: "string" },
            },
            required: ["name", "type", "description", "time"],
          },
        },
        notes: { type: "string" },
      },
      required: ["day", "title", "description", "locations", "notes"],
    },
  };

  useEffect(() => {
    const data = async () => {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash-lite",
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: itinerarySchema,
          },
        });

        const prompt = `
Create a detailed ${props.date}-day tour plan for ${props.person} person(s) visiting ${props.place}.
The plan should be realistic, well-paced, and suitable for tourists.
Include famous attractions, local experiences, and reasonable travel times.
`;

        const result = await model.generateContent(prompt);

        // 1️⃣ Get the raw text that contains JSON
        const rawText = result.response.candidates[0].content.parts[0].text;
        console.log(result.response.usageMetadata)
        // 2️⃣ Parse it safely
        const data = JSON.parse(rawText);

        // 3️⃣ Now data is an ARRAY → safe to map
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
    return (
      <>
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      </>
    );
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
