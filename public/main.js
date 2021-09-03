if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    console.log("Loading particles.js...")
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particlesjs-config.json', function () {
        console.log('Particles.js config loaded');
    });
}