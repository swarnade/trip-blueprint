import React, { useState } from 'react';
import CollapsibleItem from './CollapsibleItem';

const Collapsible = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <CollapsibleItem
          key={index}
          isOpen={openIndex === index}
          day={item.day}
          title={item.title}
          description={item.description}
          content={item.content}
          location={item.locations}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Collapsible;
