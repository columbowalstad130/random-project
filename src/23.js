// 生成随机数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成随机字符串
function getRandomString(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// 主函数
function main() {
    // 获取当前时间
    let now = new Date().toLocaleString();

    // 输出随机数和字符串
    console.log('生成的日期: ' + now);
    console.log('随机数: ' + getRandomNumber(0, 99));
    console.log('随机字符串: ' + getRandomString(8));

}

main();
