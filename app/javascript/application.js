// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery";
import "semantic-ui"
import "channels"
import {scrollBottom} from "./utils";

$(document).on('turbo:load', function() {
   $('.ui.dropdown').dropdown();
   scrollBottom();
})
