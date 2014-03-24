<script type="text/javascript">
	function countDown(){
		var deadline= new Date(2014,2,26,11,00,00);
		var now = new Date();
		var time = deadline.getTime()-now.getTime();
		var day1,hours,minutes,second;
		day1=Math.floor(time/(1000*60*60*24));
		hours=Math.floor(time/(1000*60*60)%24);
		minutes=Math.floor(time/(1000*60)%60); 
		second=Math.floor(time/1000%60);
		var str="<div>"+day1+"天"+hours+"时"+minutes+"分"+second+"秒"+"</div>";
		$("h1").html(str);
	}
	
	$(function(){
		countDown();
		setInterval(function(){
			countDown();
		},1000)
	})
</script>
