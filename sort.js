'コメント追加
'add comment2
'そのたのコメント追加AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
'sortChangeによる修正
'change3
'change3.3さらにさらに追加
'あいうえおかきくけこ

var sortNumber = function (number) {
   number.sort(function (a, b) {
       if (a == b) {
           return 0;
       }
       return a < b ? -1 : 1;
   });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);