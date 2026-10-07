let mapToken = maptoken;
    const map = new mapboxgl.Map({
        accessToken: mapToken,
        container: 'map', 
        center: coordinate, 
        zoom: 10
    });

     const marker1 = new mapboxgl.Marker({color:'red'})
        .setLngLat(coordinate)
        .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h4>${title}</h4>
                <a href="/listings/${listingId}">View Listing</a>
            `)
    )
    .addTo(map);