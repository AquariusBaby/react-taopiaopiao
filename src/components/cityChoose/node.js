const cityId = require('./city.js');
const cityCode = require('./cityList1.json');
const fs = require('fs');


Object.keys(cityCode).map(item => {
    cityCode[item].map(code => {
        cityId.map(id => {
            if (code.regionName === id.nm) {
                code.id = id.id;
                // console.log(cityCode['A'][0].id);
            }
        })
    })
})

console.log(1);
fs.writeFileSync('res.json', JSON.stringify(cityCode), error => {
    console.log(error);
    console.log('保存data成功');
});
console.log(2);

