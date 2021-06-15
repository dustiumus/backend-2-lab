const houses = require('./db.json');

let id = 4;

module.exports = {

    getHouses: function(req, res) {
        res.status(200).send(houses);
    },

    createHouse: function(req, res) {
        const { address, price, imageURL } = req.body;

        const newHouse = { 
            id, address, price, imageURL
        }
        houses.push(newHouse);
        id++;
        res.status(200).send(houses);
    },

    updateHouse: function(req, res) {
        let existingHouse = req.params.houseId;
        let newHouseName = req.body.type;
        const tgtIndex = houses.findIndex(function(existingHouse){
            return existingHouse.id === +req.params.houseId;
        });
            houses.get(tgtIndex, 1);
            res.status(200).send(houses);

        


    },

    deleteHouse: function(req, res) {
        const tgtIndex = houses.findIndex(function(houseObj){
            return houseObj.id === +req.params.houseId;});

           houses.splice(tgtIndex, 1)
           res.status(200).send(houses);
        }


}

