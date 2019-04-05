const axios = require('axios');

module.exports = async function(context, myTimer) {
  const res = await axios.post(
    `https://api.netlify.com/build_hooks/${process.env.netlifyBuildKey}`
  );
  console.log(res);
};
