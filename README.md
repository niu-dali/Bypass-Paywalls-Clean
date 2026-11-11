# Bypass Paywalls Clean（绕过付费墙 纯净版）Chrome 版

[online](https://gitflic.ru/project/magnolia1234/bypass-paywalls-chrome-clean)

本扩展可让你阅读已设置付费墙的（受支持）网站上的文章。  
你也可以将某个域名添加为自定义站点，尝试绕过付费墙。  
每周发布更新，用于修复问题及新增站点。

* [安装](#installation)
* [更新](#update)
* [Android](#android)
* [故障排除](#troubleshooting)
* [支持的网站列表](#list-of-supported-websites)
* [免费文章数量受限的网站](#sites-with-limited-number-of-free-articles)
* [新增网站请求](#new-site-requests)
* [添加自定义站点](#add-custom-site)
* [添加排除站点](#add-excluded-site)
* [更新日志-发布版本](#changelog-releases)
* [许可证](#license)
* [免责声明](#disclaimer)

### 安装
本扩展未上架 Google Chrome 网上应用店。  
以下说明适用于在基于 [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) 的桌面浏览器中安装第三方扩展。  
在扩展开发者模式下，你始终可以通过*加载解压版*安装 BPC（最新 master 版本，但无自动更新），或通过 crx 文件安装（最新发布版本并自动更新，但可能需要将扩展加入白名单）。  
你可以通过工具栏扩展菜单（拼图形状图标）将扩展图标添加/固定到工具栏。

#### 加载解压版：Chrome、MS Edge 或 Brave（全部桌面端）
\* 或将扩展加入白名单，并安装可自动更新的 crx 文件（见下一节）

1. 从 [GitFlic](https://gitflic.ru/project/magnolia1234/bpc_uploads/blob/raw?file=bypass-paywalls-chrome-clean-master.zip) 将此仓库下载为 zip 文件
2. 解压文件，应得到名为 *bypass-paywalls-chrome-clean-master* 的文件夹
3. 将文件夹移动到电脑上的永久位置（安装后请勿删除该文件夹）。
4. 打开扩展页面：*chrome://extensions*
5. 启用开发者模式。
6. 点击*加载解压版*，选择/打开扩展文件夹（其中包含 manifest.json 文件）。

\*  默认情况下 BPC 的主机权限有限，但你可以选择启用自定义站点（并清除 Cookie/屏蔽未列出站点的通用付费墙脚本）。你也可以仅为自己添加的自定义站点申请主机权限（或点击扩展图标上的*清除 Cookie*，为当前站点申请主机权限）。

#### CRX 文件：其他 Chromium 浏览器（Opera/Vivaldi/Yandex）
\* 或将扩展加入白名单以用于 Chrome、MS Edge 或 Brave（参见说明 [本地](allowlist/README.html) 或 [在线](https://gitflic.ru/project/magnolia1234/bypass-paywalls-chrome-clean/blob?file=allowlist%2FREADME.md)）

1. 从 [GitFlic](https://gitflic.ru/project/magnolia1234/bpc_uploads) 下载最新发布版本（crx 文件）
2. 在浏览器中打开扩展页面：*chrome://extensions*
3. 启用开发者模式。
4. 将 crx 文件拖拽到页面任意位置以导入（若已有活动的“加载解压版”安装，请先移除它（并备份你的自定义站点），以便自动更新）。

\* 默认情况下 BPC 的权限有限，但你可以选择启用自定义站点（并清除 Cookie/屏蔽未列出站点的通用付费墙脚本）。你也可以仅为自己添加的自定义站点申请主机权限（或点击扩展图标上的*清除 Cookie*，为当前站点申请主机权限）。

### 更新
对于 crx 安装：扩展会自动更新或在（chrome://extensions 中）检查更新。\
当扩展需要为新添加的域名申请主机权限时，可能会被禁用（在 Chrome/Edge 中）：选择启用/停用一次自定义站点即可消除此“错误”（浏览器会记住已授予的主机权限）。

对于 zip 安装（加载解压版/开发者模式）：将文件解压到安装文件夹（并重新加载扩展）。

你也可以在启动时检查（发布后）的站点规则更新（选项启用）；仅在修复版发布后约 10 天内可用。\
对于新（更新）的站点，你同样需要选择启用自定义站点/为新域名申请主机权限（或等待新版本发布）。

#### Android
从 Google Play 商店安装 [Quetta Browser](https://play.google.com/store/apps/details?id=net.quetta.browser)。你有两种选择：
* 以 crx 文件的形式从 [GitFlic](https://gitflic.ru/project/magnolia1234/bpc_uploads/blob/raw?file=bypass-paywalls-chrome-clean-latest.crx) 加载最新发布版本（自动更新，无需白名单）
* 安装最新的 master zip 文件（无自动更新，自定义站点请使用 custom 文件夹中的 manifest.json）。

\* 自定义站点请使用 [android-custom crx 文件](https://gitflic.ru/project/magnolia1234/bpc_uploads/blob/raw?file=bypass-paywalls-chrome-clean-android-custom.crx)（Android 上不授予主机权限）。\
\* Quetta Browser 可能在更新（主机权限）时禁用该扩展：请重新启用，或安装 android-custom crx 文件。\
\* [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser) 已官方停止维护，但本扩展仍会继续更新。\
\* Lemur Browser 和 Edge Canary for Android 仍相当不稳定（扩展未（完全）受支持）。

#### Firefox
访问 Bypass Paywalls Clean 在 GitFlic 上的 [Firefox 仓库](https://gitflic.ru/project/magnolia1234/bypass-paywalls-firefox-clean)。\
或从 [GitFlic](https://gitflic.ru/project/magnolia1234/bpc_uploads) 以 xpi 文件形式安装最新发布版本。

#### iOS/iPadOS
使用带有自定义（内容）过滤器与用户脚本（管理器）的广告拦截器：[Bypass Paywalls Clean filters](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters)（请阅读说明）。

尽管 [Orion Browser](https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200) 支持安装本扩展，但它在许多站点上无法正常工作（iOS/iPadOS 上的 WebExtensions API 支持不完整）。

### 故障排除
* 如果某个站点无法使用，请先尝试关闭你的广告拦截器（或其他扩展）并刷新页面。
* 确保该（新）站点已在“选项”中勾选（或搜索该域名时不在 no-fix 列表中）。
* 通过扩展图标（弹出窗口）清除 Cookie，并为该站点授予主机权限（或选择启用自定义站点）。
* 你已启用的部分站点会被登出。
* 确保你运行的是 Bypass Paywalls Clean 的最新版本。
* 部分站点需要更改 referer/user-agent（例如不要通过 AdGuard 的 Tracking Protection 极限设置来屏蔽/隐藏）。
* archive.is/today 在使用 Cloudflare 的安全 DNS 时无法工作（或在你更改归档站点的 referer/user-agent 时）。
* 对于 Google Search/Inspection Tool 测试网址，查看被测页面，将 html（标签）代码复制到 https://codebeautify.org/htmlviewer 并*在新窗口中打开*：点击一次 BPC 图标以清理页面布局（或在桌面端使用工具并在新标签页打开截图）。
* 部分站点需要重定向到 amp 页面（这可能因 amp-to-html 扩展或浏览器设置导致重定向循环，例如 Brave > 设置 > 隐私和安全 > 自动重定向 AMP 页面、Kiwi Browser（Android）> 设置 > 隐私和安全 > 移除 AMP，或 Quetta Browser（Android）> 设置 > 隐私保护 > 高级 > 自动去除 AMP）。
* 如果以上方法均无效，你可以在 [GitHub](https://github.com/bpc-clone/bpc_chrome_support/issues) 上提交问题。
* 务必提供所使用的扩展版本、付费墙文章（网址），并详细描述问题。
* 本扩展与广告拦截器 [uBlock Origin (mv2)](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) 或 [AdGuard AdBlocker](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) 搭配使用效果最佳。
* 如果你生活在欧盟，还可以考虑向广告拦截器添加以下过滤器（以移除 Cookie 警告）：[Easylist Cookies](https://secure.fanboy.co.nz/fanboy-cookiemonster.txt) | [I don't care about cookies custom filter](https://www.i-dont-care-about-cookies.eu/abp)。部分站点需要为（社交）媒体设置同意 Cookie。

[返回顶部](#bypass-paywalls-clean-for-chrome)

### 支持的网站列表

_* 仅限免费文章。_

##### 美国全国新闻
[BBC USA](https://www.bbc.com) -
[NBC News](https://www.nbcnews.com) -
[Reuters](https://www.reuters.com) -
[The New York Times](https://www.nytimes.com) -
[The Washington Post](https://www.washingtonpost.com)

##### 商业
[Adweek](https://www.adweek.com) -
[American Affairs](https://americanaffairsjournal.org) -
[Benzinga](https://www.benzinga.com) -
[Bloomberg](https://www.bloomberg.com) -
[Business Insider](https://www.businessinsider.com) -
[Citywire](https://www.citywire.com) -
[CNBC](https://www.cnbc.com) -
[Entrepreneur](https://www.entrepreneur.com) -
[Fast Company](https://www.fastcompany.com) -
[Forbes](https://www.forbes.com) -
[Fortune](https://fortune.com) -
[Harvard Business Review](https://www.hbr.org) -
[Inc.com](https://www.inc.com) -
[Investor's Business Daily](https://www.investors.com) -
[Law.com](https://www.law.com) -
[MarketWatch](https://www.marketwatch.com) -
[MIT Sloan Management Review](https://sloanreview.mit.edu) -
[Oil & Gas Journal](https://www.ogj.com) -
[Quartz](https://qz.com) -
[S&P Global](https://www.spglobal.com) -
[Stock News](https://stocknews.com) -
[The Business Journals](https://www.bizjournals.com)* -
[The Business of Fashion](https://www.businessoffashion.com) -
[The Wall Street Journal](https://www.wsj.com)

在选项中归组：\
*[American Banker](https://www.americanbanker.com) (+ [Arizent](https://www.arizent.com/brands)*；需在选项启用中开启自定义站点)\
*[BNP Media](https://www.bnpmedia.com/our-audiences)* 站点（需在选项启用中开启自定义站点）\
*[Bridge Tower Media](https://bridgetowermedia.com/markets)* 站点（需在选项启用中开启自定义站点）\
*California Business Journals* 类似站点\
[Los Angeles Business Journal](https://labusinessjournal.com) -
[Orange County Business Journal](https://www.ocbj.com) -
[San Diego Business Journal](https://www.sdbj.com) -
[San Fernando Valley Business Journal](https://www.sfvbj.com)\
*Crain Communications* 类似站点\
[Ad Age](https://adage.com) -
[Automotive News](https://www.autonews.com) -
[Crain's Chicago Business](https://www.chicagobusiness.com) -
[Crain's Cleveland Business](https://www.crainscleveland.com) -
[Crain's Detroit Business](https://www.crainsdetroit.com) -
[Crain's Grand Rapids Business](https://www.crainsgrandrapids.com) -
[Crain's New York Business](https://www.crainsnewyork.com) -
[Modern Healthcare](https://www.modernhealthcare.com) -
[Pensions & Investments](https://www.pionline.com)\
Global Polymer Group:
[European Rubber Journal](https://www.european-rubber-journal.com) -
[Plastics News](https://www.plasticsnews.com) -
[Rubber News](https://www.rubbernews.com) -
[Tire Business](https://www.tirebusiness.com) -
[Urethanes Technology International](https://www.utech-polyurethane.com)\
*Digiday Media* 类似站点\
[Digiday](https://digiday.com) -
[Glossy](https://www.glossy.co) -
[ModernRetail](https://www.modernretail.co)\
*[Industry Dive](https://www.industrydive.com/publications)* 站点（需在选项启用中开启自定义站点）\
*[Inside Retail](https://octomedia.com.au/our-brands/inside-retail)* 站点（需在选项启用中开启自定义站点）

##### 科技/科学
[Bulletin of the Atomic Scientists](https://thebulletin.org) -
[Chemical & Engineering News](https://cen.acs.org) -
[Citeline Insights](https://insights.citeline.com) -
[Discover Magazine](https://www.discovermagazine.com) -
[History Today](https://www.historytoday.com) -
[Inside Higher Ed](https://www.insidehighered.com) -
[Interesting Engineering](https://interestingengineering.com) -
[Medscape](https://www.medscape.com) -
[MIT Technology Review](https://www.technologyreview.com) -
[National Geographic USA](https://www.nationalgeographic.com) -
[Nature](https://www.nature.com) -
[Nautilus](https://nautil.us) -
[New Scientist](https://www.newscientist.com) -
[Popular Science](https://www.popsci.com) -
[Science](https://www.science.org)* -
[ScienceNews.org](https://www.sciencenews.org) -
[Scientific American](https://www.scientificamerican.com) -
[StatNews](https://www.statnews.com) -
[The Scientist](https://www.the-scientist.com) -
[Times Higher Education](https://www.timeshighereducation.com)

在选项中归组：\
*Crain Communications* 类似站点\
[360Dx](https://www.360dx.com) -
[GenomeWeb](https://www.genomeweb.com) -
[Precision Medicine Online](https://www.precisionmedicineonline.com)\
*TechTarget Group* 类似站点\
[Computer Weekly](https://www.computerweekly.com) -
[TechTarget](https://www.techtarget.com)\
*The Chronicle* 类似站点\
[The Chronicle of Higher Education](https://www.chronicle.com) -
[The Chronicle of Philanthropy](https://www.philanthropy.com)

##### 百科全书/图书库/知识库
[BBC History Extra](https://www.historyextra.com) -
[Encyclopedia Britannica](https://www.britannica.com) -
[eNotes](https://www.enotes.com) -
[Glassdoor](https://www.glassdoor.com) -
[Loeb Classical Library](https://www.loebclassics.com) -
[Philosophy Now](https://philosophynow.org) -
[Quora](https://www.quora.com) -
[Scholastic](https://www.scholastic.com) -
[SlideShare](https://www.slideshare.net) -
[Study.com (only lessons; no videos)](https://study.com)

##### 体育
[ESPN USA](https://www.espn.com) -
[Rotowire](https://www.rotowire.com) -
[RugbyPass](https://www.rugbypass.com) -
[Sports Illustrated](https://www.si.com) -
[The Athletic](https://www.nytimes.com/athletic)

##### 杂志/博客
在选项中归组：\
*Medium (custom) domains* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Medium](https://www.medium.com) -
[Better Programming](https://betterprogramming.pub) -
[Towards Data Science](https://towardsdatascience.com)

[Al-Monitor](https://www.al-monitor.com) -
[America's Test Kitchen](https://www.americastestkitchen.com) -
[American Purpose](https://www.americanpurpose.com) -
[Artforum](https://www.artforum.com) -
[Artnet](https://www.artnet.com) -
[Atavist Magazine](https://magazine.atavist.com) -
[Axios](https://www.axios.com) -
[Blaze Media](https://www.theblaze.com) -
[Commentary Magazine](https://www.commentary.org) -
[Defector](https://defector.com) -
[Dwell](https://www.dwell.com) -
[Field & Stream](https://www.fieldandstream.com) -
[First Things](https://www.firstthings.com) -
[FMR](https://www.fmrmagazine.com) -
[Foreign Affairs](https://www.foreignaffairs.com) -
[Foreign Policy](https://www.foreignpolicy.com) -
[Harper's Magazine](https://harpers.org) -
[Jazzwise](https://www.jazzwise.com) -
[National Review](https://www.nationalreview.com) -
[Newsweek](https://www.newsweek.com) -
[Outdoor Life](https://www.outdoorlife.com) -
[Paste Magazine](https://www.pastemagazine.com) -
[Politico](https://www.politico.com) -
[Project Syndicate](https://www.project-syndicate.org) -
[Puck.news](https://puck.news) -
[Rane Worldreview](https://worldview.ranenetwork.com) -
[Slate](https://slate.com) -
[SofRep](https://sofrep.com) -
[Stereogum](https://www.stereogum.com) -
[Texas Monthly](https://www.texasmonthly.com) -
[The American Conservative](https://www.theamericanconservative.com) -
[The American Interest](https://www.the-american-interest.com) -
[The American Scholar](https://theamericanscholar.org) -
[The Art Newspaper](https://www.theartnewspaper.com) -
[The Atlantic](https://www.theatlantic.com) -
[The Baffler](https://thebaffler.com) -
[The Christian Science Monitor](https://www.csmonitor.com) -
[The Daily Beast](https://www.thedailybeast.com) -
[The Diplomat](https://thediplomat.com) -
[The Dispatch](https://thedispatch.com)* -
[The Intercept](https://theintercept.com) -
[The Juggernaut](https://www.thejuggernaut.com) -
[The Lamp Magazine](https://thelampmagazine.com) -
[The Nation](https://www.thenation.com) -
[The New Atlantis](https://www.thenewatlantis.com) -
[The New Criterion](https://newcriterion.com) -
[The New Republic](https://newrepublic.com) -
[The New York Review of Books](https://www.nybooks.com) -
[The Point Magazine](https://thepointmag.com) -
[The Wrap](https://www.thewrap.com) -
[Vice](https://www.vice.com) -
[War on the Rocks](https://www.warontherocks.com) -
[Washington Examiner](https://www.washingtonexaminer.com)

在选项中归组：\
*Condé Nast magazines* 类似站点\
[Architectural Digest](https://www.architecturaldigest.com) -
[Bon Appétit](https://www.bonappetit.com) -
[British Vogue](https://www.vogue.co.uk) -
[Condé Nast Traveler](https://www.cntraveler.com) -
[Epicurious](https://www.epicurious.com) -
[GC](https://www.gq.com) -
[Pitchfork](https://www.pitchfork.com) -
[The New Yorker](https://www.newyorker.com) -
[Vanity Fair](https://www.vanityfair.com) -
[Vogue USA](https://www.vogue.com) -
[Wired](https://www.wired.com)\
*[Future Group](https://futureplc.com/our-brands)* 类似站点\
[CyclingNews](https://www.cyclingnews.com) -
[Live Science](https://www.livescience.com) -
[The Week](https://theweek.com) -
[Tom's Hardware](https://www.tomshardware.com) -
*Hearst Communications magazines* 类似站点\
[Bicycling](https://www.bicycling.com) -
[Cosmopolitan](https://www.cosmopolitan.com) -
[Country Living](https://www.countryliving.com) -
[Delish](https://www.delish.com) -
[Elle Decor](https://www.elledecor.com) -
[Elle USA](https://www.elle.com) -
[Esquire](https://www.esquire.com) -
[Good Housekeeping](https://www.goodhousekeeping.com) -
[Harper's Bazaar](https://www.harpersbazaar.com) -
[House Beautiful](https://www.housebeautiful.com) -
[Men's Health](https://www.menshealth.com) -
[Oprah Daily](https://www.oprahdaily.com) -
[Popular Mechanics](https://www.popularmechanics.com) -
[Prevention](https://www.prevention.com) -
[Road & Track](https://www.roadandtrack.com) -
[Runner's World](https://www.runnersworld.com) -
[Town & Country](https://www.townandcountrymag.com) -
[Women's Health](https://www.womenshealthmag.com)\
*Outside magazines* 类似站点\
[Backpacker](https://www.backpacker.com) -
[Beta](https://www.betamtb.com) -
[Better Nutrition](https://www.betternutrition.com) -
[Clean Eating](https://www.cleaneatingmag.com) -
[Climbing](https://www.climbing.com) -
[Outside](https://www.outsideonline.com) -
[Oxygen](https://www.oxygenmag.com) -
[SKI](https://www.skimag.com) -
[Trail Runner](https://www.trailrunnermag.com) -
[Triathlete](https://www.triathlete.com) -
[Vegetarian Times](https://www.vegetariantimes.com) -
[Women's Running](https://www.womensrunning.com) -
[Yoga Journal](https://www.yogajournal.com)\
*Penske Media Corporation* 类似站点\
[Billboard](https://www.billboard.com) -
[Rolling Stone](https://www.rollingstone.com) -
[Sourcing Journal](https://sourcingjournal.com) -
[Sportico](https://www.sportico.com) -
[Variety](https://variety.com) -
[WWD](https://wwd.com)\
*The Epoch Times* 类似站点（需在选项启用中开启 cz|de|fr|jp 站点的自定义站点）\
[Epoch.org.il](https://epoch.org.il) -
[The Epoch Times](https://www.theepochtimes.com)\
*Vox Media Group* 类似站点\
[Curbed](https://www.curbed.com) -
[Grub Street](https://www.grubstreet.com) -
[New York Magazine](https://www.nymag.com) -
[The Cut](https://www.thecut.com) -
[The Verge](https://www.theverge.com) -
[Vox](https://www.vox.com) -
[Vulture](https://www.vulture.com)

##### 美国地方新闻
[Albuquerque Journal](https://www.abqjournal.com) -
[Anchorage Daily News](https://www.adn.com) -
[Chicago Sun-Times](https://chicago.suntimes.com) -
[CNN](https://www.cnn.com) -
[Daily Herald](https://www.dailyherald.com) -
[Fox News](https://www.foxnews.com) -
[Honolulu Star-Advertiser](https://www.staradvertiser.com) -
[Las Vegas Review-Journal](https://www.reviewjournal.com) -
[Las Vegas Sun](https://www.lasvegassun.com) -
[Los Angeles Times](https://www.latimes.com) -
[Mountain View Voice](https://www.mv-voice.com) -
[New York Post](https://nypost.com) -
[Newsday](https://www.newsday.com) -
[Palo Alto Online](https://www.paloaltoonline.com) -
[Pittsburgh Post Gazette](https://www.post-gazette.com) -
[Star Tribune](https://www.startribune.com) -
[Tampa Bay Times](https://www.tampabay.com) -
[The Atlanta Journal-Constitution](https://www.ajc.com)\
[The Baltimore Banner](https://www.thebanner.com) -
[The Boston Globe](https://www.bostonglobe.com) -
[The Columbian](https://www.columbian.com) -
[The Dallas Morning News](https://www.dallasnews.com) -
[The Hill](https://thehill.com) -
[The New York Sun](https://www.nysun.com) -
[The San Francisco Standard](https://www.sfstandard.com) -
[The Seattle Times](https://www.seattletimes.com) -
[The Spokesman-Review](https://www.spokesman.com) -
[The Philadelphia Inquirer](https://www.inquirer.com)

[USA Today](https://www.usatoday.com)\
在选项中归组：\
*Advance Local* 类似站点\
[AL/Alabama](https://www.al.com) -
[MLive/Michigan](https://www.mlive.com) -
[NJ/New Jersey](https://www.nj.com) -
[Staten Island Advance](https://www.silive.com) -
[The Express-Times](https://www.lehighvalleylive.com) -
[The Oregonian](https://www.oregonlive.com) -
[The Patriot-News](https://www.pennlive.com) -
[The Plain Dealer](https://www.cleveland.com) -
[The Post-Standard](https://www.syracuse.com) -
[The Republican](https://www.masslive.com)\
*[CNHI Group](https://www.cnhi.com/newspapers)* 站点（需在选项启用中开启自定义站点）\
*Cox First Media* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Dayton Daily News](https://www.daytondailynews.com)\
*[Forum Communications](https://www.forumcomm.com/brands)* 站点（需在选项启用中开启自定义站点）\
*Gannett Group (local USA Today)* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Democrat and Chronicle](https://www.democratandchronicle.com) -
[Detroit Free Press](https://www.freep.com) -
[Knoxville News Sentinel](https://www.knoxnews.com) -
[Memphis Commercial Appeal](https://www.commercialappeal.com) -
[Milwaukee Journal Sentinel](https://www.jsonline.com) -
[The Arizona Republic](https://www.azcentral.com) -
[The Cincinnati Enquirer](https://www.cincinnati.com) -
[The Columbus Dispatch](https://www.dispatch.com) -
[The Courier-Journal](https://www.courier-journal.com) -
[The Des Moines Register](https://www.desmoinesregister.com) -
[The Detroit News](https://www.detroitnews.com) -
[The Florida Times-Union](https://www.jacksonville.com) -
[The Indianapolis Star](https://www.indystar.com) -
[The News-Press](https://www.news-press.com) -
[The Oklahoman](https://www.oklahoman.com) -
[The Palm Beach Post](https://www.palmbeachpost.com) -
[The Record (North Jersey)](https://www.northjersey.com) -
[The Tennessean](https://www.tennessean.com)\
*Hearst Communications (newspapers)* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Albany Times Union](https://www.timesunion.com) -
[Austin American-Statesman](https://www.statesman.com) -
[Connecticut Post](https://www.ctpost.com) -
[CT Insider](https://www.ctinsider.com) -
[Houston Chronicle](https://www.houstonchronicle.com) -
[New Haven Register](https://www.nhregister.com) -
[San Antonio Express-News](https://www.expressnews.com) -
[San Francisco Chronicle](https://www.sfchronicle.com)\
*Lee Enterprises Group* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Arizona Daily Star](https://tucson.com) -
[Lincoln Journal Star](https://journalstar.com) -
[Omaha World-Herald](https://omaha.com) -
[Richmond Times-Dispatch](https://richmond.com) -
[St. Louis Post-Dispatch](https://www.stltoday.com) -
[The Buffalo News](https://buffalonews.com) -
[The Times of Northwest Indiana](https://www.nwitimes.com) -
[Tulsa World](https://tulsaworld.com) -
[Wisconsin State Journal](https://madison.com) -
[Winston-Salem Journal](https://www.journalnow.com)\
*[Maine Trust](https://www.metln.org)* 站点（需在选项启用中开启自定义站点）\
*McClatchy Group* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Belleville News-Democrat](https://www.bnd.com) -
[El Nuevo Herald](https://www.elnuevoherald.com) -
[Fort Worth Star-Telegram](https://www.star-telegram.com) -
[Lexington Herald-Leader](https://www.kentucky.com) -
[McClatchy DC](https://www.mcclatchydc.com) -
[Miami Herald](https://www.miamiherald.com) -
[The Charlotte Observer](https://www.charlotteobserver.com) -
[The Fresno Bee](https://www.fresnobee.com) -
[The Kansas City Star](https://www.kansascity.com) -
[The News & Observer](https://www.newsobserver.com) -
[The Sacramento Bee](https://www.sacbee.com) -
[The State](https://www.thestate.com) -
[The Wichita Eagle](https://www.kansas.com) -
[Tri-City Herald](https://www.tri-cityherald.com)\
*MediaNews Group* 类似站点（需在选项启用中开启未列出/本地的自定义站点）\
[Boston Herald](https://www.bostonherald.com) -
[East Bay Times](https://www.eastbaytimes.com) -
[Orange County Register](https://www.ocregister.com) -
[San Diego Union Tribune](https://www.sandiegouniontribune.com) -
[St. Paul Pioneer Press](https://www.twincities.com) -
[The Denver Post](https://www.denverpost.com) -
[The Mercury News](https://www.mercurynews.com) -
[The Press-Enterprise](https://www.pressenterprise.com)\
*[Sound Publishing](https://www.soundpublishing.com/titles/our-titles)* 站点（需在选项启用中开启自定义站点）\
*The (New Orleans) Advocate Group* 类似站点\
[The Advocate](https://www.theadvocate.com) -
[The New Orleans Advocate/The Times-Picayune](https://www.nola.com) -
[The Shreveport-Bossier City Advocate](https://www.shreveportbossieradvocate.com)\
*TownNews sites (Blox CMS)*（需在选项启用中开启自定义站点）\
*Tribune Publishing Company* 类似站点\
[Baltimore Sun](https://www.baltimoresun.com) -
[Capital Gazette](https://www.capitalgazette.com) -
[Chicago Tribune](https://www.chicagotribune.com) -
[Daily Press](https://www.dailypress.com) -
[Hartford Courant](https://www.courant.com) -
[New York Daily News](https://www.nydailynews.com) -
[Orlando Sentinel](https://www.orlandosentinel.com) -
[SunSentinel](https://www.sun-sentinel.com) -
[The Morning Call](https://www.mcall.com) -
[The Virginian-Pilot](https://www.pilotonline.com)

#### 加拿大
[iPolitics](https://www.ipolitics.ca) -
[Le Devoir](https://www.ledevoir.com) -
[The Globe and Mail](https://www.theglobeandmail.com) -
[The Hill Times](https://www.hilltimes.com) -
[The Logic](https://thelogic.co) -
[Winnipeg Free Press](https://www.winnipegfreepress.com)

在选项中归组：\
*Groupe Capitales Médias* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Le Soleil](https://www.lesoleil.com)\
*Groupe Québecor* 类似站点\
[Le Journal de Montréal](https://www.journaldemontreal.com) -
[Le Journal de Québec](https://www.journaldequebec.com)\
*Postmedia Network* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Calgary Herald](https://calgaryherald.com) -
[Edmonton Journal](https://edmontonjournal.com) -
[Financial Post](https://www.financialpost.com) -
[Montreal Gazette](https://montrealgazette.com) -
[National Post](https://www.nationalpost.com) -
[Ottawa Citizen](https://ottawacitizen.com) -
[Saltwire Network](https://www.saltwire.com) -
[The Province](https://theprovince.com) -
[Toronto Sun](https://torontosun.com) -
[Vancouver Sun](https://vancouversun.com)\
*TorStar* 类似站点\
[The Toronto Star](https://www.thestar.com) 及其地区站点
[Niagara Falls Review](https://www.niagarafallsreview.ca) -
[Peterborough Examiner](https://www.thepeterboroughexaminer.com) -
[St. Catharines Standard](https://www.stcatharinesstandard.ca) -
[The Hamilton Spectator](https://www.thespec.com) -
[Waterloo Region Record](https://www.therecord.com) -
[Welland Tribune](https://www.wellandtribune.ca)\
*[Valnet Group](https://www.valnetinc.com/our-brands)* 站点（需在选项启用中开启自定义站点）

#### 欧洲

[Balkan Insight](https://balkaninsight.com) -
[EUobserver](https://euobserver.com) -
[Follow the Money (ftm.eu)](https://www.ftm.eu)

在选项中归组：\
*[The Local Group](https://www.thelocal.com)* 站点（需在选项启用中开启自定义站点）

##### 英国/爱尔兰
[Autocar](https://www.autocar.co.uk) -
[Autosport](https://www.autosport.com)* -
[Business Post](https://www.businesspost.ie) -
[Decanter](https://www.decanter.com) -
[Evening Standard](https://www.standard.co.uk) -
[Financial News](https://www.fnlondon.com) -
[Financial Times](https://www.ft.com) -
[GB News](https://www.gbnews.com) -
[Granta Magazine](https://granta.com) -
[iNews](https://inews.co.uk) -
[Institute of Art and Ideas](https:/iai.tv) -
[Investors' Chronicle](https://www.investorschronicle.co.uk) -
[Literary Review](https://literaryreview.co.uk) -
[London Review of Books](https://www.lrb.co.uk) -
[Monocle](https://monocle.com) -
[Motor Sport Magazine](https://www.motorsportmagazine.com) -
[MusicOMH](https://www.musicomh.com) -
[Prospect Magazine](https://www.prospectmagazine.co.uk) -
[Stylist](https://www.stylist.co.uk) -
[Tes Magazine](https://www.tes.com/magazine) -
[The Critic](https://thecritic.co.uk) -
[The Irish Examiner](https://www.irishexaminer.com) -
[The Irish News](https://www.irishnews.com) -
[The Irish Times](https://www.irishtimes.com) -
[The Lawyer](https://www.thelawyer.com) -
[The New Statesman](https://www.newstatesman.com) -
[The New World](https://www.thenewworld.co.uk) -
[The Observer](https://observer.co.uk) -
[The Past](https://the-past.com) -
[The Telegraph](https://www.telegraph.co.uk) -
[The Times Literary Supplement](https://www.the-tls.com) -
[UnHerd](https://unherd.com) -
[World Economics](https://www.worldeconomics.com)

在选项中归组：\
*Daily Mail Group* 类似站点\
[Daily Mail](https://www.dailymail.com) -
[This is Money](https://www.thisismoney.co.uk)\
*[DVV Media International](https://www.dvvmediainternational.com)* 站点（需在选项启用中开启自定义站点）\
*[Haymarket Media Group](https://haymarket.com/brands)* 站点（需在选项启用中开启自定义站点）\
*[Haymarket Medical Network](https://www.haymarketmedicalnetwork.com)* 站点（需在选项启用中开启自定义站点）\
*Iconic Media Group* 类似站点（需在选项启用中开启未列出的自定义站点）\
[The Scotsman](https://www.scotsman.com) -
[Yorkshire Post](https://www.yorkshirepost.co.uk)\
*Mediahuis Ireland* 类似站点\
[Belfast Telegraph](https://www.belfasttelegraph.co.uk) -
[Irish Independent](https://www.independent.ie)\
*[Newsquest Media Group](https://www.newsquest.co.uk/news-brands)* 站点（需在选项启用中开启自定义站点）\
*Oxford University Press* 站点（需在选项启用中开启自定义站点）*\
*Reach Group* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Daily Mirror](https://www.mirror.co.uk) -
[Irish Mirror](https://www.irishmirror.ie) -
[The Daily Record](https://www.dailyrecord.co.uk) -
[The Daily Express](https://www.express.co.uk)\
*The Independent Group* 类似站点\
[The Independent UK ](https://www.independent.co.uk) -
[The Independent USA ](https://www.the-independent.com)\
*The Spectator Group* 类似站点\
[The Spectator](https://spectator.com) -
[The Spectator Australia](https://www.spectator.com.au) -
[Apollo Magazine](https://apollo-magazine.com)\
*The Stage Media* 类似站点：\
[The Bookseller](https://www.thebookseller.com) -
[The Stage](https://www.thestage.co.uk)\
*The Sun Group* 类似站点\
[The Irish Sun](https://www.thesun.ie) -
[The Scottish Sun](https://www.thescottishsun.co.uk) -
[The Sun UK](https://www.thesun.co.uk)\
*[William Reed Group](https://www.william-reed.com/what-we-do)* 站点（需在选项启用中开启自定义站点）

##### 保加利亚
[Capital](https://www.capital.bg) -
[Dnevnik](https://www.dnevnik.bg)

##### 克罗地亚
[Telegram](https://www.telegram.hr)

##### 捷克
[Deník](https://www.denik.cz)

##### 丹麦

在选项中归组：\
*Berlingske Media* 类似站点\
[Berlingske](https://www.berlingske.dk) -
[Weekendavisen](https://www.weekendavisen.dk)\
*[DK Medier](https://www.dkmedier.dk)* 站点（需在选项启用中开启自定义站点）

##### 芬兰
[Suomen Sotilas](https://suomensotilas.fi)

##### 法国/瓦隆
[60 Millions de consommateurs](https://www.60millions-mag.com) -
[Actu.fr](https://actu.fr) -
[Alternatives Economiques](https://www.alternatives-economiques.fr) -
[Aoc media](https://aoc.media) -
[Atlantico](https://atlantico.fr) -
[Auto Hebdo](https://www.autohebdo.fr) -
[Auto Plus](https://www.autoplus.fr) -
[Capital](https://www.capital.fr) -
[Causeur](https://www.causeur.fr) -
[Cerveau et Psycho](https://www.cerveauetpsycho.fr) -
[Challenges](https://www.challenges.fr) -
[Charlie Hebdo](https://charliehebdo.fr) -
[Connaissance des Arts](https://www.connaissancedesarts.com) -
[Cosmopolitan](https://www.cosmopolitan.fr) -
[Courrier international](https://www.courrierinternational.com) -
[Elle](https://www.elle.fr) -
[Esprit](https://esprit.presse.fr) -
[Franc-Tireur](https://www.franc-tireur.fr) -
[Historia](https://www.historia.fr) -
[L'Écho](https://lecho.be) -
[L'Équipe](https://www.lequipe.fr) -
[L'Express](https://www.lexpress.fr) -
[L'Oeil de la Photographie (fr/en)](https://loeildelaphotographie.com) -
[L'Opinion](https://www.lopinion.fr) -
[La Croix](https://www.la-croix.com) -
[Le Canard enchaîné](https://www.lecanardenchaine.fr) -
[Le Courrier des Stratèges](https://lecourrierdesstrateges.fr) -
[Le Figaro](https://www.lefigaro.fr) -
[Le Grand Continent](https://legrandcontinent.eu) -
[Le Journal du Dimanche](https://lejdd.fr) -
[Le Journal du Net](https://www.journaldunet.com) -
[Le Monde](https://www.lemonde.fr) -
[Le Parisien](https://www.leparisien.fr) -
[Le Point](https://www.lepoint.fr) -
[Le Revenu](https://www.lerevenu.com) -
[Le Un](https://le1hebdo.fr) -
[Les Échos](https://www.lesechos.fr) -
[Les Inrockuptibles](https://www.lesinrocks.com) -
[Libération](https://www.liberation.fr) -
[Ouest-France](https://www.ouest-france.fr) -
[Paris Match](https://www.parismatch.com) -
[Philonomist (fr/en)](https://www.philonomist.com) -
[Philosophie Magazine](https://www.philomag.com) -
[Pour l'Éco](https://www.pourleco.com) -
[Pour la Science](https://www.pourlascience.fr) -
[Réforme](https://www.reforme.net) -
[Revue Conflits](https://www.revueconflits.com) -
[Science & Vie](https://www.science-et-vie.com) -
[Sciences et Avenir](https://www.sciencesetavenir.fr) -
[Télérama](https://www.telerama.fr) -
[Valeurs Actuelles](https://www.valeursactuelles.com) -
[XXI](https://www.revue21.fr)

在选项中归组：\
*Groupe Centre France* 类似站点（需在选项启用中开启未列出的自定义站点）\
[La Montagne](https://www.lamontagne.fr)\
*Groupe Infopro Digital* 类似站点（需在选项启用中开启未列出的自定义站点）\
[L'Usine Nouvelle](https://www.usinenouvelle.com)\
*Groupe EBRA* 类似站点\
[Dernières Nouvelles d'Alsace](https://www.dna.fr) -
[L'Alsace](https://www.lalsace.fr) -
[L'Est Républicain](https://www.estrepublicain.fr) -
[Le Bien Public](https://www.bienpublic.com) -
[Le Dauphiné Libéré](https://www.ledauphine.com) -
[Le Journal de Saône-et-Loire](https://www.lejsl.com) -
[Le Progrès](https://www.leprogres.fr) -
[Le Républicain Lorrain](https://www.republicain-lorrain.fr) -
[Vosges Matin](https://www.vosgesmatin.fr)\
*Groupe IPM* 类似站点\
[DH Les Sports+](https://www.dhnet.be) -
[L'Avenir](https://www.lavenir.net) -
[La Libre](https://www.lalibre.be) -
[Moustique](https://www.moustique.be)\
*Groupe La Dépêche* 类似站点\
[Centre Presse](https://www.centrepresseaveyron.fr) -
[Journal de Millau](https://www.journaldemillau.fr) -
[L'Indépendant](https://www.lindependant.fr) -
[La Dépêche du Midi](https://www.ladepeche.fr) -
[La Nouvelle République des Pyrénées](https://www.nrpyrenees.fr) -
[Le Petit Bleu d'Agen](https://www.petitbleu.fr) -
[Midi Libre](https://www.midilibre.fr) -
[Midi Olympique](https://www.rugbyrama.fr/midi-olympique)\
*Groupe MacGeneration* 类似站点\
[iGeneration](https://www.igen.fr) -
[MacGeneration](https://www.macg.co) -
[WatchGeneration](https://www.watchgeneration.fr)\
*Groupe Nice-Matin* 类似站点\
[Monaco-Matin](https://www.monacomatin.mc) -
[Nice-Matin](https://www.nicematin.com) -
[Var-Matin](https://www.varmatin.com)\
*Groupe La Manche Libre* 类似站点（需在选项启用中开启未列出的自定义站点）\
[La Manche Libre](https://www.lamanchelibre.fr)\
*Groupe Profession Santé* 类似站点\
[Le Quotidien du Médecin](https://www.lequotidiendumedecin.fr) -
[Le Quotidien du Pharmacien](https://www.lequotidiendupharmacien.fr)\
*Groupe Rossel* 类似站点\
[L'Aisne nouvelle](https://www.aisnenouvelle.fr) -
[L'Ardennais](https://www.lardennais.fr) -
[L'Est-Éclair](https://www.lest-eclair.fr) -
[L'Union](https://www.lunion.fr) -
[La Voix du Nord](https://www.lavoixdunord.fr) -
[Le Courrier picard](https://www.courrier-picard.fr) -
[Le Messager](https://www.lemessager.fr) - 
[Le Soir](https://www.lesoir.be) -
[Libération Champagne](https://www.liberation-champagne.fr) -
[Nord Littoral](https://www.nordlittoral.fr) -
[Paris Normandie](https://www.paris-normandie.fr) -
[SudInfo](https://www.sudinfo.be)\
*Groupe Sud Ouest* 类似站点\
[Charente libre](https://www.charentelibre.fr) -
[La République des Pyrénées](https://www.larepubliquedespyrenees.fr) -
[Sud Ouest](https://www.sudouest.fr)\
*[Groupe SynerJ Media](https://synerj.media)* 站点（需在选项启用中开启自定义站点）\
*Groupe Télégramme* 类似站点\
[Le Télégramme](https://www.letelegramme.fr) -
[Mer et Marine](https://www.meretmarine.com)\
*TechTarget Group* 类似站点\
[LeMagIT](https://www.lemagit.fr)

##### 德国/奥地利
[11Freunde](https://www.11freunde.de) -
[Ärzte Zeitung](https://www.aerztezeitung.de) -
[Automobilwoche](https://www.automobilwoche.de) -
[Bild](https://www.bild.de) -
[Bild der Wissenschaft](https://www.wissenschaft.de) -
[Börsen-Zeitung](https://www.boersen-zeitung.de) -
[Cicero](https://www.cicero.de) -
[Der Freitag](https://www.freitag.de) -
[Der Spiegel](https://www.spiegel.de) -
[Der Standard.at](https://www.derstandard.at) -
[Der Tagesspiegel](https://www.tagesspiegel.de) -
[Die Presse](https://www.diepresse.com) -
[Die Rheinpfalz](https://www.rheinpfalz.de) -
[Die Welt](https://www.welt.de) -
[Die Zeit](https://www.zeit.de) -
[Falter.at](https://www.falter.at) -
[Focus+](https://www.focusplus.de) -
[Frankfurter Allgemeine Zeitung](https://www.faz.net) -
[Freie Presse](https://www.freiepresse.de) -
[Handelsblatt](https://www.handelsblatt.com) -
[Heise online](https://www.heise.de) -
[Jacobin Magazin](https://jacobin.de) -
[Kölner Stadt-Anzeiger](https://www.ksta.de) -
[Kölnische Rundschau](https://www.rundschau-online.de) -
[Krautreporter](https://krautreporter.de) -
[Kurier.at](https://kurier.at) -
[Manager Magazin](https://www.manager-magazin.de) -
[Mittelbayerische Zeitung](https://www.mittelbayerische.de) -
[Neue Westfälische](https://www.nw.de) -
[Nordwest Zeitung](https://www.nwzonline.de) -
[Passauer Neue Presse](https://www.pnp.de) -
[Philosophie Magazin](https://www.philomag.de) -
[Profil.at](https://www.profil.at) -
[Spektrum](https://www.spektrum.de) -
[Springer Medizin](https://www.springermedizin.de) -
[Stern](https://www.stern.de) -
[Süddeutsche Zeitung](https://www.sueddeutsche.de) -
[Vorarlberg Nachrichten](https://www.vn.at) -
[Vorarlberg Online](https://www.vol.at) -
[Weltkunst](https://www.weltkunst.de) -
[Weser-Kurier](https://www.weser-kurier.de) -
[WirtschaftsWoche](https://www.wiwo.de)

在选项中归组：\
*Berliner & Ostdeutsche Verlag* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Berliner Zeitung](https://www.berliner-zeitung.de) -
[Ostdeutsche Allgemeine](https://ostdeutscheallgemeine.com)\
*[Deutscher Fachverlag Mediengruppe](https://www.dfv.de)*（需在选项启用中开启自定义站点）\
*Funke Mediengruppe* 类似站点\
[Berliner Morgenpost](https://www.morgenpost.de) -
[Braunschweiger Zeitung](https://www.braunschweiger-zeitung.de) -
[Hamburger Abendblatt](https://www.abendblatt.de) -
[Iserlohner Kreisanzeiger und Zeitung](https://www.ikz-online.de) -
[Neue Ruhr Zeitung](https://www.nrz.de) -
[Ostthüringer Zeitung](https://www.otz.de) -
[Thüringer Allgemeine](https://www.thueringer-allgemeine.de) -
[Thüringische Landeszeitung](https://www.tlz.de) -
[Westdeutsche Allgemeine Zeitung](https://www.waz.de) -
[Westfalenpost](https://www.wp.de) -
[Westfälische Rundschau](https://www.wr.de)\
*Ippen.media* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Frankfurter Rundschau](https://www.fr.de) -
[Münchner Merkur](https://www.merkur.de) -
[Oberbayerisches Volksblatt](https://www.ovb-online.de)\
*Landwirtschaftsverlag* 类似站点\
[Profi.de](https://www.profi.de) -
[Top Agrar](https://www.topagrar.com) -
[Wochenblatt für Landwirtschaft & Landleben](https://www.wochenblatt.com)\
*Madsack Mediengruppe* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Hannoversche Allgemeine Zeitung](https://www.haz.de) -
[Kieler Nachrichten](https://www.kn-online.de) -
[Leipziger Volkszeitung](https://www.lvz.de) -
[Lübecker Nachrichten](https://www.ln-online.de) -
[Märkische Allgemeine](https://www.maz-online.de) -
[Neue Presse (Hannover)](https://www.neuepresse.de) -
[Ostsee-Zeitung](https://www.ostsee-zeitung.de) -
[RedaktionsNetzwerk Deutschland](https://www.rnd.de) -
[Sächsische Zeitung](https://www.saechsische.de)\
*[Motor Presse Stuttgart](https://www.motorpresse.de)* 类似站点\
[Aerokurier](https://www.aerokurier.de) -
[Auto Motor und Sport](https://www.auto-motor-und-sport.de) -
[Flug Revue](https://www.flugrevue.de) -
[Motorrad](https://www.motorradonline.de) -
[Women's Health](https://www.womenshealth.de)\
*NOZ/MHN Mediengruppe* 类似站点\
[Neue Osnabrücker Zeitung](https://www.noz.de) -
[Schleswig-Holsteinischer Zeitungsverlag](https://www.shz.de)\
Rheinische Post Mediengruppe 类似站点\
[General-Anzeiger Bonn](https://ga.de) -
[Rheinische Post](https://rp-online.de) -
[Saarbrücker Zeitung](https://www.saarbruecker-zeitung.de) -
[Trierischer Volksfreund](https://www.volksfreund.de)\
*Südwest Media Network* 站点（需在选项启用中开启自定义站点）\
*Verlagsgruppe Rhein Main* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Allgemeine Zeitung (Mainz)](https://www.allgemeine-zeitung.de) -
[Darmstädter Echo](https://www.echo-online.de) -
[Wiesbadener Kurier](https://www.wiesbadener-kurier.de)

##### 希腊
[Kathimerini](https://www.kathimerini.gr)

##### 意大利
[Corriere della Sera](https://www.corriere.it) -
[Corriere dello Sport](https://www.corrieredellosport.it) -
[Domani](https://editorialedomani.it) -
[Eastwest](https://eastwest.eu) -
[Il Fatto Quotidiano](https://www.ilfattoquotidiano.it)* -
[Il Foglio](https://www.ilfoglio.it) -
[Il Manifesto](https://ilmanifesto.it) -
[Il Sole 24 Ore (24+)](https://24plus.ilsole24ore.com) -
[Internazionale](https://www.internazionale.it) -
[Italia Oggi](https://www.italiaoggi.it) -
[La Gazzetta dello Sport](https://www.gazzetta.it) -
[Milano Finanza](https://www.milanofinanza.it) -
[National Geographic IT](https://www.nationalgeographic.it) -
[Sky Sport](https://sport.sky.it) -
[Sky TG24](https://tg24.sky.it) -
[Tuttosport](https://www.tuttosport.com) -
[Vanity Fair Italia](https://www.vanityfair.it)

在选项中归组：\
*Gruppo GEDI.it* 类似站点\
[Italian.tech](https://www.italian.tech) -
[La Repubblica](https://www.repubblica.it) -
[La Stampa](https://www.lastampa.it) -
[Le Scienze](https://www.lescienze.it)

[Il Messaggero](https://www.ilmessaggero.it) 及其地区站点，例如
[Corriere Adriatico](https://www.corriereadriatico.it) -
[Il Gazzettino](https://www.ilgazzettino.it) -
[Il Mattino](https://www.ilmattino.it) -
[Quotidiano di Puglia](https://www.quotidianodipuglia.it)

[Quotidiano Nazionale](https://www.quotidiano.net) 及其地区站点，例如
[Il Giorno](https://www.ilgiorno.it) -
[Il Resto del Carlino](https://www.ilrestodelcarlino.it) -
[Il Telegrafo Livorno](https://www.iltelegrafolivorno.it) -
[La Nazione](https://www.lanazione.it)

*[Gruppo SAE.it](https://www.grupposae.it/i-quotidiani)** 类似站点（需在选项启用中开启未列出的自定义站点）\
[Il Tirreno](https://www.iltirreno.it)* -
[La Nuova Sardegna](https://www.lanuovasardegna.it)*

##### 荷兰/佛兰德斯
[Business AM](https://businessam.be) -
[Business Insider Nederland](https://www.businessinsider.nl) -
[De Tijd](https://www.tijd.be) -
[Doorbraak](https://doorbraak.be) -
[Follow the Money](https://www.ftm.nl) -
[Groene Amsterdammer](https://www.groene.nl) -
[Het Laatste Nieuws](https://www.hln.be) -
[Linda](https://www.linda.nl) -
[National Geographic NL](https://www.nationalgeographic.nl) -
[NRC Handelsblad](https://www.nrc.nl) -
[Vrij Nederland](https://www.vn.nl)

在选项中归组：\
*Algemeen Dagblad (+ regional/ADR)* 类似站点\
[Algemeen Dagblad](https://www.ad.nl) -
[BN DeStem](https://www.bndestem.nl) -
[Brabants Dagblad](https://www.bd.nl) -
[Eindhovens Dagblad](https://www.ed.nl) -
[Gelderlander](https://www.gelderlander.nl) -
[PZC](https://www.pzc.nl) -
[Stentor](https://www.destentor.nl) -
[Tubantia](https://tubantia.nl)\
*[BDU media](https://bdumedia.nl/nieuwsmerk)* 站点（需在选项启用中开启自定义站点）\
*DPG Media (not ADR)* 类似站点\
[De Morgen](https://www.demorgen.be) -
[De Volkskrant](https://www.volkskrant.nl) -
[Flair.nl](https://www.flair.nl) -
[Humo](https://www.humo.be) -
[Libelle.nl](https://www.libelle.nl) -
[Margriet](https://www.margriet.nl) -
[Parool](https://www.parool.nl) -
[Trouw](https://www.trouw.nl)\
*[Enter media](https://www.entermedia.nl)* 站点（需在选项启用中开启自定义站点）\
*Mediahuis België* 类似站点\
[De Standaard](https://www.standaard.be) -
[Gazet van Antwerpen](https://www.gva.be) -
[Het Belang van Limburg](https://www.hbvl.be) -
[Het Nieuwsblad](https://www.nieuwsblad.be)\
*[ProMedia Group](https://www.promedia.nl/publicaties)* 站点（需在选项启用中开启自定义站点）\
*[VmnMedia Group](https://vmnmedia.nl)* 站点（需在选项启用中开启自定义站点）

##### 挪威
[Bergens Tidende](https://www.bt.no) -
[Dagsavisen](https://www.dagsavisen.no)

##### 波兰
[OKO.press](https://oko.press) -
[Polityka](https://www.polityka.pl) -
[Puls Biznesu](https://www.pb.pl)

在选项中归组：\
*GremiMedia.pl Group* 类似站点\
[Parkiet](https://www.parkiet.com) -
[Rzeczpospolita](https://www.rp.pl)\
*Ringier Axel Springer Polska* 类似站点\
[Auto Swiat](https://www.auto-swiat.pl) -
[Business Insider](https://businessinsider.com.pl) -
[Forbes](https://www.forbes.pl) -
[Komputer Swiat](https://www.komputerswiat.pl) -
[Newsweek](https://www.newsweek.pl) -
[Onet](https://www.onet.pl)\
*Wyborcza Group* 类似站点\
[Magazyn-kuchnia.pl](https://magazyn-kuchnia.pl) -
[Wyborcza.biz](https://wyborcza.biz) -
[Wyborcza.pl](https://wyborcza.pl) -
[Wysokieobcasy.pl](https://www.wysokieobcasy.pl)

##### 葡萄牙
[Diário de Notícias](https://www.dn.pt) -
[Expresso](https://expresso.pt) -
[Observador](https://observador.pt) -
[Sábado](https://www.sabado.pt)

##### 罗马尼亚

[HotNews](https://hotnews.ro)

##### 俄罗斯
[Wonderzine](https://www.wonderzine.com)

##### 西班牙
[Diario de Navarra](https://www.diariodenavarra.es) -
[El Confidencial](https://www.elconfidencial.com) -
[El Diario.es](https://www.eldiario.es) -
[El Español](https://www.elespanol.com) -
[El País](https://elpais.com) -
[Hola](https://www.hola.com) -
[InfoLibre](https://www.infolibre.es) -
[La Vanguardia](https://www.lavanguardia.com) -
[Mundo Deportivo](https://www.mundodeportivo.com) -
[National Geographic ES](https://www.nationalgeographic.com.es) -
[Política Exterior](https://www.politicaexterior.com) -
[Público](https://www.publico.es)

在选项中归组：\
*ARA* 类似站点\
[Ara.cat](https://www.ara.cat) -
[Ara Balears](https://www.arabalears.cat)\
*Grupo Joly* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Diario de Sevilla](https://www.diariodesevilla.es)\
*Grupo Prensa Ibérica* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Diario de Mallorca](https://www.diariodemallorca.es) -
[El Día](https://www.eldia.es) -
[El Periódico de Catalunya](https://www.elperiodico.com) -
[El Periódico de España](https://www.epe.es) -
[Faro de Vigo](https://www.farodevigo.es) -
[Información](https://www.informacion.es) -
[La Nueva España](https://www.lne.es) -
[La Provincia](https://www.laprovincia.es) -
[Levante-EMV](https://www.levante-emv.com) -
[Mallorca Zeitung](https://www.mallorcazeitung.es) -
[Superdeporte](https://www.superdeporte.es)\
*Grupo Unidad Editorial* 类似站点\
[El Mundo](https://www.elmundo.es) -
[Expansión](https://www.expansion.com) -
[Marca](https://www.marca.com)\
*Grupo Vocento* 类似站点\
[ABC](https://www.abc.es) -
[Canarias7](https://www.canarias7.es) -
[El Comercio](https://www.elcomercio.es) -
[El Correo](https://www.elcorreo.com) -
[El Diario Montañés](https://www.eldiariomontanes.es) -
[El Diario Vasco](https://www.diariovasco.com) -
[El Norte de Castilla](https://www.elnortedecastilla.es) -
[Hoy](https://www.hoy.es) -
[Ideal](https://www.ideal.es) -
[La Rioja](https://www.larioja.com) -
[La Verdad](https://www.laverdad.es) -
[La Voz de Cádiz](https://www.lavozdigital.es) -
[Las Provincias](https://www.lasprovincias.es) -
[Sur](https://www.diariosur.es)

*[Sport Life Ibérica](https://www.sportlifeiberica.es)* 站点（需在选项启用中开启自定义站点）

##### 瑞典
[Fokus](https://www.fokus.se) -
[NyTeknik](https://www.nyteknik.se) -
[Vi Bilägare](https://www.vibilagare.se)

在选项中归组：\
*[Bonnier News Group](https://www.bonniernews.se/titlar-och-varumarken)* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Dagens Medicin](https://www.dagensmedicin.se) -
[Dagens Nyheter](https://www.dn.se) -
[Helsingborgs Dagblad](https://www.hd.se) -
[Sydsvenskan](https://www.sydsvenskan.se)\
*[Erna Media](https://ernamedia.se)* 站点（需在选项启用中开启自定义站点）

##### 瑞士
[Le Temps](https://www.letemps.ch) -
[Neue Zürcher Zeitung](https://www.nzz.ch) -
[Schweizer Monat](https://schweizermonat.ch) -
[The Market](https://themarket.ch)

在选项中归组：\
*[Groupe ESH Médias](https://www.eshmedias.ch)* 类似站点\
[ArcInfo](https://www.arcinfo.ch) -
[La Côte](https://www.lacote.ch) -
[Le Nord Vaudois](https://www.lenordvaudois.ch) -
[Le Nouvelliste](https://www.lenouvelliste.ch)\
*Ringier Gruppe* 类似站点\
[Blick](https://www.blick.ch) -
[Beobachter](https://www.beobachter.ch) -
[Handelszeitung](https://www.handelszeitung.ch)

##### 乌克兰
[Forbes](https://forbes.ua) -
[New Voice](https://nv.ua)

#### 非洲

##### 肯尼亚

[The Standard](https://www.standardmedia.co.ke) -
[The Star](https://www.the-star.co.ke)

在选项中归组：\
*[Nation Media Group](https://www.nationmedia.com/brands)* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Business Daily](https://www.businessdailyafrica.com) -
[Daily Nation](https://nation.africa)

##### 南非
在选项中归组：\
*[Arena Holdings](https://arena.africa/brands)* 类似站点（需在选项启用中开启未列出的自定义站点）\
[BusinessDay](https://www.businessday.co.za) -
[TimesLive](https://www.timeslive.co.za)

##### 澳大利亚/新西兰

[BusinessDesk](https://businessdesk.co.nz) -
[Inkl](https://www.inkl.com) -
[MacroBusiness](https://www.macrobusiness.com.au) -
[New Zealand Geographic](https://www.nzgeo.com) -
[New Zealand Herald](https://www.nzherald.co.nz) -
[The Saturday Paper](https://www.thesaturdaypaper.com.au) -
[The West Australian (+ regional/opt-in to custom sites)](https://thewest.com.au)

在选项中归组：\
*Australia News Corp* 类似站点\
[Code Sports](https://www.codesports.com.au) -
[Herald Sun](https://www.heraldsun.com.au) -
[The Advertiser/AdelaideNow](https://www.adelaidenow.com.au) -
[The Australian](https://www.theaustralian.com.au) -
[The Courier-Mail](https://www.couriermail.com.au) -
[The Daily Telegraph](https://www.dailytelegraph.com.au) -
[The Weekly Times](https://www.weeklytimesnow.com.au)\
*Australia Nine Entertainment* 类似站点\
[Brisbane Times](https://www.brisbanetimes.com.au) -
[The Age](https://www.theage.com.au) -
[The Australian Financial Review](https://www.afr.com) -
[The Sydney Morning Herald](https://www.smh.com.au) -
[WAtoday](https://www.watoday.com.au)\
*Australian Community Media* 类似站点（需在选项启用中开启未列出的自定义站点）\
[Bendigo Advertiser](https://www.bendigoadvertiser.com.au) -
[Central Western Daily](https://www.centralwesterndaily.com.au) -
[Daily Liberal](https://www.dailyliberal.com.au) -
[Illawarra Mercury](https://www.illawarramercury.com.au) -
[Newcastle Herald](https://www.newcastleherald.com.au) -
[The Advocate](https://www.theadvocate.com.au) -
[The Border Mail](https://www.bordermail.com.au) -
[The Canberra Times](https://www.canberratimes.com.au) -
[The Courier](https://www.thecourier.com.au) -
[The Daily Advertiser](https://www.dailyadvertiser.com.au) -
[The Examiner](https://www.examiner.com.au) -
[The Northern Daily Leader](https://www.northerndailyleader.com.au) -
[The Standard](https://www.standard.net.au) -
[Western Advocate](https://www.westernadvocate.com.au)\
*[McPherson Media Group](https://www.mmg.com.au/portfolio)* 站点（需在选项启用中开启自定义站点）\
*[Private Media](https://www.privatemedia.com.au)* 类似站点\
[Crikey](https://www.crikey.com.au) -
[Smart Company](https://www.smartcompany.com.au) -
[The Mandarin](https://www.themandarin.com.au)

#### 亚洲

##### 中国、香港和台湾
[CommonWealth Magazine Taiwan](https://www.cw.com.tw)* -
[South China Morning Post](https://www.scmp.com) -
[Southern Weekly](https://www.infzm.com) -
[The News Lens](https://www.thenewslens.com)

##### 印度
[Anandabazar Patrika](https://www.anandabazar.com) -
[Bar and Bench](https://www.barandbench.com) -
[Bhaskar](https://www.bhaskar.com) -
[Business Standard](https://www.business-standard.com) -
[Deccan Herald](https://www.deccanherald.com) -
[Hindustan Times](https://www.hindustantimes.com) -
[Inc42](https://inc42.com) -
[India Today](https://www.indiatoday.in) -
[Live Law](https://www.livelaw.in) -
[LiveMint](https://www.livemint.com) -
[Malayala Manorama](https://www.manoramaonline.com) -
[Mid-Day](https://www.mid-day.com) -
[Newslaundry](https://www.newslaundry.com) -
[NDTV Profit](https://www.ndtvprofit.com) -
[Outlook](https://www.outlookindia.com) -
[Outlook Business](https://www.outlookbusiness.com) -
[Swarajyamag](https://swarajyamag.com) -
[The Caravan](https://caravanmagazine.in) -
[The Economic Times (ET Prime)](https://economictimes.indiatimes.com) -
[The Financial Express](https://www.financialexpress.com) -
[The Hindu](https://www.thehindu.com) -
[The Hindu BusinessLine](https://www.thehindubusinessline.com) -
[The Indian Express](https://indianexpress.com) -
[The Leaflet](https://theleaflet.in) -
[The News Minute](https://www.thenewsminute.com) -
[The Quint](https://www.thequint.com) -
[Times of India](https://timesofindia.indiatimes.com) -
[Vikatan](https://www.vikatan.com)

##### 印度尼西亚
[Kompas](https://www.kompas.id)

##### 以色列
[Globes](https://www.globes.co.il) -
[The Jerusalem Post](https://www.jpost.com) -
[Ynet](https://www.ynet.co.il)

在选项中归组：\
*Haaretz Group* 类似站点\
[Haaretz.co.il](https://www.haaretz.co.il) -
[Haaretz.com](https://www.haaretz.com) -
[The Marker](https://www.themarker.com)

##### 日本
[Business Insider Japan](https://www.businessinsider.jp) -
[Nikkei Asian Review](https://asia.nikkei.com) -
[The Japan Times](https://www.japantimes.co.jp)

在选项中归组：\
*Chunichi Shimbun Group* 类似站点\
[Chunichi Shimbun](https://www.chunichi.co.jp) -
[Tokyo Shimbun](https://www.tokyo-np.co.jp)

##### 新加坡
[Tech in Asia](https://www.techinasia.com)\
在选项中归组：\
*SPH Media* 类似站点\
[The Business Times](https://www.businesstimes.com.sg) -
[The Straits Times](https://www.straitstimes.com)

##### 泰国
[Bangkok Post](https://www.bangkokpost.com)

#### 拉丁美洲

##### 阿根廷
[Ámbito](https://www.ambito.com) -
[El Cronista](https://www.cronista.com) -
[El Tribuno](https://www.eltribuno.com) -
[La Gaceta](https://www.lagaceta.com.ar) -
[La Nación](https://www.lanacion.com.ar)

在选项中归组：\
*Grupo Clarín* 类似站点\
[Clarín](https://www.clarin.com) -
[La Voz del Interior](https://www.lavoz.com.ar) -
[Los Andes](https://www.losandes.com.ar) -
[Olé](https://www.ole.com.ar)

##### 玻利维亚
[El Deber](https://eldeber.com.bo)

##### 巴西
[ABC Mais](https://www.abcmais.com) -
[CartaCapital](https://www.cartacapital.com.br) -
[Correio do Povo](https://www.correiodopovo.com.br) -
[Crusoé](https://crusoe.com.br) -
[Estado de Minas](https://www.em.com.br) -
[Exame](https://exame.com) -
[GaúchaZH](https://gauchazh.clicrbs.com.br) -
[Gazeta do Povo](https://www.gazetadopovo.com.br) -
[Grupo Abril](https://grupoabril.com.br) -
[Lance!](https://www.lance.com.br) -
[Le Monde Diplomatique Brasil](https://diplomatique.org.br) -
[NSC Total](https://www.nsctotal.com.br) -
[O Estado de S. Paulo](https://estadao.com.br) -
[O Globo](https://oglobo.globo.com) -
[Revista Oeste](https://revistaoeste.com) -
[Valor Econômico](https://valor.globo.com)

在选项中归组：\
*UOL* 类似站点\
[Folha de S. Paulo](https://www.folha.uol.com.br) -
[UOL](https://www.uol.com.br)

##### 智利
[Diario Financiero](https://www.df.cl) -
[El Mercurio](https://digital.elmercurio.com) -
[La Segunda](https://www.lasegunda.com) -
[La Tercera](https://www.latercera.com)

##### 哥伦比亚
[El Espectador](https://www.elespectador.com) -
[El Tiempo](https://www.eltiempo.com) -
[Semana](https://www.semana.com)

##### 厄瓜多尔
[El Universo](https://www.eluniverso.com)

##### 墨西哥
[El Universal](https://www.eluniversal.com.mx) -
[Mexico News Daily](https://mexiconewsdaily.com) -
[Milenio](https://www.milenio.com)

##### 秘鲁
*Grupo El Comercio* 类似站点\
[Diario Correo](https://diariocorreo.pe) -
[El Comercio](https://elcomercio.pe) -
[Gestión](https://gestion.pe)

##### 乌拉圭
[El Observador](https://www.elobservador.com.uy) -
[El País](https://www.elpais.com.uy) -
[La Diaria](https://ladiaria.com.uy)

_* 仅限免费文章。_

[返回顶部](#bypass-paywalls-clean-for-chrome)

### 免费文章数量受限的网站
免费文章限制通常可以通过移除该站点的 Cookie 来绕过。  
点击 BPC 图标，然后在弹出窗口中点击*清除 Cookie*按钮（对于不受支持的站点，请为该域名授予主机权限）。  
如果移除 Cookie 有效，你也可以将该站点添加为自定义站点。

### 新增网站请求
你可以 [提交新网站的请求](https://github.com/bpc-clone/bpc_chrome_support/issues)  
请使用问题模板，阅读以下说明并分享你的结果，以便更快处理。  
在请求新网站之前，请记得先查看之前的请求。
1. 打开无痕窗口。
2. 清除该站点的 Cookie（通过本扩展：选择启用自定义站点，或为该站点授予主机权限；这也会启用对通用付费墙脚本的屏蔽）。
3. 在站点上禁用 JavaScript（通过浏览器、uBlock Origin 或其他扩展）。
4. 将域名添加为自定义站点，以获得更多绕过选项。
5. 在阅读模式中打开页面（通过浏览器或扩展）。
6. 尝试其中一个归档站点。

### 添加自定义站点
添加你自己的自定义站点/分组（分组请使用逗号分隔的列表；将域名设置为类似 group_... 的形式）。  
勾选弹出菜单中的“选项”链接，进入自定义站点。  
\*  默认情况下 BPC 的主机权限有限，但你可以选择启用自定义站点（并清除 Cookie/屏蔽未列出站点的通用付费墙脚本）。你也可以仅为自己添加的自定义站点申请主机权限（或点击扩展图标上的*清除 Cookie*，为当前站点申请主机权限）。

默认情况下，站点的 Cookie/本地存储会被屏蔽/移除（例如，当遇到计量付费墙时绕过文章限制）。

可选的自定义项：
* allow/remove cookies（未选择任何选项时：Cookie 被屏蔽）
* 将 useragent 设置为 Googlebot、Bingbot、Facebookbot 或自定义
* 设置 referer（指向 Facebook、Google、Twitter 或自定义；设置 Googlebot 时忽略）
* 设置随机 ip 地址（请求头 X-Forwarded-For）
* 禁用 (sub)domain(s)、外部域名（需主机权限）及/或内联脚本的 JavaScript
* 屏蔽 regular expression（用于屏蔽特定脚本及/或 xhr）
* block_host_perm_add: 为被屏蔽的内容添加额外主机权限
* 取消隐藏 amp 页面文本
* 当 paywall(selector) 时重定向到 amp 页面
* 当 paywall|article(selector) 时从 json 加载文本
* 当 paywall|article(selector) 时从 archive.is 加载文本
* 当 paywall|article(selector) 时添加指向 archive 站点的外部链接
* 移除/取消隐藏 dom 中的元素（开发者可选；参见示例）

[下载自定义站点的示例列表](https://gitflic.ru/project/magnolia1234/bpc_updates/blob/raw?file=sites_custom.json)

### 添加排除站点
添加排除的站点/域名（用于你的订阅）。\
你也可以排除某个归组在选项中的特定域名。

### 更新日志-发布版本
* 访问更新日志页面：[本地](changelog.txt) 或 [在线](https://gitflic.ru/project/magnolia1234/bypass-paywalls-chrome-clean/blob/raw?file=changelog.txt)
* 从 [GitFlic](https://gitflic.ru/project/magnolia1234/bpc_uploads) 下载最新版本

### 许可证
* Bypass Paywalls Clean 采用 [MIT 许可证](LICENSE.txt)。

### 免责声明
* 本软件仅用于教育目的，按“原样”提供，不提供任何形式的明示或暗示担保，包括但不限于对适销性、特定用途适用性和非侵权性的担保。在任何情况下，作者或版权持有人均不对因本软件或使用本软件或在其他交易中使用本软件而引发的任何索赔、损害赔偿或其他责任负责，无论是合同、侵权或其他方面的行为。

[返回顶部](#bypass-paywalls-clean-for-chrome)
