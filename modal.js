function SimpleModal(options) {
    this.header = options.header || 'An Eye-Catching Headline';
    this.body = options.body || 'Your message goes here.';
    this.footer = options.footer || 'Thank you for being awesome!';
    this.init();
    this.overlay = document.querySelector('.modal-overlay');
}

SimpleModal.prototype.init = function() {
    var sm = this,
        create = this.makeElement.bind(this),
        overlay = create('div', 'modal-overlay modal-hidden'),
        modal = create('div', 'modal'),
        header = create('div', 'modal-header'),
        headerText = create('h4', 'modal-heading', sm.header),
        body = create('div', 'modal-body'),
        bodyText = create('p', '', sm.body),
        footer = create('div', 'modal-footer'),
        footerText = create('p', '', sm.footer),
        closeBtn = create('a', 'modal-close', '&times;');

    header.appendChild(headerText);
    header.appendChild(closeBtn);
    body.appendChild(bodyText);
    footer.appendChild(footerText);
    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    closeBtn.addEventListener('click', sm.hide.bind(sm), false);
    overlay.addEventListener('click', sm.hide.bind(sm), false);
    document.addEventListener('keyup', function(evt) {
        var e = evt || window.event;
        if (e.keyCode === 27) { sm.hide(); }
    });
    return this;
};

SimpleModal.prototype.makeElement = function(type, name, text) {
    var x = document.createElement(type);
    if (name) { x.className = name; }
    if (text) { x.innerHTML = text; }
    return x;
};

SimpleModal.prototype.show = function() {
    return this.overlay.classList.remove('modal-hidden');
};

SimpleModal.prototype.hide = function() {
    return this.overlay.classList.add('modal-hidden');
};

SimpleModal.prototype.toggle = function() {
    return this.overlay.classList.toggle('modal-hidden');
};
