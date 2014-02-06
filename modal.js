var SimpleModal = {
  init: function(modalHeading, modalMessage, modalEndnote) {
    var sm = this,
        doc = document,
        heading = modalHeading || 'An Eye-Catching Headline',
        message = modalMessage || 'Your message goes here.',
        endnote = modalEndnote || 'Thank you for being awesome!',
        create = this.makeElement.bind(this),
        overlay = create('div', 'modal-overlay modal-hidden'),
        modal = create('div', 'modal'),
        header = create('div', 'modal-header'),
        headerText = create('h4', 'modal-heading', heading),
        body = create('div', 'modal-body'),
        bodyText = create('p', '', message),
        footer = create('div', 'modal-footer'),
        footerText = create('p', '', endnote),
        closeBtn = create('a', 'modal-close', '&times;');
    header.appendChild(headerText);
    header.appendChild(closeBtn);
    body.appendChild(bodyText);
    footer.appendChild(footerText);
    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    closeBtn.addEventListener('click', this.toggle.bind(this), false);
    doc.addEventListener('keyup', function(evt) {
        var e = evt || window.event
        if (e.keyCode === 27) { sm.toggle(); }
    })
    doc.body.appendChild(overlay);
  },

  makeElement: function(type, name, text) {
    var x = document.createElement(type);
    if (name) { x.className = name; }
    if (text) { x.innerHTML = text; }
    return x;
  },

  toggle: function() {
    var el = document.querySelector('.modal-overlay');
    el.classList.toggle('modal-hidden');
  }
};

var modal = SimpleModal.init();
modal.toggle();