"use client"

import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const Map: React.FC = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined');
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    // Your component logic here

    return (
        <div>
            {isLoaded ? (
                // Your map component
                <div id="map"></div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Map