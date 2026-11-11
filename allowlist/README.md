# 将扩展（crx）加入白名单

* [Windows](#windows)
* [macOS](#macos)
* [Linux](#linux)

### Windows

事先提醒：添加白名单策略后，扩展页面上会出现一条提示 *Your browser is managed by your organisation*（且部分设置（如安全 DNS）会被禁用）。\
要移除该提示，你需要再次从注册表中删除所添加的策略（运行 regedit，并在 HKEY_LOCAL_MACHINE\SOFTWARE\Policies 中搜索公司/浏览器）。

如果你仍想将扩展加入白名单：

以管理员身份运行扩展的 allowlist 文件夹（解压后）中的一个 reg 文件。\
\* 对于 Edge 116+，你可能还需要运行 *Forcelist* reg 文件（同时提供了可撤销的 reg 文件），或改用*加载解压版*安装。\
\* 对于其他浏览器，请编辑 reg 文件（xml）：在注册表中查找浏览器路径。

如果你已向白名单添加了扩展，则应将 "1" 改为新值（同时更改 HLM 键名以适配浏览器的 beta/开发者版本）。\
要向白名单添加更多扩展，你可以增加更多行。\
Chrome reg 文件示例：

`Windows Registry Editor Version 5.00`  
`[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallAllowlist]`  
`"1"="lkbebcjgcmobigpeffafkodonchffocl"`  
`"2"="extension-id2"`

你也可以以管理员身份运行 PowerShell 脚本 *bypass_paywalls_clean_allowlist.ps1* 来将扩展加入白名单（脚本会检查扩展是否已被允许，或添加新的注册表项）。\
对于参数 browser，请输入 chrome、edge 或 brave。

\* 对于其他浏览器，请编辑 mobileconfig 文件（xml）：更改 PayloadContent（及其他浏览器字符串）。

### macOS

最简单的方式（针对 Chrome）：在终端中运行（无需管理员权限）。\
`defaults write com.google.Chrome ExtensionInstallAllowlist -array "lkbebcjgcmobigpeffafkodonchffocl"`

然后重启 Chrome（在 Dock 中：右键点击 Chrome，选择“退出”，重新打开），或打开 `chrome://policy` 并点击 `Reload policies`。\
要允许更多扩展，请向数组中添加更多 id：`-array "lkbebcjgcmobigpeffafkodonchffocl" "extension-id2"`。\
对于其他浏览器，请将 `com.google.Chrome` 替换为该浏览器的 bundle id（例如 com.microsoft.Edge 或 com.brave.Browser）。

或者，以管理员权限运行扩展的 allowlist 文件夹（解压后）中的一个 .mobileconfig 文件。\
最后重启浏览器进程（在 Dock 中：右键点击 Chrome，选择“退出”，重新打开）。\
这要求你的设备未被 MDM 软件管理，且你没有任何与 'ExtensionInstallAllowlist' 策略相关的、已生效的配置文件。\
要向白名单添加更多扩展，你可以增加更多行。

`<key>ExtensionInstallAllowlist</key>`  
`<array>`  
`<string>lkbebcjgcmobigpeffafkodonchffocl</string>`  
`<string>extension-id2</string>`  
`</array>`

### Linux

[基于 Chromium 的浏览器允许本地安装扩展](https://developer.chrome.com/docs/extensions/how-to/distribute#hosting)
