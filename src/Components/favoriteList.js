import { styled } from '@mui/material/styles';
import FavCountry from './favCountry';
import { Box, Stack } from '@mui/material/';
import { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDrop } from 'react-dnd';

const FavList = styled('div')({
    backgroundColor: 'white',
    width: '24%',
    height: '100vh',
    borderRadius: '4px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',

    '@media (max-width: 1000px)': {
        display: 'none',
    },
});


const FavListTitle = styled('div')({
    fontSize: '20px',
    fontWeight: '800',
    marginLeft: '27px',
    marginTop: '16px',
    marginBottom: '26px'
});

// const ListRender = ({ list, onDragEnd }) => (
//     <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="droppable">
//             {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps}>
//                     {list.map((item, index) => (
//                         <Draggable
//                             key={item.id}
//                             index={index}
//                             draggableId={item.id}
//                         >
//                             {(provided, snapshot) => (
//                                 <div
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                 >
//                                     <FavCountry country={item.c} />
//                                 </div>
//                             )}
//                         </Draggable>
//                     ))}
//                 </div>
//             )}
//         </Droppable>
//     </DragDropContext>
// );

const INITIAL_LIST = [
    {
        c: 'brazil',
        id: '1'
    },
    {
        c: 'jordan',
        id: '2'
    }
]

function FavoriteList({ onCardDropped , favoriteCountries , handleRemoveFav}) {
    // const [list, setList] = useState(INITIAL_LIST);

    // const handleDragEnd = ({ destination, source }) => {
    //     console.log('dragged end')

    // };

    // console.log(favoriteCountries)
    const [{ isOver }, drop] = useDrop({
        accept: 'CARD',
        drop: (item) => {onCardDropped(item.Country)},
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });

    //   onCardDropped(item.name)

    return (
        <FavList ref={drop} style={{ backgroundColor: isOver ? 'lightgray' : 'white' }}>
            <FavListTitle>Favourites</FavListTitle>
            <Box sx={{
                pl: 3,
                pr: 3,
            }}>
                <Stack direction={'column'} spacing={2}>
                    {favoriteCountries.map((favCountry)=>
                        <FavCountry favCountry={favCountry} handleRemoveFav={handleRemoveFav}/>
                    )}
                    {/* <FavCountry />
                    <FavCountry /> */}
                    {/* <ListRender list={list} onDragEnd={handleDragEnd} /> */}
                </Stack>
            </Box>
        </FavList>
    );
}

export default FavoriteList;