 const like = setInterval(likeViews,10)
 let count1 = 1;
 function likeViews(){
    count1++;
    document.querySelector('#number1').innerHTML = count1
    if (count1 == 2000){
      clearInterval(like)
    }
 }
 const comment = setInterval(commentViews,10)
 let count2 = 1;
 function commentViews(){
    count2++;
    document.querySelector('#number2').innerHTML = count2
    if (count2 == 89){
      clearInterval(comment)
    }
 }
 const sharing = setInterval(sharingContent,10)
 let count3 = 1;
 function sharingContent(){
    count3++;
    document.querySelector('#number3').innerHTML = count3
    if (count3 == 399){
      clearInterval(sharing)
    }
 }