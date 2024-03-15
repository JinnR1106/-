let round = prompt ("คุณจะเล่นทั้งหมดกี่รอบ ?")
for(var i = 0 ; i < round ; i++){
    var answer = prompt ("หัว หรือ ก้อย พิมพ์มาเลย !")
    var random_answer = ""
    if(Math.floor(Math.random()*10) <= 4){
        //หัว
        random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        alert("ตอบถูก ! ยินดีด้วย")
    }
    else{
        alert("ตอบผิด ! เสียใจด้วย")
    }
}
