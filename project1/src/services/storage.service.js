//we write imagekit code here//we write code insode this folder bcz we dont know in future always wrute in same tool
const ImageKit = require('@imagekit/nodejs')
const imagekit=new imagekit({
        //we get provate key from imagelit website after login,in sidebar ,developer option
    privateKey:"private_vyQjzXpczag5V+vURFp/142pNhk="
})

async function uploadFile(buffer){
    const result=await imagekit.client.upload({
        file:buffer,
        fileName:"image.png"
    })
    return result
}
module.exports=uploadFile;