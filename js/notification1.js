var times=[3120,4442,5224,7510,8636,16002,17222],countries=["eng","us","eng_flage","fn","rus_flage","chn_flage","frn_flage"],themeInterval=setInterval("notification()",time());function time(){return times[parseInt(7*Math.random())]+8e3}function notification(){spop({template:'<div class="sale_notification d-flex align-items-center"><img src="assets/images/about_icon.png" alt="" /> <div class="notification_inner"> <h3>YOST</h3><p>Let's discover your talent Together! <imga src="assets/images/'+countries[Math.floor(7*Math.random())]+'.png" alt="" /></p></div></div>',group:"submit-satus",style:"nav-fixed",position:"bottom-left",autoclose:5e3,icon:!1}),clearInterval(themeInterval),themeInterval=setInterval("notification()",time())}
