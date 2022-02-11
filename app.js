const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => profileDataArr.forEach((item) => console.log(item));

printProfileData(profileDataArgs);