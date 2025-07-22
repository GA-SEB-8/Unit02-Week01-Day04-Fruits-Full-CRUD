<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">Advanced Input Types</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to identify and utilize various advanced HTML input types.

## Using advanced inputs

We've explored some common input types, such as a text input, but over twenty different input types are available, each with distinct behaviors. An `<input>` with the `type="checkbox"` attribute, for example, creates a single check box that toggles between selected and deselected. Some input types like `type="date"` create entirely new types of inputs!

Let's look at some examples. Add the following form to `index.html`:

```html
<h2>Advanced input demo</h2>
<form>
  <div>
    <label for="checkbox-input">Checkbox input:</label>
    <input type="checkbox" id="checkbox-input" />
  </div>
  <div>
    <label for="number-input">Number input:</label>
    <input type="number" id="number-input">
  </div>
  <div>
    <label for="date-input">Date input:</label>
    <input type="date" id="date-input"/>
  </div>
  <div>
    <label for="color-input">Color input:</label>
    <input type="color" id="color-input" />
  </div>
  <div>
    <label for="password-input">Password input:</label>
    <input type="password" />
  </div>
  <div>
    <label for="telephone-input">Telephone input:</label>
    <input type="tel" id="telephone-input"/>
  </div>
</form>
```

Open the page in the browser and experiment with each input. You'll see that while they are all `<input>` elements, the behavior of each type of input varies greatly.

- `number` ensures that an input will only be valid if it only contains numerical values. Mobile browsers on touchscreen devices show a numerical keyboard when users interact with this input, further improving their experience.
- `date` is a helpful type due to the variety of date formats worldwide (DD/MM/YYYY, MM/DD/YYYY, YYYY/MM/DD, etc). Using the `date` type for inputs helps ensure users format date strings correctly.
- `color` is similarly helpful as many users will not be familiar with RGB or Hexadecimal codes, and adding a visual component will help many users select the color they want for an input.
- `password` is similar to text but has the added benefit of obscuring the value as it is being entered.
- `tel` can be very useful for mobile sites, as it will attempt to bring up a keypad to make entering a phone number easier. Note that `tel` will not attempt to validate the structure of a phone number because there is too much variance in telephone format worldwide.

You can check out the [full list of input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) on MDN.

## The `<datalist>` element

At first glance, `<datalist>` and `<select>` look very similar - both allow the user to select a number of `<option>` elements from a dropdown.

However, the `<datalist>` element is more like an associated list of possible options for an `<input>`, where `<select>` is a dropdown list of options in a form.

To better understand what makes them unique, you can think about the `<datalist>` element as a combination of the `<input>` and `<select>` elements. A `<datalist>` is a set of predefined options associated with a text input, allowing the user to select from the options or submit alternative text.

One benefit is that the `<datalist>` element also provides an auto-complete feature. As the user starts typing, any available options matching their text will appear as suggestions.

To test out the `<datalist>` element, add the following to your form:

```html
<label for="pet-choice">Choose a pet:</label>
<input list="pets" id="pet-choice" name="pet-choice" />

<datalist id="pets">
  <option value="dog"></option>
  <option value="cat"></option>
  <option value="fish"></option>
  <option value="bird"></option>
  <option value="reptile"></option>
  <option value="rabbit"></option>
</datalist>
```

In this example, we provide some of the most popular pets as options in a `<datalist>`. These options are not an exhaustive list of all possible pets a user could have, but they reflect common answers.

Using an input with a datalist means we can hint at popular answers while leaving the option for the user to enter something else. It also subtly points users towards using generic terms like "dog" or "fish" instead of entering specifics like "Golden Labradoodle" or "Peppermint Angelfish".

> 💡 `<select>` is more rigid and strictly enforces possible inputs to a curated list of possible options. An `<input>` with an associated `<datalist>` offers selectable options and auto-complete but should still be treated like an `<input>`.
