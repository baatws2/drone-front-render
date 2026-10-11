# Drone Front online preview

Unity WebGL drone game and Node.js WebSocket room server. Render configuration is in render.yaml and uses the Free plan in Frankfurt. Docker serves the game, Android APK download and /rooms from the same HTTPS origin. Health endpoint: /health.

The Android preview includes the local WebGL game, so it is not a native Unity Android build. Set the deployed HTTPS URL in the APK online-server setting. Free hosting may sleep; current connection UI waits up to 90 seconds for startup.

Prototype: 8 players per room, browser/app local virtual economy, ephemeral rooms and server ray hits without terrain collision. This is a development game without account security or cheat-resistant progression.
