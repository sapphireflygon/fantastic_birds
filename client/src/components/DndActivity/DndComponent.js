import React, {useState, useRef} from 'react'

const DndComponent = ({data}) => {

    // in this example, data is array of GROUPS objects, which contain a TITLE attribute which is a str of the group number, and the ITEMS attribute, which is an array of strings in this case, but could be objects
    // groupIndex is the index of the GROUP object in the data array that we're hovering over
    // itemIndex is the index of the individual item we're currently dragging over in the ITEMS array, at the groupIndex GROUP object

    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef(); // create ref of specific node we're dragging

    const handleDragStart = (event, params) => {
        dragItem.current = params; // params = object groupIndex value, itemIndex value
        dragNode.current = event.target; // set dragNode to the node/item that we're dragging
        dragNode.current.addEventListener('dragend', handleDragEnd) // add event listener to the current node, can't just add 'onDragEnd=handleDragEnd' in the actual render the way we did for the drag start because can get unexpected behaviours
        setTimeout(()=> {
            setDragging(true);
        }, 0) // async --> once we start dragging, get the og style as the shadow-item floating around being dragged, then change the styling with the setDragging(true) line
    };

    // function to handle when the item is being dragged over other cards/items; want all items to have this event listener, will fire at same time as the handleDragStart function and then subsequently fire every time the dragged item moves over any other item that can accept it  --> gets the item we're dragging AND the item we're dragging over
    const handleDragEnter = (event, params) => {
        const currentItem = dragItem.current;
        if (event.target !== dragNode.current) { // checking if the item we're dragging is not the same as the item we're dragging over
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList)) // creates a DEEEEEP cloned copy of the oldList --> using [...oldList] would make a shallow copy of the list  
                newList[params.groupIndex] // in newList array, at index value of groupIndex...
                    .items  //get the items array at that groupIndex...
                    .splice(    // call splice to create a new array...
                        params.itemIndex[0],    // STARTING at index value of itemIndex we're hovering over...
                        0, // REMOVING zero elements in the array...
                    // number of elements TO ADD TO NEW ARRAY from newList array, beginning at index of the first argument in this splice call will be...
                        newList[currentItem.groupIndex] // in the newList array, which is a clone of our 'data' array, got to the index of the GROUP the current item is hovering over...
                            .items // access the ITEMS array of that GROUP...
                            .splice(currentItem.itemIndex, 1) // REMOVE ONE ITEM from the ITEMS array at the index of our currentItem
                                [0]) // --> splice method RETURNS A NEW ARRAY, so if take the item at index 0 from the newly created array, we'll be able to get the currentItem back
                dragItem.current = params;
                return newList;
            })
        }
    };

    const handleDragEnd = () => {
        setDragging(false); // change state to false to change the styling of the box back to original when dragging stops
        dragNode.current.removeEventListener('dragend', handleDragEnd) // remove event listener to make sure no weird behaviours as mentioned above
        dragItem.current = null; // remove current item from dragItem state
        dragNode.current = null; // remove current item from dragNode state MUST HAPPEN AFTER REMOVING EVENT LISTENER
    }

    // change style of item being dragged while it is being dragged
    const getStyles = (groupIndex, itemIndex) => { 
        const currentItem = dragItem.current; //gets the current item being grabbed/dragged
        if (currentItem.groupIndex === groupIndex && currentItem.itemIndex === itemIndex) { 
            return 'current dnd-item'
        };
        return 'dnd-item';

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
                    <h2 className='group-title'>Group Title</h2>
                        {group.items.map((item, itemIndex)=> (
                            <div 
                                draggable
                                onDragStart={(event)=> {handleDragStart(event, {groupIndex, itemIndex})}}
                                onDragEnter={dragging ? (event) => {handleDragEnter(event, {groupIndex, itemIndex})} : null}
                                key={item}
                                className={dragging ? getStyles(groupIndex, itemIndex) : 'dnd-item'}
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