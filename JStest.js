

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
    console.log("\nID:  "+ (i+1))
    console.log("Name:  "+ NFTs[i].name);
    console.log("Shirt: " + NFTs[i].Shirt);
    console.log("Pants: " + NFTs[i].Pants);
    console.log("Shoes: " + NFTs[i].Shoes);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Fhiel","CDG","Chrome Heart","Travis Low");
mintNFT("Nichole","Adidas","Levis","Paris Dunks");
mintNFT("Ashley","Nike","Guess","Freddy Krugers");
listNFTs();
getTotalSupply();
