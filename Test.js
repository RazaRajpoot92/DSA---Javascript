// function write(s){

//     for(var i = 0; i<s.length; i++){
//         function close(i){
//             setTimeout(() => {
//             process.stdout.write(s[i])
//          }, i * 150);
//         }
//         close(i)
//     }

// }
// let s = "hello world, how I can help you?"
// write(s)
const api = "https://fakestoreapi.com/products/1"
const products = fetch(api)

products.then(res => res.json() )
.then(product => console.log(product.rating.rate))