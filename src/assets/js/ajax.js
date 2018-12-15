// 获取URL参数
// const server = 'http://192.168.1.110:8088/tounty';
const server = 'http://api.fangdai.8raw.com';

const commonURL = (fun) => {
  return server + fun;
}
export default commonURL;

function Ajax (Url, data, fn) {
  $.ajax({
    type: 'post',
    url: Url,
    dataType: 'jsonp',
    data: data,
    // jsonp: 'callbackparam',
    jsonpCallback: 'success_jsonpCallback',
    success: function (data) {
      fn(data);
    },
    error: function (xhr, status, error) {
    }

  });
}

function Ajax_noData (Url, fn) {
  $.ajax({
    type: 'post',
    url: Url,
    dataType: 'jsonp',
    // jsonp: 'callbackparam',
    jsonpCallback: 'success_jsonpCallback',
    success: function (data) {
      fn(data);
    },
    error: function (xhr, status, error) {
      alert(xhr.status);
      alert(xhr.readyState);
      alert(status);
    }
  });
}


