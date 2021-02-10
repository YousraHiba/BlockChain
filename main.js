const SHA256 = require ("crypto-js/sha256");
class Block {
    constructor (index ,dateUpload, data, previousBlockHash=" "){
        this.index = index; // Indice du Bloc (0) pour le premier Bloc
        this.dateUpload = dateUpload; //Date du chargement du bloc
        this.data = data;   // informations contenues dans le bloc
        this.previousBlockHash = previousBlockHash; // code hashé du bloc prédécesseur
        this.hash = this.calculateHash(); // code hashé du bloc crrer avec la fonction calculateHash()
    }

    calculateHash(){

        return SHA256(this.index + this.previousBlockHash + this.dateUpload + JSON.stringify(this.data)).toString(); // Fonction existante dans la bilibiotheque crypto-js
    }

}

class BlockChain {
    constructor() {
        this.chain = [this.createFirstBlock()];   // création d'une chaine qui va contenir tous les blocs
        
    }
    createFirstBlock(){
        return new Block (0, "01/01/2021","Block informatinos" ,"0"); // Creation du premier Bloc  avec le constructeur Block avec un indice = 0
    }
    getPreviousBlock(){
        return this.chain[this.chain.length -1];  // fonction de recuperation du Bloc prédécesseur
    }
    addBlock(newBlock){ // Methode pour ajoutter de nouveaux Blocs
        newBlock.previousBlockHash = this.getPreviousBlock().hash; //Recuperation du code hash du bloc c
        newBlock.hash = newBlock.calculateHash();    // Calculer de code hash du Bloc courant
        this.chain.push(newBlock); // Ajouter les informations du bloc 
      
    }

}

let BlockCreation = new BlockChain();
BlockCreation.addBlock(new Block ( 1, "01/02/2021" , "Block informations 1" ));
BlockCreation.addBlock(new Block ( 2, "01/03/2021" , "Block informations 2" ));
BlockCreation.addBlock(new Block ( 3, "01/04/2021" , "Block informations 3" ));
BlockCreation.addBlock(new Block ( 4, "01/05/2021" , "Block informations 4" ));
BlockCreation.addBlock(new Block ( 5, "01/06/2021" , "Block informations 5" ));
BlockCreation.addBlock(new Block ( 6, "01/07/2021" , "Block informations 6" ));
BlockCreation.addBlock(new Block ( 7, "01/08/2021" , "Block informations 7" ));
BlockCreation.addBlock(new Block ( 8, "01/09/2021" , "Block informations 8" ));
BlockCreation.addBlock(new Block ( 9, "01/10/2021" , "Block informations 9" ));
BlockCreation.addBlock(new Block ( 10, "01/11/2021" , "Block informations 10" ));
BlockCreation.addBlock(new Block ( 11, "01/12/2021" , "Block informations 11" ));
BlockCreation.addBlock(new Block ( 12, "01/01/2022" , "Block informations 12" ));



console.log (JSON.stringify(BlockCreation,null,5)); // affichage des blocs en convertisant les valeurs en chaîne JSON

