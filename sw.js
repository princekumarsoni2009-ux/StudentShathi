self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'https://cdn-icons-png.flaticon.com/512/3449/3449614.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3449/3449614.png'
  };
  event.waitUntil(
    self.registration.showNotification('StudentShathi Update', options)
  );
});
