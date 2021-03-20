const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "test",
      },
    };
  }

  return {
    env: {
      mongodb_username: "mario",
    },
  };
};
