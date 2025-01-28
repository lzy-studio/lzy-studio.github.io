// 检查用户是否首次访问首页
window.onload = function() {
    // 获取当前页面的URL
    const currentPage = window.location.href;
    // 获取首页的URL
    const homePage = new URL('index.html', currentPage).href;

    // 检查当前页面是否是首页
    if (currentPage === homePage) {
        // 检查localStorage中是否已经记录了访问状态
        if (!localStorage.getItem('hasVisited')) {
            // 显示欢迎提示
            alert('欢迎访问LZY工作室网站！');
            // 记录用户已经访问过首页
            localStorage.setItem('hasVisited', 'true');
        }
    }

    const navRightMenu = document.getElementsByClassName("right-menu")[0];
    const navRightMenuUl = navRightMenu.getElementsByTagName("ul")[0];
    navRightMenu.addEventListener("click", () => {
        if (navRightMenuUl.style.display)
            navRightMenuUl.style.display = "";
        else
            navRightMenuUl.style.display = "block";
    });
    navRightMenuUl.addEventListener("focusout", () => {
        navRightMenuUl.style.display = "block";
    })
};
