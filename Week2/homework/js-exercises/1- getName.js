// create function to get a name
const getAnonName = (firstName) => {
  // create a promise
  return (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!firstName) {
          reject(new Error("You didn't pass in a first name!"));
        } else {
          const fullName = `${firstName} Doe`;
          resolve(fullName);
        }
        // short code (short if statement) as a suggestion.
        // !firstName
        //   ? reject(new Error("You didn't pass in a first name!"))
        //   : resolve(`${firstName} Doe`);
      }, 500);
    })
      // get the data after 2 seconds if it is there.
      .then((name) => console.log(name))
      //if it is not send Error message
      .catch((error) => console.error(error))
  );
};
getAnonName('john');
