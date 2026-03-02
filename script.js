// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href=a.getAttribute('href')
    if(href && href.startsWith('#')){
      e.preventDefault()
      const el=document.querySelector(href)
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'})
    }
  })
})

// Contact form handler (placeholder)
const form=document.getElementById('contactForm')
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault()
    const data=new FormData(form)
    const name=data.get('name')||''
    const email=data.get('email')||''
    const message=data.get('message')||''
    console.log('Contact submission', {name,email,message})
    alert('Thanks — your message was received (demo).')
    form.reset()
  })
}
