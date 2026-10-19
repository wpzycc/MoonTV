/* eslint-disable no-console */

'use client';

const CURRENT_VERSION = '4.3.0';

// 版本检查结果枚举
export enum UpdateStatus {
  HAS_UPDATE = 'has_update',
  NO_UPDATE = 'no_update',
  FETCH_FAILED = 'fetch_failed',
}

// 直接返回“无更新”，彻底干掉那个会导致崩溃的 fetch 请求
export async function checkForUpdates(): Promise<UpdateStatus> {
  // 注释掉原有的网络请求逻辑
  /*
  const VERSION_CHECK_URLS = [...];
  ...原本的代码...
  */
  
  // 永远返回无更新状态，页面就不会去读取那个 undefined 的版本号了
  return UpdateStatus.NO_UPDATE;
}

// 导出当前版本号供其他地方使用
export { CURRENT_VERSION };
