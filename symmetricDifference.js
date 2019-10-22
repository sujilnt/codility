function sym(args1, args2) {
    let symmetricDIfferentValues = [];
    let setA = new Set(args1);
    let setB = new Set(args2);
    setA.forEach(value => {
        let contains = setB.has(value);
        contains ? setB.delete(value) : setB.add(value);
        console.log(contains, value, setB);
    });
    return Array.from(setB).sort((a, b) => a - b);
}


console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
