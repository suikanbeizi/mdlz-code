const express = require('express');
const router = express.Router();
const crypto = require('crypto');//加密
const User = require('../models/user.js');
// const client = require('../models/post.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{title: '数据展示'});

});

// router.get('/dealer', function( req, res, next){
//     var provinceName = [];
//     var  provinceSql ;
//     const sql = 'SELECT DISTINCT PROVINCE from acn_stores_pos ';
//     User.query(sql , function(data){
//
//         for( var i=0;i<data.length;i++){
//
//             provinceName.push(data[i].PROVINCE);
//         }
//         for(var j=0;j<provinceName.length;j++){
//             provinceSql += 'SELECT COUNT(*) as num ,"'+provinceName[j]+'" as province from acn_stores_pos WHERE PROVINCE="'+provinceName[j]+'" UNION ';
//         }
//         provinceSql = provinceSql.substring(9,provinceSql.length - 6);
//         User.query(provinceSql , function(numData){
//
//                 res.render('dealer',{title: '经销商',provinceData:numData});
//
//
//         });
//
//
//
//
//     });
// });

router.get('/dealer', function( req, res, next){

            res.render('dealer',{title: '经销商'});


});
router.post('/city',function(req, res, next){
     const sql = 'select * from acn_stores_pos where PROVINCE="'+req.body.province +'"';
    User.query(sql , function(data){
        res.send(data);
    });

});

//dataV上面的地图
router.get('/dt', function(req, res, next) {
    res.render('dt',{title: '地图底图'});

});

// router.get('/test', function(req, res, next) {
//     res.render('test',{
//         title:'测试'
//     })
// });
// router.post('/test', function(req, res, next) {
//     client.get("test", function (err, reply) {
//         console.log(reply.toString());
//         res.send('a');
//         client.quit();
//     });
// });

module.exports = router;
