/* eslint-disable linebreak-style */
'use strict';

const port = process.env.PORT || 4444;

import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, './client/build')));

// Handle api routes
app.use('/api', (req, res) => res.send('working'));


// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     res.status(err.status || 404).json({
//       message: "No such route exists"
//     })
// });

// // error handler
// app.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         message: "Error Message"
//     });
// })
app.get('/*', (req, res) => {
  // To cache the app
  res.setHeader('Cache-Control', 'max-age=31536000');
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(port, () => console.log(`App started and listening on port ${port}`));

export default app;
