# RN Alipay

Alipay SDK with React Native 0.68+ and Swift / Kotlin.

## Installation

```sh
npm install rn-alipay
```

## Usage

### Import

```js
import { pay, verify } from "rn-alipay";
```

### Pay

```js
// doc：https://opendocs.alipay.com/open/02no46
// doc：https://opendocs.alipay.com/apis/api_1/alipay.trade.app.pay
const payInfo = 'alipay_sdk=xxxx&app_id=xxxxxx&biz_content=xxx.........';
const result = await pay(payInfo);
console.log('pay result:', result);
```

### Verify

```js
const certifyId = 'xxxx.....';
const certifyUrl = 'https://openapi.alipay.com/gateway.do?app_cert_sn=xxxxxxx....';
const result = await verify(certifyId, certifyUrl);
console.log('verify result:', result);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
