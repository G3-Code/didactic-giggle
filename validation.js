<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Validations</h1>
    <form>
      <input type="text" name="username" placeholder="username" value="" />
      <p>User name must be and contain 5-12 characters</p>

      <input type="text" name="email" placeholder="email" value="" />
      <p>Email address must be a valid address like me@mydomain.com</p>

      <input type="password" name="password" placeholder="password" value="" />
      <p>
        Password must be alphanumeric (@, _ and - are also allowed) and be 8-20
        characters long
      </p>
    </form>
  </body>
</html>;
