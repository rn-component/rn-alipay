import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { pay, verify } from 'rn-alipay';

export default function App() {
  const onPay = async () => {
    // 请自行替换为自己服务端生成的 payInfo
    // 参考文档1：https://opendocs.alipay.com/open/02no46
    // 参考文档2：https://opendocs.alipay.com/apis/api_1/alipay.trade.app.pay
    const payInfo = 'alipay_sdk=xxxx&app_id=xxxxxx&biz_content=xxx.........';
    const result = await pay(payInfo);
    console.log('pay result:', result);
  };

  const onVerify = async () => {
    const certifyId = 'b09342d5ce4f835f8a04f97b1c261e9c';
    const certifyUrl =
      'https://openapi.alipay.com/gateway.do?app_cert_sn=53b79698858612b413aec0e3d4c588b3&alipay_root_cert_sn=687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6&method=alipay.user.certify.open.certify&app_id=2019062765761007&charset=utf-8&version=1.0&sign_type=RSA2&timestamp=2022-07-18%2017%3A57%3A52&sign=N%2B1oWX1tNc6Yt%2B1DsJxmmGWVREwrdpFVuzUiuw61yQdP5zUvpouBseofRgLY3T9YJVl%2BOb%2B89esdkbuesLXcnAUBJon1aPQNsn5mbAeUv%2BYtp8jKPCsAbT40Q5F8XNg%2BMCRBk6lncdCRsIlvro4U%2BWME3CwSAI2CDurU5Vx64XCUMIs4pst2oJ4RuZ1PcUXxgy%2FkwR%2FI8PHevTLYvJ5vXBHyOwRg5bd6uJZZ1cDvckTRzVS5QlaM1bPl%2FsHGjz8gi%2BQlt2kMLjjNDr%2F3DRpaFzAKCSSNgRagyJG6bJYfjkykRpPVZYThPCKVFV%2B98dbjR6Lw0YFQ6t0zBP4Y7U1mkA%3D%3D&alipay_sdk=alipay-sdk-nodejs-3.2.0&biz_content=%7B%22certify_id%22%3A%22b09342d5ce4f835f8a04f97b1c261e9c%22%7D';
    const result = await verify(certifyId, certifyUrl);
    console.log('verify result:', result);
  };

  return (
    <View style={styles.container}>
      <Button onPress={onPay} title="支付" />
      <Button onPress={onVerify} title="认证" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
