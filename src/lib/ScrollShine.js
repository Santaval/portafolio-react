export default function scrollIndicator() {
  scrollShine(document.getElementById('#aboutIndicator'),  -10, '--about');
  document.addEventListener('scroll', () => {
    scrollShine(document.getElementById('#aboutIndicator'),  -10, '--about');
      scrollShine(document.getElementById('#experienceIndicator'),  500, '--experience');
      scrollShine(document.getElementById('#knowledgeIndicator'),  1000, '--knowledge');
      scrollShine(document.getElementById('#projectsIndicator'),  2100, '--projects');
  })

}

function defaultIndicator(element) {
  element.style.filter = 'drop-shadow(0px 0px 0px #fff)';
  element.style.webkitTextStroke = ' 1px #fff';
  element.parentNode.parentNode.children[0].style.backgroundColor = '#fff'
}

function scrollShine(element, scroll, color) {

  if(window.scrollY >= scroll) {
    document.querySelectorAll('.indicator .sectionName').forEach((indicator) => {
      defaultIndicator(indicator)
    })
    element.style.filter = `drop-shadow(0px 0px 23px var(${color}))`;
    element.style.webkitTextStroke =`1px var(${color})`;
    element.parentNode.parentNode.children[0].style.backgroundColor = `var(${color})`
  } else {
    defaultIndicator(element)
  }
}