function Payload() {
    //  Nothing to see here.
}

Payload.prototype.init = function init(options) {
    this.options = options || {};
    this.errorState = this.options.errorState || false;
    return this.getPayload();
};

Payload.prototype.getErrorMessage = function getErrorMessage() {
    if (this.errorState === true){
        return "Oops. there was an error";
    } 
    return false;
};

Payload.prototype.getPayload = function getPayload() {
  
    var payload = {

        title: 'Express front end: Home',
        
        CONTEXT_MESSAGES: {
            EL_MESSAGE: [
                {mod: "master", content: "<h3>{.message--master}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='#'>link</a> Quisque sed fringilla ipsum. Suspendisse ut sem augue. Suspendisse sed magna a neque pretium aliquet. Sed justo dolor, bibendum vehicula imperdiet nec. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra pellentesque Justo quis sodales. Suspendisse dolor magna a fringilla augue. Ut feugiat turpis a faselli.</p>"},
                {mod: "error-up", content: "<p>{.message--error-up}<br>There are errors on this page please take a moment to check your answers.</p>"},
                {mod: "error-down", content: "<p>{.message--error-down}<br>There are errors on this page please take a moment to check your answers.</p>"},
                {mod: "info-up", content: "<p>{.message--info-up}<br>There are errors on this page please take a moment to check your answers.</p>"},
                {mod: "info-down", content: "<p>{.message--info-down}<br>There are errors on this page please take a moment to check your answers.</p>"}
            ]
        },

        CONTEXT_BLOCK_LINKS: {
            EL_BLOCK_LINK: [
                {title: "master", meta: "Whoa meta stuff"},
                {title: "error-up", meta: "Whoa meta stuff"},
                {title: "error-down", meta: "Whoa meta stuff"}
            ]
        },

        CONTEXT_FORM: {

            EL_ROW: [
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input"},
                    EL_INPUT: {type: "text", placeholder: "[type='text']"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input"},
                    EL_INPUT: {type: "tel", placeholder: "[type='tel']"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input"},
                    EL_INPUT: {type: "email", placeholder: "[type='email']"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input"},
                    EL_INPUT: {type: "password", placeholder: "[type='password']"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "search-suggest input"},
                    EL_INPUT: {type: "text", mod: "search", hint: "Additional information"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Textarea"},
                    EL_TEXTAREA: {}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input (prefixed)", hint: "Additional information with <a href='#''>link</a>"},
                    EL_INPUT: {type: "text", placeholder: "for example, 2.99", prefix: "£"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input (suffixed)"},
                    EL_INPUT: {type: "text", placeholder: "for example, 0.5", suffix: "mg"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Textual value", hint: "Do not use disabled inputs"},
                    EL_FAUX: {text: "Master Stewie Griffin"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Delimited text input"},
                    EL_INPUT: [
                        { mod: "xs", type: "text", placeholder: "yyyy", delimiter: "-"},
                        { mod: "xs", type: "text", placeholder: "yyyy", delimiter: "-"},
                        { mod: "xs", type: "text", placeholder: "yyyy"}
                    ]
                },
                {  
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Selection (std. width)", hint: "Matches text input width"},
                    EL_SELECT: { 
                        options: [
                            {value: "1", text: "mobile"},
                            {value: "2", text: "tablet"},
                            {value: "3", text: "desktop"}
                        ]
                    }
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Selection (matches. width)", hint: "A select element with a class of min = data width."},
                    EL_SELECT: {
                        mod: "min",  
                        options: [
                            {value: "1", text: "mobile"},
                            {value: "2", text: "tablet"},
                            {value: "3", text: "desktop"}
                        ]
                    }
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Radios"},
                    EL_TOUCH: {
                        options: [
                            { name: "radio", value: "1", type: "radio", text: "Opt 1"},
                            { name: "radio", value: "2", type: "radio", text: "Opt 2"},
                            { name: "radio", value: "3", type: "radio", text: "Opt 3"},
                            { name: "radio", value: "4", type: "radio", text: "Opt 4"}
                        ]
                    }
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Checkboxes", hint: "Please select all that apply"},
                    EL_TOUCH: {
                        options: [
                            { name: "checkbox", value: "1", type: "checkbox", text: "Opt 1"},
                            { name: "checkbox", value: "2", type: "checkbox", text: "Opt 2"},
                            { name: "checkbox", value: "3", type: "checkbox", text: "Opt 3"},
                            { name: "checkbox", value: "4", type: "checkbox", text: "Opt 4"}
                        ]
                    }
                },

                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Date format"},
                    // TODO: use GDS style fieldsets
                    EL_SELECT: [
                        {mod: "min", noNull: true, options: [{value: "0", text: "Day"},{value: "1", text: "1"},{value: "etc.", text: "..."},{value: "2", text: "31"}]},
                        {mod: "min", noNull: true, options: [{value: "0", text: "Month"},{value: "1", text: "Jan"},{value: "etc.", text: "..."},{value: "2", text: "Dec"}]},
                        {mod: "min", noNull: true, options: [{value: "0", text: "Year"},{value: "1", text: "2015"},{value: "etc.", text: "..."},{value: "2", text: "1900"}]},
                    ]
                },

                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Date format - long year"},
                    // TODO: use GDS style fieldsets
                    EL_SELECT: [
                        {mod: "min", noNull: true, options: [{value: "0", text: "Day"},{value: "1", text: "1"},{value: "etc.", text: "..."},{value: "2", text: "31"}]},
                        {mod: "min", noNull: true, options: [{value: "0", text: "Month"},{value: "1", text: "Jan"},{value: "etc.", text: "..."},{value: "2", text: "Dec"}]}
                    ],
                    // TODO: slight hack here - it's relying on the order of partials in molecule_question.hbs
                    EL_INPUT: { mod: "xs", type: "text", placeholder: "yyyy"}
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Buttons"},
                    EL_BUTTON: [
                        {text: "Button"},
                        {text: "button--secondary", mod: "secondary"},
                        {text: "button--tertiary", mod: "tertiary"},
                        {text: "button--muted", mod: "muted"}
                    ]
                },
                {
                    error: this.getErrorMessage(),
                    EL_QUESTION: {text: "Input and search"},
                    // TODO: slight hack here - it's relying on the order of partials in molecule_question.hbs
                    EL_INPUT: {type: "text"},
                    EL_BUTTON: {text: "Search", mod: "secondary"}
                }

            ]

        },

        CONTEXT_NAV: {
            EL_BUTTON: [
                {text: "Back", mod: "muted"},
                {text: "Continue"}
            ]
        }
    };

    return payload;

};

// Proxy the class to hide all public methods
var payloadProxy = new Payload();

// Only export required public methods
module.exports = {
    init: function(opts) {
        return payloadProxy.init(opts);
    }
};
