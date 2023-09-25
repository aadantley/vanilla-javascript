# Notes from tutorial implementation: Form Validator

## Basic Index Template

Use Emmet shortcut to create a basic html template with the exclamation mark.

we will add the following for every project to get started:

- link tag for style.css
- script tag for script.js

So the template will look like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Form Validator</title>
    // Title will change based on project
  </head>
  <body>
    // example elements
    <div class="container">
      <form id="form" class="form"></form>
    </div>
    // end example elements
    <script src="script.js"></script>
  </body>
</html>
```

When we add HTML elements, we'll use the `id` attribute to determine which elements are used in the javascript logic, and a `class` attribute to determine the styling of the element. You could have one or the other and use one for both, but it can be useful to have these distinct properties.

Just added a bunch of tags; see index.html.

## Styling
