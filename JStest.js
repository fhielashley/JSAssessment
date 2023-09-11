const NFTs=[]


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


function listNFTs () {
 for(let i=0; i < NFTs.length; i++){
    console.log("\nID:  "+ (i+1))
    console.log("Name:  "+ NFTs[i].name);
    console.log("Shirt: " + NFTs[i].Shirt);
    console.log("Pants: " + NFTs[i].Pants);
    console.log("Shoes: " + NFTs[i].Shoes);
 }
}


function getTotalSupply() {
console.log(NFTs.length);
}


mintNFT("Fhiel","CDG","Chrome Heart","Travis Low");
mintNFT("Nichole","Adidas","Levis","Paris Dunks");
mintNFT("Ashley","Nike","Guess","Freddy Krugers");
listNFTs();
getTotalSupply();
