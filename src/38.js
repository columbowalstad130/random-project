// 生成随机数
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 获取当前日期
function getCurrentDate() {
    const date = new Date();
    return `当前日期：${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
