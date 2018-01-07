//测试连接redis
var redis = require("redis"),
    client = redis.createClient(6379,'r-uf60ff090e083c24.redis.rds.aliyuncs.com',{detect_buffers: true});
client.auth("r-uf60ff090e083c24.redis.rds.aliyuncs.com:123QWEqwe", redis.print);

// 获取数据，返回String

exports.client = client;
