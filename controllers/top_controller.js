var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('lista-top',{created:false});
}

exports.getRankingPersonajes = function(req,res){
    const Op = Sequelize.Op;
    models.Comidas.findAll({
        attributes: ['lugar', [Sequelize.fn('count', Sequelize.col('Comidas.lugar')), 'numero']],
        group:['Comidas.lugar'],
        where: {
            $and: [
                Sequelize.where(
                    Sequelize.fn('DATE', Sequelize.col('comidas.createdAt')),
                    Sequelize.literal('CURRENT_DATE')
                )
            ]
        }
    }).then(function (comidas) {
        res.json(comidas);
    });

}
