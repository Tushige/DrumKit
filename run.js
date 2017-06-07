function run(global) {
    /*
     * @playSound: plays sound on keyboard input
     */
    function playSound(e) {
        const audioId = e.which;
        const audio = document.getElementById(audioId);
        if (!audio) return;
        var key = document.querySelector(`.key[data-key="${e.which}"]`);
        key.classList.add('soundPlaying');
        audio.currentTime = 0;
        audio.play();
    };
    function removeAnimationClass(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('soundPlaying');
    }
    const key = document.getElementsByClassName('key');
    window.addEventListener('keydown', playSound);
    (function registerKeys() {
        var keys = document.getElementById('keyboard').getElementsByClassName('key');
        for (var i=0; i<keys.length; i++) {
            keys[i].addEventListener('transitionend', removeAnimationClass);
        };
    })();
};

document.addEventListener('DOMContentLoaded', run);
