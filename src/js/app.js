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
  // hint
  (() => {
    const hint = document.querySelectorAll('.hint');
    [].slice.call(hint).forEach((item) => {
      const btn = item.querySelector('.hint-btn');
      btn.addEventListener('click', () => {
        item.classList.add('is-open');
      });
    });
  })();
});
