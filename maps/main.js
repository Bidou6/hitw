if(navigator.geolocation) {
    // L'API est disponible
    console.log("ok")
  } else {
    // Pas de support, proposer une alternative ?
    console.log("not ok")
  }