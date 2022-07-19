package com.rnalipay

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

import com.alipay.mobile.android.verify.sdk.ServiceFactory
import com.alipay.mobile.android.verify.sdk.interfaces.ICallback
import com.alibaba.fastjson.JSONObject
import com.alipay.sdk.app.PayTask
import com.alipay.sdk.app.AuthTask

class RnAlipayModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "RnAlipay"
  }

  @ReactMethod
  fun authInfo(infoStr: String, promise: Promise) {
    val payRunnable = Runnable {
      val authTask: AuthTask = AuthTask(currentActivity)
      val result = authTask.authV2(infoStr, true)
      promise.resolve(result)
    }
    val payThread = Thread(payRunnable)
    payThread.start()
  }

  @ReactMethod
  fun pay(orderStr: String, promise: Promise) {
    val payRunnable = Runnable {
      val alipay = PayTask(currentActivity)
      val result = alipay.payV2(orderStr, true)
      promise.resolve(result)
    }
    val payThread = Thread(payRunnable)
    payThread.start()
  }

  @ReactMethod
  fun verify(certifyId: String, certifyUrl: String, promise: Promise) {
    val requestData = JSONObject()
    requestData.put("url", certifyUrl)
    requestData.put("certifyId", certifyId)
    requestData.put("bizCode", ServiceFactory.build().getBizCode(currentActivity))

    // 认证
    ServiceFactory.build().startService(currentActivity, requestData,
      ICallback { response ->
        val responseCode = response["resultStatus"]
        promise.resolve(responseCode)
      })
  }
}
