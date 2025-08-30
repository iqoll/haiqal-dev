// Interactive Description
const descSections = {
  head: document.getElementById('desc-head'),
  lefthand: document.getElementById('desc-lefthand'),
  righthand: document.getElementById('desc-righthand'),
  default: document.getElementById('desc-default'),
}
let isLocked = false
let hasInteracted = false

if (!descSections.default) {
  console.warn('desc-default not found');
}

// Fungsi melihatkan deskrpsi
function showDesc(section) {
  if (!hasInteracted) {
  hasInteracted = true;
  if (descSections.default) {
    descSections.default.classList.remove('active');
  }
}

  Object.values(descSections).forEach(desc => desc.classList.remove('active'));

  if (section && descSections[section]) {
    descSections[section].classList.add('active')
  }

  if (hasInteracted && descSections.default) {
    descSections.default.classList.remove('default')
  }
}

// Fungsi reset deskripsi dan gambar
function resetAll() {
  document.getElementById('head-img').classList.remove('active')
  document.getElementById('lefthand-img').classList.remove('active')
  document.getElementById('righthand-img').classList.remove('active')
  showDesc(null)
}

document.getElementById('head').addEventListener('click', () => {
  const img = document.getElementById('head-img')
  const isActive = img.classList.contains('active');
  resetAll()
  if (!isActive) {
    img.classList.add('active')
    showDesc('head')
    isLocked = true
  }
})

document.getElementById('lefthand').addEventListener('click', () => {
  const img = document.getElementById('lefthand-img')
  const isActive = img.classList.contains('active');
  resetAll()
  if (!isActive) {
    img.classList.add('active')
    showDesc('lefthand')
    isLocked = true
  }
}) 

document.getElementById('righthand').addEventListener('click', () => {
  const img = document.getElementById('righthand-img')
  const isActive = img.classList.contains('active');
  resetAll()
  if (!isActive) {
    img.classList.add('active')
    showDesc('righthand')
    isLocked = true
  }
})

// Hover sementara
document.getElementById('head').addEventListener('mouseenter', ()=> {
  if (!isLocked && !document.getElementById('head-img').classList.contains('active')) {
    showDesc('head')
  }
})
document.getElementById('head').addEventListener('mouseleave', ()=> {
  if (!isLocked && !document.getElementById('head-img').classList.contains('active')) {
    showDesc('default')
  }
})

document.getElementById('lefthand').addEventListener('mouseenter', ()=> {
  if (!isLocked && !document.getElementById('lefthand-img').classList.contains('active')) {
    showDesc('lefthand')
  }
})
document.getElementById('lefthand').addEventListener('mouseleave', ()=> {
  if (!isLocked && !document.getElementById('lefthand-img').classList.contains('active')) {
    showDesc('default')
  }
})
document.getElementById('righthand').addEventListener('mouseenter', ()=> {
  if (!isLocked && !document.getElementById('righthand-img').classList.contains('active')) {
    showDesc('righthand')
  }
})
document.getElementById('righthand').addEventListener('mouseleave', ()=> {
  if (!isLocked && !document.getElementById('righthand-img').classList.contains('active')) {
    showDesc('default')
  }
})


