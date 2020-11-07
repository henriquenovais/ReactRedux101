import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
            return <div key={item.title}>
                


            </div>
        })

    }
    return (
    <h1>{items.length}</h1>
    );
}

export default Accordion;