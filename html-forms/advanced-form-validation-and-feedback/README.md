<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">Advanced Form Validation and Feedback</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to apply advanced form validation techniques using HTML and CSS. They will learn to use pseudo-classes like `:valid` and `:invalid` for live form validation feedback.

## CSS Selectors for Form Feedback

As we've seen, client-side form validation helps to give users feedback about the data they've entered into a form. The downside is that, so far, users have needed to try and submit the form to receive this feedback. This means that if anything is incomplete or entered incorrectly, the user only knows this upon rejection - not the best user experience.

Luckily, we can use the `:valid` and `:invalid` pseudo-classes to add live validation feedback to our forms.

Let's leave our existing contact form aside for now and use a simple sign in form to demonstrate the power of these pseudo-classes:

```html
<h2>Sign In Form</h2>
<form action="/sign-in" method="POST">
  <div>
    <label for="user">Username:</label>
    <div><small>required, at least 6 characters</small></div>
    <input 
      type="text" 
      id="user" 
      minlength="6" 
      required 
    />
  </div>
  <div>
    <label for="password">Password:</label>
    <div><small>required, at least 6 characters</small></div>
    <input 
      type="password" 
      id="password" 
      minlength="6" 
      required 
    />
  </div>
  <button type="submit">Sign In</button>
</form>
```

Summarizing the above code, we have created a form that has:

- A text input for the user to enter their username.
- A password input for the user to enter their password. The `password` type obscures text as it is entered for security.
- These fields are required, and each must have at least six characters.
- We've communicated these needs to users so that they are informed of the requirements, making our form more accessible.

With that built, let's add some feedback for users! To do so, we'll first need to create a CSS file:

```bash
touch style.css
```

Then, in `index.html`, link the style sheet inside of the `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Finally, in `style.css`, add the following:

```css
input:valid {
  border: green 1px solid;
  background-color: lightgreen;
}
```

By default, these inputs will be considered invalid. This is because they are empty (and each field is required) and because each input has a `minlength` of 6 characters. We could add styling for `input:invalid` as well. However, this is less pleasant to look at when completing a form.

Once all of the necessary conditions are met, the input becomes valid. You can test this out in the browser now - once you hit six characters in either field, the border and background should change, indicating a valid entry.

> 🧠 Remember, all of this validation is happening on the client side. The `:valid` selector turns the input border green when the user's input matches the required pattern. However, the password entry won't be verified until that data gets to the server and can be matched against the correct password held there.

Hold on though - as it stands, we're allowing our users to set some truly weak passwords. For example, '123456' or 'password' would pass our current validation standards.

## Validating with a regular expression

We can use the [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) attribute and a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) to create more strict requirements for validity. Check out the [`pattern` documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) for more details on implementing this type of validation.

## Accessibility Concerns

Typically, invalid inputs are styled red, while valid inputs are styled green.

For people with certain types of color blindness, this can present accessibility issues. As such, accompanying text or icons are typically favored over simply using color to note the validity of a form.

This can be handled with JavaScript or CSS by adding an image background of an icon to the input background.
