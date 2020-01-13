


let sql = `SELECT latitude, longitude, state
FROM users
WHERE ST_DWithin(geom, ST_MakePoint(-93.65931,37.90138), 10*1609, false);
`;
