
## Deploying to a VPS

To host the built files on a virtual private server (VPS):

1. SSH into your server and install Node.js if you haven't already.
2. Clone this repository or copy the source files to the server.
3. Install dependencies and build the production assets:
   ```bash
   npm install
   npm run build
   ```
4. The generated `dist/` directory contains static files that can be served by
   Nginx or another web server. Configure your web server to serve the files in
   this directory and point the root location to `index.html`.

After completing these steps, your event management portal will be accessible
from the VPS.
