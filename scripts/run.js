const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT();
    // Wait for it to be mined.
    await txn.wait();

    txn = await nftContract.makeAnEpicNFT();
    // Wait for it to be mined.
    await txn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
