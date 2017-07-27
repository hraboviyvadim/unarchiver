import { lory } from 'lory.js';

document.addEventListener('DOMContentLoaded', () => {
  // slider
  const slider = document.querySelector('.js_slider');
  if (slider) {
    lory(slider);
  }
  // expanede block
  (() => {
    const block = document.querySelectorAll('.js-show');
    [].slice.call(block).forEach((item) => {
      const btn = item.querySelector('.js-show-more');
      btn.addEventListener('click', () => {
        item.classList.add('is-open');
      });
    });
  })();
  /* eslint no-param-reassign: "off", max-len: "off" */
  const closest = (el, selector) => {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };
  // hint
  (() => {
    const hint = document.querySelectorAll('.hint');
    [].slice.call(hint).forEach((item) => {
      const btn = item.querySelector('.hint-btn');
      btn.addEventListener('click', (e) => {
        [].slice.call(hint).forEach((modal) => {
          modal.classList.remove('is-open');
        });
        e.target.closest('.hint').classList.add('is-open');
      });
    });
    document.addEventListener('click', (e) => {
      const parent = e.target.closest('.hint');
      if (!parent) {
        [].slice.call(hint).forEach((item) => {
          item.classList.remove('is-open');
        });
      }
    });
  })();
});
