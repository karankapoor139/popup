
  <script>

    // Listen for key press to allow intentional exit
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'q') {
        console.log("Exiting fullscreen intentionally via 'q' key.");
        exitFullscreen();
      } else if (e.key === 'Escape') {
        // Can't stop Esc from exiting fullscreen, but can detect it
        console.log("Escape key pressed — can't block, but will re-enter fullscreen.");
      }
    ;
  </script>