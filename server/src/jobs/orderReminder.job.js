const cron = require("node-cron");
const { logInfo } = require("../utils/logger");

const startOrderReminderJob = () => {
  cron.schedule("0 10 * * *", () => {
    logInfo("Order reminder job executed");
  });
};

module.exports = {
  startOrderReminderJob,
};
