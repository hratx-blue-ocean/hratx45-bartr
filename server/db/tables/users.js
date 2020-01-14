const pool = require("../postgres");

const addNewUser = user => {
  let sql = `INSERT INTO users (email, password, first_name, last_name, phone_number, 
        age, state, address, city, zip_code, latitude, longitude) VALUES ('${user.email}', 
        '${user.password}', '${user.first_name}', '${user.last_name}', '${user.phone_number}',
         '${user.age}', '${user.state}', '${user.address}', '${user.city}', '${user.zip_code}',
         '${user.latitude}', '${user.longitude}')`;
  return pool.query({ text: sql });
};

const getHashByUsername = username => {
  return pool.query({
    text: `SELECT password FROM users WHERE username=${username}`
  });
};

const getUserDataById = userId => {
  let sql = `SELECT email, first_name, last_name, phone_number, 
  age, state, address, city, zip_code, latitude, longitude FROM users WHERE id=${userId}`;
  return pool.query({ text: sql });
};

module.exports = { addNewUser, getHashByUsername, getUserDataById };
