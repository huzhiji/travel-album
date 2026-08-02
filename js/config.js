/**
 * ❤️  青甘之恋 - 青海甘肃旅行照片展示
 *
 * ==================== 📸 照片托管方案 ====================
 *
 * 七牛云对象存储：高清原图直链展示
 * 域名：https://tj4u61alq.hn-bkt.clouddn.com
 * ===================================================================
 */

// ==================== 📍 照片路径配置 ====================
const PHOTO_BASE_URL = 'https://tj4u61alq.hn-bkt.clouddn.com';

function photoUrl(path) {
  if (PHOTO_BASE_URL) {
    return PHOTO_BASE_URL + '/' + path.replace(/^\//, '');
  }
  return 'photos/' + path;
}

// ==================== 📁 青甘之恋相册 ====================
const ALBUMS = [
  {
    id: 'qinggan',
    name: '青甘之恋',
    description: '青海湖畔的风，敦煌沙漠的沙，张掖丹霞的色 —— 我们的西北之旅',
    cover: 'https://picsum.photos/seed/qinggan/800/600',
    photos: [
      { src: photoUrl('qinggan/00000004.jpg'), title: '青甘之恋 · 1', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000005.jpg'), title: '青甘之恋 · 2', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000006.jpg'), title: '青甘之恋 · 3', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000007.jpg'), title: '青甘之恋 · 4', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000009.jpg'), title: '青甘之恋 · 5', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000012.jpg'), title: '青甘之恋 · 6', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000019.jpg'), title: '青甘之恋 · 7', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000030.jpg'), title: '青甘之恋 · 8', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000036.jpg'), title: '青甘之恋 · 9', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000040.jpg'), title: '青甘之恋 · 10', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000045.jpg'), title: '青甘之恋 · 11', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000046.jpg'), title: '青甘之恋 · 12', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000048.jpg'), title: '青甘之恋 · 13', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000056.jpg'), title: '青甘之恋 · 14', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000057.jpg'), title: '青甘之恋 · 15', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000061.jpg'), title: '青甘之恋 · 16', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000062.jpg'), title: '青甘之恋 · 17', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000063.jpg'), title: '青甘之恋 · 18', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000064.jpg'), title: '青甘之恋 · 19', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000066.jpg'), title: '青甘之恋 · 20', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000082.jpg'), title: '青甘之恋 · 21', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000087.jpg'), title: '青甘之恋 · 22', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000089.jpg'), title: '青甘之恋 · 23', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000096.jpg'), title: '青甘之恋 · 24', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000101.jpg'), title: '青甘之恋 · 25', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000102.jpg'), title: '青甘之恋 · 26', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000106.jpg'), title: '青甘之恋 · 27', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000110.jpg'), title: '青甘之恋 · 28', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000111.jpg'), title: '青甘之恋 · 29', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000113.jpg'), title: '青甘之恋 · 30', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000114.jpg'), title: '青甘之恋 · 31', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000120.jpg'), title: '青甘之恋 · 32', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000121.jpg'), title: '青甘之恋 · 33', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000122.jpg'), title: '青甘之恋 · 34', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000126.jpg'), title: '青甘之恋 · 35', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000128.jpg'), title: '青甘之恋 · 36', width: 6240, height: 4160 },
      { src: photoUrl('qinggan/00000129.jpg'), title: '青甘之恋 · 37', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000130.jpg'), title: '青甘之恋 · 38', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000131.jpg'), title: '青甘之恋 · 39', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000132.jpg'), title: '青甘之恋 · 40', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000133.jpg'), title: '青甘之恋 · 41', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000134.jpg'), title: '青甘之恋 · 42', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000135.jpg'), title: '青甘之恋 · 43', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000136.jpg'), title: '青甘之恋 · 44', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000137.jpg'), title: '青甘之恋 · 45', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000138.jpg'), title: '青甘之恋 · 46', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000139.jpg'), title: '青甘之恋 · 47', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000140.jpg'), title: '青甘之恋 · 48', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000141.jpg'), title: '青甘之恋 · 49', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000142.jpg'), title: '青甘之恋 · 50', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000143.jpg'), title: '青甘之恋 · 51', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000144.jpg'), title: '青甘之恋 · 52', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000145.jpg'), title: '青甘之恋 · 53', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000146.jpg'), title: '青甘之恋 · 54', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000147.jpg'), title: '青甘之恋 · 55', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000148.jpg'), title: '青甘之恋 · 56', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000149.jpg'), title: '青甘之恋 · 57', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000150.jpg'), title: '青甘之恋 · 58', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000151.jpg'), title: '青甘之恋 · 59', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000152.jpg'), title: '青甘之恋 · 60', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000153.jpg'), title: '青甘之恋 · 61', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000154.jpg'), title: '青甘之恋 · 62', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000155.jpg'), title: '青甘之恋 · 63', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000156.jpg'), title: '青甘之恋 · 64', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000157.jpg'), title: '青甘之恋 · 65', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000158.jpg'), title: '青甘之恋 · 66', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000159.jpg'), title: '青甘之恋 · 67', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000160.jpg'), title: '青甘之恋 · 68', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000161.jpg'), title: '青甘之恋 · 69', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000162.jpg'), title: '青甘之恋 · 70', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000163.jpg'), title: '青甘之恋 · 71', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000164.jpg'), title: '青甘之恋 · 72', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000165.jpg'), title: '青甘之恋 · 73', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000166.jpg'), title: '青甘之恋 · 74', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000167.jpg'), title: '青甘之恋 · 75', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000168.jpg'), title: '青甘之恋 · 76', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000169.jpg'), title: '青甘之恋 · 77', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000170.jpg'), title: '青甘之恋 · 78', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000171.jpg'), title: '青甘之恋 · 79', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000172.jpg'), title: '青甘之恋 · 80', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000173.jpg'), title: '青甘之恋 · 81', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000174.jpg'), title: '青甘之恋 · 82', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000175.jpg'), title: '青甘之恋 · 83', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000176.jpg'), title: '青甘之恋 · 84', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000177.jpg'), title: '青甘之恋 · 85', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000178.jpg'), title: '青甘之恋 · 86', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000179.jpg'), title: '青甘之恋 · 87', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000180.jpg'), title: '青甘之恋 · 88', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000181.jpg'), title: '青甘之恋 · 89', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000182.jpg'), title: '青甘之恋 · 90', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000183.jpg'), title: '青甘之恋 · 91', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000184.jpg'), title: '青甘之恋 · 92', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000185.jpg'), title: '青甘之恋 · 93', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000186.jpg'), title: '青甘之恋 · 94', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000187.jpg'), title: '青甘之恋 · 95', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000188.jpg'), title: '青甘之恋 · 96', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000189.jpg'), title: '青甘之恋 · 97', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000190.jpg'), title: '青甘之恋 · 98', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000191.jpg'), title: '青甘之恋 · 99', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000192.jpg'), title: '青甘之恋 · 100', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000193.jpg'), title: '青甘之恋 · 101', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000194.jpg'), title: '青甘之恋 · 102', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000195.jpg'), title: '青甘之恋 · 103', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000196.jpg'), title: '青甘之恋 · 104', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000197.jpg'), title: '青甘之恋 · 105', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000198.jpg'), title: '青甘之恋 · 106', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000199.jpg'), title: '青甘之恋 · 107', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000200.jpg'), title: '青甘之恋 · 108', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000201.jpg'), title: '青甘之恋 · 109', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000202.jpg'), title: '青甘之恋 · 110', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000205.jpg'), title: '青甘之恋 · 111', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000206.jpg'), title: '青甘之恋 · 112', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000209.jpg'), title: '青甘之恋 · 113', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000210.jpg'), title: '青甘之恋 · 114', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000211.jpg'), title: '青甘之恋 · 115', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000212.jpg'), title: '青甘之恋 · 116', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000213.jpg'), title: '青甘之恋 · 117', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000214.jpg'), title: '青甘之恋 · 118', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000217.jpg'), title: '青甘之恋 · 119', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000218.jpg'), title: '青甘之恋 · 120', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000219.jpg'), title: '青甘之恋 · 121', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000220.jpg'), title: '青甘之恋 · 122', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000221.jpg'), title: '青甘之恋 · 123', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000222.jpg'), title: '青甘之恋 · 124', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000223.jpg'), title: '青甘之恋 · 125', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000225.jpg'), title: '青甘之恋 · 126', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000226.jpg'), title: '青甘之恋 · 127', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000227.jpg'), title: '青甘之恋 · 128', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000228.jpg'), title: '青甘之恋 · 129', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000229.jpg'), title: '青甘之恋 · 130', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000230.jpg'), title: '青甘之恋 · 131', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000242.jpg'), title: '青甘之恋 · 132', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000243.jpg'), title: '青甘之恋 · 133', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000244.jpg'), title: '青甘之恋 · 134', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000245.jpg'), title: '青甘之恋 · 135', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000246.jpg'), title: '青甘之恋 · 136', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000247.jpg'), title: '青甘之恋 · 137', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000248.jpg'), title: '青甘之恋 · 138', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000252.jpg'), title: '青甘之恋 · 139', width: 6240, height: 4160 },
      { src: photoUrl('qinggan/00000253.jpg'), title: '青甘之恋 · 140', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000254.jpg'), title: '青甘之恋 · 141', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000256.jpg'), title: '青甘之恋 · 142', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000257.jpg'), title: '青甘之恋 · 143', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000260.jpg'), title: '青甘之恋 · 144', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000261.jpg'), title: '青甘之恋 · 145', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000262.jpg'), title: '青甘之恋 · 146', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000263.jpg'), title: '青甘之恋 · 147', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000264.jpg'), title: '青甘之恋 · 148', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000265.jpg'), title: '青甘之恋 · 149', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000266.jpg'), title: '青甘之恋 · 150', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000267.jpg'), title: '青甘之恋 · 151', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000268.jpg'), title: '青甘之恋 · 152', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000269.jpg'), title: '青甘之恋 · 153', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000270.jpg'), title: '青甘之恋 · 154', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000272.jpg'), title: '青甘之恋 · 155', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000275.jpg'), title: '青甘之恋 · 156', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000276.jpg'), title: '青甘之恋 · 157', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000277.jpg'), title: '青甘之恋 · 158', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000278.jpg'), title: '青甘之恋 · 159', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000279.jpg'), title: '青甘之恋 · 160', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000280.jpg'), title: '青甘之恋 · 161', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000281.jpg'), title: '青甘之恋 · 162', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000282.jpg'), title: '青甘之恋 · 163', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000283.jpg'), title: '青甘之恋 · 164', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000284.jpg'), title: '青甘之恋 · 165', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000285.jpg'), title: '青甘之恋 · 166', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000286.jpg'), title: '青甘之恋 · 167', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000287.jpg'), title: '青甘之恋 · 168', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000288.jpg'), title: '青甘之恋 · 169', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000289.jpg'), title: '青甘之恋 · 170', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000290.jpg'), title: '青甘之恋 · 171', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000291.jpg'), title: '青甘之恋 · 172', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000292.jpg'), title: '青甘之恋 · 173', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000293.jpg'), title: '青甘之恋 · 174', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000294.jpg'), title: '青甘之恋 · 175', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000295.jpg'), title: '青甘之恋 · 176', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000296.jpg'), title: '青甘之恋 · 177', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000297.jpg'), title: '青甘之恋 · 178', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000298.jpg'), title: '青甘之恋 · 179', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000299.jpg'), title: '青甘之恋 · 180', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000300.jpg'), title: '青甘之恋 · 181', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000661.jpg'), title: '青甘之恋 · 182', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000662.jpg'), title: '青甘之恋 · 183', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000663.jpg'), title: '青甘之恋 · 184', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000664.jpg'), title: '青甘之恋 · 185', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000665.jpg'), title: '青甘之恋 · 186', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000666.jpg'), title: '青甘之恋 · 187', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000667.jpg'), title: '青甘之恋 · 188', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000668.jpg'), title: '青甘之恋 · 189', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000672.jpg'), title: '青甘之恋 · 190', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000673.jpg'), title: '青甘之恋 · 191', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000680.jpg'), title: '青甘之恋 · 192', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000681.jpg'), title: '青甘之恋 · 193', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000682.jpg'), title: '青甘之恋 · 194', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000683.jpg'), title: '青甘之恋 · 195', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000684.jpg'), title: '青甘之恋 · 196', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000982.jpg'), title: '青甘之恋 · 197', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000988.jpg'), title: '青甘之恋 · 198', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000990.jpg'), title: '青甘之恋 · 199', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000991.jpg'), title: '青甘之恋 · 200', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000992.jpg'), title: '青甘之恋 · 201', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000993.jpg'), title: '青甘之恋 · 202', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00000994.jpg'), title: '青甘之恋 · 203', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001010.jpg'), title: '青甘之恋 · 204', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001011.jpg'), title: '青甘之恋 · 205', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001012.jpg'), title: '青甘之恋 · 206', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001013.jpg'), title: '青甘之恋 · 207', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001027.jpg'), title: '青甘之恋 · 208', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001042.jpg'), title: '青甘之恋 · 209', width: 4160, height: 6240 },
      { src: photoUrl('qinggan/00001055.jpg'), title: '青甘之恋 · 210', width: 4160, height: 6240 },
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
  { text: '穿过沙漠和雪山，最美的风景是你在我身边。', author: '' },
  { text: '青海湖再大，也大不过我对你的思念。', author: '' },
  { text: '我爱你，不光因为你的样子，还因为和你在一起时，我的样子。', author: '罗伊·克里夫特' },
  { text: '世间所有的相遇，都是久别重逢。', author: '《一代宗师》' },
  { text: '有人问我你究竟是哪里好，这么多年我还忘不了。春风再美也比不上你的笑。', author: '李宗盛' },
  { text: '你是非常可爱的人，真应该遇到最好的人，我希望我就是。', author: '王小波' },
  { text: '我这一生都是坚定的唯物主义者，唯有你，我希望有来生。', author: '周恩来' },
  { text: '海底月是天上月，眼前人是心上人。', author: '张爱玲' },
  { text: '从前的日色变得慢，车、马、邮件都慢，一生只够爱一个人。', author: '木心' },
];

// ==================== 💌 情书模板 ====================
const LOVE_LETTER = `
亲爱的：

写这封信的时候，刚翻完我们在青甘线上的所有照片。

从西宁出发那天，你坐在副驾，兴奋得像个小孩子。青海湖的蓝，茶卡盐湖的白，翡翠湖的绿——但所有的颜色加在一起，都不及你笑起来的时候好看。

记得在祁连草原上，你追着羊群跑，我按下快门的那一刻，心想：这张照片一定要留一辈子。

还有敦煌的沙漠。你踩着沙丘往上爬，夕阳把我们的影子拉得很长很长。那晚的星空特别亮，我说："以后每年都要带你出来。"你点点头，靠在我肩上。

张掖的丹霞地貌像打翻的调色盘，你说这是大自然最浪漫的作品。我想说，我的世界里最浪漫的作品，是你。

这一路走了几千公里，翻过雪山，穿过戈壁，看过无数风景。但最美的风景，始终在我右手边——那个一直牵着我的手不放的人。

青海很远，但你很近。

爱你的 ❤️
`;

// ==================== 🌐 网站全局配置 ====================
const SITE_CONFIG = {
  name: '青甘之恋',
  subtitle: 'QINGHAI-GANSU LOVE STORY',
  description: '三千公里西北路，你是我唯一的风景',
  heroImage: 'https://picsum.photos/seed/qinggan-hero/1920/1080',
  footer: '❤️ 青海很远，但你很近 ❤️',
  partner1: 'TA',
  partner2: '我',
  anniversary: '我们的西北之旅',
};
