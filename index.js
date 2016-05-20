window.onload=function(){
	//左边tab
	var hotTitle=document.getElementById('hot_title');
	var hTitle=hotTitle.getElementsByTagName('li');
	var hotContent=document.getElementById('hot_contents');
	var hContent=hotContent.getElementsByClassName('hot_content');
	
	for(var i=0;i<hTitle.length;i++){
		hTitle[i].index=i;
		hTitle[i].onmouseover=function(){
			for(var i=0;i<hTitle.length;i++){
				hTitle[i].className="";
				hContent[i].style.display='none';
			}
			this.className="current1";
			hTitle[0].className+="first";
			if(this.index==0){
				this.className="current1 first";
			}
			hContent[this.index].style.display='block';
		}
	}
	
	//右边图片切换
	//var hotPic=document.getElementById('hot_pic');
	var bigPic=document.getElementById('big_pic');
	var btn1=document.getElementById('sPic_left');
	var btn2=document.getElementById('sPic_right');
	var bigPicImg=bigPic.getElementsByTagName('li');
	
	var k=0;
	var picBar=document.getElementById('sPic_bar');
	var sPic=picBar.getElementsByTagName('li');
	
	bigPic.style.width=bigPicImg.length*632+'px';
	
	function sPicGo(direct){
		if(direct==1){
			k++;
			if(k>sPic.length-1){
				k=0;
			}
		}else if(direct==-1){
			k--;
			if(k<0){
				k=sPic.length-1;
			}
		}
		
		for(var h=0;h<sPic.length;h++){
			sPic[h].className="";
		}
		sPic[k].className="active";
	}
	
	btn1.onclick=function(){
		clearInterval(timer);
		sPicGo(-1);	
		pre(bigPic);
		timer=setInterval(function(){
			next(bigPic);
			sPicGo(1);				
		},3000);				
		return false;
	}
	btn2.onclick=function(){
		clearInterval(timer);		
		sPicGo(1);
		next(bigPic);
		timer=setInterval(function(){
			next(bigPic);
			sPicGo(1);				
		},3000);
		return false;
	}
	
	var timer=null;
	timer=setInterval(function(){
		next(bigPic);
		sPicGo(1);	
	},3000);
	
	//小图对大图
	//var picBar=document.getElementById('sPic_bar');
	//var sPic=picBar.getElementsByTagName('li');
	for(var i=0;i<sPic.length;i++){
		sPic[i].index=i;
		sPic[i].onmouseover=function(){
			for(var j=0;j<sPic.length;j++){
				sPic[j].className="";
			}
			this.className="active";
			clearInterval(timer);
			bigPic.style.left=-632*this.index+'px';
			timer=setInterval(function(){
				next(bigPic);
				sPicGo(1);
			},3000);
		}
	}
	
	//资源区
	resTab('box1');
	
}

function pre(obj){
	var l=obj.offsetLeft;
	if(l>=-1){
		l=-(obj.offsetWidth-632);
	}else{
		l+=633;
	}
	obj.style.left=l+'px';
}
function next(obj){
	var l=obj.offsetLeft;
	if(l<=-(obj.offsetWidth-633)){
		l=0;
	}else{
		l-=631;
	}
	obj.style.left=l+'px';
}

function resTab(id){
	var oBox=document.getElementById(id);
	var oBtn=oBox.getElementsByClassName('res_group');
	var oMain=oBox.getElementsByClassName('res_right');
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i].onclick=function(){
			for(var j=0;j<oBtn.length;j++){
				oBtn[j].className="res_group";
				oMain[j].style.display="none";
			}
			this.className="res_group current2_left";
			oMain[this.index].style.display="block";
			return false;
		}
	}
}