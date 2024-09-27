window.addEventListener('DOMContentLoaded', () => {
  // デバイスのデフォルト言語を取得
  const userLang = navigator.language || navigator.userLanguage;

  // デバイス言語が日本語の場合は `/ja` にリダイレクト
  if (userLang.startsWith('ja')) {
    window.location.href = 'https://rules.cer.f5.si/advertising/ja/index.html';
  } else {
    // それ以外の場合は `/en` にリダイレクト
    window.location.href = 'https://rules.cer.f5.si/advertising/en/index.html';
  }
});
