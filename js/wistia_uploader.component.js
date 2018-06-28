angular.module('uploader', [])
	.component('wistiaFileUploader',{
	    selector:'wistia-file-uploader',
		template:'<input id="fileupload" type="file" name="files[]" data-url="server/php/"><div><div id="state"></div><div class="bar" id="bar" style="width: 0px;height: 18px; background: green;"></div><div class="percent"  id="percent">0 %</div></div>',
		controller: function ($scope) {
			
			$('#fileupload').fileupload({
			dataType: 'json',
			add: function (e, data) {
				progress=0;
				$('#bar').width(progress);
				$('#percent').html(progress+' %');

				$('#state').html('Uploading...');
				data.submit();

			},
			done: function (e, data) {
				$('#state').html('Upload finished.');
			},
			progressall: function (e, data) {
			
				var progress = parseInt(data.loaded / data.total * 100, 10);
				console.log('Progress: '+progress);
				$('#bar').width(progress);
				$('#percent').html(progress+' %');

			}
			})
		}
		})
		

/*

'use strict';

angular.module('myApp').
    component('wistiaFileUploader',{
		//template:'<input id="fileupload" type="file" name="files[]" data-url="server/php/"><div><div id="state"></div><div class="bar" id="bar" style="width: 0px;height: 18px; background: green;"></div><div class="percent"  id="percent">0 %</div></div>'
		//controller: function ($scope) {
			/*
			$('#fileupload').fileupload({
			dataType: 'json',
			add: function (e, data) {


				data.context = $('#state').text('Uploading...');
				data.submit();

			},
			done: function (e, data) {
				data.context.text('Upload finished.');
			},
			progressall: function (e, data) {
			
				var progress = parseInt(data.loaded / data.total * 100, 10);
				console.log('Progress: '+progress);
				$('#bar').width(progress);
				$('#percent').html(progress+' %');

			}
			});
		//}
    })*/

	
	