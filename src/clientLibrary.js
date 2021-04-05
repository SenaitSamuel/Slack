// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials

// Creates a client from a Google service account key
const storage = new Storage({
  keyFilename: "slack-clone-58c27-firebase-adminsdk-8e4dn-95988a3838.json",
});

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// The ID of your GCS bucket
const bucketName = "STANDARD";

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

createBucket().catch(console.error);
