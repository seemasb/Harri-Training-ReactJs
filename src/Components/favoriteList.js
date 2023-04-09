import { styled } from '@mui/material/styles';
import FavCountry from './favCountry';
import { Box, Stack } from '@mui/material/';
import { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDrop } from 'react-dnd';
import { ThemeContext } from '../Themes/ThemeContext';
import { useContext } from 'react';

// const FavList = styled('div')({
//     backgroundColor: 'white',
//     width: '24%',
//     height: '100vh',
//     borderRadius: '4px',
//     boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',

//     '@media (max-width: 1000px)': {
//         display: 'none',
//     },
// });

const FavList = styled('div')`
    background-color:${(props) => props.theme.Lightbackground};
    color: ${(props) => props.theme.color};
    width: 24%;
    height: 100vh;
    border-radius: 4px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1000px) {
        display: none;
      }
   
`


const FavListTitle = styled('div')({
    fontSize: '20px',
    fontWeight: '800',
    marginLeft: '27px',
    marginTop: '16px',
    marginBottom: '26px'
});

function FavoriteList({ onCardDropped , favoriteCountries , removeFavCountry}) {

    const [{ isOver }, drop] = useDrop({
        accept: 'CARD',
        drop: (item) => {onCardDropped(item.Country)},
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });

      const theme = useContext(ThemeContext);

    return (
        <FavList ref={drop} style={{ backgroundColor: isOver ? 'gray' : theme.Lightbackground }} theme={theme}>
            <FavListTitle>Favourites</FavListTitle>
            <Box sx={{
                pl: 3,
                pr: 3,
            }}>
                <Stack direction={'column'} spacing={2}>
                    {favoriteCountries.map((favCountry)=>
                        <FavCountry favCountry={favCountry} removeFavCountry={removeFavCountry}/>
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