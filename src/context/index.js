import React from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const { getItem, setItem } = useAsyncStorage("@moviemingle:favorites");

async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    return data;
}

export const FavoritesContext = React.createContext({});

export async function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = React.useState([]);
    const [details, setDetails] = React.useState({});

    // add an movie on favorites list
    const onSaveFavorite = React.useCallback(async ({ newMovie }) => {

        // save on Local Storage
        const saved = await saveFavoriteOnStorage(newMovie);

        const filtered = data.filter(item => item.idLocal !== newMovie.idLocal);

        setFavorites([...filtered, saved]);

    }, []);

    // to set details of an especific movie on Details Screen
    const onSaveDetails = React.useCallback(({ detailsMovie }) => {
        setDetails(detailsMovie);
    }, []);

    // to remove an movie on Favorits List
    const onRemoveFavorite = React.useCallback(async ({ id, list }) => {
        if (!favorites) {
            const data = await handleFetchData();
            if (data) {
                await removeFavoriteOnStorage(id);
            }
        }

    }, []);

    return (
        <FavoritesContext.Provider
            value={{ favorites, onSaveFavorite, details, onSaveDetails, onRemoveFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

async function saveFavoriteOnStorage(movie) {
    const id = uuid.v4();
    try {
        //get data in Async Storage
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        //filter if has the movie in storage
        const filteredData = previousData.filter(item => item.idLocal !== movie.idLocal);

        const data = [...filteredData, { id, ...movie }];
        movieSaved = { id, ...movie };
        // save Data in Async Storage
        await setItem(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }

    return { id, ...movie };
}

async function removeFavoriteOnStorage(id) {
    try {
        //get data in Async Storage
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        //filter if has the movie in storage
        const filteredData = previousData.filter(item => item.id !== id);

        const data = [...filteredData];

        // save Data in Async Storage
        await setItem(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}
