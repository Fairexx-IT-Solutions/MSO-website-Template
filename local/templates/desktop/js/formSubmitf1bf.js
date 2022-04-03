$(document).ready(function() {
	$(document).on("focus",".elc_string input",function(){
		$(this).parent().addClass("active").removeClass("error");
	});
	$(document).on("blur",".elc_string input",function(){
		if($(this).val()==""){
			$(this).parent().removeClass("active");
		}
	});
	$(document).on("focus",".elc_string textarea",function(){
		$(this).parent().addClass("active").removeClass("error");
	});
	$(document).on("blur",".elc_string textarea",function(){
		if($(this).val()==""){
			$(this).parent().removeClass("active");
		}
	});
	$(document).off("submit",".elc_ajax form");
	$(document).on("submit",".elc_ajax form",function(e){
		e.preventDefault();
		var $that = $(this),
			formData = new FormData($that.get(0)),
			id = $that.parents(".elc_ajax").attr("id");
		$.ajax({
			url: $that.attr('action'),
			type: $that.attr('method'),
			contentType: false,
			processData: false,
			data: formData,
			success: function(data){
				$("#"+id).html($(data).find("#"+id).html());
			},
			error: function(err){
				console.log(err);
			}
		})
	});
})