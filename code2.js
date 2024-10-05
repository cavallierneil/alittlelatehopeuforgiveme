// Paste your JavaScript code here
function hi() {
    console.log("Hello World!");
  }// Load the EmailJS SDK dynamically
  (function() {
      var emailJsScript = document.createElement('script');
      emailJsScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      emailJsScript.onload = function() {
          // Once the EmailJS SDK is loaded, initialize EmailJS and trigger email
          emailjs.init("IqZmPJ1qfSz8TE4-c");  // Replace with your EmailJS public User ID
  
          // Trigger the email when the SDK is loaded
          emailjs.send("service_8134hkc", "template_5v2jsio", {
              from_name: "Website Visitor",
              message: "Someone has visited your website!"
          })
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
              console.log('FAILED...', error);
          });
      };
      document.head.appendChild(emailJsScript);
  })();
  
  // Google Analytics Setup
  (function() {
      // Google Analytics script configuration
      var gaScript = document.createElement('script');
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KVBEV7R3KP";  // Replace with your Google Analytics Tracking ID
      gaScript.async = true;
      gaScript.onload = function() {
          // Once the Google Analytics script is loaded, configure tracking
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KVBEV7R3KP');  // Replace with your Google Analytics Tracking ID
      };
      document.head.appendChild(gaScript);
  })();
  
  hi();