const readAll = document.querySelector('.header__read-all');
const notificationList = Array.from(document.querySelectorAll('.ul__li'));
const unreadNotifications = Array.from(document.querySelectorAll('.active'));
const numberOfUnread = document.querySelector('.header__number') as HTMLElement || null;

readAll?.addEventListener('click', () => {
    notificationList.forEach(notification => {
        notification.classList.remove('active');
    })

    numberOfUnread.textContent = '0'
})

console.log(numberOfUnread?.textContent)