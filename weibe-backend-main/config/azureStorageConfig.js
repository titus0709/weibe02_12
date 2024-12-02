const { BlobServiceClient } = require("@azure/storage-blob");

const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

const azureStore = async (blobName, data) => {
  try {
    const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    if (!accountName) throw Error("Azure Storage accountName not found");

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );

    const containerClient = blobServiceClient.getContainerClient("designs");

    //use filename as it is

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    //file
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(
      `Blob was uploaded successfully. requestId: ${uploadBlobResponse}`
    );
    return blockBlobClient.url;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

module.exports = { azureStore };
