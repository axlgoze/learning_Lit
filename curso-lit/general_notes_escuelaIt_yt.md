# Learning notes 🤓

## Render 
The render method defines the component view

literal template: ES6 tagged template literal
```
html`
`;
```
## Properties
new version to define properties:
```
static properties={
        header: { type: String },
        counter: {type: Number}
    }
```

Calling properties in literal tag:
```
${this.propName}
```
properties are initialized in the Constructor


## COUNTER Exercise notes
```
<small>instances</small>
    <eit-counter
        counter="100"
    ></eit-counter>
    <br>
    <eit-counter
        counter="12"
    ></eit-counter>
```
we can modify values outside:in de index file.

constructor initialize properties

the imports on index.js must have extension

## EVENTS
```
@eventHandler="$(js code)"
@eventHandler="$(this.eventName"
```
## STYLES
living in html literal template

## BOOLEAN
when you initialize a boolean property you only need to put the name's property
```
<feedback-element
        msg="Pikachu"
        
></feedback-element>
```
## SHADOWROOT
To access to the elements inside a component use shadowRoot:
```
this.shadowRoot.getElementById("feedback")._open("5 clicks!")
```
shadowRoot is the root of the component and is useful to access to the elements inside the template

## BINDING
### Attribute
![bindToProperty](../assets/bindToProp.png)
### Property
![bindToAttribute](../assets/bindToAttr.png)
### Text
![bindToText](../assets/bindToTxt.png)
### Boolean Attribute
![bindToBoolean](../assets/bindToBoo.png)
### Event
![bindToEvent](../assets/bindToEve.png)


## Conditionals
![conditional](./assets_lit/conditionals.png)
## Repeats
![repeats](./assets_lit/repeats.png)