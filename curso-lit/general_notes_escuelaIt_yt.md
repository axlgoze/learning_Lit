The render method defines the component view

literal template: ES6 tagged template literal
``

new version to define properties:
static properties={
        header: { type: String },
        counter: {type: Number}
    }

Calling properties in literal tag:
${this.propName}

- properties are initialized in the Constructor


# COUNTER

<small>instances</small>
    <eit-counter
        counter="100"
    ></eit-counter>
    <br>
    <eit-counter
        counter="12"
    ></eit-counter>

we can modify values outside:in de index file.

constructor initialize properties

the imports on index.js must have extension

EVENTS
@eventHandler="$(js code)"
@eventHandler="$(this.eventName"

STYLES
living in html literal template

BOOLEAN
when you initialize a boolean property you only need to put the name's property
<feedback-element
        msg="Pikachu"
        
></feedback-element>
