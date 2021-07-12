---
theme: default
class:
  - invert
marp: true
---
# (De)optimising JavaScript

![JS LOGO](https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg)

---

## Goal :

To make things faster, we need to understand, what slows things down, 

> question we want to understand today _why does doing something like X slow things down_

And then, we will argue with proof (because we are all engineers and we <3 maths) the claims and assumptions we make.

---

## Parsing :

- The first step of any execution is parsing. So all JS has to be parsed.
- Parsing is slow. 1 Mb of JS can take as much as 1 second to be parsed.
- So to make things faster : parse as less as possible, but thats easier said than done !

---

At the heart of all parsing is the V8, 

Parsing happens in two phases :
> **Eager**  
all of the code is parsed all at once.

> **Lazy**  
Do the bare minimum and do it later.

---

## Unfortunately,
you cannot control it !!

---

Okay, lets understand what we just said !

```js
// this is eagerly parsed

const a = 1;
const b = 2;

// take a note there is a functions here,
// we will parse the body of the fucntion later when called, 

function addTwoNumbers(a,b){
	return a+b;
}

// Boom ! go back now and parse
addTwoNumbers(a,b)
```

---

## Lets rewind and take a look at the bigger picture:

![image](https://user-images.githubusercontent.com/49792104/125257317-ee346c80-e31a-11eb-8d76-9426185ce1e4.png)


---


---

