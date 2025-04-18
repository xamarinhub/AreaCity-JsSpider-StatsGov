**【[源GitHub仓库](https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov)】 | 【[Gitee镜像库](https://gitee.com/xiangyuecn/AreaCity-JsSpider-StatsGov)】如果本文档图片没有显示，请手动切换到Gitee镜像库阅读文档。**

# :open_book:省市区数据采集并标注拼音、坐标和边界范围

- [【在线测试和预览】省市区镇四级行政区划数据](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/)：支持在线生成JSON、多级联动js；
- [【在线测试和预览】ECharts Map四级下钻在线测试和预览+代码生成](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/geo-echarts.html)：坐标边界范围在线测试和预览；
- [【转换工具】AreaCity-Geo格式转换工具软件](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/AreaCity-Geo-Transform-Tools.html)：csv文件导入数据库，坐标、边界范围转换（支持转成`sql`、`shp`、`geojson`）；
- [【查询工具】AreaCity-Query-Geometry](https://github.com/xiangyuecn/AreaCity-Query-Geometry)（[Gitee镜像库](https://gitee.com/xiangyuecn/AreaCity-Query-Geometry)）：高性能的坐标数据、边界数据查询工具，Java开源程序、带http查询接口，内存占用低。


## 数据下载

当前最新版数据在 **src文件夹** 内，此数据更新于2022-09-07，整合了 `统计局2021-12-30`、`民政部2022-03-21`、`腾讯地图行政区划2022-07-07`、`高德地图行政区划采集当天` 数据。

可在 [GitHub Releases](https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/releases) 中下载最新发布数据文件，也可直接打开 `src/采集到的数据` 文件夹内的文件来使用。

如果无法打开GitHub或者下载缓慢可以通过 [Gitee Pages外链](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/download.html) 来下载：
- [【下载】省市区 三级行政区划数据](https://gitee.com/xiangyuecn/AreaCity-JsSpider-StatsGov/raw/master/src/采集到的数据/ok_data_level3.csv) ： /src/采集到的数据/ok_data_level3.csv (200KB+)；
-  [【下载】省市区镇 四级行政区划数据](https://gitee.com/xiangyuecn/AreaCity-JsSpider-StatsGov/raw/master/src/采集到的数据/ok_data_level4.csv) ： /src/采集到的数据/ok_data_level4.csv (3MB+大小) ；
- [【下载】【GEO三级】省市区 坐标和边界 数据下载](https://gitee.com/xiangyuecn/AreaCity-JsSpider-StatsGov/raw/master/src/采集到的数据/ok_geo.csv.7z) ： /src/采集到的数据/ok_geo.csv.7z (13MB+压缩包 解压后130M+) ；
- [【下载】【GEO四级】乡镇 坐标和边界 数据下载](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/geo-level4.html) [AD]： 乡镇第4级坐标边界数据 ok_geo4_*.csv，为付费数据 （广告、闭源，90MB+压缩包 导出后300M+） 。

> csv纯文本文件可以非常方便解析成其他格式；如果在使用csv文件过程中出现乱码、错乱等情况，需自行调对utf-8（带BOM）编码，文本限定符为`"`。
> 
> 通过本库提供的 [AreaCity-Geo格式转换工具](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/AreaCity-Geo-Transform-Tools.html) 可快速方便的将行政区划、坐标、边界范围csv文件导入数据库，并且提供格式转换功能（shp、geojson、sql），欢迎下载使用。边界导出成geojson后可通过 [AreaCity-Query-Geometry](https://github.com/xiangyuecn/AreaCity-Query-Geometry) Java开源程序进行高性能的坐标数据、边界数据查询。


[​](?)

**如需数据、功能定制，网站、App、小程序、前端后端开发等需求；矢量专题地图绘制、修改，前端地图、大屏、ECharts数据展示开发，后端数据处理、接口开发；请加本文档下面的QQ群，联系群主（即作者），谢谢~**




[​](?)

[​](?)

[​](?)

[​](?)

[​](?)


<p align="center"><a href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov"><img width="100" src="https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/icon.png" alt="AreaCity logo"></a></p>

<p align="center">
  <a title="Stars" href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov"><img src="https://img.shields.io/github/stars/xiangyuecn/AreaCity-JsSpider-StatsGov?color=15822e&logo=github" alt="Stars"></a>
  <a title="Forks" href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov"><img src="https://img.shields.io/github/forks/xiangyuecn/AreaCity-JsSpider-StatsGov?color=15822e&logo=github" alt="Forks"></a>
  <a title="Releases Downloads" href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/releases"><img src="https://img.shields.io/github/downloads/xiangyuecn/AreaCity-JsSpider-StatsGov/total?color=15822e&logo=github" alt="Releases Downloads"></a>
  <a title="Version" href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/releases"><img src="https://img.shields.io/github/v/release/xiangyuecn/AreaCity-JsSpider-StatsGov?color=f60&label=version&logo=github" alt="Version"></a>
  <a title="License" href="https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/blob/master/LICENSE"><img src="https://img.shields.io/github/license/xiangyuecn/AreaCity-JsSpider-StatsGov?color=f60&logo=github" alt="License"></a>
</p>


[​](?)

[​](?)


## 如何clone: Gitee镜像库加速
由于仓库内的历史记录数据很大，所以直接clone会很慢的，加上`--depth 1`提取最新版的数据即可。
``` java
//Gitee镜像仓库: 速度快
git clone --depth 1 https://gitee.com/xiangyuecn/AreaCity-JsSpider-StatsGov.git

//源GitHub仓库: 可能比较慢或无法访问
git clone --depth 1 https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov.git
```


## 【QQ群】交流与支持

欢迎加QQ群：①群 484560085、②群 626141661，纯小写口令：`areacity`

<img src="https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/qq_group_484560085.png" width="220px">



[​](?)

[​](?)


## 数据源

- [国家统计局](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/) ：统计用区划和城乡划分代码，此数据比较齐全但是比较杂，并且数据是一年一更可能会存在滞后，需额外移除和处理开发区、经济区、高新区、国家级新区等区域；此数据源为省市区三级数据的主要数据源，乡镇级辅助数据源。

- [民政部](http://www.mca.gov.cn/article/sj/xzqh/) ：行政区划代码，提供省市区三级数据，一月一更（不过2022半年没有更新）；为辅助数据源。

- [腾讯地图行政区划](https://lbs.qq.com/webservice_v1/guide-region.html)：提供省市区镇四级数据，更新比较频繁；为乡镇级主要数据源，省市区三级辅助数据源。

- [高德地图行政区域](https://lbs.amap.com/api/webservice/guide/api/district)：提供省市区镇数据，实际采用前三级，更新比较频繁但具体时间未知；为辅助数据源。

- [高德地图坐标和行政区域边界范围](https://lbs.amap.com/api/javascript-api/example/district-search/draw-district-boundaries)：当城市数据有变化时，主动从高德查询坐标和边界信息。




## 【字段】ok_data_level*.csv - 行政区划数据表
此表为省市区镇三级、四级行政区划数据表，可[在线测试预览](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/)（支持转成json、生成多级联动js代码），可使用 [AreaCity-Geo格式转换工具软件](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/AreaCity-Geo-Transform-Tools.html) 直接导入数据库。

字段|类型|描述
:--:|:--:|--
id|int|城市编号；省市区三级为统计局的编号经过去除后缀的`0{3,6,8}`得到的短编号，港澳台编号为民政部的编号；如果是添加的数据（国外），此编号为自定义编号；乡镇级主要为腾讯地图行政区划的编号，大部分和统计局的数据一致，约7.5%（约3000个）的乡镇级不一致；如果某级缺失(如：省直辖县级市、新增城市)，会用上级数据进行补齐，编号为上级结尾添加0{2,3}，*注意如果要恢复长编号时（简单的补上00）已有的ID会和添加的ID产生冲突，比如4位恢复到6位将导致部分上下级ID冲突，恢复时这些新加的数据要进行特殊处理*。
pid|int|上级ID
deep|int|层级深度；0：省，1：市，2：区，3：镇
name|string|`如：武汉`，为数据源原始名称精简过后的短名称，和ext_name字段值的前半部分完全相同，如需完整名称请使用ext_name字段
pinyin_prefix|string|`如：w、~1`，为`name`的拼音前缀，取的是`pinyin`第一个字母`a-z`，或港澳台、国外自定义前缀`~1、~4`；用来排序时应当先根据拼音前缀的首字母来排序，相同的再根据前缀+名称进行排序
pinyin|string|`如：wu han`，为`name`的完整拼音
ext_id|long|数据源原始的编号；如果是添加的数据，此编号为0；此编号并非唯一，不可代替id使用，比如填充的数据将会和上级使用相同的编号
ext_name|string|`如：武汉市`，为数据源原始的完整名称，name字段值就是本字段删掉省市等后缀精简来的，如需完整名称请使用本字段

## 【字段】ok_geo.csv - 坐标边界表
此表为坐标和行政区域边界范围数据表，可[在线测试预览](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/geo-echarts.html)；此表含省市区三级不含第四级，如需乡镇级坐标边界数据[请到此下载](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/geo-level4.html)；因为数据文件过大（130M+），所以分开存储。

由于边界数据的解析比较复杂，请参考[src/map_geo_格式化.js](https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/blob/master/src/%E5%9D%90%E6%A0%87%E5%92%8C%E8%BE%B9%E7%95%8C/map_geo_%E6%A0%BC%E5%BC%8F%E5%8C%96.js)内的SQL Server的解析语句，或者使用 [AreaCity-Geo格式转换工具软件](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/AreaCity-Geo-Transform-Tools.html) 直接导入数据库，或者转换成`shp`、`geojson`、`sql`格式。

如果需要查询坐标对应的城市、查询城市或下级的边界数据，可下载 [AreaCity-Query-Geometry](https://github.com/xiangyuecn/AreaCity-Query-Geometry) Java开源程序进行高性能的查询，内存占用低，比数据库查询快几百倍。

字段|类型|描述
:--:|:--:|--
id|int|和`ok_data_level*.csv`表中的`ID`相同，通过这个`ID`关联到省市区具体数据，`map_geo_格式化.js`中有数据合并SQL语句
pid|int|上级ID
deep|int|层级深度；0：省，1：市，2：区
name|string|`如：罗湖区`，城市完整名称
ext_path|string|`如：广东省 深圳市 罗湖区`，为省市区三级完整名称，中间用空格分隔
geo|string|城市中心坐标，高德地图`GCJ-02`火星坐标系。格式："lng lat" or "EMPTY"，少量的EMPTY（仅台湾的城市、国外）代表此城市没有抓取到坐标信息
polygon|string|行政区域边界，高德地图`GCJ-02`火星坐标系。格式："lng lat,...;lng lat,..." or "EMPTY"，少量的EMPTY（仅台湾的城市、国外）代表此城市没有抓取到边界信息；存在多个地块(如海岛、飞地)时用`;`分隔，每个地块的坐标点用`,`分隔，特别要注意：多个地块组合在一起可能是[MULTIPOLYGON](https://docs.microsoft.com/zh-cn/sql/relational-databases/spatial/multipolygon?view=sql-server-2014)或者[POLYGON](https://docs.microsoft.com/zh-cn/sql/relational-databases/spatial/polygon?view=sql-server-2014)，需用工具进行计算和对数据进行验证




[​](?)

[​](?)

## 数据有效性和完整性
本库会尽量和民政部的更新频率保持一致，但由于最为主要的两个数据源`国家统计局`、`腾讯地图行政区划`更新频度并没有民政部高；因此省市区三级准确度和民政部准确度是一量级，并且要更完整些；第四级乡镇级主要由`腾讯地图行政区划`提供，腾讯数据源并不经常更新，因此会导致小部分新增、调整的城市第四级没有数据（会用上级数据补齐），使用前应该考虑此缺陷。

数据通过使用上级数据补齐的形式（具体细节请参考后面的数据规则），使得任何一个数据都能满足省市区镇4级结构，没有孤立的（ID全局唯一），因此不管从哪级进行下级选择，都能进行有效操作。可以通过ID结构来识别这种补齐填充的数据，只要ID为上级的ID+多个0，就代表此数据为补齐填充数据，比如：东莞（4419）-东莞（441900），很容易鉴别出441900为补齐用的填充数据。

会发生补齐行为的数据很少，约50来个（不含台湾），主要为：直筒子市（东莞、儋州等）、省直辖县级市（济源、潜江等），他们的下一级仅有补齐的这条数据。另外直辖市（北京、天津等）下级也仅有一条数据，ID结尾为01（不包括重庆，重庆下级分成了市、县两个）。

直筒子等这种为什么不直接把下级往上提一级来做区级，采用补齐填充的方式来对齐数据的原因，请参考[issue#9](https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/issues/9)。

数据中不包含大部分[行政管理区](https://baike.baidu.com/item/%E8%A1%8C%E6%94%BF%E7%AE%A1%E7%90%86%E5%8C%BA/17184852)，比如：雄安新区、天府新区、苏州工业园区等，请自行查阅和[行政区划](https://baike.baidu.com/item/%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92/4655526)的区别。



## 数据更新日志

- 2021.220707.220907版(更新时间: 2022-09-07)采集了4层，省、市、区、镇，来源：[统计局2021版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2021/index.html)；省市区3级合并了[民政部2022-03-21数据](http://www.mca.gov.cn/article/sj/xzqh/1980/202203/20220300040708.shtml)、[高德地图行政区域](https://lbs.amap.com/api/webservice/guide/api/district)、[腾讯地图行政区划v20220707](https://lbs.qq.com/webservice_v1/guide-region.html)数据；乡镇级采用腾讯地图行政区划作为主要数据，综合高德和统计局的乡镇级。采集高德省市区三级坐标和行政区域边界范围。
- 2020.210510.1103版(2021)采集了4层，省、市、区、镇，来源：[统计局2020版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2020/index.html)；省市区3级合并了[民政部2021-05-10数据](http://www.mca.gov.cn/article/sj/xzqh/1980/202105/20210500033655.shtml)、[高德地图行政区域](https://lbs.amap.com/api/webservice/guide/api/district)、[腾讯地图行政区划v20211103](https://lbs.qq.com/webservice_v1/guide-region.html)数据；乡镇级采用腾讯地图行政区划作为主要数据，综合高德和统计局的乡镇级。采集高德省市区三级坐标和行政区域边界范围。
- 2020.201120.0814版(2020)采集了4层，省、市、区、镇，来源：[统计局2020版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2020/index.html)；省市区3级合并了[民政部2020-11-20数据](http://www.mca.gov.cn/article/sj/xzqh/2020/202011/20201100030582.shtml)、[高德地图行政区域](https://lbs.amap.com/api/webservice/guide/api/district)、[腾讯地图行政区划v20200814](https://lbs.qq.com/webservice_v1/guide-region.html)数据；乡镇级采用腾讯地图行政区划作为主要数据，综合高德和统计局的乡镇级。采集高德省市区三级坐标和行政区域边界范围。
- 2019.200925.0814版(2020)采集了4层，省、市、区、镇，来源：[统计局2019版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2019/index.html)；省市区3级合并了[民政部2020-09-25数据](http://www.mca.gov.cn/article/sj/xzqh/2020/2020/2020092500801.html)、[高德地图行政区域](https://lbs.amap.com/api/webservice/guide/api/district)、[腾讯地图行政区划v20200814](https://lbs.qq.com/webservice_v1/guide-region.html)数据；乡镇级采用腾讯地图行政区划作为主要数据，综合高德和统计局的乡镇级。采集高德省市区三级坐标和行政区域边界范围。
- 2018版(2019)采集了4层，省、市、区、镇，来源：[统计局2018版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2018/index.html)；省市区3级额外合并了[民政部2019-08-27数据](http://www.mca.gov.cn/article/sj/xzqh/2019/201908/201908271607.html)。采集高德省市区三级坐标和行政区域边界范围。
- 2017版(2018)采集了3层，省、市、区，来源：[统计局2017版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2017/index.html)。
- 2016版(2017)采集了3层，省、市、区，来源：[统计局2016版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/index.html)。
- 2013版(2013)采集了4层，省、市、区、镇，来源：[统计局2013版数据](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2013/index.html)。





[​](?)

[​](?)

[​](?)



# :open_book:在线测试工具

在线测试工具地址：[https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/)

此工具主要用于将`ok_data_level*.csv`四级行政区划数据文件转换成别的格式，另外提供省市区多级联动测试，并且可生成js源码（含数据）下载，3级联动生成的文件紧凑版68kb，4级联动紧凑版1mb大小。

## 工具支持：
1. 省市区镇四级行政区划数据预览和测试。
2. 将csv数据导出成压缩后的紧凑版js格式纯数据文件，省市区3级数据65kb大小。
3. 将csv数据导出成JSON对象、JSON数组纯数据文件，省市区3级数据120kb+。
4. 网页版省市区镇多级联动测试。
5. 网页版省市区镇多级联动js代码生成（含数据）。

## 相关截图

行政区划数据在线转换+多级联动：

![](assets/tools.png)

ECharts + 高德地图四级下钻：

![](assets/tools_map.png)







[​](?)

[​](?)

[​](?)


# :open_book:格式转换工具-PC版软件

[AreaCity-Geo格式转换工具软件](https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/assets/AreaCity-Geo-Transform-Tools.html)用于将采集到的 `ok_geo.csv` 省市区乡镇坐标和边界范围文件转成其他格式，也支持将 `ok_data_level*.csv` 省市区镇行政区划数据导入数据库。

此软件可免费使用，但有些功能会受到限制，比如省市区边界数据：每次转换操作最多导出全国所有省级、或一个城市和它的下一级数据，可付费升级为完整版。

## 工具支持：
1. 将 ok_geo.csv坐标边界 转成 ESRI Shapefile (.shp) 文件。
2. 将 ok_geo.csv坐标边界 转成 GeoJSON (.json) 文件，支持按层级拆分成多级json文件。
3. 将 ok_geo.csv坐标边界 转成 SQL (.sql) 文件，支持多种数据库格式。
4. 将 ok_geo.csv坐标边界 导入 MySQL 5.0+、SQL Server 2008+ 数据库。
5. 将 ok_data_level*.csv省市区镇行政区划 转成 SQL 文件、导入 数据库；可同时将坐标、边界范围附加到同一表中。
6. 支持坐标系转换，ok_geo默认为GCJ-02火星坐标系，支持转换成：BD-09、WGS-84 GPS、CGCS2000。
7. 可执行自定义 JavaScript 脚本，可扩展出丰富功能。
8. 转换精度高，速度快，内存占用小，3-5分钟左右可转换完所有数据。
9. 支持Win10、Win8、Win7，32位、64位系统使用（其他系统装虚拟机可用）。


## 相关截图

工具软件界面：

![](assets/AGT-Images/a0.png)

导入MySQL查询效果：

![](assets/AGT-Images/sy-4.png)

导入SQL Server查询效果：

![](assets/AGT-Images/sy-5.png)

省市区三级边界（ArcMap Asia_Lambert_Conformal_Conic投影）：

![](assets/AGT-Images/sy-2.png)

全国乡镇边界（ArcMap Asia_Lambert_Conformal_Conic投影）：

![](assets/geo-level4/preview-arcmap-full.png)

湖北省市和乡镇边界（QGIS Asia_Lambert_Conformal_Conic投影）：

![](assets/geo-level4/preview-qgis-wuhan.png)

湖北省乡镇边界（SQL Server查询空间结果）：

![](assets/geo-level4/z01.png)










[​](?)

[​](?)

[​](?)


# :open_book:坐标边界查询工具 - AreaCity-Query-Geometry
[AreaCity-Query-Geometry](https://github.com/xiangyuecn/AreaCity-Query-Geometry) （[Gitee镜像库](https://gitee.com/xiangyuecn/AreaCity-Query-Geometry)）是一个高性能的坐标数据、边界数据查询工具，Java开源程序、带http查询接口，内存占用低，比数据库查询快几百倍；先用上面的格式转换工具将ok_geo.csv转成geojson格式，然后运行此工具即可测试使用。

## 工具支持：
- 查询一个坐标点对应的城市信息；
- 查询一条路径经过的所有城市；
- 查询一个矢量范围覆盖的所有城市；
- 查询一个城市或下一级所有边界数据（WKT格式）；
- 支持通过HTTP API服务进行查询调用；
- 支持通过Java代码进行查询调用；
- 源码简单，包括测试bat脚本共5个文件，无需IDE即可修改和运行，copy即用。

## 测试截图

![](assets/use_aqg-console.png)









[​](?)

[​](?)

[​](?)


# :open_book:数据规则和相关问题

1. id编号和国家统计局的编号基本一致，方便以后更新，有很多网站接口数据中城市编号是和这个基本是一致的，包括民政部、腾讯地图和高德地图的城市数据这套编号都是大部分通用的。

2. `东莞`、`中山`、`儋州`等不设区的直筒子市没有第三级区级，自动添加同名的一级作为区级，以保证整个数据结构的一致性，添加的城区编号以上级的ID结尾加两个0作为新ID，此结构ID兼容性还不错，比如：东莞（4419）下级只有一个区 东莞（441900），*但结尾加00后会导致精简过的ID如果要恢复成指定的位数时需要将这些添加的区域进行特殊处理，否则`4419`扩充到6位后会变成`441900`和下级产生冲突*。

3. 省直辖县级市（河南济源、湖北潜江、海南五指山、新[​](?FixGitee_Block)疆昆玉等）根据编号来看本来只能放到区级，但为了便于用户选择，所有直辖市自动添加一个同名的市级，比如：`湖北-直辖市-仙桃-*镇` 调整后为 `湖北-仙桃-仙桃-*镇`，新添加数据的编号规则和第二条规则相同。

4. 如果市、区没有下级，自动添加同名的一个城镇作为下级，编号规则和上一条规则相同，以保证数据层次的一致性（任何一个数据都能满足省市区镇4级结构，没有孤立的）；比如：`福建-泉州-金门`没有镇，调整后为`福建-泉州-金门-金门`；另外从民政部等数据源中补全的新增城市也会缺失下级，照此规则自动补齐。

5. 台湾数据只有省市区三级没有乡镇级，因此乡镇级通过前面几条规则自动补齐；香港、澳门数据源有两级，当做直筒子市来处理，比如把香港当做东莞，从面积和人口来看还算合理，因此港澳数据中省市区三级是完全相同的，第四级乡镇级才有城市数据，如：香港-香港-香港-湾仔区。

6. 地区名字是直接去掉常见的后缀进行精简的，如直接清除结尾的`市|区|县|街道办事处|XX族自治X`，数量较少并且移除会导致部分名字产生歧义的后缀并未精简。

7. 省市区前三级数据的合并：统计局采集过来的数据会先和民政部的数据交叉对比后进行合并；由于统计局的数据明显的滞后，民政部内新添加的市、区将不会有乡镇级（自动补齐同名乡镇级）；如果民政部数据存在明文撤销的市、区，那么合并的时候会删除统计局对应的数据；如果统计局中的数据在民政部数据内不存在，将原样保留。高德地图行政区域会和腾讯地图行政区划数据进行交叉对比，然后择优选取需要的数据。最后(统计局+民政部)和(高德+腾讯的数据)的前三级数据进行交叉融合，得到的【省市区】 ≈ 【统计局的数据】 - 【160来个开发区、经济区、高新区、国家级新区】 - 【撤销城市】 + 【新设城市】 + 【港澳台】。

8. 第四级乡镇级主要采用腾讯地图行政区划数据，综合高德和统计局的数据，和统计局的数据差异在3000个左右，占比7.5%(3000/40000)，得到的【乡镇级】 ≈ 【腾讯地图行政区划数据】。

9. 省市区三级的坐标和行政区域边界范围数据从高德采集，省市区总计3300+条数据，少部分城市未采集到数据（仅台湾的城市、国外）。关于未获取到坐标或边界的城市，本采集方案采取不处理策略，空着就空着，覆盖主要城市和主要人群，未覆盖区域实际使用过程中应该进行降级等处理。比如：尽最大可能的根据用户坐标来确定用户所在城市，因为存在没有边界信息的区域，未匹配到的应使用ip等城市识别方法。得到的【坐标和边界】 = 【高德地图数据】。

10. 数据中不包含大部分[行政管理区](https://baike.baidu.com/item/%E8%A1%8C%E6%94%BF%E7%AE%A1%E7%90%86%E5%8C%BA/17184852)，比如：雄安新区、天府新区、苏州工业园区等。

11. 参考链接：[行政区划](https://baike.baidu.com/item/%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92/4655526)，[统计用区划代码和城乡划分代码编制规则](http://www.stats.gov.cn/tjsj/tjbz/200911/t20091125_8667.html)，[民政部发布的行政区划代码](http://www.mca.gov.cn/article/sj/xzqh/)。


## 为什么不直接用统计局的数据

1. 存在滞后，更新没有民政部和其他数据源频繁，新采集却是老数据，并且明知道存在新数据，强迫症又要犯了。
2. 统计局的数据比较齐全但是比较杂，靠一个人来分开整理几乎不可能；比如：统计局数据包含了160多个经济区、开发区，这种区划应该算专门的区域（[行政管理区](https://baike.baidu.com/item/%E8%A1%8C%E6%94%BF%E7%AE%A1%E7%90%86%E5%8C%BA/17184852)），一般由多个城市的区域组成，在区级内算是重复的区域，因此需要剔除，但剔除后这些区域下面的乡镇级需要划分到实际的归属城市下面，这就很困难了，因为量太大了，一个个去查归属地几乎不可能。
3. 统计局的数据也存在缺失数据，如：港澳台、昆玉市、双河市。
4. 其他平台的数据在感官上显得都[不够完美](https://v2ex.com/t/607306)，综合一下舒畅多了。


## 拼音标注和排序

### 拼音源
省市区这三级采用在线拼音工具转换，据说依据《新华字典》、《现代汉语词典》等规范性辞书校对，多音字地名大部分能正确拼音，`重庆:chong qing`，`朝阳:chao yang`，`郫都:pi du`，`闵行:min hang`，`康巴什:kang ba shi`、`六安市:lu an shi`；转换完成后会和腾讯地图行政区划存在的拼音进行对比校正。

乡镇级以下地名采用本地拼音库（`assets/pinyin-python-server`）转换，准确度没有省市区的高。

### 拼音前缀
目前采用的是截取第一个字拼音的首字母，和港澳台、国外特殊指定前缀。

### 排序方案：

方案一(2016版废弃)：取每个字的拼音首字母排序，比如：`河北:hb` `湖北:hb` `黑龙江:hlj` `河南:hn` `湖南:hn`

方案二(2018版废弃)：取的是第一个字前两个字母和后两个字首字母排序：`河北:heb` `黑龙江:helj` `河南:hen` `湖北:hub` `湖南:hun`

方案三(返璞归真)：取第拼音前缀首字母进行排序，如果两个字母相同，再使用(首字母前缀或自定义前缀)+(名称)进行排序：`河北:h.河北` `河南:h.河南` `黑龙江:h.黑龙江` `湖北:h.湖北` `湖南:h.湖南` `香港:~1.香港` `澳门:~2.澳门`

排序方案三看起来好些；为什么不直接用名称文本进行排序，我怕不同环境下对多音字不友好，最差情况下也不会比方案一差，并且排序可透过前缀实施自定义控制。


### 修[​](?FixGitee_Block)正数据

- [issues/2](https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/issues/2) `乐亭县` 的 `乐`读`lào` ，此县下面的`乐亭`读音均已修[​](?FixGitee_Block)正。
- [2020-8-23] QQ:85005150反馈 `宕昌县` 的 `宕` 读 `tàn`。
- [2021-2-21] QQ:85005150反馈 `洪洞县` 的 `洞` 读 `tong`，`lve` 改成 `lue`，和其他一些已知读音问题。





[​](?)

[​](?)

[​](?)


# :open_book:使用js自行采集

在低版本chrome控制台内运行1、2、3打头的文件即可完成采集，这些文件按文件名顺序执行。环境配置好的情况下完成一次采集大概30分钟内。

最新采集代码内对拼音转换的接口变化蛮大，由于优秀的那个公网接口采取了IP限制措施，就算使用了全自动的切换代理，全量转换还是极为缓慢，因此采用了本地转换接口和公网转换接口结合的办法，省市区三级采用公网接口，其他的采用本地接口。公网接口转换的正确度极高，本地的略差那么一点。

统计局官网也会对请求进行限制，超过一定量的请求后会要求输入验证码。只要没有禁用浏览器缓存，一个统计局url请求过一次就不再次发起网络请求（会走缓存），最多会产生4000个有效网络请求，发现要输入验证码时，重新开始采集即可，有缓存的非常快速。


## 采集环境参考

chrome 控制台，当前数据采集使用的chrome版本：`Chrome 97` + `Chrome 80`，chrome越来越难用（[简单制作chrome便携版实现多版本共存](https://github.com/xiangyuecn/Docs/blob/master/Other/%E8%87%AA%E5%B7%B1%E5%88%B6%E4%BD%9Cchrome%E4%BE%BF%E6%90%BA%E7%89%88%E5%AE%9E%E7%8E%B0%E5%A4%9A%E7%89%88%E6%9C%AC%E5%85%B1%E5%AD%98.md)）。

2022年以前统计局数据乱码的根本原因在于统计局服务器响应的内容编码为`gb2312`（2022已采用utf-8编码无此问题），但服务器响应头只给了`Content-Type: text/html`，因此可用Fiddler篡改`Content-Type`响应头为`Content-Type: text/html; charset=gb2312`也可解决新版Chrome乱码问题。


## 行政区划数据采集

1. 按顺序用文本编辑器打开1-3打头的js文件，阅读源码开头的注释，用浏览器打开注释内相应的目标页面。
2. 在浏览器页面内打开控制台，控制台中导入需要的数据。
3. 复制js文件内的源码到控制台内执行。
4. 数据采集或转换完成会自动弹出下载，保存好文件，然后处理下一个1-3打头的js文件。


## 坐标和行政区域边界采集

使用`坐标和边界`目录内的`map_geo.js`、`map_geo_格式化.js`在[高德地图测试页面](https://lbs.amap.com/api/javascript-api/example/district-search/draw-district-boundaries)，根据文件内的说明即可完成采集。





[​](?)

[​](?)

[​](?)


# :open_book:其他资源
- 行政区划吧：[百度贴吧链接](https://tieba.baidu.com/f?kw=%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92)，一个指点江山有味道的吧，区划变更先知道
- 全国基础地理数据库：[http://www.webmap.cn](http://www.webmap.cn)
- OpenStreetMap：[https://www.openstreetmap.org](https://www.openstreetmap.org)
- 含街道居委会（五级）数据：[https://github.com/modood/Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)



[​](?)

[​](?)


# :star:捐赠
如果这个库有帮助到您，请 Star 一下。

您也可以使用支付宝或微信打赏作者：

![](https://xiangyuecn.gitee.io/recorder/assets/donate-alipay.png)  ![](https://xiangyuecn.gitee.io/recorder/assets/donate-weixin.png)
