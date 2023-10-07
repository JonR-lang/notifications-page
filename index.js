var readAll = document.querySelector('.header__read-all');
var notificationList = Array.from(document.querySelectorAll('.ul__li'));
var unreadNotifications = Array.from(document.querySelectorAll('.active'));
var numberOfUnread = document.querySelector('.header__number') || null;
readAll === null || readAll === void 0 ? void 0 : readAll.addEventListener('click', function () {
    notificationList.forEach(function (notification) {
        notification.classList.remove('active');
    });
    numberOfUnread.textContent = '0';
});
console.log(numberOfUnread === null || numberOfUnread === void 0 ? void 0 : numberOfUnread.textContent);
