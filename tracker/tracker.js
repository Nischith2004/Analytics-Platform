(function () {
  const API_URL = "http://localhost:5000/api/events";

  function getSessionId() {
    let sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("session_id", sessionId);
    }

    return sessionId;
  }

  function sendEvent(eventData) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).catch((err) => console.error("Tracking Error:", err));
  }

  function getCommonData() {
    return {
      sessionId: getSessionId(),
      pageUrl: window.location.href,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      screen: {
        width: screen.width,
        height: screen.height,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      referrer: document.referrer,
    };
  }

  function trackPageView() {
    sendEvent({
      ...getCommonData(),
      eventType: "page_view",
    });
  }

  function trackClick(event) {
    sendEvent({
      ...getCommonData(),
      eventType: "click",
      click: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  }

  window.addEventListener("load", trackPageView);

  document.addEventListener("click", trackClick);

  console.log("Analytics Tracker Initialized");
})();
