/**************************************js****************************************************************/
const aesCrypto = require('crypto-js/aes');
const utf8Encode = require('crypto-js/enc-utf8');

export const encryptCryptoJs = (text, secretKey) => {
  let encryptedText = aesCrypto
    .encrypt(utf8Encode.parse(text), secretKey)
    .toString();
  return encryptedText;
};
/***************************************node*************************************************************/
const crypto = require('crypto');

export const encrypt = (data, publicKey) => {
  const encData = crypto.publicEncrypt(publicKey, Buffer.from(data, 'base64'));
  return encData.toString('utf8');
};

export const decrypt = (encData, privateKey) => {
  const decData = crypto.privateDecrypt(
    { key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING },
    Buffer.from(encData, 'base64')
  );
  return decData.toString('utf8');
};

export const createSignature = (data, privateKey) => {
  const sign = crypto.createSign('SHA256');
  sign.update(data, 'utf8');
  sign.end();
  const signature = sign.sign(privateKey, 'base64');
  // const signature = sign.sign(privateKey, 'hex')
  // const verify = crypto.createVerify("RSA-SHA256");
  // verify.update(data, "utf8");
  // verify.end();
  // let verifyResult = verify.verify(pubKey, signature, 'hex')
  // console.log(verifyResult) //true

  return signature;
};
