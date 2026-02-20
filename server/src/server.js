const app = require("./app");
const env = require("./config/env");
const { sequelize } = require("./models");
const { startOrderReminderJob } = require("./jobs/orderReminder.job");
const { logError, logInfo } = require("./utils/logger");

const startServer = async () => {
  try {
    await sequelize.authenticate();
    logInfo("Database connected successfully");

    await sequelize.sync();
    logInfo("Database models synced");

    app.listen(env.port, () => {
      logInfo(`Server running on port ${env.port}`);
    });

    startOrderReminderJob();
  } catch (error) {
    logError(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
