/* 
This file is mainly for parsing data when stream goes from client to server. 
If not present the body would be undefined. With express this is included, but with
vanilla Node we have to handle it.
*/
module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
