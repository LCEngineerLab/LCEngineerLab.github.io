/**
 * Language Switch Functionality
 * Handles switching between English and Chinese content sections
 */
(function() {
  'use strict';

  // Prevent multiple initializations
  if (window.languageSwitchInitialized) {
    return;
  }
  window.languageSwitchInitialized = true;

  function updateTOC() {
    const langEn = document.getElementById('lang-en');
    const langCh = document.getElementById('lang-ch');
    const langSwitch = document.getElementById('langSwitch');
    
    if (!langSwitch) return;
    
    const isChinese = langSwitch.checked;
    const visibleSection = isChinese ? langCh : langEn;
    const hiddenSection = isChinese ? langEn : langCh;
    
    // Get all TOC links - try multiple selectors to find the TOC
    const tocLinks = document.querySelectorAll('#toc a[href^="#"], .toc a[href^="#"], nav.toc a[href^="#"], aside.toc a[href^="#"], .post-toc a[href^="#"]');
    
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1); // Remove the #
      
      // Find the target heading element by ID
      const targetHeading = document.getElementById(targetId);
      
      if (!targetHeading) {
        // If we can't find the heading, hide the TOC item to be safe
        const tocItem = link.closest('li') || link.parentElement;
        if (tocItem) {
          tocItem.style.display = 'none';
        }
        return;
      }
      
      // Check if the target heading is within the visible language section
      const isInVisibleSection = visibleSection && visibleSection.contains(targetHeading);
      const isInHiddenSection = hiddenSection && hiddenSection.contains(targetHeading);
      
      // Show TOC item only if heading is in visible section
      const shouldShow = isInVisibleSection && !isInHiddenSection;
      
      // Hide/show the TOC item (hide the parent li if it exists, otherwise hide the link itself)
      const tocItem = link.closest('li') || link.parentElement;
      if (tocItem) {
        tocItem.style.display = shouldShow ? '' : 'none';
      } else {
        link.style.display = shouldShow ? '' : 'none';
      }
    });
  }

  function initLanguageSwitch() {
    const langSwitch = document.getElementById('langSwitch');
    if (!langSwitch) return;

    // Set up event listener for language switch
    langSwitch.addEventListener('change', function() {
      const langEn = document.getElementById('lang-en');
      const langCh = document.getElementById('lang-ch');
      
      if (this.checked === true) {
        if (langEn) {
          langEn.style.display = "none";
        }
        if (langCh) {
          langCh.style.display = "block";
        }
      } else {
        if (langEn) {
          langEn.style.display = "block";
        }
        if (langCh) {
          langCh.style.display = "none";
        }
      }
      
      // Update TOC after a short delay to ensure DOM is updated
      setTimeout(updateTOC, 50);
    });

    // Initialize TOC on page load
    // Wait a bit for TOC to be generated
    setTimeout(updateTOC, 100);
  }

  // Initialize when DOM is ready or if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitch);
  } else {
    // DOM is already loaded
    initLanguageSwitch();
  }
})();

