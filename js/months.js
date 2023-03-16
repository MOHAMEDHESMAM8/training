$(document).ready(function(){
    
    

            $.ajaxSetup({ cache: false });
            function getData(index){
                var ts = new Date().getTime();
                var data = {_: ts};
                $.getJSON("js/jsons/months.json",data, function(result){
                        var  monthData = document.querySelector('.month-data ')
                        var alldata =""
                        result[index].events.forEach(event =>{
                            alldata +=('<div class="event" dir="rtl"> <div class="date">  <span class="day">'+event.day+'</span><span class="number">'+event.number+'</span>   </div><span class="name"> '+event.name+' </span> </div>')
                        });
                        monthData.innerHTML =alldata
                });
            }
            var months = ["مارس","ابريل","مايو","يونيه","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر"," ديسمبر"]

            const d = new Date()
            let month = d.getMonth();
            $(".in4-months .month-text").text(months[month-2]);
            getData(month-2)


        $('.in4-months .previous').click(function (e) { 
            $('.in4-months .next').show();
            var index = months.indexOf($(".in4-months .month-text").text())
            var prevmonth= months[index-1]
        
            if (index >1){
                $(".in4-months .month-text").text(prevmonth);
                getData(index-1)
            }else if(index =1 ){
                $(".in4-months .month-text").text(prevmonth);
                getData(index-1)
                $(this).hide();
            }
            else{
                $(this).hide();
            }
        });
        $('.in4-months .next').click(function (e) {
            $('.in4-months .previous').show();
            var index = months.indexOf($(".in4-months .month-text").text())
            var nextmonth= months[index+1]

            if (index <(months.length)-2){
                
                $(".in4-months .month-text").text(nextmonth);
                getData(index+1);

            }else if(index = 8 ){
                $(".in4-months .month-text").text(nextmonth);
                getData(index+1)
                $(this).hide();

            }else{
                $(this).hide();
            }
        });


});