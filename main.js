
function soma(v,n) {
return (v,n+1)
}
    function sss(v,n) {
        if (n===1) return 0
        return sss(v,n+1)+v(n-1)
    }