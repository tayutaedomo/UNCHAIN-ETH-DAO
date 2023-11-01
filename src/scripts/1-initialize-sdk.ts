import nextEnv from "@next/env";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const { loadEnvConfig } = nextEnv;
const { PRIVATE_KEY, CLIENT_ID, SECRET_KEY } = loadEnvConfig(
  process.cwd()
).combinedEnv;

if (!PRIVATE_KEY || PRIVATE_KEY === "") {
  throw new Error("PRIVATE_KEY not found.");
}

if (!CLIENT_ID || CLIENT_ID === "") {
  throw new Error("CLIENT_ID not found.");
}

if (!SECRET_KEY || SECRET_KEY === "") {
  throw new Error("SECRET_KEY not found.");
}

const sdk = ThirdwebSDK.fromPrivateKey(PRIVATE_KEY!, "sepolia", {
  clientId: CLIENT_ID,
  secretKey: SECRET_KEY,
});

(async () => {
  try {
    if (!sdk || !("getSigner" in sdk)) return;
    const address = await sdk.getSigner()?.getAddress();
    console.log("SDK initialized by address:", address);
  } catch (error) {
    console.error("Failed to get apps from the sdk", error);
    process.exit(1);
  }
})();

export default sdk;
