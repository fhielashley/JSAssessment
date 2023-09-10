

// create a variable to hold your NFT's

const NFTs=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_shirt,_pants,_shoes) {
    const NFT= {
        "name": _name,
        "Shirt":_shirt,
        "Pants":_pants,
        "Shoes":_shoes

    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i=0; i < NFTs.length; i++){
    console.log("\nID: \t\t"+ (i+1))
    console.log("Name: \t\t"+ NFTs[i].name);
    console.log("Shirt: \t" + NFTs[i].shirt);
    console.log("Pants: " + NFTs[i].pants);
    console.log("Shoes: \t\t " + NFTs[i].shoes);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Fhiel","Blue","Hoodie","Gold Chain");
mintNFT("Nichole","Blue","Hoodie","Gold Chain");
mintNFT("Ashley","Blue","Hoodie","Gold Chain");
mintNFT("John","Blue","Hoodie","Gold Chain");
listNFTs();
getTotalSupply();
