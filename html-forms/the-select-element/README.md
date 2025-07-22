<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">The Select Element</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use the `<select>` element and its accompanying `<option>` elements to create dropdown menus in HTML forms.

## Selecting from a list of options

A frequently used form element is `<select>`. It creates dropdown menus so the user can select a choice from a list of options.

Each `<select>` element will contain a number of `<option>` elements that will appear when the `<select>` element is clicked.

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name">Name:</label>
    <div><small>required</small></div>
    <input type="text" id="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <div><small>required</small></div>
    <input type="email" id="email" required />
  </div>
  <!-- Add the below code -->
  <div>
    <label for="category">I'm contacting about:</label>
    <select id="category">
      <option value="work">A job opportunity</option>
      <option value="question">A question</option>
      <option value="misc">Miscellaneous</option>
    </select>
  </div>
  <!-- Add the above code -->
  <div>
    <label for="message">Message:</label>
    <div><small>required</small></div>
    <textarea id="message" required maxLength="100"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

As with our other inputs, we will attach the label to the dropdown by giving the `<select>` element an `id` attribute and the `<label>` element a `for` attribute that matches.

Each `<option>` should have a `value` that contains the data value you want to submit with the form. If the user selects this option, that `value` attribute will be sent to the server. For example, given the following `<option>`

```html
<option value="work">A job opportunity</option>
```

The user selects "A job opportunity", but the form data will contain "work" as the value.

## A quick note on styling

`<select>` and `<option>` elements are notoriously difficult to style. They are quite limited as far as what can be styled, and depending on the browser some key visual attributes like font and background color aren't accessible at all.

You can learn more about the difficulties with styling select and option elements from MDN's [Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling) documentation.
