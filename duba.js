jQuery(document).ready(function() {
    $(document).ready(function() {
        $('#target').keydown(function(event) {
         input = $(this).val()
         if (event.which != 8){
			input += String.fromCharCode(event.which).toLowerCase();
            
            if(input == "down"){
                $('#duba').css('top', "+=100")
                input = ""
               
            } else if (input == "left"){
                $('#duba').css('left', '-=100' )
                console.log(input)
                input = ""
               
            } else if (input == "right"){
                $('#duba').css('left', "+=100")
                console.log(input)
                input = ""
                
            } else if (input == "up"){
                $('#duba').css('top', "-=100")
                console.log(input)
                input = ""
                
            }
        }
        });
    });
});
