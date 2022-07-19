import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-alipay' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const RnAlipay = NativeModules.RnAlipay
  ? NativeModules.RnAlipay
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// 支付
export function pay(orderStr: string): Promise<any> {
  return RnAlipay.pay(orderStr);
}

// 授权
export function authInfo(infoStr: string): Promise<any> {
  return RnAlipay.authInfo(infoStr);
}

// 认证
export function verify(certifyId: string, certifyUrl: string): Promise<any> {
  return RnAlipay.verify(certifyId, certifyUrl);
}
