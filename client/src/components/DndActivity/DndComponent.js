import React, {useState, useRef} from 'react'

const DndComponent = ({data}) => {

    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (event, params) => {
        dragItem.current = params;
        dragNode.current = event.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=> {
            setDragging(true);
        }, 0)
    };

    const handleDragEnter = (event, params) => {
        const currentItem = dragItem.current;
        if (event.target !== dragNode.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.groupIndex]
                    .items
                    .splice(
                        params.itemIndex[0],
                        0,
                        newList[currentItem.groupIndex]
                            .items
                            .splice(currentItem.itemIndex, 1) 
                                [0]) 
                dragItem.current = params;
                return newList;
            })
        }
    };

    const handleDragEnd = (event) => {
        event.preventDefault();
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }

    // change style of item being dragged while it is being dragged
    const getStyles = (groupIndex, itemIndex) => { 
        const columnStyle = list[groupIndex].style;
        const currentItem = dragItem.current;
        if (currentItem.groupIndex === groupIndex && currentItem.itemIndex === itemIndex) { 
            return `current ${columnStyle}`
        };
        return `${columnStyle}`;
    }

    const columnStyling = (groupIndex) => {
        const columnStyle = list[groupIndex].style;
        return columnStyle;
    }


    return (
        <div>
            <div className='drag-n-drop'>
                {list.map((group, groupIndex)=> (
                    <div 
                        key={group.title}
                        className='dnd-group'
                        onDragEnter={dragging && !group.items.length ? (event)=> handleDragEnter(event, {groupIndex, itemIndex:0}) : null}
                    >
                    <h3 className='group-title'>{group.title}</h3>
                        {group.items.map((item, itemIndex)=> (
                            <div 
                                draggable
                                onDragStart={(event)=> {handleDragStart(event, {groupIndex, itemIndex})}}
                                onDragEnter={dragging ? (event) => {handleDragEnter(event, {groupIndex, itemIndex})} : null}
                                key={item}
                                className={dragging ? getStyles(groupIndex, itemIndex) : columnStyling(groupIndex)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DndComponent;