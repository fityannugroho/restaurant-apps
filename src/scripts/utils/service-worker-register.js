const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('../service-worker.js');
      console.log('Service Worker is registered.', registration);
    } catch (error) {
      console.log('Service Worker registration failed.', error);
    }
    return;
  }
  console.log('Service Worker is not supported in this browser.');
};

export default serviceWorkerRegister;
