document.write("<script src=\"js/BigInteger.min.js\"></script>")

function str2int(str){
    hexstr = str2hex(str);
    res = bigInt(hexstr,16)
    return res;
}

function str2bin(str){
    if(str === "")
        return "";
    var hexCharCode = [];
    for(var i = 0; i < str.length; i++) {
    　　hexCharCode.push((str.charCodeAt(i)).toString(2));
    }
    return hexCharCode.join("");
}

function str2hex(str) {
    if(str === "")
        return "";
    var hexCharCode = [];
    for(var i = 0; i < str.length; i++) {
    　　hexCharCode.push((str.charCodeAt(i)).toString(16));
    }
    return hexCharCode.join("");
}