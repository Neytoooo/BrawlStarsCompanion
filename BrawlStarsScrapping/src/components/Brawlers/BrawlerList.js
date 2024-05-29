// src/components/Brawlers/BrawlerList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { fetchBrawlers } from '../../api/brawlAPI';

const BrawlerList = () => {
    const [brawlers, setBrawlers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBrawlers = async () => {
            try {
                const brawlersData = await fetchBrawlers();
                setBrawlers(brawlersData.list); // Correct usage based on the provided API response structure
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getBrawlers();
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
                <Text>Error fetching brawlers: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={brawlers}
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
        backgroundColor: '#0C5FB0',
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
    },
});

export default BrawlerList;
