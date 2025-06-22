
'use client';

import { useEffect } from 'react';

export default function Script() {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // JavaScript Libraries
    loadScript('https://code.jquery.com/jquery-3.4.1.min.js');
    loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js');
    loadScript('/lib/easing/easing.min.js');
    loadScript('/lib/slick/slick.min.js');
    loadScript('/lib/typed/typed.min.js');
    loadScript('/lib/waypoints/waypoints.min.js');
    loadScript('/lib/isotope/isotope.pkgd.min.js');
    loadScript('/lib/lightbox/js/lightbox.min.js');

    // Template Javascript
    loadScript('/js/main.js');
  }, []);

  return null;
}
