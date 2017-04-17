var picker = new CP(document.querySelector('input'));
    picker.on("change", function(color) {
        this.target.value = '#' + color;
        document.body.style.backgroundColor = '#' + color;
    }, 'main-change');
    var colors = ['012', '123', '234', '345', '456', '567', '678', '789', '89a', '9ab'], box;
    for (var i = 0, len = colors.length; i < len; ++i) {
        box = document.createElement('span');
        box.className = 'color-picker-box';
        box.title = '#' + colors[i];
        box.style.backgroundColor = '#' + colors[i];
        box.addEventListener("click", function(e) {
            picker.set(this.title);
            picker.trigger("change", [this.title.slice(1)], 'main-change');
            e.stopPropagation();
        }, false);
        picker.picker.firstChild.appendChild(box);
}