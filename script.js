;(function () {
    const el = document.getElementById('typewriter')
    if (!el) return
    const words = ['software engineer.', 'full-stack developer.', 'AI-powered developer.', 'CS student @ MSU.', 'problem solver.']
    let wi = 0, ci = 0, deleting = false

    function tick() {
        const word = words[wi]
        el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++)

        let delay = deleting ? 45 : 90
        if (!deleting && ci === word.length + 1) { delay = 1800; deleting = true }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300 }
        setTimeout(tick, delay)
    }
    setTimeout(tick, 800)
})()

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    })
})

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'))
            const a = document.querySelector(`.nav-link[href="#${entry.target.id}"]`)
            if (a) a.classList.add('active')
        }
    })
}, { threshold: 0.4 })
sections.forEach(s => navObserver.observe(s))

function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name    = form.querySelector('input[type="text"]').value
    const email   = form.querySelector('input[type="email"]').value
    const subject = form.querySelectorAll('input[type="text"]')[1].value
    const message = form.querySelector('textarea').value
    const body = `From: ${name} (${email})%0A%0A${encodeURIComponent(message)}`
    window.location.href = `mailto:kojaandrew0@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
}
