/**
 * Created by apple on 17/8/8.
 */
// 操作数据库
const mysql = require('mysql');

connection = mysql.createConnection({
    host     : 'rm-uf697491h7b31v09wo.mysql.rds.aliyuncs.com',       //主机
    user     : 'dbu_aaas',               //MySQL认证用户名
    password : 'Aa123456',        //MySQL认证用户密码
    port: '3306',
    database: 'mdlz_aaas'
});

connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

function query(sql,callback){


    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        callback(rows);

    });
    //connection.end();
}
exports.query = query;


