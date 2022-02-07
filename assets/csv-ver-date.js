/**************
行政区划、坐标边界数据发布版本和时间

更新ok_data_level*.csv、ok_geo*.csv后，需要同时更新这里的数据时间
**************/
(function(){
var OpenVer="2021.210510.220114",OpenDate="2022-02-06";

var CsvPubDate=window.CsvPubDate={
	Level4:{
		name:"省市区镇四级行政区划数据"
		,file:"ok_data_level4.csv"
		,version:OpenVer
		,date:OpenDate
	}
	,Geo:{
		name:"省市区三级坐标边界数据"
		,file:"ok_geo.csv"
		,version:OpenVer
		,date:OpenDate
	}
	
	,Geo4:{
		name:"乡镇第4级坐标边界数据"
		,file:"ok_geo4_ETD220206.csv"
		,version:"ETD220206"
		,dates:{//年-月 A排序年.月
  北京:"2022-02",					  天津:"2018",
  河北:"2018",						  山西:"2018",
内蒙古:"2018",						  辽宁:"2021-12",
  吉林:"2015-11 A2020.15",			黑龙江:"2018",
  上海:"2021-12",					  江苏:"2018-06 A2020.18",
  浙江:"2022-02",					  安徽:"2018",
  福建:"2021-12",					  江西:"2018",
  山东:"2021-12",					  河南:"2018",
  湖北:"2018",						  湖南:"2018",
  广东:"2018",						  广西:"2018",
  海南:"2018",						  重庆:"2018",
  四川:"2021-01",					  贵州:"2018",
  云南:"2018",						  西藏:"2018",
  陕西:"2018",						  甘肃:"2018",
  青海:"2018",						  宁夏:"2018",
  新疆:"2018",						  香港:"2018",
  澳门:"2018",						  台湾:""
		}
	}
};


CsvPubDate.TableHTML=function(set){
	set=set||{};
	var Level4=CsvPubDate.Level4;
	var Geo=CsvPubDate.Geo;
	var Geo4=CsvPubDate.Geo4;
	var html=[
'<div>\
<style>\
	.GeoPubDateTable td{word-break: break-all; padding:5px 5px; border:1px solid #ddd;}\
	.GeoPubDateTitle{font-size:18px;color:#0b0; font-weight: bold;}\
	.GeoPubDateTitle2{color:#666;margin-left:30px}\
	.GeoPubDateTitle3{color:#aaa;font-weight: bold}\
	.GeoPubDateName{font-weight: bold;}\
</style>\
<table class="GeoPubDateTable" style="border-collapse: collapse;min-width: 100%;text-align: center;font-size:16px">\
	<tbody>'];
	var SP='<tr><td colspan="8" style="background:#f0f0f0"><div style="height:12px"></div></td></tr>';
	var needSP=false;

if(set.level4){
	if(needSP){
		html.push(SP);
	}needSP=true;
	
	html.push(
	'<tr><td colspan="8"><div style="text-align:left;padding-left:20px">'
	+'<span class="GeoPubDateTitle">'+Level4.name+'</span>'
	+'<span class="GeoPubDateTitle2">文件名: '+Level4.file+'</span>'
	+'<span class="GeoPubDateTitle2">最新版本: '+Level4.version+'</span>'
	+'</div></td></tr>\
	<tr><td class="GeoPubDateTitle3">省份名称</td>\
		<td class="GeoPubDateName">全国所有省</td>\
		<td colspan="6"></td></tr>\
	<tr><td class="GeoPubDateTitle3">更新时间</td>\
		<td>'+Level4.date+'</td>\
		<td colspan="6"></td></tr>'
	);
}
if(set.geo){
	if(needSP){
		html.push(SP);
	}needSP=true;
	
	html.push(
	'<tr><td colspan="8"><div style="text-align:left;padding-left:20px">'
	+'<span class="GeoPubDateTitle">'+Geo.name+'</span>'
	+'<span class="GeoPubDateTitle2">文件名: '+Geo.file+'</span>'
	+'<span class="GeoPubDateTitle2">最新版本: '+Geo.version+'</span>'
	+'</div></td></tr>\
	<tr><td class="GeoPubDateTitle3">省份名称</td>\
		<td class="GeoPubDateName">全国所有省</td>\
		<td colspan="6"></td></tr>\
	<tr><td class="GeoPubDateTitle3">更新时间</td>\
		<td>'+Geo.date+'</td>\
		<td colspan="6"></td></tr>'
	);
};
	
if(set.geo4){
	if(needSP){
		html.push(SP);
	}needSP=true;
	
	html.push(
		'<tr><td colspan="8"><div style="text-align:left;padding-left:20px">'
		+'<span class="GeoPubDateTitle">'+Geo4.name+'</span>'
		+'<span class="GeoPubDateTitle2">文件名: '+Geo4.file+'</span>'
		+'<span class="GeoPubDateTitle2">最新版本: '+Geo4.version+'</span>'
		+'</div></td></tr>'
	);
	
	var dates=[];
	var i=0;
	for(var k in Geo4.dates){
		var v=Geo4.dates[k].split(" A");
		dates.push({k:k,v:v[0],s:v[1]||v[0],idx:i++});
	}
	dates.sort(function(a,b){
		var v=b.s.localeCompare(a.s);
		if(v)return v;
		return a.idx-b.idx;
	});
	var rows=[];
	for(var i=0;i<dates.length;i++){
		var o=dates[i];
		if(i%7==0){
			var row=[];
			for(var j=0;j<7;j++){
				row.push({});
			}
			rows.push(row);
		}
		var obj=rows[rows.length-1][i%7];
		obj.name=o.k;
		obj.date=o.v;
	};
	for(var i=0;i<rows.length;i++){
		if(i>0){
			html.push('<tr><td colspan="8" style="background:#fcfcfc"></td></tr>');
		}
		var row=rows[i];
		var tr1=[],tr2=[];
		tr1.push('<tr><td class="GeoPubDateTitle3">'+(i==0?'省份名称':'')+'</td>');
		tr2.push('<tr><td class="GeoPubDateTitle3">'+(i==0?'更新时间':'')+'</td>');
		for(var j=0;j<row.length;j++){
			var obj=row[j];
			tr1.push('<td class="GeoPubDateName">'+(obj.name?obj.name:"")+'</td>');
			tr2.push('<td>'+(obj.name?obj.date||"-":"")+'</td>');
		}
		tr1.push('</tr>');
		tr2.push('</tr>');
		html.push(tr1.join("\n"),tr2.join("\n"));
	}
};
	
	html.push('\
	</tbody>\
</table>\
</div>');
	return html.join("\n");
};


})();