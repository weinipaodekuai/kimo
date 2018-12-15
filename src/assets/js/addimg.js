
// 上传图片的名字
function get_suffix(filename) {
    var pos = filename.lastIndexOf('.');
    var suffix = '';
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}
const addimgPath = (commodity,box,filename) =>{
    // var commodity = ''//商品
    // var cover ='';//封面图
    var suff = get_suffix(filename);
    // var banner ;//banner图
    // var detail;//详情图
    // var store;
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    var time1 = new Date().Format("yyyyMMddhhmmss");
    var coverdata = time1.substring(0,8);
    var covertime =  time1.substring(9,14);
    var randtime = '';//随机三位数名称
    for(var i = 0; i < 3; i++){
        var r = Math.floor(Math.random() * 10);
        randtime += r;
    }
    var boxname = commodity+'/'+box+'/'+coverdata+'/'+covertime+'_'+randtime+suff;
    return boxname
};
export default  addimgPath
