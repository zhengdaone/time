/*
此控件能精确时间到秒，能用鼠标滚轮或点击按钮或直接键入时间的具体值。
最小值预设为1000年，最大值预设为3000年，需要时可在Init函数中修改。
打开时显示的是当前时间，当时间为个位时自动填0，限制了输入，只能输入数字。
预设了两种不同风格分别为style1.css、style2.css，需通过调整html来切换样式显示。	
*/
function CreateTimeUnit(InstanceName){
	var _this_ = this;
	this.InstanceName=InstanceName;
	this.maxyear = 3000;
	this.minyear = 1000;
	this.inityear = 2000;
	this.InitDate=function(yyyy,mm,dd,hh,mi,ss){
	var newdiv = document.getElementById("bb");
		initdate=new Date(),
	    month=(initdate.getMonth()+1).toString(),
	    day=initdate.getDate().toString(),
	    hour=initdate.getHours().toString(),
	    minute=initdate.getMinutes().toString(),
	    second=initdate.getSeconds().toString();
	if(month.length==1){
		month='0'+month;
	}
	if(day.length==1){
		day='0'+day;
	}
	
	if(hour.length==1){
		hour='0'+hour;
	}
	
	if(minute.length==1){
		minute='0'+minute;
	}
	
	if(second.length==1){
		second='0'+second;
	}
	var inithtml="";
	if(yyyy=="yyyy"){
	inithtml="<div class='box_year' >";
	inithtml+="<div class = 'top_line_year'><input class='datainp_year' maxlength='4' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' id='"+this.InstanceName+"_s_year' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始年' value='"+initdate.getFullYear()+"' ></div>";
	inithtml+="<div class='Timebutton_year TopUp'   id='"+this.InstanceName+"_s_up_year' onselectstart='return false' onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_year')>+</div>";
	inithtml+="<div class='Timebutton_year BottomDown'  id='"+this.InstanceName+"_s_down_year' onselectstart='return false' onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_year')>-</div></div>";
	inithtml+="<div class='line'>-</div>";
	}

	if(mm=="mm"){
    inithtml+="<div div class='box'><div class = 'top_line'><input onpaste = 'return false' 	 class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_s_month' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始月' value='"+month+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'  id='"+this.InstanceName+"_s_up_month' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_month')>+</div>";
	inithtml+="<div class='Timebutton BottomDown' id='"+this.InstanceName+"_s_down_month' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_month')>-</div></div>"; 
	inithtml+="<div class='line'>-</div>";
	}
	
	if(dd=="dd"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_s_day' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始日' value='"+day+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'  id='"+this.InstanceName+"_s_up_day' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_day')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_s_down_day' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_day')>-</div></div>";
	inithtml+="<div class='line'></div>";
	}

	if(hh=="hh"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_s_hour' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始时' value='"+hour+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_s_up_hour' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_hour')>+</div>";
	inithtml+="<div class='Timebutton BottomDown' id='"+this.InstanceName+"_s_down_hour' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_hour')>-</div></div>"; 
	inithtml+="<div class='line'>:</div>";
	}

	if(mi=="mi"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_s_minute' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始分' value='"+minute+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'  id='"+this.InstanceName+"_s_up_minute' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_minute')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_s_down_minute' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_minute')>-</div></div>"; 
	inithtml+="<div class='line'>:</div>";
	}

	if(ss=="ss"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_s_second' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='起始秒' value='"+second+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_s_up_second' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_up_second')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_s_down_second' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_s_down_second')>-</div></div>";
	inithtml+="<div class='line2'>--</div>";
	}


	if(yyyy=="yyyy"){
	inithtml+="<div div class='box_year'><div class = 'top_line_year'><input class='datainp_year' maxlength='4' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' id='"+this.InstanceName+"_e_year' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止年' value='"+initdate.getFullYear()+"' ></div>";
	inithtml+="<div class='Timebutton_year TopUp'   id='"+this.InstanceName+"_e_up_year' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_year')>+</div>";
	inithtml+="<div class='Timebutton_year BottomDown'  id='"+this.InstanceName+"_e_down_year' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_year')>-</div></div>";
	inithtml+="<div class='line'>-</div>";
	}
	
	if(mm=="mm"){
    inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_e_month' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止月' value='"+month+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_e_up_month' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_month')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_e_down_month' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_month')>-</div></div>"; 
	inithtml+="<div class='line'>-</div>";
	}

	if(dd=="dd"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_e_day' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止日' value='"+day+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_e_up_day' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_day')>+</div>";
	inithtml+="<div class='Timebutton BottomDown' id='"+this.InstanceName+"_e_down_day' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_day')>-</div></div>"; 
	inithtml+="<div class='line'></div>";
	}

	if(hh=="hh"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_e_hour' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止时' value='"+hour+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_e_up_hour' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_hour')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_e_down_hour' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_hour')>-</div></div>"; 
	inithtml+="<div class='line'>:</div>";
	}

	if(mi=="mi"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_e_minute' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止分' value='"+minute+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'   id='"+this.InstanceName+"_e_up_minute' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_minute')>+</div>";
	inithtml+="<div class='Timebutton BottomDown'  id='"+this.InstanceName+"_e_down_minute' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_minute')>-</div></div>"; 
	inithtml+="<div class='line'>:</div>";
	}

	if(ss=="ss"){
	inithtml+="<div div class='box'><div class = 'top_line'><input class='datainp' maxlength='2' onclick='javascript:"+this.InstanceName+".scrollChangeNum(this)' onblur=javascript:"+this.InstanceName+".supply() onmouseout=javascript:"+this.InstanceName+".supply() id='"+this.InstanceName+"_e_second' type='text' oninput=javascript:"+this.InstanceName+".ValidateTime() placeholder='截止秒' value='"+second+"' ></div>";
	inithtml+="<div class='Timebutton TopUp'  id='"+this.InstanceName+"_e_up_second' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_up_second')>+</div>";
	inithtml+="<div class='Timebutton BottomDown' id='"+this.InstanceName+"_e_down_second' onselectstart='return false'  onclick=javascript:"+this.InstanceName+".change('"+this.InstanceName+"_e_down_second')>-</div></div>";
	}
	newdiv.innerHTML = inithtml;
};
	this.scrollChangeNum = function(obj){
		var scroll=function(id){                     //滚轮改变
				var s_year = document.getElementById(id+"_s_year");
				var s_month = document.getElementById(id+"_s_month");
				var s_day = document.getElementById(id+"_s_day");
				var s_hour = document.getElementById(id+"_s_hour");
				var s_minute = document.getElementById(id+"_s_minute");
				var s_second = document.getElementById(id+"_s_second");
				var e_year = document.getElementById(id+"_e_year");
				var e_month = document.getElementById(id+"_e_month");
				var e_day = document.getElementById(id+"_e_day");
				var e_hour = document.getElementById(id+"_e_hour");
				var e_minute = document.getElementById(id+"_e_minute");
				var e_second = document.getElementById(id+"_e_second");
				
			    if(s_year!=null&&s_year.value>_this_.maxyear){
			    	s_year.value = _this_.inityear;
				}
				if(s_year!=null){if(s_year.value < _this_.minyear || s_year.value==""){
			    	s_year.value = _this_.inityear;
				}}
				
			    if(e_year!=null&&e_year.value>_this_.maxyear){
			    	e_year.value =  _this_.inityear;
				}
				if(e_year!=null){if(e_year.value< _this_.minyear || e_year.value==""){
			    	e_year.value =  _this_.inityear;
				}}
				
			    if(s_month!=null&&s_month.value>12){
			    	s_month.value = '01';
				}
				if(s_month!=null&&(s_month.value<1 || s_month.value=="")){
			    	s_month.value = 12;
				}
				
			    if(e_month!=null&&e_month.value>12){
			    	e_month.value = '01';
				}
				if(e_month!=null&&(e_month.value<1 || e_month.value=="")){
			    	e_month.value = 12;
				}
				
				if(s_day!=null&&s_month!=null){
					 if(s_month.value==1||s_month.value==3||s_month.value==5||s_month.value==7||s_month.value==8||s_month.value==10||s_month.value==12)
				{
				    if(s_day.value>31)s_day.value = '01';
					if(s_day.value<1||s_day.value=="")s_day.value = 31;
				}
				else if(s_month.value==4||s_month.value==6||s_month.value==9||s_month.value==11)
				{
				    if(s_day.value>30) s_day.value = '01';					
					if(s_day.value<1||s_day.value=="")s_day.value = 30; 
				}				
				else if(s_month.value==2)
				{
					if(s_year==null){
						if(s_day.value>28) {s_day.value = '01';} 					
					else if(s_day.value<1||s_day.value=="") s_day.value = 28;
					}
					else if(((s_year.value % 4)==0) && ((s_year.value % 100)!=0) || ((s_year.value % 400)==0))
					{

					    if(s_day.value>29)  {s_day.value = '01';}
						else if(s_day.value<1||s_day.value=="")  {s_day.value = 29;}
					}	
			    else
			    {
				    if(s_day.value>28) {s_day.value = '01';} 					
					else if(s_day.value<1||s_day.value=="") s_day.value = 28;				
				}
			}	
				}else{
					if(s_day.value>31)s_day.value = '01';
					if(s_day.value<1||s_day.value=="")s_day.value = 31;
				}
			if(e_day!=null&&e_month!=null){
				if(e_month.value==1||e_month.value==3||e_month.value==5||e_month.value==7||e_month.value==8||e_month.value==10||e_month.value==12)
				{
				    if(e_day.value>31)e_day.value = '01';
					if(e_day.value<1||e_day.value=="")e_day.value = 31;
				}
				else if(e_month.value==4||e_month.value==6||e_month.value==9||e_month.value==11)
				{
				    if(e_day.value>30) e_day.value = '01';					
					if(e_day.value<1||e_day.value=="")e_day.value = 30; 
				}				
				else if(e_month.value==2)
				{
					if(e_year==null){
						if(e_day.value>28) {e_day.value = '01';} 					
					else if(e_day.value<1||e_day.value=="") e_day.value = 28;
					}
					else if(((e_year.value % 4)==0) && ((e_year.value % 100)!=0) || ((e_year.value % 400)==0))
					{
					    if(e_day.value>29)  e_day.value = '01';
						if(e_day.value<1||e_day.value=="")  e_day.value = 29;
					}	
			    else
			    {
				    if(e_day.value>28) {e_day.value = '01';} 					
					else if(e_day.value<1||e_day.value=="") e_day.value = 28;				
				}
			}  
				}else{
					if(e_day.value>31)e_day.value = '01';
					if(e_day.value<1||e_day.value=="")e_day.value = 31;
				}

				if(s_year!=null){
 				if(!isLeapYear(s_year.value)){	
				if(s_month.value==2&&s_day.value==29){
					s_day.value="28";
				}   	
				}
				}
				if(e_year!=null){
				if(!isLeapYear(e_year.value)){
				if(e_month.value==2&&e_day.value==29){
				s_day.value="28";
				}   	
				} 
				}
				
				
			    if(e_hour!=null&&e_hour.value>23){
			    e_hour.value = '00';
				}
				if(e_hour!=null&&(e_hour.value<0&&e_hour.value!="")){
			    e_hour.value = 23;
				}
				
			    if(s_hour!=null&&s_hour.value>23){
			    s_hour.value = '00';
				}
				if(s_hour!=null&&(s_hour.value<0&&s_hour.value!="")){
			    s_hour.value = 23;
				}
				
			    if(s_minute!=null&&s_minute.value>59){
			    s_minute.value = '00';
				}
				if(s_minute!=null&&(s_minute.value<0&&s_minute.value!="")){
			    s_minute.value = 59;
				}
				
			    if(e_minute!=null&&e_minute.value>59){
			    e_minute.value = '00';
				}
				if(e_minute!=null&&(e_minute.value<0&&e_minute.value!="")){
			    e_minute.value = 59;
				}
				
			    if(s_second!=null&&s_second.value>59){
			    s_second.value = '00';
				}
				if(s_second!=null&&(s_second.value<0&&s_second!="")){
			    s_second.value = 59;
				}
				
			    if(e_second!=null&&e_second.value>59){
			    e_second.value = '00';
				}
				if(e_second!=null&&(e_second.value<0&&e_second!="")){
			    e_second.value = 59;
				}
				
				
			};
			
		function getWheelValue( e ){ 
			e = e ||event; 
			return ( e.wheelDelta ? e.wheelDelta/120 : -( e.detail%3 == 0 ? e.detail/3 : e.detail ) ) ; 
			} 
		function stopScrollEvent( e ){ 
			e = e||event; 
			if( e.preventDefault )e.preventDefault(); 
			e.returnValue = false; 
		}
		function addScrollEvent(obj,type,fn){  
				var isFirefox = typeof document.body.style.MozUserSelect != 'undefined'; 
				if( obj.addEventListener ) 
				obj.addEventListener( isFirefox ? 'DOMMouseScroll' : type,fn,false ); 
				else 
				obj.attachEvent( 'on'+type,fn ); 
				return fn; 
		}
		function delScrollEvent(obj,type,fn){
			var isFirefox = typeof document.body.style.MozUserSelect != 'undefined'; 
			if( obj.removeEventListener ) 
				obj.removeEventListener( isFirefox ? 'DOMMouseScroll' : type,fn,false ); 
			else 
				obj.detachEvent( 'on'+ type, fn ); 
		} 

		var self = obj;
		var handler = addScrollEvent(self,'mousewheel',function(e){		
			stopScrollEvent( e );
			var delta = getWheelValue(e);
			// +me.value 将me.value转换成数字，然后使用isNaN检查转换后的数字是否为NaN 如果是，重新赋值me.value=0; 
			//if(isNaN( +self.value )) self.value = '00';
			self.value = +self.value +delta;
			if (self.value < 10 && self.value >= 0)self.value = '0'+self.value;
			//if(self.value < 0) self.value = 0;//初值
			//self.select();
			self.setAttribute('value',self.value);//把修改过后的值贴到value上,不要的话就用上面的select
			scroll(InstanceName);
			});
			self.onblur = function(){
				delScrollEvent(self,'mousewheel',handler);
				window.onblur = handler = null;
			}
		window.onblur = function(){
		self.blur();
		window.onblur = null;
		
		}
	};

this.change=function(id){                //按键改变
	var up = "up",
		down = "down";
	var _s = "_s",
		_e = "_e";
	var maxyear = this.maxyear,
			minyear = this.minyear,
			inityear = this.inityear;
	if(id==(this.InstanceName+"_s_up_year")){
		
		
		buttonDelectYear(this.InstanceName,_s,up,maxyear,minyear,inityear);
	}
	
	if(id==(this.InstanceName+"_s_down_year")){
		buttonDelectYear(this.InstanceName,_s,down,maxyear,minyear,inityear);
	}
	
	if(id==(this.InstanceName+"_s_up_month")){
		buttonDelectMonth(this.InstanceName,_s,up );
	}
	
	if(id==(this.InstanceName+"_s_down_month")){
			buttonDelectMonth(this.InstanceName,_s,down );
	}
	
	if(id==(this.InstanceName+"_s_up_day")){
		buttonDelectDay(this.InstanceName,_s,up);
	}
	
	if(id==(this.InstanceName+"_s_down_day")){
		buttonDelectDay(this.InstanceName,_s,down);
	}
	
	if(id==(this.InstanceName+"_s_up_hour")){
		buttonDelectHour(this.InstanceName,_s,up);
	}
	
	if(id==(this.InstanceName+"_s_down_hour")){
		buttonDelectHour(this.InstanceName,_s,down);
	}
	
	if(id==(this.InstanceName+"_s_up_minute")){
		buttonDelectMinute(this.InstanceName,_s,up);
	}
	
	if(id==(this.InstanceName+"_s_down_minute")){
		buttonDelectMinute(this.InstanceName,_s,down);
	}
	
	if(id==(this.InstanceName+"_s_up_second")){
		buttonDelectSecond(this.InstanceName,_s,up);
	}
	
	if(id==(this.InstanceName+"_s_down_second")){
		buttonDelectSecond(this.InstanceName,_s,down);
	}
	
	if(id==(this.InstanceName+"_e_up_year")){
		buttonDelectYear(this.InstanceName,_e,up,maxyear,minyear,inityear);
	}
	
	if(id==(this.InstanceName+"_e_down_year")){
		buttonDelectYear(this.InstanceName,_e,down,maxyear,minyear,inityear);
	}
	
	if(id==(this.InstanceName+"_e_up_month")){
			buttonDelectMonth(this.InstanceName,_e,up );		
	}
	
	if(id==(this.InstanceName+"_e_down_month")){
			buttonDelectMonth(this.InstanceName,_e,down);
	}
	
	if(id==(this.InstanceName+"_e_up_day")){
		buttonDelectDay(this.InstanceName,_e,up);
	}
	
	if(id==(this.InstanceName+"_e_down_day")){
		buttonDelectDay(this.InstanceName,_e,down);	
	}
	
	if(id==(this.InstanceName+"_e_up_hour")){
		buttonDelectHour(this.InstanceName,_e,up);
	}
	
	if(id==(this.InstanceName+"_e_down_hour")){
		buttonDelectHour(this.InstanceName,_e,down);
	}
	
	if(id==(this.InstanceName+"_e_up_minute")){
		buttonDelectMinute(this.InstanceName,_e,up);
	}
	
	if(id==(this.InstanceName+"_e_down_minute")){
		buttonDelectMinute(this.InstanceName,_e,down);
	}
	
	if(id==(this.InstanceName+"_e_up_second")){
		buttonDelectSecond(this.InstanceName,_e,up);
	}
	
	if(id==(this.InstanceName+"_e_down_second")){
		buttonDelectSecond(this.InstanceName,_e,down);
	}
	function buttonDelectYear(Cla,s_or_e,method,max,min,init)
	{
	
	 var year=document.getElementById(Cla+s_or_e+"_year").value;
		if( year==""|| year==null){
			document.getElementById(Cla+s_or_e+"_year").value=init;
		}else{
			var month=document.getElementById(Cla+s_or_e+"_month").value;
			var day=document.getElementById(Cla+s_or_e+"_day").value;		
			if(method === "up")	year=parseInt(year)+1;
			else if(method === "down")year=parseInt(year)-1;
			if(month == 2 && !isLeapYear(year)){
			document.getElementById(Cla+s_or_e+"_day").value=28;
		}
		
		if(year >max){			
			document.getElementById(Cla+s_or_e+"_year").value=init;
		}else if(year <= min){
			document.getElementById(Cla+s_or_e+"_year").value=init;
		}else{
			document.getElementById(Cla+s_or_e+"_year").value=year;
		}
	}
	}
	function buttonDelectMonth(Cla,s_or_e,method)
	{
		var month=document.getElementById(Cla+s_or_e+"_month").value;
		if(month === null || month === "" ){
			document.getElementById(Cla+s_or_e+"_month").value='01';
		}else{
		var year=document.getElementById(Cla+s_or_e+"_year").value;
		var day=document.getElementById(Cla+s_or_e+"_day").value;		
			if(method === "up")month=parseInt(month)+1;
			else if(method === "down")month=parseInt(month) -1;

		if(!(month==1||month==3||month==5||month==7||month==8||month==10||month==12||month == 2)&&day>30){
			document.getElementById(Cla+s_or_e+"_day").value=30;
		}else if (month == 2) {
			if(!isLeapYear(year)){
				if(day>28){
			document.getElementById(Cla+s_or_e+"_day").value=28;
		}
		} else if(day > 29){
			document.getElementById(Cla+s_or_e+"_day").value=29;
		}
		}
		if(month>12){
			document.getElementById(Cla+s_or_e+"_month").value='01';
		}else if(month<1){
			document.getElementById(Cla+s_or_e+"_month").value=12;
		}else{
			if(month.toString().length==1){
				month='0'+month.toString();
			}
		document.getElementById(Cla+s_or_e+"_month").value=month;
			}
		}
	}
	function buttonDelectDay(Cla,s_or_e,method)
	{	
		var day=document.getElementById(Cla+s_or_e+"_day").value;	
		if(day==null||day==""){
			document.getElementById(Cla+s_or_e+"_day").value='01';
		}else{
        var month=document.getElementById(Cla+s_or_e+"_month").value;
		var year=document.getElementById(Cla+s_or_e+"_year").value;	
		month=parseInt(month);	
		if(method === "up")	day=parseInt(day)+1;
			else if(method === "down")	day=parseInt(day)-1;
		if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
		{
			if(day.toString().length==1){
				day='0'+day.toString();
			}
			document.getElementById(Cla+s_or_e+"_day").value=day;
			if(day>31){
			document.getElementById(Cla+s_or_e+"_day").value='01';
			}
			else if(day<1){
				if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
				document.getElementById(Cla+s_or_e+"_day").value=31;
				}else if(month==4||month==6||month==9||month==11){
				document.getElementById(Cla+s_or_e+"_day").value=30;	
				}else if(month==2){
				if(!isLeapYear(year)){
				document.getElementById(Cla+s_or_e+"_day").value=28;	
				}else{
				document.getElementById(Cla+s_or_e+"_day").value=29;	
				}	
				}
			}
		}
		else if((month==4||month==6||month==9||month==11))
		{
			if(day.toString().length==1){
				day='0'+day.toString();
			}
			if(day>30){
				document.getElementById(Cla+s_or_e+"_day").value='01';
			}else if(day < 1){
				document.getElementById(Cla+s_or_e+"_day").value='30';
			}
			else {
				document.getElementById(Cla+s_or_e+"_day").value=day;
			}
		}
		else if(month==2){
			if(isLeapYear(year))
			{
				if(day.toString().length==1)
					day='0'+day.toString();				
				document.getElementById(Cla+s_or_e+"_day").value=day;
				if(day>29){
					document.getElementById(Cla+s_or_e+"_day").value='01';
				}else if(day < 1)				
					document.getElementById(Cla+s_or_e+"_day").value='29';				
				}
			else{
					if(day.toString().length==1)
						day='0'+day.toString();
					document.getElementById(Cla+s_or_e+"_day").value=day;
					if(day>28)
						document.getElementById(Cla+s_or_e+"_day").value='01';
					if(day<1)
						document.getElementById(Cla+s_or_e+"_day").value='28';
				}
			}
		}
	}
	function buttonDelectHour(Cla,s_or_e,method)
	{
		var hour=document.getElementById(Cla+s_or_e+"_hour").value;	
		if(hour==null||hour==""){
			document.getElementById(Cla+s_or_e+"_hour").value=23;
		}else{
		if(method === "up")hour=parseInt(hour)+1;
			else if(method === "down")hour=parseInt(hour)-1;
		if(hour>23){
		document.getElementById(Cla+s_or_e+"_hour").value='00';	
		}else if(hour<0){
		document.getElementById(Cla+s_or_e+"_hour").value=23;	
		}else{
			if(hour.toString().length==1){
				hour='0'+hour.toString();
			}
			document.getElementById(Cla+s_or_e+"_hour").value=hour;
			}
		}
	}
	function buttonDelectMinute(Cla,s_or_e,method)
	{
		var minute=document.getElementById(Cla+s_or_e+"_minute").value;
		if(minute==null||minute==""){
			document.getElementById(Cla+s_or_e+"_minute").value='00';	
		}else{
		if(method === "up")minute=parseInt(minute)+1;
			else if(method === "down")minute=parseInt(minute)-1;		
		if(minute>59){
		document.getElementById(Cla+s_or_e+"_minute").value='00';	
		}else if(minute<0){
		document.getElementById(Cla+s_or_e+"_minute").value=59;	
		}else{
			if(minute.toString().length==1){
				minute='0'+minute.toString();
			}
			document.getElementById(Cla+s_or_e+"_minute").value=minute;
			}
		}
	}
	function buttonDelectSecond(Cla,s_or_e,method)
	{
		var second=document.getElementById(Cla+s_or_e+"_second").value;
		if(second==null||second==""){
			document.getElementById(Cla+s_or_e+"_second").value='00';
		}else{		
		if(method === "up")second=parseInt(second)+1;
			else if(method === "down")second=parseInt(second)-1;
		if(second>59){
		document.getElementById(Cla+s_or_e+"_second").value='00';
		}else if(second<0){
		document.getElementById(Cla+s_or_e+"_second").value=59;
		}else{
			if(second.toString().length==1){
				second='0'+second.toString();
			}
		document.getElementById(Cla+s_or_e+"_second").value=second;
			}
		}
	}
};

	
this.supply=function(){//格式填充
	var s_year = document.getElementById(this.InstanceName+"_s_year");
	var s_month = document.getElementById(this.InstanceName+"_s_month");
	var s_day = document.getElementById(this.InstanceName+"_s_day");
	var s_hour = document.getElementById(this.InstanceName+"_s_hour");
	var s_minute = document.getElementById(this.InstanceName+"_s_minute");
	var s_second = document.getElementById(this.InstanceName+"_s_second");
	var e_year = document.getElementById(this.InstanceName+"_e_year");
	var e_month = document.getElementById(this.InstanceName+"_e_month");
	var e_day = document.getElementById(this.InstanceName+"_e_day");
	var e_hour = document.getElementById(this.InstanceName+"_e_hour");
	var e_minute = document.getElementById(this.InstanceName+"_e_minute");
	var e_second = document.getElementById(this.InstanceName+"_e_second");

	if(s_month.value==0){
			document.getElementById(this.InstanceName+"_s_month").value='01';
		}

		if(e_month.value==0){
			document.getElementById(this.InstanceName+"_e_month").value='01';
		}
if(s_day.value==0){
			document.getElementById(this.InstanceName+"_s_day").value='01';
		}
		if(e_day.value==0){
			document.getElementById(this.InstanceName+"_e_day").value='01';
		}
	if(s_month.value.length==1){
	str ='0'+s_month.value;
	document.getElementById(this.InstanceName+"_s_month").value=str.substring(str.length-2,str.length);
	}
	if(s_day.value.length==1){
	str ='0'+s_day.value;
	document.getElementById(this.InstanceName+"_s_day").value=str.substring(str.length-2,str.length);
	}
	if(s_hour.value.length==1){
	str ='0'+s_hour.value;
	document.getElementById(this.InstanceName+"_s_hour").value=str.substring(str.length-2,str.length);
	}
	if(s_minute.value.length==1){
	str ='0'+s_minute.value;
	document.getElementById(this.InstanceName+"_s_minute").value=str.substring(str.length-2,str.length);
	}
	
	if(s_second.value.length==1){
	str ='0'+s_second.value;
	document.getElementById(this.InstanceName+"_s_second").value=str.substring(str.length-2,str.length);
	}
	
	if(e_month.value.length==1){
	str ='0'+e_month.value;
	document.getElementById(this.InstanceName+"_e_month").value=str.substring(str.length-2,str.length);
	}
	
	if(e_day.value.length==1){
	str ='0'+e_day.value;
	document.getElementById(this.InstanceName+"_e_day").value=str.substring(str.length-2,str.length);
	}
	
	if(e_hour.value.length==1){
	str ='0'+e_hour.value;
	document.getElementById(this.InstanceName+"_e_hour").value=str.substring(str.length-2,str.length);
	}
	
	if(e_minute.value.length==1){
	str ='0'+e_minute.value;
	document.getElementById(this.InstanceName+"_e_minute").value=str.substring(str.length-2,str.length);
	}
	
	if(e_second.value.length==1){
	str ='0'+e_second.value;
	document.getElementById(this.InstanceName+"_e_second").value=str.substring(str.length-2,str.length);
	}


	};
	
this.ValidateTime=function(){                     //输入改变
	var s_year = document.getElementById(this.InstanceName+"_s_year");
	var s_month = document.getElementById(this.InstanceName+"_s_month");
	var s_day = document.getElementById(this.InstanceName+"_s_day");
	var s_hour = document.getElementById(this.InstanceName+"_s_hour");
	var s_minute = document.getElementById(this.InstanceName+"_s_minute");
	var s_second = document.getElementById(this.InstanceName+"_s_second");
	var e_year = document.getElementById(this.InstanceName+"_e_year");
	var e_month = document.getElementById(this.InstanceName+"_e_month");
	var e_day = document.getElementById(this.InstanceName+"_e_day");
	var e_hour = document.getElementById(this.InstanceName+"_e_hour");
	var e_minute = document.getElementById(this.InstanceName+"_e_minute");
	var e_second = document.getElementById(this.InstanceName+"_e_second");

	s_year.value=s_year.value.replace(/\D/g,'');
 	s_month.value=s_month.value.replace(/\D/g,'');
 	s_day.value=s_day.value.replace(/\D/g,'');
 	s_hour.value=s_hour.value.replace(/\D/g,'');
    s_minute.value=s_minute.value.replace(/\D/g,'');
    s_second.value=s_second.value.replace(/\D/g,'');
    e_year.value=e_year.value.replace(/\D/g,'');
 	e_month.value=e_month.value.replace(/\D/g,'');
 	e_day.value=e_day.value.replace(/\D/g,'');
 	e_hour.value=e_hour.value.replace(/\D/g,'');
    e_minute.value=e_minute.value.replace(/\D/g,'');
    e_second.value=e_second.value.replace(/\D/g,'');

	var _this_ = this;
	s_year.onkeyup = function(){
	    this.value=this.value.replace(/\D/g,'');
		this.value=this.value.replace(/\b(0+)/gi,"");
	    if(s_year.value>_this_.maxyear)
		    s_year.value = _this_.inityear;
		if(s_year.value< 0 && s_year.value != " ")
	    	s_year.value = _this_.inityear;
		
	}
	
	e_year.onkeyup = function(){
	    this.value=this.value.replace(/\D/g,'');
		this.value=this.value.replace(/\b(0+)/gi,"");
	    if(e_year.value>_this_.maxyear){
	  		  e_year.value = _this_.inityear;
		}
		if(e_year.value < 0 && e_year.value!=" "){
	  		  e_year.value = _this_.inityear;
		}
	} 

	s_month.onkeyup = function(){
	    if(s_month.value>12){
	 	    s_month.value = 1;
		}
		if(s_month.value==0&&s_month.value!=""){
		    s_month.value = 12;
		}
	}
	
	e_month.onkeyup = function(){
	    if(e_month.value>12){
	   		 e_month.value = 1;
		}	
	}
	
	if(s_month.value==1||s_month.value==3||s_month.value==5||s_month.value==7||s_month.value==8||s_month.value==10||s_month.value==12){
		s_day.onkeyup = function(){
	  	    if(s_day.value>31){
	   			 s_day.value = 1;
		    }
			
		 }
	}else if(s_month.value==4||s_month.value==6||s_month.value==9||s_month.value==11){
		s_day.onkeyup = function(){
	    if(s_day.value>30){
	   		 s_day.value = 1;
			}
		
		}
	}else if(s_month.value==2){
		if((((s_year.value % 4)==0) &&((s_year.value % 100)!=0)) || ((s_year.value % 400)==0)){
			s_day.onkeyup = function(){
			    if(s_day.value>29){
			  	  s_day.value = 1;
				}
				
			}
	}else{
		s_day.onkeyup = function(){
	    if(s_day.value>28){
	   		 s_day.value = 1;
		}
	
		}
	}		
}
	
	if(e_month.value==1||e_month.value==3||e_month.value==5||e_month.value==7||e_month.value==8||e_month.value==10||e_month.value==12){
	e_day.onkeyup = function(){
    if(e_day.value>31){
   		 e_day.value = 1;
	}
	
	  }
	}else if(e_month.value==4||e_month.value==6||e_month.value==9||e_month.value==11){
	e_day.onkeyup = function(){
   		 if(e_day.value>30){
  	 		 e_day.value = 1;
			}
		
		}
	} else if(e_month.value==2){
	if(((e_year % 4)==0) && ((e_year % 100)!=0) || ((e_year % 400)==0)){
	e_day.onkeyup = function(){
    if(e_day.value>29){
    e_day.value = 1;
	}
	
	}
    }else{
	e_day.onkeyup = function(){
    if(e_day.value>28){
    e_day.value = 1;
	}
	
	}
	}		
	} 
	
	e_hour.onkeyup = function(){
	    if(e_hour.value>23){
	 		   e_hour.value = 0;
		}
		if(e_hour.value<0&&e_hour.value!=""){
	  		  e_hour.value = 23;
		}
	}
	
	s_hour.onkeyup = function(){
	    if(s_hour.value>23){
	  		  s_hour.value = 0;
		}
		if(s_hour.value<0&&s_hour.value!=""){
	  		  s_hour.value = 23;
		}
	}
	
	s_minute.onkeyup = function(){
	    if(s_minute.value>59){
	    	s_minute.value = 0;
		}
		if(s_minute.value<0&&s_minute.value!=""){
	   		 s_minute.value = 59;
		}
	}
	
	e_minute.onkeyup = function(){
	    if(e_minute.value>59){
	   		  e_minute.value = 0;
		}
		if(e_minute.value<0&&e_minute.value!=""){
	  		  e_minute.value = 59;
		}
	}
	
	s_second.onkeyup = function(){
	    	if(s_second.value>59){
	  		  s_second.value = 0;
		}
			if(s_second.value<0&&s_second!=""){
	  		  s_second.value = 59;
		}
	}
	
	e_second.onkeyup = function(){
	    if(e_second.value>59){
	   		 e_second.value = 0;
		}
		if(e_second.value<0&&e_second!=""){
	    	 e_second.value = 59;
		}
	}
	
	if(!(((s_year.value % 4)==0) && ((s_year.value % 100)!=0) || ((s_year.value % 400)==0)))
	{
		if(s_month.value==2&&s_day.value==29){
			document.getElementById(this.InstanceName+"_s_day").value="28";
					}   	
	}
	
	if(!(((e_year.value % 4)==0) && ((e_year.value % 100)!=0) || ((e_year.value % 400)==0)))
	{
		if(e_month.value==2&&e_day.value==29)
		{
			document.getElementById(this.InstanceName+"_e_day").value="28";
		}   	
	}
	
	};

	function isLeapYear(year)
	{
		if((year % 4 ===0) && (year % 100!=0) || (year % 400==0))
			return true;
		else return false;
	}

};

