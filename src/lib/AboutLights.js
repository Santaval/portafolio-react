export default function lights() {
  window.addEventListener('load', () => {
    let aboutSectionsLights = true; //if lights are on or not
  
  function offLights() {
    if (aboutSectionsLights) {
      const LIGHTSTXT = document.querySelectorAll('.aboutSection .shine,.aboutWhiteShine') //all texts with light effect
      LIGHTSTXT.forEach((txt) => {
        txt.classList.add('lightAnimation')
         setTimeout(() => {
        txt.classList.remove('lightAnimation')
        txt.classList.add('off')
      }, 1000);
      })
      document.querySelector('.mainLogoRender').src = 'assets/code-solid-grey.svg'
      aboutSectionsLights = false
    }
  }

  function onLights() {
    if (!aboutSectionsLights) {
      const LIGHTSTXT = document.querySelectorAll('.aboutSection .shine,.aboutWhiteShine') //all texts with light effect
      LIGHTSTXT.forEach((txt) => {
        txt.classList.add('lightAnimation')
         setTimeout(() => {
        txt.classList.remove('lightAnimation')
        txt.classList.remove('off')
      }, 1000);
      })
      document.querySelector('.mainLogoRender').src = 'assets/code-solid.svg'
      aboutSectionsLights = true
    }
  }

  document.addEventListener('scroll', () => {
    // eslint-disable-next-line no-restricted-globals
    if(scrollY > 200) offLights()
    else onLights()
  })
  
  })
}

