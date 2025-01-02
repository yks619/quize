

document.getElementById('menuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

function toggleContent1() {
    const content = document.getElementById('content');
    content.classList.toggle('hidden');
}
function toggleContent2() {
    const content = document.getElementById('content1');
    content.classList.toggle('hidden');
}
function toggleContent3() {
    const content = document.getElementById('content2');
    content.classList.toggle('hidden');
}
function toggleContent4() {
    const content = document.getElementById('content3');
    content.classList.toggle('hidden');
}
function toggleContent5() {
    const content = document.getElementById('content4');
    content.classList.toggle('hidden');
}
function toggleContent6() {
    const content = document.getElementById('content5');
    content.classList.toggle('hidden');
}
function toggleContent7() {
    const content = document.getElementById('content6');
    content.classList.toggle('hidden');
}