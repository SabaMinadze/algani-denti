"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css'

const containerStyle = {
    width: "800px",
    height: '400px'
};

const center = {
    lat: 41.72324171943729,
    lng: 44.773137968025225
};

const Map: React.FC = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined');
    }

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        if (typeof window !== 'undefined') {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map);
        }
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    return isLoaded ? (
        <div className={styles.map}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
            </div>
    ) : (
        <div>Loading...</div>
    );
}

export default Map;

