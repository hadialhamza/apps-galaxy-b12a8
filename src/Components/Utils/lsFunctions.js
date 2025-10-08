const handleInstall = (app) => {
  const previousInstalledApps = JSON.parse(localStorage.getItem("install"));
  let updatedInstalledApps = [];
  if (previousInstalledApps) {
    const isAppExists = previousInstalledApps.some(
      (item) => item.id === app.id
    );
    if (isAppExists) {
      alert("App Already Installed");
      return;
    }
    updatedInstalledApps = [...previousInstalledApps, app];
  } else {
    updatedInstalledApps.push(app);
  }
  localStorage.setItem("install", JSON.stringify(updatedInstalledApps));
};

export default handleInstall;

export const handleUninstall = (id) => {
  const previousInstalledApps = JSON.parse(localStorage.getItem("install"));
  const updatedInstalledApps = previousInstalledApps.filter(
    (app) => app.id !== id
  );
  localStorage.setItem("install", JSON.stringify(updatedInstalledApps));
};

export const getInstalledApps = () => {
  const previousInstalledApps = JSON.parse(localStorage.getItem("install"));
  return previousInstalledApps;
};
