const areAtributesSame = (attrs1, attrs2) => {
    if (attrs1.length !== attrs2.length) return false

    for (const attr of attrs1) {
        const attr2 = attrs2.find(a => a.name === attr.name)
        if (!attr2) return false;
        const value1 = attr.value;
        const value2 = attr2.value;
        if (value1 !== value2) return false;



    }
    return true
}
export default areAtributesSame