/**
 * ❤️  我们的旅行回忆 - 相册、情诗、情书与名言配置
 *
 * ==================== 📸 照片路径配置说明 ====================
 *
 * 支持三种模式（修改 PHOTO_BASE_URL 即可切换）：
 *
 * 模式1 — 本地文件（开发调试用）：
 *   PHOTO_BASE_URL = ''
 *   使用 photoUrlLocal() 拼接路径，如 'photos/portrait/01.jpg'
 *
 * 模式2 — alist 桥接百度网盘（推荐线上方案，0元/月）：
 *   PHOTO_BASE_URL = 'https://你的alist.vercel.app/d/存储名'
 *   照片放百度网盘 → alist 自动转直链 → 网站无缝展示
 *
 * 模式3 — 七牛云/腾讯云COS等对象存储：
 *   PHOTO_BASE_URL = 'https://your-bucket.cos.ap-guangzhou.myqcloud.com'
 *
 * ⚠️ 照片大小建议：
 *   - 网页预览：每张压缩到 300-500KB，加快加载
 *   - 原图下载：通过 alist 或百度网盘分享链接提供
 * ===================================================================
 *
 * 批量下载：
 * - 在相册页面点击「选择下载」→ 勾选照片 →「打包下载」
 * - JSZip 浏览器端打包，不经过服务器，真正不限速
 */

// ==================== 📍 照片根路径（一键切换） ====================
// 部署 alist 后，只需修改下面这一行！
const PHOTO_BASE_URL = '';
// 线上示例: const PHOTO_BASE_URL = 'https://my-alist.vercel.app/d/baidu/travel-photos';

// 辅助函数：自动拼接照片完整 URL
function photoUrl(path) {
  if (PHOTO_BASE_URL) {
    return PHOTO_BASE_URL + '/' + path.replace(/^\//, '');
  }
  // 本地模式：直接使用相对路径
  return path;
}

// ==================== 📁 相册配置 ====================
const ALBUMS = [
  {
    id: 'our-story',
    name: '我们的足迹',
    description: '一起走过的每一个地方，都是最美的风景',
    cover: photoUrl('photos/our-story/cover.jpg'),
    photos: [
      { src: photoUrl('photos/our-story/01.jpg'), title: '初见那天', width: 1200, height: 1600 },
      { src: photoUrl('photos/our-story/02.jpg'), title: '你是我的小幸运', width: 1200, height: 1500 },
      { src: photoUrl('photos/our-story/03.jpg'), title: '十指相扣的黄昏', width: 1600, height: 1067 },
      { src: photoUrl('photos/our-story/04.jpg'), title: '只想和你虚度时光', width: 1200, height: 1600 },
      { src: photoUrl('photos/our-story/05.jpg'), title: '世界再大，有你足矣', width: 1600, height: 1067 },
      { src: photoUrl('photos/our-story/06.jpg'), title: '春风十里不如你', width: 1200, height: 1500 },
      { src: photoUrl('photos/our-story/07.jpg'), title: '陪你到世界尽头', width: 1600, height: 900 },
      { src: photoUrl('photos/our-story/08.jpg'), title: '往后余生都是你', width: 1200, height: 1200 },
    ]
  },
  {
    id: 'seaside',
    name: '海边の约定',
    description: '海浪为证，许下相伴一生的诺言',
    cover: photoUrl('photos/seaside/cover.jpg'),
    photos: [
      { src: photoUrl('photos/seaside/01.jpg'), title: '听海的声音', width: 1600, height: 1067 },
      { src: photoUrl('photos/seaside/02.jpg'), title: '踩着浪花的日子', width: 1600, height: 900 },
      { src: photoUrl('photos/seaside/03.jpg'), title: '海风中你的发梢', width: 1600, height: 1067 },
      { src: photoUrl('photos/seaside/04.jpg'), title: '落日与晚风', width: 1200, height: 1600 },
      { src: photoUrl('photos/seaside/05.jpg'), title: '沙滩上的脚印', width: 1600, height: 900 },
      { src: photoUrl('photos/seaside/06.jpg'), title: '最浪漫的晚霞', width: 1600, height: 1067 },
    ]
  },
  {
    id: 'city-walk',
    name: '城市漫步',
    description: '在钢筋森林里，你是最温暖的光',
    cover: photoUrl('photos/city-walk/cover.jpg'),
    photos: [
      { src: photoUrl('photos/city-walk/01.jpg'), title: '霓虹下的剪影', width: 1200, height: 1600 },
      { src: photoUrl('photos/city-walk/02.jpg'), title: '一起逛过的街角', width: 1600, height: 900 },
      { src: photoUrl('photos/city-walk/03.jpg'), title: '咖啡馆的午后', width: 1600, height: 1067 },
      { src: photoUrl('photos/city-walk/04.jpg'), title: '城市灯火', width: 1200, height: 1500 },
      { src: photoUrl('photos/city-walk/05.jpg'), title: '两个人的地铁', width: 1600, height: 1067 },
      { src: photoUrl('photos/city-walk/06.jpg'), title: '雨天的伞下', width: 1200, height: 1200 },
    ]
  },
  {
    id: 'daily',
    name: '日常小确幸',
    description: '柴米油盐里，藏着最深的爱意',
    cover: photoUrl('photos/daily/cover.jpg'),
    photos: [
      { src: photoUrl('photos/daily/01.jpg'), title: '为你做的早餐', width: 1200, height: 1200 },
      { src: photoUrl('photos/daily/02.jpg'), title: '一起看电影', width: 1200, height: 1500 },
      { src: photoUrl('photos/daily/03.jpg'), title: '你的鬼脸', width: 1200, height: 1600 },
      { src: photoUrl('photos/daily/04.jpg'), title: '周末赖床', width: 1600, height: 1067 },
      { src: photoUrl('photos/daily/05.jpg'), title: '一起下厨', width: 1200, height: 1200 },
      { src: photoUrl('photos/daily/06.jpg'), title: '晚安 my love', width: 1200, height: 1500 },
      { src: photoUrl('photos/daily/07.jpg'), title: '早晨的阳光和你', width: 1600, height: 900 },
      { src: photoUrl('photos/daily/08.jpg'), title: '今日份快乐', width: 1200, height: 1200 },
    ]
  }
];

// ==================== 💌 情诗集 ====================
const LOVE_POEMS = [
  {
    title: '致橡树',
    author: '舒婷',
    lines: [
      '我如果爱你——',
      '绝不像攀援的凌霄花，',
      '借你的高枝炫耀自己；',
      '我如果爱你——',
      '绝不学痴情的鸟儿，',
      '为绿荫重复单调的歌曲；',
      '……',
      '我必须是你近旁的一株木棉，',
      '作为树的形象和你站在一起。',
      '根，紧握在地下；',
      '叶，相触在云里。',
      '每一阵风过，我们都互相致意，',
      '但没有人，听懂我们的言语。'
    ]
  },
  {
    title: '当你老了',
    author: '叶芝 / 袁可嘉 译',
    lines: [
      '当你老了，头发花白，睡意沉沉，',
      '倦坐在炉边，取下这本书来，',
      '慢慢读着，追梦当年的眼神，',
      '你那柔美的神采与深幽的晕影。',
      '',
      '多少人爱过你昙花一现的身影，',
      '爱过你的美貌，以虚伪或真情，',
      '惟独一人曾爱你那朝圣者的心，',
      '爱你哀戚的脸上岁月的留痕。'
    ]
  },
  {
    title: '我想和你虚度时光',
    author: '李元胜',
    lines: [
      '我想和你虚度时光，比如低头看鱼',
      '比如把茶杯留在桌子上，离开',
      '浪费它们好看的阴影',
      '我还想连落日一起浪费，比如散步',
      '一直消磨到星光满天',
      '',
      '我还要浪费风起的时候',
      '坐在走廊发呆，直到你眼中乌云',
      '全部被吹到窗外'
    ]
  },
  {
    title: '见与不见',
    author: '仓央嘉措',
    lines: [
      '你见，或者不见我',
      '我就在那里，不悲不喜',
      '你念，或者不念我',
      '情就在那里，不来不去',
      '你爱，或者不爱我',
      '爱就在那里，不增不减',
      '你跟，或者不跟我',
      '我的手就在你手里，不舍不弃'
    ]
  },
  {
    title: '一棵开花的树',
    author: '席慕蓉',
    lines: [
      '如何让你遇见我',
      '在我最美丽的时刻',
      '为这',
      '我已在佛前求了五百年',
      '求它让我们结一段尘缘',
      '',
      '佛于是把我化作一棵树',
      '长在你必经的路旁'
    ]
  },
  {
    title: '我喜欢你是寂静的',
    author: '聂鲁达',
    lines: [
      '我喜欢你是寂静的，仿佛你消失了一样',
      '你从远处聆听我，我的声音却无法触及你',
      '好像你的双眼已经飞离去',
      '如同一个吻，封缄了你的嘴',
      '',
      '让我在你的沉默中安静无声',
      '并且让我借你的沉默与你说话'
    ]
  }
];

// ==================== 💕 爱情名言 ====================
const LOVE_QUOTES = [
  { text: '世间万物，你是首选，也是唯一。', author: '' },
  { text: '入目无别人，四下皆是你。', author: '' },
  { text: '浮世三千，吾爱有三：日月与卿。日为朝，月为暮，卿为朝朝暮暮。', author: '' },
  { text: '你的名字，是我见过最短的情诗。', author: '' },
  { text: '斯人若彩虹，遇上方知有。', author: '《怦然心动》' },
  { text: '山野万里，你是我藏在微风里的欢喜。', author: '' },
  { text: '我爱你，不光因为你的样子，还因为和你在一起时，我的样子。', author: '罗伊·克里夫特' },
  { text: '世间所有的相遇，都是久别重逢。', author: '《一代宗师》' },
  { text: '有人问我你究竟是哪里好，这么多年我还忘不了。春风再美也比不上你的笑。', author: '李宗盛' },
  { text: '你是非常可爱的人，真应该遇到最好的人，我希望我就是。', author: '王小波' },
  { text: '我这一生都是坚定的唯物主义者，唯有你，我希望有来生。', author: '周恩来' },
  { text: '海底月是天上月，眼前人是心上人。', author: '张爱玲' },
  { text: '答案很长，我准备用一生来回答，你准备好要听了吗？', author: '林徽因' },
  { text: '从前的日色变得慢，车、马、邮件都慢，一生只够爱一个人。', author: '木心' },
  { text: '你来人间一趟，你要看看太阳，和你的心上人，一起走在街上。', author: '海子' },
];

// ==================== 💌 情书模板 ====================
const LOVE_LETTER = `
亲爱的：

写这封信的时候，脑海里全是我们一起去过的每一个地方。

还记得我们第一次旅行吗？你兴奋地规划路线，我偷偷给你拍照。那时候我就想，要是余生都能这样该多好——你在闹，我在笑，我们走在陌生的街道上，却因为有彼此而从不觉得孤单。

我们一起看过海边的落日，走过古城的长巷，吹过山顶的晚风。每一张照片背后都有一个故事，而每个故事的主角都是你。

有人说，旅行是检验两个人是否合适的最好方式。那么，和你走过了这么多路，我想我已经找到了答案——你就是我想一起走到世界尽头的那个人。

往后的日子里，还要和你去更多地方，看更多风景，拍更多照片。

愿所有的旅途，都有你在我身边。

爱你的 ❤️
`;

// ==================== 🌐 网站全局配置 ====================
const SITE_CONFIG = {
  name: '我们的旅行手札',
  subtitle: 'OUR TRAVEL MEMORIES',
  description: '世界很大，有你才算风景',
  heroImage: photoUrl('photos/hero.jpg'),
  footer: '❤️ 所有回忆，皆因有你 ❤️',
  partner1: 'TA',
  partner2: '我',
  anniversary: '每一天',
};
