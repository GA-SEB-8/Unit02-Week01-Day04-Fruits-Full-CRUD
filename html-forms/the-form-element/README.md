<h1>
  <span class="headline">HTML Forms</span>
  <span class="subhead">The Form Element</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand the basics of HTML forms, including how to construct a form and utilize its key attributes.

## App goal

As we work in this lecture we'll be building a contact form where a user can submit a message, and leave their contact information so that we're able to send them a reply.

## The `<form>` element

The `<form>` element represents a document section containing interactive controls for submitting information. `<form>` acts as a wrapper element for various other elements, which either offer structure to the form or work as ***controls*** for the form itself.

Let's create a form using the `<form>` container element inside of the `<body>`. We'll add a header above it as well:

```html
<h1>Contact Form</h1>
<form>
  <!-- Form controls go here -->
</form>
```

## Key attributes of a form: `action` and `method`

While the `<form>` element can function with just its basic tag, it's often equipped with attributes that define its behavior and how it handles data.

These attributes are optional, but key attributes like **action** and **method** are always used when sending form data to a server.

```html
<h1>Contact Form</h1>
<form action="/the-form-submits-here" method="POST">
  <!-- Form controls go here -->
</form>
```

The `action` attribute defines the URL that the form's data is sent to when the form is submitted.

The `method` attribute defines which HTTP method is used when sending data. In the above example, the form data is being sent as a post request.

For a more complete list of `<form>` attributes, check out [`<form>` attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes).
