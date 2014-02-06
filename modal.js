var SimpleModal = {
  init: function(heading, message, endnote) {
    var create = this.makeElement.bind(this),
        overlay = create('div', 'modal-overlay'),
        modal = create('div', 'modal'),
        header = create('div', 'modal-header'),
        headerText = create('h4', '', heading),
        body = create('div', 'modal-body'),
        bodyText = create('p', '', message),
        footer = create('div', 'modal-footer'),
        footerText = create('p', '', endnote);
    header.appendChild(headerText);
    body.appendChild(bodyText);
    footer.appendChild(footerText);
    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  },

  makeElement: function(type, name, text) {
    var x = document.createElement(type);
    if (name) { x.className = name; }
    if (text) { x.innerHTML = text; }
    return x;
  }
};

var modal = SimpleModal.init(); // SimpleModal.toggle();