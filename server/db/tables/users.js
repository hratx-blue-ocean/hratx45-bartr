const pool = require("../postgres");

// --------------------------------------------------------------------------------------------------

/* Add new user */
const addNewUser = user => {
  let sql = `INSERT INTO users (username, email, password, first_name, last_name, phone_number, 
        age, state, address, city, zip_code, latitude, longitude) VALUES ('${user.username}', '${user.email}', 
        '${user.password}', '${user.first_name}', '${user.last_name}', '${user.phone_number}',
         '${user.age}', '${user.state}', '${user.address}', '${user.city}', '${user.zip_code}',
         '${user.latitude}', '${user.longitude}')`;
  return pool.query({ text: sql });
};

/* Returns hash by username */
const getHashByUsername = username => {
  return pool.query({
    text: `SELECT password FROM users WHERE username=${username}`
  });
};

/* Returns user data by id */
const getUserDataById = userId => {
  let sql = `SELECT users.user_id, username, email, first_name, last_name, phone_number,
  age, profile_photo_id, state, address, city, zip_code, latitude, longitude, photo_id, image 
  FROM users INNER JOIN profile_photos ON users.profile_photo_id = profile_photos.photo_id WHERE users.user_id=${userId}`;
  return pool.query({ text: sql });
};

/* Returns user data by username*/
const getUserDataByUsername = userName => {
  let sql = `SELECT users.user_id, username, email, first_name, last_name, phone_number,
  age, profile_photo_id, state, address, city, zip_code, latitude, longitude, photo_id, image 
  FROM users INNER JOIN profile_photos ON users.profile_photo_id = profile_photos.photo_id WHERE users.username='${userName}'`;
  return pool.query({ text: sql });
};

/* Returns username by id */
const getUsernameById = userId => {
  return pool.query({
    text: `SELECT username FROM users WHERE user_id=${userId}`
  });
};

const getUsernamesByIdList = idList => {
  if (idList.length === 0) return Promise.resolve({ rows: [] });
  return pool.query({
    text: `SELECT user_id, username FROM users WHERE user_id IN (${idList.join(
      ", "
    )})`
  });
};

module.exports = {
  addNewUser,
  getHashByUsername,
  getUserDataById,
  getUserDataByUsername,
  getUsernameById,
  getUsernamesByIdList
};
