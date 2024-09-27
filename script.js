window.addEventListener('DOMContentLoaded', () => {
  // デバイスのデフォルト言語を取得
  const userLang = navigator.language || navigator.userLanguage;

  // デバイス言語が日本語の場合は `/ja` にリダイレクト
  if (userLang.startsWith('ja')) {
    window.location.href = '/advertising/ja';
  } else {
    // それ以外の場合は `/en` にリダイレクト
    window.location.href = '/advertising/en';
  }
});
