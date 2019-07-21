import Trix from "trix"

Trix.config.textAttributes.textColour = {
	styleProperty: "color",
  inheritable: true
 }

addEventListener("trix-initialize", function(event) {
  var extraHTML = '<input type="color" class="trix-button colourPicker"/>'

	event.target.toolbarElement.
  	querySelector(".trix-button-group--text-tools").
		insertAdjacentHTML("beforeend", extraHTML)

  document.
    querySelectorAll(".colourPicker").forEach(function(cp){
      cp.addEventListener("input", function (event) {
        var trix_element = event.target.closest('trix-toolbar').nextElementSibling
        trix_element.editor.activateAttribute("textColour", event.target.value)
    })
  })
})