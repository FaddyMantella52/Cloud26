setInterval(async () => {
  try {
    const res = await fetch("http://api:8080/");
    console.log(new Date().toISOString(), "API status:", res.status);
  } catch (err) {
    console.log(new Date().toISOString(), "ERROR:", err.message);
  }
}, 10000);