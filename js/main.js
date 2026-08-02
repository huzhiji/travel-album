/**
 * ❤️ 我们的旅行手札 - 主逻辑
 * 包含：导航、视图切换、相册、瀑布流、Lightbox、下载
 * 浪漫功能：花瓣飘落、情诗轮播、名言墙、情书页
 */

// ==================== 全局状态 ====================
let currentAlbum = null;
let currentPhotoIndex = 0;
let selectionMode = false;
let selectedPhotos = new Set();
let isZoomed = false;
let currentPoemIndex = 0;
let poemTimer = null;

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initHomePage();
  initPoetry();
  initQuotes();
  initNavbarScroll();

  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 800);

  document.addEventListener('keydown', handleKeyboard);

  // 情诗自动轮播
  startPoemAutoPlay();
});

// ==================== 🌸 花瓣飘落动画 ====================
function initPetals() {
  const container = document.getElementById('petals-container');
  const petalTypes = ['🌸', '💮', '🌺', '🌷', '✿', '❀', '💕', '🍂', '🌼'];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = petalTypes[Math.floor(Math.random() * petalTypes.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (14 + Math.random() * 18) + 'px';
    petal.style.animationDuration = (8 + Math.random() * 16) + 's';
    petal.style.animationDelay = Math.random() * 12 + 's';
    petal.style.opacity = (0.3 + Math.random() * 0.4);
    container.appendChild(petal);
  }
}

// ==================== 导航栏滚动 ====================
let lastScrollY = 0;
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80 && currentScrollY > lastScrollY) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('active');
}

// ==================== Toast ====================
function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast ' + type + ' show';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== 视图切换 ====================
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

function closeMobileMenu() {
  document.getElementById('navLinks').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('active');
}

function navigateToHome() {
  showView('viewHome');
  updateNavActive('home');
}

function scrollToSection(id) {
  // 如果在相册或情书视图，先回到首页
  if (!document.getElementById('viewHome').classList.contains('active')) {
    showView('viewHome');
    updateNavActive('albums');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateNavActive(id === 'albums' ? 'albums' : id === 'poetrySection' ? 'poetry' : 'albums');
  }
}

function updateNavActive(nav) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('data-nav') === nav) a.classList.add('active');
  });
}

function showLoveLetter() {
  showView('viewLetter');
  updateNavActive('letter');
  document.getElementById('letterBreadcrumb').innerHTML = `
    <a href="#" onclick="navigateToHome(); return false;">首页</a>
    <span class="separator">/</span>
    <span class="current">写给你的一封信</span>
  `;
  document.getElementById('loveLetterContent').textContent = LOVE_LETTER.trim();
}

function navigateToAlbum(albumId) {
  const album = ALBUMS.find(a => a.id === albumId);
  if (!album) return;

  currentAlbum = album;
  selectionMode = false;
  selectedPhotos.clear();
  updateDownloadBar();

  document.getElementById('albumName').textContent = album.name;
  document.getElementById('albumCount').textContent = `共 ${album.photos.length} 张照片 · ${album.description}`;
  document.getElementById('breadcrumb').innerHTML = `
    <a href="#" onclick="navigateToHome(); return false;">首页</a>
    <span class="separator">/</span>
    <span class="current">${album.name}</span>
  `;

  const selBtn = document.getElementById('selectionBtn');
  selBtn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 11 12 14 22 4"/></svg>选择下载`;
  selBtn.className = 'btn btn-primary';

  renderMasonry(album);
  showView('viewAlbum');
  updateNavActive('albums');
}

// ==================== 首页渲染 ====================
function initHomePage() {
  document.getElementById('heroBg').style.backgroundImage = `url(${SITE_CONFIG.heroImage})`;
  document.getElementById('heroTitle').textContent = SITE_CONFIG.name;
  document.getElementById('heroSubtitle').textContent = SITE_CONFIG.description;
  document.getElementById('heroSubtitle').textContent = SITE_CONFIG.description;
  document.getElementById('footerContent').textContent = SITE_CONFIG.footer;

  const grid = document.getElementById('albumsGrid');
  grid.innerHTML = '';

  ALBUMS.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.onclick = () => navigateToAlbum(album.id);
    card.innerHTML = `
      <img class="album-card-image" src="${album.cover}" alt="${album.name}" loading="lazy">
      <div class="album-card-overlay">
        <div class="album-card-name">${album.name}</div>
        <div class="album-card-count">${album.photos.length} 张回忆</div>
        <div class="album-card-desc">${album.description}</div>
      </div>
      <div class="album-card-heart">❤️</div>
    `;
    grid.appendChild(card);
  });
}

// ==================== 💌 情诗轮播 ====================
function initPoetry() {
  const slides = document.getElementById('poetrySlides');
  const dots = document.getElementById('poetryDots');
  slides.innerHTML = '';
  dots.innerHTML = '';

  LOVE_POEMS.forEach((poem, i) => {
    const card = document.createElement('div');
    card.className = 'poetry-card';
    card.innerHTML = `
      <h3>${poem.title}</h3>
      <div class="poem-lines">${poem.lines.join('\n')}</div>
      <div class="poem-author">—— ${poem.author}</div>
    `;
    slides.appendChild(card);

    const dot = document.createElement('span');
    dot.className = 'poetry-dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToPoem(i);
    dots.appendChild(dot);
  });

  currentPoemIndex = 0;
  updatePoemPosition();
}

function updatePoemPosition() {
  const slides = document.getElementById('poetrySlides');
  slides.style.transform = `translateX(-${currentPoemIndex * 100}%)`;

  const dots = document.querySelectorAll('.poetry-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === currentPoemIndex));
}

function goToPoem(index) {
  currentPoemIndex = index;
  updatePoemPosition();
  resetPoemAutoPlay();
}

function prevPoem() {
  currentPoemIndex = (currentPoemIndex - 1 + LOVE_POEMS.length) % LOVE_POEMS.length;
  updatePoemPosition();
  resetPoemAutoPlay();
}

function nextPoem() {
  currentPoemIndex = (currentPoemIndex + 1) % LOVE_POEMS.length;
  updatePoemPosition();
  resetPoemAutoPlay();
}

function startPoemAutoPlay() {
  poemTimer = setInterval(() => {
    currentPoemIndex = (currentPoemIndex + 1) % LOVE_POEMS.length;
    updatePoemPosition();
  }, 6000);
}

function resetPoemAutoPlay() {
  clearInterval(poemTimer);
  startPoemAutoPlay();
}

// ==================== 💬 名言墙 ====================
function initQuotes() {
  const wall = document.getElementById('quotesWall');
  wall.innerHTML = '';

  LOVE_QUOTES.forEach(quote => {
    const card = document.createElement('div');
    card.className = 'quote-card';
    card.innerHTML = `
      <div class="quote-mark">"</div>
      <div class="quote-text">${quote.text}</div>
      ${quote.author ? `<div class="quote-author">—— ${quote.author}</div>` : ''}
    `;
    wall.appendChild(card);
  });
}

// ==================== 瀑布流渲染 ====================
function renderMasonry(album) {
  const grid = document.getElementById('masonryGrid');
  grid.innerHTML = '';
  grid.className = selectionMode ? 'masonry selection-mode' : 'masonry';

  album.photos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    if (selectedPhotos.has(index)) item.classList.add('selected');
    item.setAttribute('data-index', index);

    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22><rect fill=%22%232d2218%22 width=%22300%22 height=%22200%22/><text fill=%22%238b7355%22 x=%22150%22 y=%22105%22 text-anchor=%22middle%22 font-size=%2214%22>加载失败</text></svg>'">
      <div class="photo-item-overlay">
        <span class="photo-item-title">${photo.title}</span>
        <span class="photo-item-resolution">${photo.width} × ${photo.height}</span>
      </div>
      <div class="photo-item-love">💕</div>
      <div class="photo-checkbox"></div>
    `;

    item.addEventListener('click', (e) => {
      if (selectionMode) {
        togglePhotoSelection(index, item);
      } else {
        openLightbox(album, index);
      }
    });

    grid.appendChild(item);
  });
}

// ==================== Lightbox ====================
function openLightbox(album, index) {
  currentAlbum = album;
  currentPhotoIndex = index;
  isZoomed = false;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const photo = currentAlbum.photos[currentPhotoIndex];
  const img = document.getElementById('lbImage');
  img.src = photo.src;
  img.classList.remove('zoomed');
  img.style.transform = 'scale(1)';
  document.getElementById('lbTitle').textContent = '💕 ' + photo.title;
  document.getElementById('lbRes').textContent = `${photo.width} × ${photo.height}`;
  document.getElementById('lbCurrent').textContent = currentPhotoIndex + 1;
  document.getElementById('lbTotal').textContent = currentAlbum.photos.length;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  isZoomed = false;
}

function lightboxPrev() {
  currentPhotoIndex = (currentPhotoIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length;
  updateLightbox();
}

function lightboxNext() {
  currentPhotoIndex = (currentPhotoIndex + 1) % currentAlbum.photos.length;
  updateLightbox();
}

function toggleZoom() {
  const img = document.getElementById('lbImage');
  isZoomed = !isZoomed;
  img.classList.toggle('zoomed', isZoomed);
  img.style.transform = isZoomed ? 'scale(1.5)' : 'scale(1)';
}

function downloadSingle() {
  const photo = currentAlbum.photos[currentPhotoIndex];
  downloadImage(photo.src, photo.title || 'photo');
}

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const ext = blob.type.split('/')[1] || 'jpg';
    saveAs(blob, `${filename}.${ext}`);
    showToast('下载完成 💕', 'success');
  } catch (err) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.jpg`;
    a.target = '_blank';
    a.click();
    showToast('已在新窗口打开下载', 'success');
  }
}

// ==================== 键盘操作 ====================
function handleKeyboard(e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('open')) return;
  switch (e.key) {
    case 'Escape': closeLightbox(); break;
    case 'ArrowLeft': lightboxPrev(); break;
    case 'ArrowRight': lightboxNext(); break;
  }
}

document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) closeLightbox();
});

// ==================== 选择模式 ====================
function toggleSelectionMode() {
  selectionMode = !selectionMode;
  const btn = document.getElementById('selectionBtn');
  const grid = document.getElementById('masonryGrid');

  if (selectionMode) {
    selectedPhotos.clear();
    btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>取消选择`;
    btn.className = 'btn btn-outline';
  } else {
    btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 11 12 14 22 4"/></svg>选择下载`;
    btn.className = 'btn btn-primary';
  }

  grid.className = selectionMode ? 'masonry selection-mode' : 'masonry';
  grid.querySelectorAll('.photo-item').forEach(item => item.classList.remove('selected'));
  updateDownloadBar();
}

function exitSelectionMode() {
  selectionMode = false;
  selectedPhotos.clear();
  const grid = document.getElementById('masonryGrid');
  grid.className = 'masonry';
  grid.querySelectorAll('.photo-item').forEach(item => item.classList.remove('selected'));
  const btn = document.getElementById('selectionBtn');
  btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 11 12 14 22 4"/></svg>选择下载`;
  btn.className = 'btn btn-primary';
  updateDownloadBar();
}

function togglePhotoSelection(index, item) {
  if (selectedPhotos.has(index)) {
    selectedPhotos.delete(index);
    item.classList.remove('selected');
  } else {
    selectedPhotos.add(index);
    item.classList.add('selected');
  }
  updateDownloadBar();
}

function selectAll() {
  const grid = document.getElementById('masonryGrid');
  grid.querySelectorAll('.photo-item').forEach((item, i) => {
    selectedPhotos.add(i);
    item.classList.add('selected');
  });
  updateDownloadBar();
}

function deselectAll() {
  selectedPhotos.clear();
  const grid = document.getElementById('masonryGrid');
  grid.querySelectorAll('.photo-item').forEach(item => item.classList.remove('selected'));
  updateDownloadBar();
}

function updateDownloadBar() {
  const bar = document.getElementById('downloadBar');
  const count = document.getElementById('selectedCount');
  if (selectionMode && currentAlbum) {
    count.textContent = selectedPhotos.size;
    bar.classList.add('visible');
  } else {
    bar.classList.remove('visible');
  }
}

// ==================== 📦 批量下载（JSZip 前端打包） ====================
async function batchDownload() {
  if (!currentAlbum || selectedPhotos.size === 0) {
    showToast('请先选择要下载的照片 💕', 'error');
    return;
  }

  const photos = [...selectedPhotos].map(i => currentAlbum.photos[i]);
  const totalPixels = photos.reduce((sum, p) => sum + (p.width * p.height), 0);
  const estimatedMB = Math.round(totalPixels * 3 / (1024 * 1024));

  if (estimatedMB > 500) {
    if (!confirm(`预计下载大小约 ${estimatedMB} MB，建议分批下载。\n\n是否继续？`)) return;
  }

  const progressDiv = document.getElementById('downloadProgress');
  const progressFill = document.getElementById('progressFill');
  const progressPercent = document.getElementById('progressPercent');
  const progressLabel = document.getElementById('progressLabel');
  progressDiv.classList.add('visible');
  progressFill.style.strokeDashoffset = '226';
  progressPercent.textContent = '0%';
  progressLabel.textContent = '正在为你们准备回忆...';

  const btn = document.getElementById('batchDownloadBtn');
  btn.disabled = true;
  btn.textContent = '打包中...';

  try {
    const zip = new JSZip();
    const folder = zip.folder(currentAlbum.name);
    const circumference = 2 * Math.PI * 36;

    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];
      progressLabel.textContent = `正在珍藏: ${photo.title} (${i + 1}/${photos.length})`;

      try {
        const response = await fetch(photo.src);
        const blob = await response.blob();
        const ext = blob.type.split('/')[1] || 'jpg';
        folder.file(`${photo.title}_${i + 1}.${ext}`, blob);
      } catch (fetchErr) {
        const blob = await fetchImageAsBlob(photo.src);
        if (blob) folder.file(`${photo.title}_${i + 1}.jpg`, blob);
      }

      const progress = Math.round(((i + 1) / photos.length) * 100);
      const offset = circumference - (progress / 100) * circumference;
      progressFill.style.strokeDasharray = circumference;
      progressFill.style.strokeDashoffset = offset;
      progressPercent.textContent = progress + '%';
    }

    progressLabel.textContent = '正在打包你们的回忆...';

    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    }, (meta) => {
      const p = Math.round(meta.percent);
      const offset = circumference - (p / 100) * circumference;
      progressFill.style.strokeDashoffset = offset;
      progressPercent.textContent = p + '%';
    });

    saveAs(zipBlob, `${currentAlbum.name}_${photos.length}张回忆.zip`);
    progressLabel.textContent = '回忆珍藏完毕！💕';
    showToast(`已打包下载 ${photos.length} 张回忆 💕`, 'success');
  } catch (err) {
    console.error('下载失败:', err);
    progressLabel.textContent = '下载失败，请重试';
    showToast('下载失败：' + err.message, 'error');
  } finally {
    setTimeout(() => progressDiv.classList.remove('visible'), 1500);
    btn.disabled = false;
    btn.innerHTML = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>打包下载 (ZIP)`;
  }
}

async function fetchImageAsBlob(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.95);
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

// ==================== 📱 手机保存模式 ====================
let msAlbum = null;
let msIndex = 0;
let msSavedCount = 0;
let msTouchStartX = 0;
let msTouchStartY = 0;
let msTouchMoved = false;
let isSaving = false;

function startMobileSave() {
  if (!currentAlbum) {
    showToast('请先进入一个相册', 'error');
    return;
  }
  msAlbum = currentAlbum;
  msIndex = 0;
  msSavedCount = 0;
  isSaving = false;

  // 检测 iOS 设备，显示快捷指令引导
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  document.getElementById('msIosGuide').style.display = isIOS ? 'block' : 'none';

  updateMsDisplay();
  document.getElementById('viewAlbum').classList.remove('active');
  document.getElementById('viewMobileSave').classList.add('active');
  document.body.style.overflow = 'hidden';

  // 绑定触摸事件
  const imgArea = document.getElementById('msImageArea');
  imgArea.addEventListener('touchstart', msTouchStart, { passive: false });
  imgArea.addEventListener('touchmove', msTouchMove, { passive: false });
  imgArea.addEventListener('touchend', msTouchEnd, { passive: false });

  // 键盘支持
  document.addEventListener('keydown', msKeyboard);

  // 3秒后隐藏滑动提示
  setTimeout(() => {
    document.getElementById('msSwipeHint').classList.add('hidden');
  }, 3000);
}

function exitMobileSave() {
  document.getElementById('viewMobileSave').classList.remove('active');
  document.getElementById('viewAlbum').classList.add('active');
  document.body.style.overflow = '';

  const imgArea = document.getElementById('msImageArea');
  imgArea.removeEventListener('touchstart', msTouchStart);
  imgArea.removeEventListener('touchmove', msTouchMove);
  imgArea.removeEventListener('touchend', msTouchEnd);

  document.removeEventListener('keydown', msKeyboard);

  msAlbum = null;
  isSaving = false;
}

function updateMsDisplay() {
  const photo = msAlbum.photos[msIndex];
  document.getElementById('msImage').src = photo.src;
  document.getElementById('msPhotoTitle').textContent = '💕 ' + photo.title;
  document.getElementById('msProgress').textContent = `${msIndex + 1} / ${msAlbum.photos.length}`;
  document.getElementById('msSaved').textContent = `已保存 ${msSavedCount} 张`;

  // 重置保存按钮
  const saveBtn = document.getElementById('msSaveBtn');
  saveBtn.classList.remove('saved');
  saveBtn.textContent = '💾 保存到相册';
}

function msNextPhoto() {
  if (isSaving) return;
  msIndex = (msIndex + 1) % msAlbum.photos.length;
  updateMsDisplay();
}

function msPrevPhoto() {
  if (isSaving) return;
  msIndex = (msIndex - 1 + msAlbum.photos.length) % msAlbum.photos.length;
  updateMsDisplay();
}

// ==================== 核心：保存到手机相册 ====================
async function msSaveCurrent() {
  if (isSaving) return;
  isSaving = true;

  const photo = msAlbum.photos[msIndex];
  const saveBtn = document.getElementById('msSaveBtn');
  saveBtn.textContent = '⏳ 保存中...';

  try {
    // 策略1: 使用 Share API（手机上分享菜单可直接保存）
    if (navigator.share && navigator.canShare) {
      const response = await fetch(photo.src);
      const blob = await response.blob();
      const file = new File([blob], `${photo.title}.jpg`, { type: blob.type || 'image/jpeg' });

      const shareData = {
        title: photo.title,
        files: [file]
      };

      if (navigator.canShare(shareData)) {
        await navigator.share(shareData);
        // 分享成功后（用户可能选择了"保存图片"）
        onMsSaveSuccess();
        return;
      }
    }
  } catch (e) {
    // Share API 失败或用户取消，降级为下载
    if (e.name === 'AbortError') {
      // 用户取消了分享，不算成功也不算失败
      saveBtn.textContent = '💾 保存到相册';
      saveBtn.classList.remove('saved');
      isSaving = false;
      return;
    }
  }

  // 策略2: 降级 — 触发浏览器下载
  try {
    const response = await fetch(photo.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${photo.title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    onMsSaveSuccess();
  } catch (err) {
    // 策略3: 最终降级 — 直接打开图片链接
    const a = document.createElement('a');
    a.href = photo.src;
    a.download = `${photo.title}.jpg`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    onMsSaveSuccess();
  }
}

function onMsSaveSuccess() {
  msSavedCount++;

  // 按钮动画
  const saveBtn = document.getElementById('msSaveBtn');
  saveBtn.classList.add('saved');
  saveBtn.textContent = '✅ 已保存';

  // 计数弹跳动画
  const savedEl = document.getElementById('msSaved');
  savedEl.textContent = `已保存 ${msSavedCount} 张`;
  savedEl.classList.add('pop');
  setTimeout(() => savedEl.classList.remove('pop'), 300);

  // 图片区域闪光动画
  const imgArea = document.getElementById('msImageArea');
  const flash = document.createElement('div');
  flash.className = 'ms-save-flash';
  imgArea.appendChild(flash);
  setTimeout(() => flash.remove(), 400);

  const check = document.createElement('div');
  check.className = 'ms-save-check';
  check.textContent = '💾';
  imgArea.appendChild(check);
  setTimeout(() => check.remove(), 600);

  // 自动翻到下一张（延迟一下让用户看到反馈）
  setTimeout(() => {
    if (msIndex < msAlbum.photos.length - 1) {
      msIndex++;
      updateMsDisplay();
    } else {
      // 全部保存完毕
      document.getElementById('msPhotoTitle').textContent = '🎉 全部保存完毕！';
      saveBtn.textContent = '✅ 完成';
      saveBtn.classList.add('saved');
    }
    isSaving = false;
  }, 500);
}

// ==================== 触摸滑动手势 ====================
function msTouchStart(e) {
  msTouchStartX = e.touches[0].clientX;
  msTouchStartY = e.touches[0].clientY;
  msTouchMoved = false;
}

function msTouchMove(e) {
  if (isSaving) return;
  const dx = e.touches[0].clientX - msTouchStartX;
  const dy = e.touches[0].clientY - msTouchStartY;

  // 水平滑动优先
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
    e.preventDefault();
    msTouchMoved = true;

    const img = document.getElementById('msImage');
    const resistance = 0.3;
    img.style.transform = `translateX(${dx * resistance}px)`;
    img.style.opacity = 1 - Math.abs(dx) / 400;
  }
}

function msTouchEnd(e) {
  const img = document.getElementById('msImage');
  img.style.transform = '';
  img.style.opacity = '';

  if (!msTouchMoved) return;

  const dx = e.changedTouches[0].clientX - msTouchStartX;
  const threshold = 60;

  if (dx < -threshold) {
    msNextPhoto();
  } else if (dx > threshold) {
    msPrevPhoto();
  }
}

// 键盘支持
function msKeyboard(e) {
  if (document.getElementById('viewMobileSave').classList.contains('active')) {
    if (e.key === 'ArrowLeft') msPrevPhoto();
    if (e.key === 'ArrowRight') msNextPhoto();
    if (e.key === 's' || e.key === 'S') msSaveCurrent();
    if (e.key === 'Escape') exitMobileSave();
  }
}
