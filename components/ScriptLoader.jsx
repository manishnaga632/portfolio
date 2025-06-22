
'use client';

import { useEffect } from 'react';

export default function ScriptLoader() {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadScriptsSequentially = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
        await loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js');
        await loadScript('/lib/easing/easing.min.js');
        await loadScript('/lib/slick/slick.min.js');
        await loadScript('/lib/typed/typed.min.js');
        await loadScript('/lib/waypoints/waypoints.min.js');
        await loadScript('/lib/isotope/isotope.pkgd.min.js');
        await loadScript('/lib/lightbox/js/lightbox.min.js');
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Script load failed:', error);
      }
    };

    loadScriptsSequentially();
  }, []);

  return null;
}












