window.onload=function(){
	//搜索栏
	var searchGroup=document.getElementById('search_tab');
	var searchList=searchGroup.getElementsByTagName('a');
	var searchBar=document.getElementById('search-input');
	
	for(var i=0;i<searchList.length;i++){
		searchList[i].onclick=function(){
			for(var j=0;j<searchList.length;j++){
				searchList[j].className="";
			}
			this.className="current";
			return false;
		}
	}
	searchBar.onfocus=function(){
		this.value="";
	}
	searchBar.onblur=function(){
		this.value="请输入关键字";
	}
	
	//左边tab
	var k=0;
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
			k=this.index;
		}
	}
	
	//资源区
	resTab('box1');

}

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
var mb = myBrowser();

function pre(obj){
	var l=obj.offsetLeft;
	if(mb=='FF'){
		if(l>=-1){
			l=-(obj.offsetWidth-632);
		}else{
			l+=633;
		}
	}else{
		if(l>=-1){
			l=-(obj.offsetWidth-632);
		}else{
			l+=632;
		}
	};
	obj.style.left=l+'px';
}
function next(obj){
	var l=obj.offsetLeft;
	if(mb=='FF'){
		if(l<=-(obj.offsetWidth-633)){
			l=0;
		}else{
			l-=631;
		}
	}else{
		if(l<=-(obj.offsetWidth-632)){
			l=0;
		}else{
			l-=632;
		}
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