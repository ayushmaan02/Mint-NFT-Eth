const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('HorseNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract Deployed to:", nftContract.address);
  
  //Calling the NFT Function
  let txn = await nftContract.makeAnHorseNFT()
  await txn.wait()
  console.log("Minted #1")
};


const runMain = async () => {
  try {
      await main();
      process.exit(0);
  } catch (error) {
      console.log(error);
      process.exit(1);
      
  }
};

runMain();