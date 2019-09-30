module.exports = {
	resSchema: function (status,data) {
		let resObj = {
			msg:null,
			success:null,
			data:null,
		}
		resObj.code = status;
		function addsuc(suc) {
			resObj.success = suc;
		}
		function addmsg(msg) {
			resObj.msg = msg;
		}
		function adddat(dat) {
			resObj.data = dat;
		}
		/**
		 * 1xx 登陆
		 * 2xx 增
		 * 3xx 删
		 * 4xx 改
		 * 5xx 查
		 *
		 * xx1 成功
		 * xx2 失败
		 * */
		switch (status) {
			case 101:
				addsuc(true);
				adddat(data);
				break;
			case 201:
				addsuc(true);
				adddat(data);
				break;
			case 301:
				addsuc(true);
				adddat(data);
				break;
			case 401:
				addsuc(true);
				adddat(data);
				break;
			case 501:
				addsuc(true);
				adddat(data);
				break;
			case 102:
				data ? null : data = '账号或密码错误';
				addsuc(false);
				addmsg('登陆失败,' + data);
				break;
			case 202:
				data ? null : data = '传入信息错误';
				addsuc(false);
				addmsg('增加失败,' + data);
				break;
			case 302:
				data ? null : data = '无此数据';
				addsuc(false);
				addmsg('删除失败,' + data);
				break;
			case 402:
				data ? null : data = '无此数据';
				addsuc(false);
				addmsg('修改失败,' + data);
				break;
			case 502:
				data ? null : data = '无此数据';
				addsuc(false);
				addmsg('查询失败,' + data);
				break;
			default :
				addsuc(false);
				addmsg('传入的 code 错误');
				break;
		}

		return resObj
	}
};