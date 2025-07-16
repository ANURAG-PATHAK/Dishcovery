import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/12 * * * *", function () {
    https.get(process.env.API_URL + "/health", (res) => {
        if (res.statusCode === 200) {
            console.log("Health check successful:", res.statusCode);
        } else {
            console.error("Error in health check:", res.statusCode);
        }
    });
}); 

export default job;