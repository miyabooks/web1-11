//答えを用意
var number =Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~3の数字を入力してください！お願いします！何でもしますから！(何でもするとは言ってない)'));

var message;
if(answer === number) {
  message = 'あたり！';
}else if(answer < number){
  message = '残念！もっと大きいゾ';
}else if (number < answer){
  message = '残念！もっと小さいゾ';
}else{
  message = '0~3の数字を入力してください！お願いします！何でもしますから！(何でもするとは言ってない)';
}

//結果を表示
document.getElementById('choice').textContent = message;
