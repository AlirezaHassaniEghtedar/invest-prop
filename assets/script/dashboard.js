const sidebarToggler = document.querySelector(
  ".dashboard .main-content .main-content-header img.sidebar-menu-icon"
);

const closeSiedbarBtn = document.querySelector('.sidebar .sidebar-header span.close-sidebar')

const sidebar = document.querySelector('.dashboard .sidebar')

sidebarToggler.addEventListener("click", handleToggleSidebar);
closeSiedbarBtn.addEventListener('click' , handleToggleSidebar)

function handleToggleSidebar() {
    sidebar.classList.toggle('deactive')   
}