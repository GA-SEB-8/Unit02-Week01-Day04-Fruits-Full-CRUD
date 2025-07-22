<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">Input Elements and Labels</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to create a form with labeled inputs.

## The `<input>` element

The `<form>` is a container element designed to be filled with other elements. One of the most common and versatile of these elements is the `<input>` tag.

The `<input>` element is the primary way to create interfaces for interacting with the user. The look of `<input>` elements can vary drastically depending on their `type` attribute, which dictates a lot about the behavior of the `<input>` and the kind of information they collect. Two of the most common text-based inputs include:

- **Text input**: The most basic form of an input field. It allows users to enter a single line of text.
- **Email input**: This input is similar in appearance to the text input but has built-in text validation. This ensures users enter a valid email format.

## Basic form considerations

When creating a form, try to keep things simple and focused. While forms are often necessary to collect certain information, entering a lot of information on a webpage can be tedious and frustrating from a user's perspective.

Stick to information that serves the immediate needs of your interaction with the user. This approach respects the user's time and privacy, leading to a better user experience. Beyond that, there is a higher chance that the user will complete the form.

In short, ***keep forms relevant and user-friendly***.

With this in mind, what information do we need from the user to meet our needs?

- We want to collect their name to know how to refer to them in a reply. This will require an `<input type="text" />` element.
- We need their email address so that we can respond to them. This will require an `<input type="email" />` element.
- Finally, we need to collect the message itself. An `<input type="text" />` element works for this.

Any other information we try to collect will likely feel unnecessary. Asking for the user's age, location, or the number of cats in their household is not directly relevant, so inputs for this information should be omitted.

## Add inputs

With the following considerations in mind, let's add the following `<input>` elements to our form:

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <input type="text" />
  <input type="email" />
  <input type="text" />
</form>
```

Open the page in the browser and check out the result!

## Using labels

You may have noticed that it's hard to determine what each of these inputs is supposed to do. Giving each of our inputs a clear label helps to solve that issue and helps maintain good accessibility.

The `<label>` element should describe the information each input field seeks from a user. They are crucial for users with visual impairments who rely on screen readers, as labels offer otherwise missing context.

Let's add a `<label>` element that corresponds to each `<input>` element in our form to illustrate their use:

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" />
  <label for="email">Email:</label>
  <input type="email" id="email" />
  <label for="message">Message:</label>
  <input type="text" id="message" />
</form>
```

Notice the `for` attribute in the `<label>` element. This attribute should match the `id` of the corresponding `<input>` element. This link allows screen readers to announce the label when the user focuses on the input, enhancing accessibility.

> 🧠 Labels also improve the user experience on various devices. For instance, tapping on the label on a touchscreen device will focus the corresponding input field, just like a mouse click would.

If we open these changes in the browser, we should see that each input has been labeled.

## The `<textarea>` element

One final optimization before we move on. If you try to type a lengthy message into the message textbox, you'll notice that the input field remains a fixed, single-line size. Imagine if you needed to write a paragraph or give detailed feedback - it would be a pretty awful user experience!

The `<textarea>` element is designed for multi-line text input, providing a much better user experience for lengthier text entries. It expands vertically, allowing users to enter and view their text comfortably.

Let's replace the single-line message `<input>` element with a `<textarea>` element:

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name">
  <label for="email">Email:</label>
  <input type="email" id="email">
  <label for="message">Message:</label>
  <!-- Replacing input with textarea -->
  <textarea id="message"></textarea>
</form>
```

> 🚨 Unlike `<input>`, `<textarea>` needs a closing tag `</textarea>`.

Refresh the browser and test this new `<textarea>` out. Much better!

## Form structure

In HTML forms, organization and clarity are important. While you can use any regular HTML elements within a form (excluding another `<form>` tag), certain tags (like `<p>` and `<div>`) can help create user-friendly groupings of elements. This is also useful for styling a form.

As an example, let's add some `<div>` tags to give our contact form a more vertical alignment.

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message"></textarea>
  </div>
</form>
```

Check the new layout in the browser!
