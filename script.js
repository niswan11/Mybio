// Smooth scroll for in-page navigation
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

// Contact form placeholder handler
const form=document.getElementById('contactForm')
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault()
    const data=new FormData(form)
    const payload={
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message')
    }
    console.log('Contact form submitted (demo):', payload)
    alert('Thanks — your message was recorded (demo).')
    form.reset()
  })
}
