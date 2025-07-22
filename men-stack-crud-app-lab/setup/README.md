<h1>
  <span class="headline">MEN Stack CRUD App Lab</span>
  <span class="subhead">Setup</span>
</h1>

## Setup

Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Make a new repository on [GitHub](https://github.com/) named `men-stack-crud-app-lab`.

Clone a copy of your remote repo locally by using the `git clone` command:

```bash
git clone https://github.com/<your-username>/men-stack-crud-app-lab.git
```

> 📚 Note: In the link above, where it says `<your-username>`, you should see the username from your GitHub account.

Next, `cd` into your new cloned directory, `men-stack-crud-app-lab`:

```bash
cd men-stack-crud-app-lab
```

In this directory create a `server.js` file:

```bash
touch server.js
```

Create a node project along with its `package.json` file by using this command:

```bash
npm init
```

During initialization, you will be prompted to customize your project and the `package.json` file.

At this point, accept the defaults (by simply just hitting `Return`/`Enter` for each prompt without adding any values), except for the entry point - set this to be `server.js`.

Open the project's folder in VS Code:

```bash
code .
```
