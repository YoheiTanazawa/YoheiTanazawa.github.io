function yamanashi(quiz){
    let message = '';

    if(quiz === 1){
        message = '不正解';
    }else if (quiz === 2){
        message = '不正解';
    }else if (quiz === 3){
        message = '正解';
    }else if (quiz === 4){
        message = '不正解';
    }else{
        message = '不正解';
    }

    console.log(message);

    const hogehoge =document.querySelector('#yamanashi');
    hogehoge.textContent = message;
}