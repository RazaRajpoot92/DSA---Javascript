function write(s){

    for(var i = 0; i<s.length; i++){
        function close(i){
            setTimeout(() => {
            process.stdout.write(s[i])
         }, i * 150);
        }
        close(i)
    }

}
let s = "hello world, how I can help you?"
write(s)
