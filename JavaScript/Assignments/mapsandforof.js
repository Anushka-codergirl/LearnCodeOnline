var arrofArr = [['one',1],['two',2],['three',3]]

var newMap = new Map(arrofArr)

console.log(newMap);

for(key of newMap.keys()){
    console.log(`${key} = ${newMap.get(key)}`);
}
