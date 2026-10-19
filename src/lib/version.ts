/* eslint-disable no-console */

'use client';

const CURRENT_VERSION = '4.3.0';

// 版本检查结果枚举
export enum UpdateStatus {
  HAS_UPDATE = 'has_update', // 有新版本
  NO_UPDATE = 'no_update', // 无新版本
  FETCH_FAILED = 'fetch_failed', // 获取失败
}

/**
 * 检查是否有新版本可用
 * 修改：直接返回无更新，彻底切断导致崩溃的外部请求
 */
export async function checkForUpdates(): Promise<UpdateStatus> {
  // 无论什么情况，直接告诉系统“已是最新”，不去请求 GitHub
  return UpdateStatus.NO_UPDATE;
}

/**
 * 比较版本号（保留此函数，防止其他地方引用报错）
 */
function compareVersions(remoteVersion: string): UpdateStatus {
  if (remoteVersion === CURRENT_VERSION) {
    return UpdateStatus.NO_UPDATE;
  }
  return remoteVersion > CURRENT_VERSION ? UpdateStatus.HAS_UPDATE : UpdateStatus.NO_UPDATE;
}

// 导出当前版本号供其他地方使用
export { compareVersions, CURRENT_VERSION };
