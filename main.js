console.log("hello");


async function main(){
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let res = await a.text();
    console.log(res);
}

main()