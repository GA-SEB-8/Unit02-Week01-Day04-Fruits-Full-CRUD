<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">Button Elements in Forms</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use a button to submit a form.

## The `<button>` element

With our form complete, we have one final step - we need some way for the user to submit the form once it has been filled out.

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name"> Name: </label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email"> Email: </label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message"> Message: </label>
    <textarea id="message"></textarea>
  </div>
  <!-- we need a submit button -->
</form>
```

For this, we can use a `<button>` element with a `type` attribute set to a value of `"submit"`.

When a `<button type="submit">` inside a `<form>` element is clicked, it will submit the form data to the URL designated by the form's `action` attribute.

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name"> Name: </label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email"> Email: </label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message"> Message: </label>
    <textarea id="message"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

> 🧠 In this example, `"/the-form-submits-here"` is a placeholder URL; therefore, clicking submit doesn't submit the data anywhere.
