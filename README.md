JS Modal
========

A simple modal made with JavaScript.

### Usage and Options

Initialize modal by calling the constructor function with text parameters:
  
    var myModal = new SimpleModal({
      "heading": "Hello World!",
      "body": "This is my modal message.",
      "footer": "Thanks for reading my modal!"
    });

Trigger modal with show/hide/toggle methods:

    myModal.show(); // Displays modal

    myModal.hide(); // Hides modal
  
    myModal.toggle(); // Toggles modal's display