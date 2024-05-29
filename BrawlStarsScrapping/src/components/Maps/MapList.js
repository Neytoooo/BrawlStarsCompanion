// src/components/Maps/MapList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';

const fetchMaps = async () => {
    const BASE_URL = 'https://api.brawlapi.com/v1';
    try {
        const response = await fetch(`${BASE_URL}/maps`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching maps:', error);
        throw error;
    }
};

const MapList = () => {
    const [maps, setMaps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMaps = async () => {
            try {
                const mapsData = await fetchMaps();
                setMaps(mapsData.list); // Correct usage based on the provided API response structure
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getMaps();
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.error}>
                <Text>Error fetching maps: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={maps}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MapList;
