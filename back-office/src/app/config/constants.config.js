export default class Constants {
  static get apiBaseUrl() {
    return 'http://localhost:9000/'; // 'http://localhost:1988/';
    // return 'http://akclinicapi.azurewebsites.net/';
  }

  static set apiBaseUrl(param) {
    throw new Error('apiBaseUrl property is readOnly');
  }

  static get clientId() {
    return 'AkClinicApp';
  }

  static set clientId(param) {
    throw new Error('clientId property is readOnly');
  }

  static get blobBaseUrl() {
    return 'http://scanandgo.blob.core.windows.net/ak-clinic-file';
  }

  static set blobBaseUrl(param) {
    throw new Error('blobBaseUrl property is readOnly');
  }

  static get contentTypeApplicationJson() {
    return { headers: { 'Content-Type': 'application/json; charset=utf-8' } };
  }

  static set contentTypeApplicationJson(param) {
    throw new Error('contentTypeApplicationJson property is readOnly');
  }

  static get contentTypeFormUrlEncoded() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }

  static set contentTypeFormUrlEncoded(param) {
    throw new Error('contentTypeFormUrlEncoded property is readOnly');
  }

  static get localStorageKey() {
    return 'AkClinicAppUser';
  }

  static set localStorageKey(param) {
    throw new Error('localStorageKey property is readOnly');
  }
}
