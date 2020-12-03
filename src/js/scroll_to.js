import { imgsContainer } from './markup_render';

export default function scrollToBottom() {
  if (imgsContainer.children.length > 0) {
    const { y } = imgsContainer.lastElementChild.getBoundingClientRect();
    setTimeout(() => {
      window.scrollTo({
        top: y + 300,
        behavior: 'smooth',
      });
    }, 200);
  }
}
