# JavaScript + HTML Learning Roadmap
### Internship Prep — Medra (AIxBIOROBOTICS)

**Background:** Python (CS50, numerical methods). No JS experience yet.
**Goal:** Get comfortable in JavaScript, HTML, OOP, and Claude Code before the internship.

---

## Phase 1 — JavaScript Fundamentals (Python → JS Translation)

JavaScript is similar to Python in structure but has key differences. Learn JS by comparing it to what you already know.

### Variables
```python
# Python
x = 5
name = "Leyton"
```
```javascript
// JavaScript
let x = 5;          // mutable variable
const name = "Leyton"; // immutable (like a Python constant)
var old = "avoid";  // old style, don't use
```
- Use `const` by default. Use `let` when you need to reassign. Avoid `var`.
- JavaScript requires semicolons (optional but good practice).

### Data Types
| Python | JavaScript | Notes |
|--------|-----------|-------|
| `int`, `float` | `number` | JS has just one number type |
| `str` | `string` | Same behavior |
| `bool` | `boolean` | `true`/`false` (lowercase) |
| `None` | `null` / `undefined` | `null` = intentionally empty, `undefined` = not set |
| `list` | `Array` | `[1, 2, 3]` |
| `dict` | `Object` | `{ key: value }` |

### Functions
```python
# Python
def add(a, b):
    return a + b

double = lambda x: x * 2
```
```javascript
// JavaScript — two common styles
function add(a, b) {
    return a + b;
}

const double = (x) => x * 2;  // arrow function (like lambda, but more capable)
```

### Arrays (like Python lists)
```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.push("date");          // append
fruits[0];                    // indexing — "apple"
fruits.length;                // like len()

// Looping
fruits.forEach(f => console.log(f));       // like: for f in fruits: print(f)
const upper = fruits.map(f => f.toUpperCase());  // like list comprehension
const long = fruits.filter(f => f.length > 5);  // filter
```

### Objects (like Python dicts)
```javascript
const person = {
    name: "Leyton",
    age: 22,
    greet: function() { return `Hi, I'm ${this.name}`; }
};

person.name;         // "Leyton"
person["age"];       // 22 — bracket notation also works
```

### Conditionals and Loops
```javascript
// Conditionals — same logic as Python, just with {}
if (x > 5) {
    console.log("big");
} else if (x === 5) {
    console.log("exactly 5");
} else {
    console.log("small");
}

// Note: use === for equality (not ==), which checks type AND value

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Key JS-Only Concept: `this`
In JS, `this` refers to the object a function belongs to. It behaves differently than Python's `self` because it depends on *how* the function is called, not just where it's defined. Arrow functions don't have their own `this` — they inherit it from the surrounding scope. This trips up beginners; come back to it after learning classes.

### Key JS-Only Concept: Asynchronous Code
JavaScript is single-threaded but handles async operations (network calls, file reads) without blocking. This is central to JS in a way Python's `asyncio` is not.

```javascript
// Promises — JS's way of saying "do this later, then..."
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// async/await — cleaner syntax (same thing)
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

**Resources for Phase 1:**
- [javascript.info](https://javascript.info) — best free JS resource, start at "The JavaScript Language"
- Practice in your browser's DevTools console (right-click → Inspect → Console)

---

## Phase 1.5 — JSON (JavaScript Object Notation)

JSON was heavily emphasized and comes up constantly in real-world JS work — APIs, config files, cloud tools, and databases all communicate using JSON. Learn this early.

### What JSON Is
JSON is a text format for representing structured data. It looks almost identical to a JavaScript object, which makes it easy to work with in JS.

```json
{
  "name": "Leyton",
  "age": 22,
  "skills": ["Python", "JavaScript"],
  "internship": {
    "company": "Medra",
    "focus": "go to market tooling"
  }
}
```

### JSON vs JavaScript Objects
They look nearly identical — the key difference is that **JSON requires double-quoted keys**.

```javascript
// JavaScript object (keys don't need quotes)
const person = { name: "Leyton", age: 22 };

// JSON string (keys must be quoted — it's just text)
const jsonString = '{"name": "Leyton", "age": 22}';
```

### The Two Essential Methods

```javascript
// JSON.stringify() — convert a JS object → JSON string (for sending data)
const obj = { filename: "report.pdf", chunks: ["a1b2", "c3d4"] };
const json = JSON.stringify(obj);
// json is now the string: '{"filename":"report.pdf","chunks":["a1b2","c3d4"]}'

// JSON.parse() — convert a JSON string → JS object (for receiving data)
const received = '{"filename":"report.pdf","chunks":["a1b2","c3d4"]}';
const parsed = JSON.parse(received);
parsed.filename;  // "report.pdf"
parsed.chunks;    // ["a1b2", "c3d4"]
```

Think of it like packing and unpacking a box:
- `stringify` = pack a JS object into a string to send somewhere
- `parse` = unpack a string back into a JS object you can work with

### Why It Matters for the Interview Problem
The manifest in the cloud storage problem was stored as JSON:
```javascript
// store_file used JSON.stringify to serialize the manifest before storing it
const manifest = JSON.stringify({ chunkIds, checksums });
await put_data(new TextEncoder().encode(manifest), manifestId);

// get_file used JSON.parse to reconstruct it after retrieval
const { chunkIds, checksums } = JSON.parse(new TextDecoder().decode(manifestBytes));
```

### Gotchas
- JSON **cannot** contain functions, `undefined`, or circular references — they get dropped or throw errors
- All strings in JSON must use double quotes (not single quotes)
- Numbers, booleans (`true`/`false`), `null`, arrays, and nested objects are all valid JSON values

---

## Phase 2 — HTML Basics + Connecting to JavaScript

HTML is the structure of a webpage. JavaScript is the behavior. They work together.

### HTML Document Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <button id="myBtn">Click me</button>

    <script src="app.js"></script>  <!-- links your JS file -->
  </body>
</html>
```

### Common Tags
| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings |
| `<p>` | Paragraph |
| `<div>` | Generic container (like a box) |
| `<a href="">` | Link |
| `<img src="">` | Image |
| `<input>` | Text field, checkbox, etc. |
| `<button>` | Clickable button |
| `<ul>` / `<li>` | Bullet list |

### DOM Manipulation — How JS Controls HTML
The DOM (Document Object Model) is JS's view of the HTML page as objects.

```javascript
// Select elements
const btn = document.querySelector("#myBtn");       // by ID
const items = document.querySelectorAll(".item");   // by class

// Change content
btn.textContent = "New label";

// Respond to events
btn.addEventListener("click", () => {
    alert("Button clicked!");
});

// Create new elements
const newDiv = document.createElement("div");
newDiv.textContent = "I was added by JS";
document.body.appendChild(newDiv);
```

**Resources for Phase 2:**
- [MDN Web Docs](https://developer.mozilla.org) — the authoritative reference for HTML/JS
- Build something simple: a to-do list or a button that changes a color

---

## Phase 3 — Object-Oriented Programming in JavaScript

OOP review side-by-side with Python.

### Classes
```python
# Python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

d = Dog("Rex")
print(d.speak())
```
```javascript
// JavaScript
class Animal {
    constructor(name) {
        this.name = name;  // this.name is like self.name
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const d = new Dog("Rex");
console.log(d.speak());
```

### Key OOP Concepts to Know for Interviews
- **Encapsulation**: bundling data + methods together in a class
- **Inheritance**: child class extends parent class (`extends` / `super()`)
- **Polymorphism**: same method name, different behavior in subclasses (like `speak()` above)
- **Abstraction**: hiding complexity behind a clean interface

### Practice Exercise
Build a `FileStorage` class that:
- Takes a filename and file data
- Has a method to split itself into 1mb chunks
- Has a method to generate unique chunk IDs

This leads directly into Phase 4.

**Resources for Phase 3:**
- Eloquent JavaScript, Chapter 6 (free online): eloquentjavascript.net

---

## Phase 4 — The Interview Problem: Cloud Storage Chunking

This was the actual interview problem. Work through it until you can solve it from scratch.

### The Problem
**You are given:**
- `put_data(data, data_id)` — stores a 1mb chunk in the cloud at a 4-char alphanumeric ID
- `get_data(data_id)` → returns a 1mb chunk, **sometimes corrupted** (random)

**You must implement:**
- `store_file(filename, filedata)` — store a file up to 100mb
- `get_file(filename)` → return the full file bytes

**Goals:**
1. Reliably store and retrieve data (handle corruption)
2. Minimize execution time
3. Minimize number of PUT and GET calls

### Design Decisions to Think Through

**1. Chunking** — A 100mb file won't fit in one 1mb slot.
Split the file into 1mb pieces. A 100mb file = 100 chunks.

**2. ID generation** — You need unique 4-char alphanumeric IDs (a-z, 0-9 = 36 chars → 36^4 ≈ 1.68 million combos).
How do you track which IDs are used? How do you avoid collisions?

**3. Manifest / Index** — When retrieving, how do you know which chunk IDs belong to which file?
You need to store a "table of contents" — a manifest that maps filename → [chunk_id_1, chunk_id_2, ...].
The manifest itself must be stored as a chunk at a predictable/known ID.

**4. Corruption handling** — `get_data` sometimes returns corrupted data.
Strategy: store a checksum (hash) of each chunk when you store it. When retrieving, verify the hash. If it doesn't match, retry — corruption is random, so retry usually succeeds.

**5. Minimizing calls** — Avoid redundant reads. Parallelize PUT calls where possible (async/await).

### Solution Sketch (JavaScript)
```javascript
const CHUNK_SIZE = 1_000_000; // 1mb in bytes
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateId() {
    return Array.from({ length: 4 }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
}

async function storeFile(filename, filedata) {
    const chunks = [];
    for (let i = 0; i < filedata.length; i += CHUNK_SIZE) {
        chunks.push(filedata.slice(i, i + CHUNK_SIZE));
    }

    const chunkIds = [];
    const checksums = [];

    // Store all chunks (ideally in parallel with Promise.all)
    await Promise.all(chunks.map(async (chunk, i) => {
        const id = generateId();
        chunkIds[i] = id;
        checksums[i] = hash(chunk);  // compute checksum before storing
        await put_data(chunk, id);
    }));

    // Store manifest at a deterministic ID derived from filename
    const manifest = JSON.stringify({ chunkIds, checksums });
    const manifestId = filenameToId(filename);  // deterministic 4-char ID from filename
    await put_data(new TextEncoder().encode(manifest), manifestId);
}

async function getFile(filename) {
    const manifestId = filenameToId(filename);
    const manifestBytes = await getWithRetry(manifestId, null);
    const { chunkIds, checksums } = JSON.parse(new TextDecoder().decode(manifestBytes));

    const chunks = await Promise.all(
        chunkIds.map((id, i) => getWithRetry(id, checksums[i]))
    );

    return concatenate(chunks);  // merge all chunks back into one
}

async function getWithRetry(id, expectedChecksum, maxRetries = 5) {
    for (let i = 0; i < maxRetries; i++) {
        const data = await get_data(id);
        if (!expectedChecksum || hash(data) === expectedChecksum) {
            return data;
        }
    }
    throw new Error(`Could not retrieve uncorrupted data for id: ${id}`);
}
```

### What the Interviewer is Looking For
- Do you break the problem into subproblems? (chunking, indexing, corruption)
- Do you think about edge cases? (file exactly 1mb, empty file, manifest corruption)
- Do you think about performance? (parallel PUT/GET with Promise.all)
- Can you communicate your design decisions clearly?

---

## Phase 5 — Claude Code Workflow

You're already using it! Here's how to get the most out of it:

- **Be specific**: "Add a `getWithRetry` function to my storage module that retries up to 5 times" beats "make it handle errors"
- **Use plan mode**: Before big changes, let Claude plan and show you the approach before writing code (like we just did)
- **Ask for explanations**: "Explain what Promise.all does and why I'm using it here"
- **Iterate**: Review what Claude writes, ask follow-up questions, push back if something looks wrong
- **Read the output**: Claude Code is a tool to accelerate you, not replace your understanding

---

## Order of Operations

| Week | Focus |
|------|-------|
| 1–2 | JS Fundamentals (javascript.info) + practice in browser console |
| 3 | HTML basics + build a simple interactive webpage |
| 4 | OOP in JS — build the FileStorage class |
| 5 | Solve the cloud storage interview problem end-to-end in JS |
| Ongoing | Use Claude Code to iterate, explain, and extend your solutions |

---

## Resources

| Resource | What For |
|----------|---------|
| [javascript.info](https://javascript.info) | JS fundamentals — best free resource |
| [MDN Web Docs](https://developer.mozilla.org) | HTML/JS reference |
| [Eloquent JavaScript](https://eloquentjavascript.net) Ch. 6 | OOP deep dive |
| Browser DevTools Console | Instant JS playground (no setup needed) |
| Claude Code | Code help, explanations, iteration |
