// 菜单折叠/展开动画
const expandable = document.querySelector('.menu-expandable');
if (expandable) {
  expandable.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu-title') || e.target.classList.contains('arrow')) {
      expandable.classList.toggle('open');
    }
  });
}
// 菜单跳转高亮
const menuLinks = document.querySelectorAll('.menu-link, .submenu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // 仅高亮，跳转由a标签默认行为处理
    menuLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
// 自动高亮当前页面菜单
(function() {
  const path = location.pathname.split('/').pop();
  menuLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
})();
// 响应式菜单（移动端可扩展）
// 可根据需要扩展更多交互 
// 可根据需要扩展更多交互 