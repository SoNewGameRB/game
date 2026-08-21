# 伐木驛 — Web 版

瀏覽器可直接玩（Godot 4 WebAssembly 匯出）。

## 本機預覽

```powershell
cd build/web
python -m http.server 8765 --bind 127.0.0.1
```

然後打開 http://127.0.0.1:8765/

或直接執行 `tools\serve_web.bat`。

> 不可直接雙擊 `index.html`（`file://` 會失敗），一定要用 HTTP 伺服器。

## 重新匯出

已安裝 Godot 4.7.2 export templates 後：

```powershell
godot --headless --path . --export-release "Web" "build/web/index.html"
```

或在編輯器：**專案 → 匯出 → Web → 匯出專案**。

## 放到作品集（建議）

### 方案 A：itch.io（最簡單）

1. 把 `build/web` 整包壓成 zip
2. 上傳到 [itch.io](https://itch.io) → Kind of project: **HTML**
3. 勾選「This file will be played in the browser」
4. 得到可嵌入的遊玩連結

### 方案 B：GitHub Pages

1. 把 `build/web` 內容推到 repo 的 `docs/` 或 `gh-pages` 分支
2. Repo Settings → Pages → 選對應資料夾
3. 網址類似：`https://你的帳號.github.io/game/`

### 方案 C：嵌入自己的作品集網站

```html
<iframe
  src="https://你的遊玩網址/"
  width="1280"
  height="720"
  allow="gamepad *; autoplay"
  style="border:0;max-width:100%;aspect-ratio:16/9"
></iframe>
```

## 注意

- 需要支援 **WebGL 2** 的瀏覽器（Chrome / Firefox / Edge 較穩）
- 目前為 **單執行緒** 匯出，方便託管，不必特別設 COOP/COEP headers
- Web 上「離開遊戲」無法關分頁，會提示手動關閉
- 第一次載入約數十 MB（wasm + pck + 內嵌中文字型），建議作品頁寫「載入中請稍候」
- UI 使用內嵌 `Noto Sans CJK TC Bold`（`assets/fonts/`），不依賴瀏覽器系統字型
