	// 这次我们扩展的是 context 的功能，也就是等会会经常使用到的 ctx 
	/*
		之后我们在设置返回值的时候都是通过
		ctx.body = {
			... 一些需要返回的数据
		}
		我们可以把这些东西给统一封装起来
	*/
	// app/extend/context.js
	module.exports = {
        // 在这里规范一些返回数据的格式
            // 成功
          success(msg = "交易成功", data = null) {
            const isObj = typeof msg === "object";
            isObj && (data = msg);
            return {
              errno: 0,
              message: isObj ? "交易成功" : msg,
              data: data,
            };
          },
              // 返回一个分页列表
          page(msg = "交易成功", data = null) {
            const isObj = typeof msg === "object";
            isObj && (data = msg);
            return {
              errno: 0,
              message: isObj ? "交易成功" : msg,
              ...data,
            };
          },
              // 失败
          fail(message = "交易失败", data = null) {
            const isObj = typeof message === "object";
            isObj && (data = message);
            return {
              errno: 1,
              message: isObj ? "交易失败" : message,
              data: data,
            };
          },
    }
    