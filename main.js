const fs = require("fs");

const file = "employee.json";
const charset = "utf8";

/**
 * employees.json file create and write.
 * @param  {File} file
 * @param  {Object} data
 * @param  {String} charset
 */

function create(file, data, charset) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, charset, (err) => {
      reject(err);
    });
    resolve(true);
  });
}

function read(file, charset) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, charset, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}

function update(file, charset, appendData) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, appendData, charset, (err) => {
      if (err) reject(err);
    });
    resolve(true);
  });
}

function removeFile(file) {
  return new Promise((resolve, reject) => {
    fs.unlink(file, (err) => {
      if (err) console.log(err);
    });
    resolve(true);
  });
}

// Aduket time :) Kısa ama olsun.
create(file, JSON.stringify({ name: "Employee 1 Name", salary: 2000 }), charset)
  .then(() => {
    read(file, charset)
      .then(() => {
        update(file, charset, "öylesine append")
          .then(() => {
            let i = 10;
            let geriSayim = setInterval(() => {
              console.log(`Son ${i} saniye sonra sileceğim dosyanı.`);
              if (i == 0) {
                removeFile(file)
                  .then(() => {
                    console.log("Sildim dosyanı.");
                    clearInterval(geriSayim);
                  })
                  .catch((err) => {
                    throw err;
                  });
              } else {
                i--;
              }
            }, 1000);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  })
  .catch((err) => {
    throw err;
  });
