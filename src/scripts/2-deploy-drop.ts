import { AddressZero } from "@ethersproject/constants";
import { read, readFileSync } from "fs";

import sdk from "./1-initialize-sdk";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "FooBar Collective",
      description: "A DAO for Testing",
      image: readFileSync("src/scripts/assets/test.png"),
      primary_sale_recipient: AddressZero,
    });

    const editionDrop = sdk.getContract(editionDropAddress, "edition-drop");
    const metadata = await (await editionDrop).metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
