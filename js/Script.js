const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu');

btn.addEventListener('click',()=>{
    // btn.classList.toggle('open')
    // nav.classList.toggle('flex')
    // nav.classList.toggle('hidden')
    const toggleClass =(el,Class) => {
        el.classList.toggle(Class)
    }

    toggleClass(btn,'open')
    toggleClass(nav,'flex')
    toggleClass(nav,'hidden')
})

// let myNum = [1,2,3,4,5,6,7];

// myNum.forEach((v) => {
//     console.log(v*2);
// });