import { Controller } from "@hotwired/stimulus"
// import GMaps from 'gmaps/gmaps.js';

// Connects to data-controller="maps-autocomplete"
export default class extends Controller {
  static targets = [ "address" ]

  connect() {
    console.log(this.addressTarget)
    let autocomplete = new google.maps.places.Autocomplete(this.addressTarget, { types: [ 'geocode' ] });
    google.maps.event.addEventListener(this.addressTarget, 'keydown', function(e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Do not submit the form on Enter.
      }
    });
  }
}
