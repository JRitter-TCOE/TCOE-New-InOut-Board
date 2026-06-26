export function createAddVisitorBtn() {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = 'addVisitorBtn';
    btn.innerText = 'Visitor Sign-In';
    btn.style.display = 'none';

    btn.onclick = () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';

    }

    return btn;
}