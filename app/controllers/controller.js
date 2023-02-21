expost.create = (rep, res) => {
	res.send({message: "create handler"});
};

expost.findAll = (rep, res) => {
	res.send({message: "findAll handler"});
};

expost.findOne = (rep, res) => {
	res.send({message: "findOne handler"});
};

expost.update = (rep, res) => {
	res.send({message: "update handler"});
};

expost.delete = (rep, res) => {
	res.send({message: "delete handler"});
};

expost.deleteAll = (rep, res) => {
	res.send({message: "deleteAll handler"});
};

expost.findAllFavorite = (rep, res) => {
	res.send({message: "findAllFavorite handler"});
};
