import AlipaySDK

@objc(RnAlipay)
class RnAlipay: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }

  @objc(pay:withOrderStr:withResolver:withRejecter:)
  func pay(orderStr: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) {

  }
}
