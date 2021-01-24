
import React, { useState } from 'react';  // add the 'useState hook' at the top of the component

// pass in items and then map over 3 items in array
const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);


    //helper function added, must add arrow function so component is not run instantly and not on click
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };


    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.title}>
            <div 
            className={`title ${active}`} onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
            <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });


return <div className="ui styled accordion">
    {renderedItems}
</div> ;
};

export default Accordion;