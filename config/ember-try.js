"use strict";

const getChannelURL = require("ember-source-channel-url");

module.exports = async function () {
  return {
    scenarios: [
      {
        name: "ember-lts-3.24",
        npm: {
          devDependencies: {
            "ember-source": "~3.24.0",
          },
        },
        useYarn: true,
      },
      {
        name: "ember-release",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("release"),
          },
        },
        useYarn: true,
      },
    ],
  };
};
